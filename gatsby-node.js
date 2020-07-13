exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /redux-thunk|firebase|@firebase|redux-logger/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
