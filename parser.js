/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,7],$V3=[1,12],$V4=[1,13],$V5=[1,7,9,10,22,23,24,25,32,35,42,43,44,45,58],$V6=[1,27],$V7=[1,25],$V8=[23,24],$V9=[27,30],$Va=[1,47],$Vb=[7,9,10,22,23,24,25,32,35,42,44,45,58],$Vc=[1,71],$Vd=[1,79],$Ve=[1,65],$Vf=[1,77],$Vg=[1,66],$Vh=[1,67],$Vi=[1,68],$Vj=[1,75],$Vk=[7,9,10,22,23,24,25,32,35,42,43,44,45,58],$Vl=[12,14,22,27,30,52,53,54,55,56,61,62,65,66,67],$Vm=[2,76],$Vn=[22,27,30],$Vo=[1,99],$Vp=[1,100],$Vq=[12,14,22,27,30,52,53,54,55,56,61,62],$Vr=[1,104],$Vs=[1,105],$Vt=[1,106],$Vu=[9,10,25],$Vv=[9,10,25,58];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"program":3,"comments":4,"declaration-list":5,"macros":6,"COMENTARIO":7,"MACRO":8,"IDENTIFICADOR":9,"CONSTANTE_NUMERICA":10,"INCLUDE":11,"<":12,"LIBRERIA":13,">":14,"declaration":15,"var-declaration":16,"fun-declaration":17,"array-index":18,"[":19,"]":20,"type-specifier":21,";":22,"TIPO_DATO":23,"void":24,"(":25,"params":26,")":27,"compound-stmt":28,"param-list":29,",":30,"param":31,"{":32,"local-declarations":33,"statement-list":34,"}":35,"statement":36,"expression-stmt":37,"selection-stmt":38,"iteration-stmt":39,"return-stmt":40,"expression":41,"if":42,"else":43,"while":44,"return":45,"var":46,"=":47,"simple-expression":48,"additive-expression":49,"relop":50,"logop":51,"<=":52,">=":53,"!=":54,"&&":55,"||":56,"negop":57,"~":58,"addop":59,"term":60,"+":61,"-":62,"mulop":63,"factor":64,"*":65,"/":66,"%":67,"call":68,"args":69,"arg-list":70,"$accept":0,"$end":1},
terminals_: {2:"error",7:"COMENTARIO",8:"MACRO",9:"IDENTIFICADOR",10:"CONSTANTE_NUMERICA",11:"INCLUDE",12:"<",13:"LIBRERIA",14:">",19:"[",20:"]",22:";",23:"TIPO_DATO",24:"void",25:"(",27:")",30:",",32:"{",35:"}",42:"if",43:"else",44:"while",45:"return",47:"=",52:"<=",53:">=",54:"!=",55:"&&",56:"||",58:"~",61:"+",62:"-",65:"*",66:"/",67:"%"},
productions_: [0,[3,2],[3,3],[3,2],[3,1],[4,1],[6,3],[6,4],[6,4],[6,4],[6,5],[6,5],[5,2],[5,1],[15,1],[15,1],[18,4],[18,4],[16,3],[16,3],[21,1],[21,1],[17,6],[26,1],[26,1],[29,3],[29,1],[31,2],[31,4],[28,4],[33,2],[33,0],[34,2],[34,0],[36,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,1],[37,2],[37,1],[38,5],[38,7],[39,5],[40,2],[40,3],[41,3],[41,6],[41,6],[41,1],[46,1],[46,5],[48,3],[48,3],[48,1],[50,1],[50,1],[50,1],[50,1],[50,1],[51,1],[51,1],[57,1],[49,3],[49,2],[49,1],[59,1],[59,1],[60,3],[60,1],[63,1],[63,1],[63,1],[64,3],[64,1],[64,1],[64,1],[68,4],[69,1],[69,0],[70,3],[70,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,5:4,6:3,7:$V0,8:$V1,11:$V2,15:8,16:9,17:10,21:11,23:$V3,24:$V4},{1:[3]},{5:14,6:15,8:$V1,11:$V2,15:8,16:9,17:10,21:11,23:$V3,24:$V4},{5:16,15:8,16:9,17:10,21:11,23:$V3,24:$V4},{1:[2,4],15:17,16:9,17:10,21:11,23:$V3,24:$V4},o([7,8,9,10,11,22,23,24,25,32,35,42,43,44,45,58],[2,5]),{9:[1,18]},{12:[1,19]},o($V5,[2,13]),o($V5,[2,14]),o($V5,[2,15]),{9:[1,20],18:21},{9:[2,20]},{9:[2,21]},{1:[2,1],15:17,16:9,17:10,21:11,23:$V3,24:$V4},{5:22,15:8,16:9,17:10,21:11,23:$V3,24:$V4},{1:[2,3],15:17,16:9,17:10,21:11,23:$V3,24:$V4},o($V5,[2,12]),{10:[1,23]},{13:[1,24]},{19:$V6,22:$V7,25:[1,26]},{22:[1,28]},{1:[2,2],15:17,16:9,17:10,21:11,23:$V3,24:$V4},o($V8,[2,6],{6:29,4:30,7:$V0,8:$V1,11:$V2}),{14:[1,31]},o($V5,[2,18]),{21:36,23:$V3,24:[1,34],26:32,29:33,31:35},{9:[1,37],10:[1,38]},o($V5,[2,19]),o($V8,[2,7]),o($V8,[2,8]),o($V8,[2,9],{6:39,4:40,7:$V0,8:$V1,11:$V2}),{27:[1,41]},{27:[2,23],30:[1,42]},o([9,27],[2,24]),o($V9,[2,26]),{9:[1,43]},{20:[1,44]},{20:[1,45]},o($V8,[2,10]),o($V8,[2,11]),{28:46,32:$Va},{21:36,23:$V3,24:$V4,31:48},o($V9,[2,27],{19:[1,49]}),{22:[2,16]},{22:[2,17]},o($V5,[2,22]),o($Vb,[2,31],{33:50}),o($V9,[2,25]),{20:[1,51]},o([7,9,10,22,25,32,35,42,44,45,58],[2,33],{34:52,16:53,21:54,23:$V3,24:$V4}),o($V9,[2,28]),{4:57,5:63,7:$V0,9:$Vc,10:$Vd,15:8,16:9,17:10,21:11,22:$Ve,23:$V3,24:$V4,25:$Vf,28:59,32:$Va,35:[1,55],36:56,37:58,38:60,39:61,40:62,41:64,42:$Vg,44:$Vh,45:$Vi,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($Vb,[2,30]),{9:[1,80],18:21},o($V5,[2,29]),o($Vb,[2,32]),o($Vk,[2,34]),o($Vk,[2,35]),o($Vk,[2,36]),o($Vk,[2,37]),o($Vk,[2,38]),o($Vk,[2,39]),o([7,9,10,22,25,32,35,42,43,44,45,58],[2,40],{16:9,17:10,21:11,15:17,23:$V3,24:$V4}),{22:[1,81]},o($Vk,[2,42]),{25:[1,82]},{25:[1,83]},{9:$Vc,10:$Vd,22:[1,84],25:$Vf,41:85,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($Vl,$Vm,{19:[1,87],47:[1,86]}),o($Vn,[2,51]),o([12,14,19,22,27,30,47,52,53,54,55,56,61,62,65,66,67],[2,52],{25:[1,88]}),o($Vn,[2,56],{50:89,51:90,59:91,12:[1,93],14:[1,94],52:[1,92],53:[1,95],54:[1,96],55:[1,97],56:[1,98],61:$Vo,62:$Vp}),{9:$Vc,10:$Vd,25:$Vf,46:102,60:101,64:76,68:78},o($Vq,[2,67],{63:103,65:$Vr,66:$Vs,67:$Vt}),o($Vu,[2,64]),o($Vl,[2,71]),{9:$Vc,10:$Vd,25:$Vf,41:107,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($Vl,[2,77]),o($Vl,[2,78]),{19:$V6,22:$V7},o($Vk,[2,41]),{9:$Vc,10:$Vd,25:$Vf,41:108,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},{9:$Vc,10:$Vd,25:$Vf,41:109,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($Vk,[2,46]),{22:[1,110]},{9:$Vc,10:$Vd,25:$Vf,41:111,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},{9:[1,113],10:[1,112]},{9:$Vc,10:$Vd,25:$Vf,27:[2,81],41:116,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78,69:114,70:115},{9:$Vc,10:$Vd,25:$Vf,46:102,49:117,57:73,58:$Vj,60:74,64:76,68:78},{9:$Vc,10:$Vd,25:$Vf,46:102,48:118,49:72,57:73,58:$Vj,60:74,64:76,68:78},{9:$Vc,10:$Vd,25:$Vf,46:102,60:119,64:76,68:78},o($Vv,[2,57]),o($Vv,[2,58]),o($Vv,[2,59]),o($Vv,[2,60]),o($Vv,[2,61]),o($Vv,[2,62]),o($Vv,[2,63]),o($Vu,[2,68]),o($Vu,[2,69]),o($Vq,[2,66],{63:103,65:$Vr,66:$Vs,67:$Vt}),o($Vl,$Vm),{9:$Vc,10:$Vd,25:$Vf,46:102,64:120,68:78},o($Vu,[2,72]),o($Vu,[2,73]),o($Vu,[2,74]),{27:[1,121]},{27:[1,122]},{27:[1,123]},o($Vk,[2,47]),o($Vn,[2,48]),{20:[1,124]},{20:[1,125]},{27:[1,126]},{27:[2,80],30:[1,127]},o($V9,[2,83]),o($Vn,[2,54],{59:91,61:$Vo,62:$Vp}),o($Vn,[2,55]),o($Vq,[2,65],{63:103,65:$Vr,66:$Vs,67:$Vt}),o($Vl,[2,70]),o($Vl,[2,75]),{4:57,5:63,7:$V0,9:$Vc,10:$Vd,15:8,16:9,17:10,21:11,22:$Ve,23:$V3,24:$V4,25:$Vf,28:59,32:$Va,36:128,37:58,38:60,39:61,40:62,41:64,42:$Vg,44:$Vh,45:$Vi,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},{4:57,5:63,7:$V0,9:$Vc,10:$Vd,15:8,16:9,17:10,21:11,22:$Ve,23:$V3,24:$V4,25:$Vf,28:59,32:$Va,36:129,37:58,38:60,39:61,40:62,41:64,42:$Vg,44:$Vh,45:$Vi,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},{47:[1,130]},{47:[1,131]},o($Vl,[2,79]),{9:$Vc,10:$Vd,25:$Vf,41:132,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($Vb,[2,43],{43:[1,133]}),o($Vk,[2,45]),{9:$Vc,10:$Vd,25:$Vf,41:134,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},{9:$Vc,10:$Vd,25:$Vf,41:135,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($V9,[2,82]),{4:57,5:63,7:$V0,9:$Vc,10:$Vd,15:8,16:9,17:10,21:11,22:$Ve,23:$V3,24:$V4,25:$Vf,28:59,32:$Va,36:136,37:58,38:60,39:61,40:62,41:64,42:$Vg,44:$Vh,45:$Vi,46:69,48:70,49:72,57:73,58:$Vj,60:74,64:76,68:78},o($Vn,[2,49]),o($Vn,[2,50]),o($Vk,[2,44])],
defaultActions: {12:[2,20],13:[2,21],44:[2,16],45:[2,17]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 23;
break;
case 2:return 30
break;
case 3:return 22
break;
case 4:return 19
break;
case 5:return 20
break;
case 6:return 25
break;
case 7:return 27
break;
case 8:return 32
break;
case 9:return 35
break;
case 10:return 24
break;
case 11:return 10
break;
case 12:return 42
break;
case 13:return 43
break;
case 14:return 44
break;
case 15:return 45
break;
case 16:return 52
break;
case 17:return 12
break;
case 18:return 14
break;
case 19:return 53
break;
case 20:return 47
break;
case 21:return 7
break;
case 22:return 66
break;
case 23:return 54
break;
case 24:return 61
break;
case 25:return 65
break;
case 26:return 62
break;
case 27:return 67
break;
case 28:return 55
break;
case 29:return 56
break;
case 30:return 58
break;
case 31:return 8;
break;
case 32:return 11;
break;
case 33:return 13;
break;
case 34:return 9;
break;
}
},
rules: [/^(?:\s+)/,/^(?:(int)|(float)|(char))/,/^(?:,)/,/^(?:;)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:void)/,/^(?:\d+)/,/^(?:if)/,/^(?:else)/,/^(?:while)/,/^(?:return)/,/^(?:<=)/,/^(?:<)/,/^(?:>)/,/^(?:>=)/,/^(?:=)/,/^(?:[\/][\*].*[\*][\/])/,/^(?:\/)/,/^(?:\!=)/,/^(?:\+)/,/^(?:\*)/,/^(?:\-)/,/^(?:\%)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:~)/,/^(?:(#define))/,/^(?:(#include))/,/^(?:\w+(\.h))/,/^(?:([a-z]|[A-Z]|_)([a-z]|[A-Z]|\d|_)*)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}