var autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [autoprefixer('last 3 versions', '> 1%')]
}

