module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss', '@storybook/addon-links'],
  babel: (options) => ({
    ...options,
    plugins: [...options.plugins, [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h' }, 'preset']],
    presets: [['@babel/typescript', { jsxPragma: 'h' }]]
  }),
  framework: '@storybook/html',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
};
