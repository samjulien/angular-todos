var gulp = require('gulp'),
    connect = require('gulp-connect'),
    typescript = require('gulp-typescript'),
    watch = require('gulp-watch');

var dist = './dist';
var src = './src';
var typescriptConfigPath = src + '/tsconfig.json';
var typescriptFiles = src + '/**/*.ts';
var assetsFiles = src + '/**/*.{html,js,css}';

// Clean task
gulp.task('clean', function (done) {
    var del = require('del');
    del([dist], done);
});

// Setup task
gulp.task('setup', ['assets', 'compile'], function (done) {
    gulp.src([
        'node_modules/angular2/bundles/js',
        'node_modules/angular2/bundles/angular2.*.js*',
        'node_modules/angular2/bundles/http.*.js*',
        'node_modules/angular2/bundles/router.*.js*'
    ]).pipe(gulp.dest(dist + '/libs/angular2'));

    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(dist + '/libs/systemjs'));

    gulp.src([
        'node_modules/redux/dist/*.min.js'
    ]).pipe(gulp.dest(dist + '/libs/redux'));

    gulp.src([
        'node_modules/jquery/dist/*.min.js'
    ]).pipe(gulp.dest(dist + '/libs/jquery'));

    /*gulp.src([
     'node_modules/bootstrap/dist/css/bootstrap.css'
     ]).pipe(gulp.dest('build/css'));*/
});

// assets task, copy assets files to dist dir
gulp.task('assets', function () {
    gulp.src([assetsFiles])
        .pipe(gulp.dest(dist));
});

// Compile task
gulp.task('compile', function () {
    var tsProject = typescript.createProject(typescriptConfigPath);
    gulp.src(typescriptFiles)
        .pipe(typescript(tsProject))
        .js.pipe(gulp.dest(dist));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch([assetsFiles], ['assets']);
    gulp.watch(typescriptFiles, ['compile']);
});

// Connect task
gulp.task('connect', function () {
    connect.server({
        root: dist,
        port: 4000,
        livereload: true
        //fallback: dist + '/index.html' // For the route reload to work
    });
});

// Reload task
gulp.task('livereload', function () {
    gulp.src(assetsFiles)
        .pipe(watch(assetsFiles))
        .pipe(connect.reload());
});

// Default task
gulp.task('default', ['connect', 'setup', 'livereload', 'watch']);
