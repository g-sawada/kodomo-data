module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/views/**/*.html.slim',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './app/javascript/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      zenMaruGothic: ["Zen Maru Gothic", "serif"],
      body: [
        'ヒラギノ丸ゴシック',
        'メイリオ',
      ]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "pastel",
      "cupcake"
    ]
  }
}
