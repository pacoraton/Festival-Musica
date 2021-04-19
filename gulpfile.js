const { series,src,dest,watch } = require('gulp');

const sass = require('gulp-sass');


//Funcion que compila sass

    function css(){
        return src('src/scss/layout/app.scss')
                    .pipe(sass())
                    .pipe(dest('./build/css'));
    }

    function minificarcss(){
        return src('/src/scss/layout/app.scss')
                .pipe(sass({
                    outputStyle:'compressed'
                }))
                .pipe(dest("./build/css"));
    }

    function watchfile(){
        watch('src/scss/**/*.scss',css)// * = La carpeta actual ------ ** = Todos los archivos con esa extensión
    }

exports.css=css;
exports.minificarcss=minificarcss;
exports.watchfile=watchfile;





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