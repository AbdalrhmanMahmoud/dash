var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    livereload = require("gulp-livereload"),
    sourcemaps = require("gulp-sourcemaps"),
    minify = require("gulp-minify");
  

gulp.task('css',function(){
  return gulp.src(['stage/css/**/*.css','stage/css/**/*.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
  .pipe(autoprefixer())
  .pipe(concat("main.css"))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest("dist/css"))
  .pipe(livereload())

});
gulp.task('js',function(){
    return gulp.src("stage/js/*.js")
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
});
// html fiels 
gulp.task("htmlmin", function(){
  return gulp.src('stage/index.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist'))
  .pipe(notify("html update ... "))
  .pipe(livereload())


});
gulp.task('watch',function(){
  require("./server.js")
  livereload.listen();
  gulp.watch(['stage/css/**/*.css','stage/css/**/*.scss'], ['css']);
  gulp.watch('stage/js/*.js',['js'])
  // gulp.watch('stage/index.html',['htmlmin'])



});