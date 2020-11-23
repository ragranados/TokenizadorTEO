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
        const A = 0
        const E = 1
        const E1 = 2
        const PA = 3
        const PC = 4
        const IF = 5
        const OPA = 6
        const ID = 7
        const CP = 8
        const CPA = 8
        const sumProd =
            [[A, 'IF', [IF, PA, E, PC, "{"]],
            [E, "ID", [E1, OPA, E1]],
            [E, "NUM", [E1, OPA, E1]],
            [PA, "(", ["("]],
            [PC, ")", [")"]],
            [IF, "IF", ["IF"]],
            [OPA, "OPA", ["OPA"]],
            [E1, "ID", ["ID"]],
            [E1, "NUM", ["NUM"]],
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
                exp: /if/,
                nombre: "IF"
            },
            {
                exp: /\(/,
                nombre: "("
            },
            {
                exp: /\)/,
                nombre: ")"
            },
            {
                exp: /\{/,
                nombre: "{"
            },
            {
                exp: /([a-z]|[A-Z]|_)([a-z]|[A-Z]|\d|_)*/,
                nombre: "ID"
            },
            {
                exp: /\d+/,
                nombre: "NUM"
            },
            {
                exp: /(>)|(<)|(\!=)|(==)|(>=)|(<=)/,
                nombre: "OPA"
            },
        ])


}