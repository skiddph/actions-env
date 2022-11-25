/**
 * Library for string manipulation.
 */

/**
 * Check if all characters in the string are UPPER CASE.
 * @param {string} str
 * @return {boolean}
 */
function isUpper(str) {
    return str.toUpperCase() === str;
}

/**
 * Convert a string to UPPER CASE.
 * @param {string} str
 * @return {string}
 */
function strToUpper(str) {
    return String(str).toUpperCase();
}

/**
 * Remove prefix from a string.
 * @param {string} str
 * @param {string} prefix
 */
function removePrefix(str, prefix) {
    const regex = new RegExp(`^${prefix}`);
    return str.replace(regex, '');
}

module.exports = {
    isUpper,
    strToUpper,
    removePrefix,
}