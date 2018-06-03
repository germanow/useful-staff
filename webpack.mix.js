let mix = require('laravel-mix');


function mix_js_files(folder) {
    let fs = require('fs');
    var relative_path = "resources/assets/js" + folder;
    var paths = fs.readdirSync(relative_path);
    for (var i = 0; i < paths.length; i++) {
        if (paths[i].indexOf('.js') > 0 && paths[i].charAt(0) != '_') {
            var file_path = relative_path + paths[i];
            console.log(file_path);
            mix.js(file_path, 'public/js' + folder);
        }
    }
}
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/index.js', 'public/js')
	.sass('resources/assets/index.scss', 'public/css')
	.options({
		processCssUrls: true,
		imgLoaderOptions: {
			enabled: false,
		}
	});

if (mix.inProduction()) {
    mix.version();
}

mix_js_files('/pages/');
mix_js_files('/pages/task_tabs/');
mix_js_files('/components/');

