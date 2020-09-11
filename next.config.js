const path = require("path")

module.exports = {
  webpack: (config) => {
    // allow imports in js to be root-relative, like "components/.."
    config.resolve.modules.push(path.resolve("./src/"))

    // Important: return the modified config
    return config
  },
}
