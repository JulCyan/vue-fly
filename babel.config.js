module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ["component",
      {
        "libraryName": ["mint-ui", "element-ui"],
        "style": true,
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
