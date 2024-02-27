grammar GZHSyntax;

// Parser
file: EOF;

classes: object*;

object: 'Object' OBJECT_NAME (property)* end;

property: PROPERTY_ID '=' (value)*;

end: 'End' | 'END' | 'end';

value: INT | FLOAT | PROCENTAGE | STRING | BOOL;

// Lexer

// Names
PROPERTY_ID: [a-zA-Z][a-zA-Z0-9%]*;
OBJECT_NAME: [a-zA-Z][a-zA-Z0-9]*;

// Values
INT: '-'? [0-9]+;
FLOAT: '-'? [0-9]+ '.' [0-9]+;
PROCENTAGE: '-'? [0-9]+ '%';
STRING: '"' ~'"'* '"' 
      | '\'' ~'\''* '\'';
BOOL: 'yes' | 'no' | 'YES' | 'NO' | 'Yes' | 'No';

// Ignore
WS: [ \t\r\n]+ -> skip; // skip whitespaces

COMMENT: ';' ~[\r\n]* -> skip; // skip comments
