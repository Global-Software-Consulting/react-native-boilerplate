module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                cwd: 'babelrc',
                extensions: [
                    '.ios.tsx',
                    '.android.tsx',
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                    '.gif',
                    '.png',
                ],
                alias: {
                    app: './app',
                },
            },
        ],
        'jest-hoist',
    ],
};
