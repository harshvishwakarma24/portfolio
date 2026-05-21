/**
 * Rate Limiting Utilities
 * SECURITY: Prevents spam and abuse by limiting form submissions
 * Implements both submission throttling and hourly submission quota
 */

/**
 * In-memory + localStorage submission tracker
 * SECURITY: Tracks submissions to enforce rate limits
 * Persists after page refresh using localStorage
 *
 * NOTE:
 * This is client-side protection only.
 * For production-grade security, implement server-side rate limiting.
 */
class SubmissionTracker {
  constructor() {
    // Load previous submissions from localStorage
    this.submissions = JSON.parse(
      localStorage.getItem('form_submissions') || '[]'
    )

    this.maxSubmissionsPerHour = parseInt(
      import.meta.env.VITE_FORM_MAX_SUBMISSIONS_PER_HOUR || 10,
      10
    )

    this.rateLimitMs = parseInt(
      import.meta.env.VITE_FORM_RATE_LIMIT_MS || 3000,
      10
    )
  }

  /**
   * Check if user can submit based on rate limits
   * SECURITY: Prevents rapid-fire submissions and quota exhaustion
   * @returns {{canSubmit: boolean, waitSeconds?: number, reason?: string}}
   */
  canSubmit() {
    const now = Date.now()

    // Clean up old submissions (older than 1 hour)
    this.submissions = this.submissions.filter(
      (timestamp) => now - timestamp < 3600000
    )

    // Update localStorage after cleanup
    localStorage.setItem(
      'form_submissions',
      JSON.stringify(this.submissions)
    )

    // Check hourly quota
    if (this.submissions.length >= this.maxSubmissionsPerHour) {
      const oldestSubmission = Math.min(...this.submissions)

      const waitTime = Math.ceil(
        (oldestSubmission + 3600000 - now) / 1000
      )

      return {
        canSubmit: false,
        reason: `Too many submissions. Please try again in ${waitTime} seconds.`,
        waitSeconds: waitTime,
      }
    }

    // Check minimum time between submissions
    if (this.submissions.length > 0) {
      const lastSubmission = Math.max(...this.submissions)

      const timeSinceLastSubmission = now - lastSubmission

      if (timeSinceLastSubmission < this.rateLimitMs) {
        const waitTime = Math.ceil(
          (this.rateLimitMs - timeSinceLastSubmission) / 1000
        )

        return {
          canSubmit: false,
          reason: `Please wait ${waitTime} seconds before submitting again.`,
          waitSeconds: waitTime,
        }
      }
    }

    return { canSubmit: true }
  }

  /**
   * Record a submission
   * SECURITY: Adds submission timestamp to tracker
   */
  recordSubmission() {
    this.submissions.push(Date.now())

    // Persist submissions in localStorage
    localStorage.setItem(
      'form_submissions',
      JSON.stringify(this.submissions)
    )
  }

  /**
   * Get remaining submissions for current hour
   * SECURITY: Helps user understand quota
   * @returns {number} Remaining submissions
   */
  getRemainingSubmissions() {
    const now = Date.now()

    const recentSubmissions = this.submissions.filter(
      (timestamp) => now - timestamp < 3600000
    )

    return Math.max(
      0,
      this.maxSubmissionsPerHour - recentSubmissions.length
    )
  }
}

// Singleton instance
const tracker = new SubmissionTracker()

export function checkRateLimit() {
  return tracker.canSubmit()
}

export function recordSubmission() {
  tracker.recordSubmission()
}

export function getRemainingSubmissions() {
  return tracker.getRemainingSubmissions()
}

export default {
  checkRateLimit,
  recordSubmission,
  getRemainingSubmissions,
}