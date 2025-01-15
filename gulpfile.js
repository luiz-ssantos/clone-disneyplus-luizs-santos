const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

// Tarefa para compilar arquivos SCSS
function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

// Tarefa para otimizar imagens
function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

// Tarefa para assistir mudanças em arquivos
function watch() {
  return gulp.watch("./src/styles/*.scss", styles);
}

// Exportando as tarefas
exports.default = gulp.parallel(styles, images);
exports.watch = watch;
