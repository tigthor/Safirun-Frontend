/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv', '@snowpack/plugin-webpack'

    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
        // bundle: true,
        // minify: true,
        // target: 'es2018',
        entrypoints: 'auto',
        bundle: true,
        splitting: true,
        treeshake: true,
        manifest: true,
        minify: true,
        target: 'es2017'
    },
    packageOptions: {
        /* ... */
        // "source": "remote"
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
