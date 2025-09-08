module.exports = function(eleventyConfig) {
  // Copy static assets if you add any later
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());
  
  return {
    dir: { 
      input: "src", 
      includes: "_includes", 
      output: "_site" 
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};