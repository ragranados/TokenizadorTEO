let selection = document.getElementById("selection").value
if (selection === "0") {

    let btn = document.getElementById("go")
    var gTokens = []
    btn.addEventListener("click", () => {
        gTokens = []
        document.getElementById("resultado").innerHTML = ""
        const sustituto = /^\@+$/;
        const comentario = /\/\/.*/
        const comentarioB = /(\/\*).*(\*\/)/
        const codigo = document.getElementById("code").value
        const regexs = globarRegexs()


        const bloques = codigo.split(/\n+/);
        var emergencia = true, i = 0;

        bloques.forEach((bloque) => {
            i = 0;
            var tokens = [];

            if (!bloque.match(comentario) && !bloque.match(comentarioB)) {
                let container = document.createElement("div")
                container.style.display = "flex"
                container.style.alignItems = "baseline"
                let title = document.createElement("h6")
                title.appendChild(document.createTextNode("Bloque: "))
                title.style.marginRight = "10px"
                let value = document.createElement("code")
                value.appendChild(document.createTextNode(" " + bloque))
                container.appendChild(title)
                container.appendChild(value)
                document.getElementById("resultado").appendChild(container)
            }

            while (!sustituto.exec(bloque) && emergencia) {
                i++;
                regexs.forEach((regex) => {

                    const ejecucion = regex.exp.exec(bloque);
                    if (ejecucion) {
                        tokens[ejecucion.index] = regex.nombre;
                        bloque = bloque.replace(ejecucion[0], "@".repeat(ejecucion[0].length));
                    }
                });

                if (i == 50) {
                    emergencia = false;
                }
            }

            emergencia = true;
            for (indice2 in tokens) {
                let contain = document.createElement("div")
                let token = document.createElement("small")
                token.appendChild(document.createTextNode(tokens[indice2]))
                contain.appendChild(token)
                document.getElementById("resultado").appendChild(contain)
                if (tokens[indice2]) {
                    gTokens = [...gTokens, tokens[indice2]]
                }
            }
        })
        gTokens = [...gTokens, "<EOF>"]
        //MECANISMO DE PARSER
        sumParser()
    })



    const sumParser = () => {
        const S = 0
        const S2 = 1
        const T = 2
        const T2 = 3
        const F = 4
        const sumProd =
            [[S, '<Identificador>', [T, S2]],
            [S, '<Operador aritmeticos>', null],
            [S, '<Abrir Perentesis>', [T, S2]],
            [S, '<Cerrar Perentesis>', null],
            [S, '<EOF>', null],
            [S2, '<Identificador>', null],
            [S2, '<Operador aritmeticos>', ['<Operador aritmeticos>', T, S2]],
            [S2, '<Abrir Perentesis>', null],
            [S2, '<Cerrar Perentesis>', ['vacia']],
            [S2, '<EOF>', ['vacia']],
            [T, '<Identificador>', [F, T2]],
            [T, '<Operador aritmeticos>', null],
            [T, '<Abrir Perentesis>', [F, T2]],
            [T, '<Cerrar Perentesis>', null],
            [T, '<EOF>', null],
            [T2, '<Identificador>', null],
            [T2, '<Operador aritmeticos>', ['<Operador aritmeticos>', F, T2]],
            [T2, '<Abrir Perentesis>', null],
            [T2, '<Cerrar Perentesis>', ['vacia']],
            [T2, '<EOF>', ['vacia']],
            [F, '<Identificador>', ['<Identificador>']],
            [F, '<Operador aritmeticos>', null],
            [F, '<Abrir Perentesis>', ['<Abrir Perentesis>', S, '<Cerrar Perentesis>']],
            [F, '<Cerrar Perentesis>', null],
            [F, '<EOF>', null]
            ]

        let stack = ['<EOF>', 0]
        let cTok = 0
        let tok = gTokens[cTok]
        let x = stack[stack.length - 1]
        //Recorrer tokens
        while (true) {
            console.log("---------------------------------------")
            console.log("token", tok)
            console.log("x", x)
            console.log("stack", stack)
            if (x === tok && x === '<EOF>') {
                let contain = document.createElement("div")
                let token = document.createElement("h6")
                token.appendChild(document.createTextNode("Codigo reconocido exitosamente"))
                contain.appendChild(token)
                document.getElementById("resultado").appendChild(contain)
                return
            } else {
                if (x === tok && x !== '<EOF>') {
                    stack.pop()
                    x = stack[stack.length - 1]
                    cTok++
                    tok = gTokens[cTok]
                }
                if (gTokens.includes(x) && x !== tok) {
                    let contain = document.createElement("div")
                    let token = document.createElement("h6")
                    token.appendChild(document.createTextNode("Error: se espera: " + tok))
                    contain.appendChild(token)
                    document.getElementById("resultado").appendChild(contain)

                    contain = document.createElement("div")
                    token = document.createElement("h6")
                    token.appendChild(document.createTextNode("En la posicion: " + cTok))
                    contain.appendChild(token)
                    document.getElementById("resultado").appendChild(contain)

                    return
                }
                if (!gTokens.includes(x)) {
                    celda = buscar_en_tabla(sumProd, x, tok)
                    console.log("prod", celda)
                    if (!celda) {
                        let contain = document.createElement("div")
                        let token = document.createElement("h6")
                        token.appendChild(document.createTextNode("Error: No se espera: " + tok))
                        contain.appendChild(token)
                        document.getElementById("resultado").appendChild(contain)

                        contain = document.createElement("div")
                        token = document.createElement("h6")
                        token.appendChild(document.createTextNode("En la posicion " + cTok))
                        contain.appendChild(token)
                        document.getElementById("resultado").appendChild(contain)

                        return
                    }
                    else {
                        stack.pop()
                        stack = agregar_pila(stack, celda)
                        x = stack[stack.length - 1]
                    }
                }
            }
        }

    }



    const buscar_en_tabla = (table, no_terminal, terminal) => {
        for (let i = 0; i < table.length; i++) {
            if (table[i][0] === no_terminal && table[i][1] === terminal) {
                return table[i][2]
            }
        }
    }

    const agregar_pila = (stack, produccion) => {
        let tStack = stack
        produccion.reverse().forEach(elemento => {
            if (elemento !== 'vacia') {
                tStack.push(elemento)
            }
        })
        return tStack
    }

    //Funciones ripio
    const globarRegexs = () => (
        [
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
    )
}