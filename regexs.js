const gRegexs = [
    {
        exp: /(\w+[* ]+){1,2}\w+\(((\w*[* ]+[&]?){1,2}\w+,? *)*\)+\s*\{/,
        nombre: "<Declaracion de funcion>"
    },
    {
        //TODO: Declaracion de arreglo si se cuentra un tipo de dato antes de este regex
        exp: /(([a-z]|[A-Z]|_)([a-z]|[A-Z]|\d|_)*\[\d+\])/,
        nombre: "<Acceso a arreglo por indice>"
    },
    {
        exp: /^[for]+[\s]*[(]+.+;+.+;+.+[)]+[\s]*{{1}$/,
        nombre: "<Instruccion de iteracion for>"
    },
    {
        exp: /(int)|(float)|(char)/g,
        nombre: "<Tipo de dato>"
    },
    {
        exp: /(if)|(else)/,
        nombre: "<Condicional>"
    },
    {
        exp: /(int)|(float)|(char)|(return)|(void)|(if)|(else)/g,
        nombre: "<Palabra Reservada>"
    },
    {
        exp: /\/\/.*/,
        nombre: ""
    },
    {
        //TODO: Validar si encuentra el simbolo /* y que ignore hasta encontrar */
        exp: /\/(\n*.*?\n*)*?\//,
        nombre: ""
    },
    {
        //TODO: Tomar como identificador tambien si se encuentra un tipo de dato seguido de este regex
        exp: /([a-z]|[A-Z]|_)([a-z]|[A-Z]|\d|_)*/,
        nombre: "<Identificador>"
    },
    {
        exp: /(\&\&)|(\|\|)|(\!)|(\=\=)/,
        nombre: "<Operador logico>"
    },
    {
        exp: /=/,
        nombre: "<Simbolo asignacion>"
    },
    {
        exp: /[\+\-\*\/*\%][\+\-\*\/\%+]*[\+\-\*\/\%+]*[\+\-\*\/*\%]*/,
        nombre: "<Operador aritmeticos>"
    },
    {
        exp: /[\<\>][\<\>]*[\<\>]*[\<\>]*/,
        nombre: "<Comparador>"
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
    },
    {
        exp: /[\$\|\^\~\°\¬\!\#\%\&\¡\¨\´\`\\\.\,][\$\|\^\~\°\¬\!\#\%\&\¡\¨\´\`\\\.\,]*[\$\|\^\~\°\¬\!\#\%\&\¡\¨\´\`\\\.\,]*/,
        nombre: "<Simbolo no reconocido>"
    }

]

module.exports=gRegexs