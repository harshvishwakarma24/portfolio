/**
 * Error Handling & Logging Utilities
 * SECURITY: Safe error handling that doesn't expose sensitive information
 * Prevents information leakage through error messages
 */

/**
 * Sanitize error messages for user display
 * SECURITY: Removes sensitive technical details that could be exploited
 * @param {Error} error - Error object
 * @returns {string} User-safe error message
 */
export function getSafeErrorMessage(error) {
  const errorMessage = error?.message?.toLowerCase() || ''

  // Map technical errors to user-friendly messages
  if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
    return 'Network error. Please check your connection and try again.'
  }

  if (errorMessage.includes('timeout')) {
    return 'Request timed out. Please try again.'
  }

  if (errorMessage.includes('cors')) {
    return 'Unable to submit form. Please try again later.'
  }

  if (errorMessage.includes('validation')) {
    return 'Please check your input and try again.'
  }

  // Generic fallback message (never expose raw error)
  return 'Something went wrong. Please try again later.'
}

/**
 * Log error securely (development only)
 * SECURITY: Logs only in development, never exposes errors to user in production
 * @param {string} context - Where error occurred
 * @param {Error} error - Error object
 */
export function logError(context, error) {
  // Only log in development
  if (import.meta.env.DEV) {
    console.error(`[${context}]`, {
      message: error?.message,
    })
  }

  // In production, you could send to a secure error tracking service
  // Make sure the service is configured with proper authentication
  // and does NOT leak user data or sensitive information
  // Example: Sentry, LogRocket (with proper config)
}

/**
 * Validate URL to prevent open redirects
 * SECURITY: Prevents redirect vulnerabilities (CWE-601)
 * @param {string} url - URL to validate
 * @param {string[]} allowedOrigins - List of allowed origin domains
 * @returns {boolean} True if URL is safe to redirect to
 */
export function isValidRedirectUrl(url, allowedOrigins = []) {
  if (!url || typeof url !== 'string') return false

  try {
    const urlObj = new URL(url, window.location.origin)

    // Must be https in production
    if (import.meta.env.PROD && urlObj.protocol !== 'https:') {
      return false
    }

    // Check if origin is in whitelist
    if (allowedOrigins.length > 0) {
      return allowedOrigins.some((origin) => urlObj.origin === origin)
    }

    // If no whitelist, only allow same origin
    return urlObj.origin === window.location.origin
  } catch {
    return false
  }
}

/**
 * Safe redirect function
 * SECURITY: Validates URL before redirecting to prevent open redirects
 * @param {string} url - Target URL
 * @param {string[]} allowedOrigins - Whitelisted domains
 */
export function safeRedirect(url, allowedOrigins = []) {
  // Add current origin as default allowed origin
  const allowedList = [window.location.origin, ...allowedOrigins]

  if (isValidRedirectUrl(url, allowedList)) {
    window.location.href = url
  } else {
    logError('safeRedirect', new Error(`Invalid redirect URL attempted: ${url}`))

    // Fallback to home page
    window.location.href = '/'
  }
}

export default {
  getSafeErrorMessage,
  logError,
  isValidRedirectUrl,
  safeRedirect,
}