module.exports = {
  plugins: [
    require('autoprefixer'),
		require('css-mqpacker'),
		require('postcss-svg'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
					},
					svgo: false
				},
      ]
    })
  ]
}
