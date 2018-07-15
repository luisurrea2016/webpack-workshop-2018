class MyFirstWebpackPlugin {
    apply(compiler) {

        compiler.hooks.done.tapAsync('MyFirstWebpackPlugin',
            (stats, cb) => {
                let assets = [];
                for (let assetName in stats.compilation.assets) {
                    assets = [...assets, assetName];
                }
                //console.warn(stats);
                console.warn(assets.join('\n'));
                //debugger;
                cb();
            }
        );

        compiler.hooks.compilation.tap('MyFirstWebpackPlugin',
            (compilation, params) => new MyFirstWebpackCompilationPlugin().apply(compilation));
    }
}

class MyFirstWebpackCompilationPlugin {
    apply(compilation) {
        compilation.hooks.seal.tap('MyFirstWebpackCompilationPlugin',
            () => {
                console.warn(compilation);
                //debugger;
            });
    }
}

module.exports = MyFirstWebpackPlugin;