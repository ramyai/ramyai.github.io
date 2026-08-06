module.exports = function (eleventyConfig) {

    console.log("CONFIG FILE LOADED");


  const fs = require("fs");
  const path = require("path");




  // Static assets copied as-is into the build output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Turns a project title into a clean URL slug, e.g. "XR-penter" -> "xr-penter"
  eleventyConfig.addFilter("slugify", function (str) {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-+|-+$)/g, "");
  });

  // Every unique keyword used across all projects, "featured" always first.
  // This is what generates the filter buttons on the landing page -
  // add a new keyword to any project's front matter and a button appears
  // automatically, no code changes needed.
  eleventyConfig.addCollection("keywords", function (collectionApi) {
    const projects = collectionApi.getFilteredByTag("projects");
    const set = new Set();
    projects.forEach((p) => {
      (p.data.keywords || []).forEach((k) => set.add(k));
    });
    const rest = Array.from(set)
      .filter((k) => k !== "featured")
      .sort((a, b) => a.localeCompare(b));
    return ["featured", ...rest];
  });

  // Projects sorted by an optional "order" front matter field (lower = earlier),
  // falling back to alphabetical if order isn't set.
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").sort((a, b) => {
      const oa = a.data.order ?? 999;
      const ob = b.data.order ?? 999;
      if (oa !== ob) return oa - ob;
      return (a.data.title || "").localeCompare(b.data.title || "");
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
