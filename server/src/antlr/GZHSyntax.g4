grammar GZHSyntax;

// Parser

file: property* EOF;

property: ID '=' value+;

value: ID;

// Lexer

ID: [a-zA-Z]+;

WS: [ \t\r\n]+ -> skip;
COMMENT: ('//'|';') ~[\r\n]* -> skip;
