import path from 'path';
import {terser} from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

const minifier = terser({
    compress: {
        keep_infinity: true,
        pure_getters: true,
        passes: 10,
    },
    ecma: 5,
    warnings: true,
});


export default {
    input: './src/index.js',
    output: [
        {
            dir: 'dist/esm',
            format: 'esm',
        },
        {
            dir: 'dist/cjs',
            format: 'cjs',
        },
        {
            dir: 'dist/esm-min',
            format: 'esm',
            plugins: [minifier],
        },
        {
            dir: 'dist/cjs-min',
            format: 'cjs',
            plugins: [minifier],
        },
    ],
    external: id => {
        return (
            (!id.startsWith('.') && 
            !path.isAbsolute(id)) ||
            id.includes('@babel/runtime')
        );
    },
    plugins: [
        nodeResolve(),
        babel({
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        targets: {
                            browsers: ['>0.25%, not dead'],
                        },
                    },
                ],
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
            ],
            babelHelpers: 'runtime'
        }),
    ],
};