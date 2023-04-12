/* global module */
/* eslint no-undef: "error" */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*'],
    },
  },
}