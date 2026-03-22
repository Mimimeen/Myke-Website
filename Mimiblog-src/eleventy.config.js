module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("stylemimi.css");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: ".."
        }
    };
};