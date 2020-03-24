module.exports = {
  preset: '@vue/cli-plugin-unit-jest',

  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
}
