export default {
    framework: {
      // Replace react-vite with the framework you are using (e.g., react-webpack5)
      name: '@storybook/react-vite',
      options: {
        legacyRootApi: true,
      },
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  }; 