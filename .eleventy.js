module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy("src/**/*.svg")
  return {
    dir: {
      input: "src",
    }
  }
}