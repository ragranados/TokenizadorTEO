// mygenerator.js
var Parser = require("jison").Parser;
var fs = require("fs");

var grammar = {
    "lex": {
        "rules": [
           ["\\s+", "/* skip whitespace */"],
           ["(int)|(float)|(char)", "return 'TIPO_DATO';"],
           [",","return ','"],
           [";","return ';'"],
           ["\\[","return '['"],
           ["\\]","return ']'"],
           ["\\(","return '('"],
           ["\\)","return ')'"],
           ["\\{","return '{'"],
           ["\\}","return '}'"],
           ["void","return 'void'"],
           ["\\d+","return 'CONSTANTE_NUMERICA'"],
           ["if","return 'if'"],
           ["else","return 'else'"],
           ["while","return 'while'"],
           ["return","return 'return'"],
           ["<=","return '<='"],
           ["<","return '<'"],
           [">","return '>'"],
           [">=","return '>='"],
           ["=","return '='"],
           ["[\\/][\\*].*[\\*][\\/]","return 'COMENTARIO'"],
           ["\/","return '/'"],
           ["\\!=","return '!='"],
           ["\\+","return '+'"],
           ["\\*","return '*'"],
           ["\\-","return '-'"], 
           ["\\%","return '%'"],
           ["&&","return '&&'"],
           ["\\|\\|","return '||'"],
           ["~","return '~'"],
           ["(#define)","return 'MACRO';"],  
           ["(#include)","return 'INCLUDE';"],  
           ["\\w+(\\.h)","return 'LIBRERIA';"],
           ["([a-z]|[A-Z]|_)([a-z]|[A-Z]|\\d|_)*", "return 'IDENTIFICADOR';"],

        ]
    },
	
  //NUM = CONSTANTE_NUMERICA
    "bnf": {
      	//Dubon 
      /*1*/"program":["comments declaration-list","comments macros declaration-list","macros declaration-list","declaration-list"],
            "comments":["COMENTARIO"],
            "macros":["MACRO IDENTIFICADOR CONSTANTE_NUMERICA","MACRO IDENTIFICADOR CONSTANTE_NUMERICA macros","MACRO IDENTIFICADOR CONSTANTE_NUMERICA comments","INCLUDE < LIBRERIA >","INCLUDE < LIBRERIA > macros","INCLUDE < LIBRERIA > comments"],
        /*2*/"declaration-list":["declaration-list declaration","declaration"],
        /*3*/"declaration": ["var-declaration","fun-declaration"],
             "array-index":["IDENTIFICADOR [ simple-expression ]", "IDENTIFICADOR [ var ]" ],
      	/*4*/"var-declaration":["type-specifier IDENTIFICADOR ;","type-specifier array-index ;","type-specifier IDENTIFICADOR = expression ;","type-specifier array-index = expression ;"],
        /*5*/"type-specifier":["TIPO_DATO","void"],
        /*6*/"fun-declaration":["type-specifier IDENTIFICADOR ( params ) compound-stmt"],
      	/*7*/"params": ["param-list", "void"],
      	/*8*/"param-list": ["param-list , param", "param"],
        /*9*/"param": ["type-specifier IDENTIFICADOR", "type-specifier IDENTIFICADOR [ ]"],
        /*10*/"compound-stmt": ["{ local-declarations statement-list }"],
        /*11*/"local-declarations": ["local-declarations var-declaration" , ""],
        /*12*/"statement-list": ["statement-list statement", ""], 
      	/*13*/"statement": ["comments","expression-stmt", "compound-stmt", "selection-stmt", "iteration-stmt", "return-stmt","declaration-list"],
        /*14*/"expression-stmt":["expression ;",";"],
      	/*15*/"selection-stmt": ["if ( expression ) statement", "if ( expression ) statement else statement"],
		    /*16*/"iteration-stmt": ["while ( expression ) statement"],
        /*17*/"return-stmt": ["return ; ","return expression ;"],
        /*18*/"expression": ["var = expression", "simple-expression"],
        /*19*/"var": ["IDENTIFICADOR","IDENTIFICADOR [ expression ]"],
        /*20*/"simple-expression" : ["additive-expression relop additive-expression","additive-expression logop simple-expression", "additive-expression"],
        /*21*/"relop" : ["<=", "<", ">" , ">=" , "!="],
              "logop" :["&&","||"],
              "negop" :["~"],
        /*22*/"additive-expression" : ["additive-expression addop term","negop term","term"],
        /*23*/"addop" :["+","-"],
        /*24*/"term" : ["term mulop factor", "factor"],
        /*25*/"mulop" : ["*", "/","%"],
        /*26*/"factor": ["( expression )", "var", "call" , "CONSTANTE_NUMERICA"],
        /*27*/"call": ["IDENTIFICADOR ( args )"],
        /*28*/"args": ["arg-list", ""],
        /*29*/"arg-list": ["arg-list , expression", "expression"],     
    },
};

var parser = new Parser(grammar);

// generate source, ready to be written to disk
var parserSource = parser.generate();

fs.appendFile('parser.js', parserSource, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

// you can also use the parser directly from memory

//parser.parse("adfe34bc e82a");
// returns true

//parser.parse("adfe34bc zxg");
// throws lexical error