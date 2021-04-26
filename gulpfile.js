const { series,src,dest,watch } = require('gulp');

const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notificacion = require('gulp-notify');
const imagenwebp= require('gulp-webp');
const concat = require('gulp-concat');


//Utilidades Css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano= require ('cssnano');
const sourcemaps =require('gulp-sourcemaps');


//Utilidades JavaScript
const terser =require('gulp-terser');
const rename = require('gulp-rename');



const paths= {
    imagenes:'src/img/**/*',
    scss:'src/scss/**/*.scss',
    js:'src/js/**/*.js'
}



//Funcion que compila sass

    function css(){
        return src(paths.scss)
                    .pipe(sourcemaps.init())
                    .pipe(sass())
                    .pipe(postcss([autoprefixer(), cssnano()]))
                    .pipe(sourcemaps.write('.'))
                    .pipe(dest('./build/css'));
    }

    /*

    function minificarcss(){
        return src(paths.scss)
                .pipe(sass({
                    outputStyle:'compressed'
                }))
                .pipe(dest("./build/css"));
    }
*/
    function watchfile(){
        watch(paths.scss, css);// * = La carpeta actual ------ ** = Todos los archivos con esa extensión
        watch(paths.js, javascript);
    }

    //disminuir image 
    function imagenes(){
        return src(paths.imagenes)
                .pipe(imagemin())
                .pipe(dest('./build/img'))
                .pipe(notificacion({message:'Imagen Minificada'}));
    }


    //Convertir imagenes a webp
    function Convertirwebp(){
        return src(paths.imagenes)
               .pipe(imagenwebp())
               .pipe(dest('./build/img'))
    }


    //Javascript
    function javascript(){
        return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('build/js'))
    }

exports.css=css;
//exports.minificarcss=minificarcss;
exports.watchfile=watchfile;
exports.imagenes=imagenes;
exports.Convertirwebp=Convertirwebp;

exports.javascript=javascript;


exports.default=series(css,javascript,watchfile);


/*
function css(done){
    console.log("Compilando...css");
    done();
}

function javascript(done){
    console.log("Compilando...Javascript");
    done();
}

function php(done){
    console.log("php");
    done();
}
exports.css=css;
exports.javascript=javascript;

exports.tareas=parallel(css,javascript,php);
*/