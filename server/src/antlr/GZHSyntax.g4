grammar GZHSyntax;

// Parser

file: object_class EOF;

object_class: ('Object'|'objcet') ID property* end;

property: ID '=' value+;

end: 'end'|'End'|'END';

value: fileString
     | BOOL
     | PROCENTAGE
     | INT
     | FLOAT
     | STRING
     | ID;

fileString: ID '.' ID;

// Lexer
BOOL: 'yes' | 'no' | 'Yes' | 'No' | 'YES' | 'NO';
PROCENTAGE: (INT|FLOAT) '%';
FLOAT: '-'? ([0-9]+)? '.' [0-9]+;
INT: '-'? [0-9]+;
STRING: '"' ~'"'* '"' | '\'' ~'\''* '\'';
ID: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;
COMMENT: ('//'|';') ~[\r\n]* -> skip;
