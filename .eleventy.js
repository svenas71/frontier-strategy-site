const MarkdownIt = require("markdown-it");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // --- Passthroughs ---
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // --- Markdown-it (global) ---
  const md = new MarkdownIt({
    html: true,
    breaks: true,  // single line breaks respected
    linkify: true,
  });
  eleventyConfig.setLibrary("md", md);

  // --- Shortcodes ---
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());
  eleventyConfig.addPairedShortcode("md", (content) => md.render(content));
  eleventyConfig.addPairedShortcode("figure", (content, caption) => {
    return `
      <figure class="my-6">
        ${content}
        <figcaption class="mt-2 text-sm italic text-slate-600">${caption}</figcaption>
      </figure>
    `;
  });
  eleventyConfig.addPairedShortcode("footnote", (content) => {
  return `
    <div class="footnote">
      ${content}
    </div>
  `;
  });

  // --- Filters ---
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(d, { zone: "utc" }).toFormat("d LLL yyyy");
  });

  // take: first n items (fixes your error)
  eleventyConfig.addFilter("take", (arr, n = 1) =>
    Array.isArray(arr) ? arr.slice(0, n) : []
  );

  // --- Collections ---
  eleventyConfig.addCollection("orderedCases", (collection) => {
    return collection
      .getFilteredByTag("case")
      .filter(
        (item) =>
          item.data.eleventyExcludeFromCollections !== true &&
          item.data.draft !== true
      )
      .sort((a, b) => {
        const A = Number.isFinite(+a.data.order) ? +a.data.order : 9999;
        const B = Number.isFinite(+b.data.order) ? +b.data.order : 9999;
        return A - B;
      });
  });

  // --- Directories & engines (single return!) ---
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};