/**
 * Calculate estimated reading time for a given text
 * @param {string} text - The text content of the article
 * @param {number} wpm - Average words per minute reading speed (default: 225)
 * @returns {string} Formatted reading time string
 */
export function getReadingTime(text: string, wpm: number = 225): string {
  // Clean the text by removing HTML tags, excessive whitespace, etc.
  const cleanText = text
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    .replace(/[\r\n\s]+/g, " ")     // Replace newlines and multiple spaces with a single space
    .trim();

  // Count words (split by spaces)
  const words = cleanText.split(/\s+/).length;
  
  // Calculate reading time in minutes
  const minutes = Math.ceil(words / wpm);
  
  // Format the output
  if (minutes < 1) {
    return "Less than a minute";
  } else if (minutes === 1) {
    return "1 minute read";
  } else {
    return `${minutes} minute read`;
  }
}
