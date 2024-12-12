grammar MapIni;

// Parser Rules
program: (class | NEWLINE)* EOF;

class: simpleClass
     | complexClass
     ;

// Classes that doesn't have sub blocks
simpleClass: class_identifier class_value NEWLINE (property | NEWLINE)* end;

// Classes that have sub blocks
complexClass: class_identifier class_value* NEWLINE (module_modifier | objectModules | propertyBlock | property | NEWLINE)* end;

class_identifier: ID;
class_value: ID;

module_modifier:  (addModule
                     | removeModule
//                     | replcaeModule
                     )
                     ;

addModule: ADDMODULE NEWLINE (objectModules | property | NEWLINE)* end;
removeModule: REMOVEMODULE moduleTag_value;


// Object Modules
objectModules: module_type EQ module_name moduleTag_value salvage_value? NEWLINE (property | propertyBlock | conditionBlock | NEWLINE)* end;

// Object Module values
module_type: ID;
module_name: ID;
moduleTag_value: ID;
salvage_value: ID;
// Object Blocks
propertyBlock: ID ID? NEWLINE (property | propertyBlock | NEWLINE)* end;
conditionBlock: CONDITIONSTATE EQ property_values NEWLINE (property | NEWLINE)* end;

// Property values
property:  value EQ property_values NEWLINE;
property_values: value+;
value: ID | STRING;

// General
CONDITIONSTATE: ('ConditionState' | 'TransitionState');
ADDMODULE: ('AddModule' | 'addmodule' | 'ADDMODULE' | 'Addmodule');
REMOVEMODULE: ('RemoveModule');
EQ: '=' ;
end: 'end' | 'End' | 'END';
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: [a-zA-Z_0-9+\-.][a-zA-Z_0-9%:.\-\\]*;

NEWLINE: ([\r]?[\n]);


// Skips
WS: [ \t] -> skip;
COMMENT:  (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be a