const sustituto = /^\@+$/;

const codigo = "fun main(){ val hola:String=2; val y=\"Hello\"; /*Comentario*/ println(y+x); }";

const regexs = [
    {
        exp: /(Int)|(Float)|(Char)|(return)|(if)|(else)|(do)|(while)|(for)|(void)|(fun)|(String)|(:)|(println)|(print)/g,
        nombre: "<Palabra Reservada>"
    },
    {
        exp: /\/\/.*/,
        nombre: "<Comentario una linea>"
    },
    {
        exp: /(\/\*).*(\*\/)/,
        nombre: "<Comentario bloque>"
    },
    {
        exp: /(val)|(var)/,
        nombre: "<Declarador>"
    },
    {
        exp: /([a-z]|[A-Z]|_)([a-z]|[A-Z]|\d|_)*/,
        nombre: "<Identificador>"
    },
    {
        exp: /=/,
        nombre: "<Simbolo asignacion>"
    },
    {
        exp: /[\+\-\*\/*][\+\-\*\/+]*[\+\-\*\/+]*[\+\-\*\/*]*/,
        nombre: "<Operador>"
    },
    {
        exp: /{/,
        nombre: "<Abrir bloque>"
    },
    {
        exp: /}/,
        nombre: "<Cerrar bloque>"
    },
    {
        exp: /\(/,
        nombre: "<Abrir Perentesis>"
    },
    {
        exp: /\)/,
        nombre: "<Cerrar Perentesis>"
    },
    {
        exp: /\[/,
        nombre: "<Abrir corchete>"
    },
    {
        exp: /\]/,
        nombre: "<Cerrar corchete>"
    },
    {
        exp: /(")((?:\\\1|(?:(?!\1).))*)(\1)/,
        nombre: "<Cadena de Texto>"
    },
    {
        exp: /(')((?:\\\1|(?:(?!\1).))*)(\1)/,
        nombre: "<Caracter>"
    },
    {
        exp: /\d+(\.\d+)?/,
        nombre: "<Constante numerica>"
    },
    {
        exp: /;/,
        nombre: "<Fin instruccion>"
    }

]

const bloques = codigo.split(/\s+/);

bloques.forEach((bloque) => {
    var tokens = [];

    console.log("\nBloque: ", bloque);

    while (!sustituto.exec(bloque)) {
        regexs.forEach((regex) => {
            const ejecucion = regex.exp.exec(bloque);
            if (ejecucion) {
                tokens[ejecucion.index] = regex.nombre;
                bloque = bloque.replace(ejecucion[0], "@".repeat(ejecucion[0].length));
            }
        });
    }

    for (indice2 in tokens) {
        console.log(tokens[indice2])
    }
})