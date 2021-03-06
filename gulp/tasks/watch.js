'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch([
      './source/images/**/*.*',
      '!./source/images/spriteSourse/**/*.*'
	], $.gulp.series('copy:image')

    );
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy:font'));
    $.gulp.watch('./source/php/**/*.php', $.gulp.series('copy:php'));
    $.gulp.watch('./database/**/*.*', $.gulp.series('copy:db'));
  });
};
