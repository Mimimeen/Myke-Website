module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "stylemimi.css": "blog/stylemimi.css" });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: ".."
        }
    };
};