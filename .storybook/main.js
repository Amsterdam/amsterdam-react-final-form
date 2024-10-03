export default {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: true,
      },
    },
  ],
  typescript: { reactDocgen: false },
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  docs: {},
};
