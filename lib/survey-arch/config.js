/**
 * Application configuration
 */

/**
 * Expose
 */

exports.log = { 
  label: process.env.LABEL || 'survey-arch'
};

exports.server = {
  port: process.env.PORT || 3000
}