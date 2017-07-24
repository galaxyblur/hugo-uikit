(function() {

const NODE_MODULE_DEPENDENCIES = [
  'node_modules/jquery/dist/*',
  'node_modules/uikit/dist/js/*',
  'node_modules/uikit/dist/css/*'
];

let gulp = require('gulp');

gulp.task('copy-node-modules', () => gulp
    .src(NODE_MODULE_DEPENDENCIES, { base : 'node_modules' })
    .pipe(gulp.dest('static/node_modules'))
);

gulp.task('default', ['copy-node-modules']);

}());
