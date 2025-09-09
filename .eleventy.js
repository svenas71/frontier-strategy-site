const MarkdownIt = require("markdown-it");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Shortcode: current year
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  // Shortcode: render Markdown inside .njk files
  const md = new MarkdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.addPairedShortcode("md", (content) => md.render(content));

  // Shortcode: figure with caption
  eleventyConfig.addPairedShortcode("figure", (content, caption) => {
    return `
      <figure class="my-6">
        ${content}
        <figcaption class="mt-2 text-sm italic text-slate-600">${caption}</figcaption>
      </figure>
    `;
  });

  // Shortcode: footnote block
  eleventyConfig.addPairedShortcode("footnote", (content) => {
    return `
      <div class="mt-2 ml-1 text-sm italic text-slate-600">
        ${content}
      </div>
    `;
  });

  // Filter: readable date (e.g., "9 Sep 2025")
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(d, { zone: "utc" }).toFormat("d LLL yyyy");
  });

  // Eleventy directories / engines
  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};