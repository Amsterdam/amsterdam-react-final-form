module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
      controls: true,
    }
  }]
};
