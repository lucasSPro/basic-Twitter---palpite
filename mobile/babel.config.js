module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // eslint-disable-next-line no-sparse-arrays
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
      ,
    ],
  ],
};
