var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('default', ['test']);

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/homeinspection.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});