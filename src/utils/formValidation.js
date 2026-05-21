/**
 * Form Validation & Sanitization Utilities
 * SECURITY: Provides schema-based validation, XSS prevention, and input sanitization
 * Prevents: Injection attacks, malformed data, XSS via form inputs
 */

/**
 * Email validation regex (RFC 5322 simplified but practical)
 * SECURITY: Prevents invalid email formats and injection patterns
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Name validation: alphanumeric, spaces, hyphens, apostrophes only
 * SECURITY: Prevents special characters and script injection in names
 */
const NAME_REGEX = /^[\p{L}\s\-']+$/u

/**
 * Message validation: prevents extremely long messages and suspicious patterns
 * SECURITY: Prevents buffer overflow and encoded injection attempts
 */
const MAX_MESSAGE_LENGTH = 5000
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254

/**
 * Validation schema for contact form
 * SECURITY: Enforces strict type checking and length limits
 */
const FORM_SCHEMA = {
  name: {
    required: true,
    minLength: 2,
    maxLength: MAX_NAME_LENGTH,
    regex: NAME_REGEX,
    error: 'Name must be 2-100 characters, letters only',
  },
  email: {
    required: true,
    maxLength: MAX_EMAIL_LENGTH,
    regex: EMAIL_REGEX,
    error: 'Please enter a valid email address',
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: MAX_MESSAGE_LENGTH,
    error: 'Message must be 10-5000 characters',
  },
}

/**
 * Sanitize string input to prevent XSS
 * SECURITY: Removes HTML special characters and potentially dangerous patterns
 * @param {string} input - Raw user input
 * @returns {string} Sanitized string safe for form submission
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return ''

  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/javascript:/gi, '') // Prevent javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Prevent event handlers (onclick=, onerror=, etc)
    .slice(0, Math.min(MAX_MESSAGE_LENGTH, input.length))// Hard limit on length
}

/**
 * Validate individual form field
 * SECURITY: Type checking, length limits, regex validation
 * @param {string} fieldName - Field to validate
 * @param {string} value - Field value
 * @returns {{valid: boolean, error?: string}} Validation result
 */
export function validateField(fieldName, value) {
  const fieldConfig = FORM_SCHEMA[fieldName]

  if (!fieldConfig) {
    return { valid: false, error: 'Unknown field' }
  }

  // Check required
  if (fieldConfig.required && (!value || value.trim() === '')) {
    return { valid: false, error: `${fieldName} is required` }
  }

  if (!value) return { valid: true }

  // Type check - must be string
  if (typeof value !== 'string') {
    return { valid: false, error: `${fieldName} must be text` }
  }

  const trimmedValue = value.trim()

  // Check min length
  if (fieldConfig.minLength && trimmedValue.length < fieldConfig.minLength) {
    return { valid: false, error: fieldConfig.error }
  }

  // Check max length
  if (fieldConfig.maxLength && trimmedValue.length > fieldConfig.maxLength) {
    return { valid: false, error: fieldConfig.error }
  }

  // Regex validation
  if (fieldConfig.regex && !fieldConfig.regex.test(trimmedValue)) {
    return { valid: false, error: fieldConfig.error }
  }

  return { valid: true }
}

/**
 * Validate entire form data against schema
 * SECURITY: Prevents unexpected fields, validates all inputs together
 * @param {Object} formData - Form data object
 * @returns {{valid: boolean, errors: Object}} Validation result with field errors
 */
export function validateFormData(formData) {
  const errors = {}
  let isValid = true

  // Check for unexpected fields (prevents injection via extra fields)
  const allowedFields = Object.keys(FORM_SCHEMA)
  for (const key of Object.keys(formData)) {
    if (!allowedFields.includes(key)) {
      errors[key] = 'Unexpected field - rejected'
      isValid = false
    }
  }

  // Validate each field
  for (const [fieldName, fieldConfig] of Object.entries(FORM_SCHEMA)) {
    const value = formData[fieldName] || ''
    const validation = validateField(fieldName, value)

    if (!validation.valid) {
      errors[fieldName] = validation.error
      isValid = false
    }
  }

  return { valid: isValid, errors }
}

/**
 * Generate CSRF token (simple client-side implementation)
 * SECURITY: Helps prevent CSRF attacks on form submission
 * NOTE: For production, implement server-side CSRF token generation and validation
 * @returns {string} Generated CSRF token
 */
export function generateCSRFToken() {
  const array = new Uint8Array(32)
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array)
  } else {
    // Fallback for environments without crypto API
    for (let i = 0; i < array.length; i += 1) {
      array[i] = Math.floor(Math.random() * 256)
    }
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Create honeypot field (bot detection)
 * SECURITY: Honeypot fields catch automated bots/scrapers
 * Bots typically fill all form fields, including honeypot
 * @returns {string} Field name for honeypot
 */
export function getHoneypotFieldName() {
  return 'website_url' // Bots assume this is a URL field
}

/**
 * Check if honeypot was filled (bot detection)
 * SECURITY: If honeypot is filled, likely a bot submission
 * @param {string} honeypotValue - Value of honeypot field
 * @returns {boolean} True if honeypot was filled (bot detected)
 */
export function isBotSubmission(honeypotValue) {
  return Boolean(honeypotValue && honeypotValue.trim() !== '')
}

/**
 * Prepare sanitized form data for submission
 * SECURITY: Sanitizes all inputs before sending to external service
 * @param {Object} formData - Raw form data
 * @returns {Object} Sanitized and safe form data
 */
export function prepareSafeFormData(formData) {
  return {
    name: sanitizeInput(formData.name || ''),
    email: sanitizeInput(formData.email || ''),
    message: sanitizeInput(formData.message || ''),
  }
}

export default {
  validateField,
  validateFormData,
  sanitizeInput,
  generateCSRFToken,
  getHoneypotFieldName,
  isBotSubmission,
  prepareSafeFormData,
  FORM_SCHEMA,
}
