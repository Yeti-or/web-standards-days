var gulp = require('gulp'),
	sync = require('browser-sync').get('sync');

// Starting up a server
// in the dest folder

gulp.task('server', function () {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: 'dest'
		}
	});
});
