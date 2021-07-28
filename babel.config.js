module.exports = function (api) {
  api.cache(true)

  
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ["transform-remove-console"],     //removing consoles.log from app during release (production) versions
      },
    },
    plugins: [
      ["@babel/plugin-proposal-decorators", {legacy: true}],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          alias: {
            app: './src',
            assets: './assets'
          },
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  };
};