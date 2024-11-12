grammar temp;

// Parser Rules
program: (class | NEWLINE)* EOF;

class: simpleClass
     | objectClass
     | objectReskinClass
     ;

// Classes that doesn't have sub blocks
simpleClass: class_identifier class_value NEWLINE (assignment | NEWLINE)* end;
class_identifier: ID;
class_value: ID;

// Object Class
objectClass: class_identifier class_value NEWLINE (module_modifier | module | propertyBlock | assignment | NEWLINE)* end;

// ObjectReskin Class
objectReskinClass: class_identifier class_value class_value NEWLINE (module_modifier | module | propertyBlock | assignment | NEWLINE)* end;

module_modifier:  (addModule
                     | removeModule
//                     | replcaeModule
                     )
                     ;

addModule: 'AddModule' NEWLINE (module | assignment | NEWLINE)* end;
removeModule: 'RemoveModule'  moduleTag_value;

// Object Modules
module: module_type EQ module_name moduleTag_value NEWLINE (propertyBlock | assignmentBlock | assignment | NEWLINE)* end;

// Object Module values
module_type: ID;
module_name: ID;
moduleTag_value: ID;

// Object Blocks
propertyBlock: ID NEWLINE (assignment | NEWLINE)* end;
assignmentBlock: ID EQ values NEWLINE (assignment | NEWLINE)* end;

// Class values
object_value: ID;

// Property values
assignment:  property_value EQ values NEWLINE;
values: property_value ( property_value)*;
property_value: ID | class_identifier | object_value;

// General
EQ: '=' ;

// Map.ini
end: 'end' | 'End' | 'END';

// General
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: [a-zA-Z_0-9+\-.][a-zA-Z_0-9%:.]*;

NEWLINE: ([\r]?[\n]);


// Skips
WS: [ \t] -> skip;
COMMENT:  (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be a