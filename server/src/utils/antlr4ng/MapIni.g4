grammar MapIni;

// Parser Rules
program: (class | NEWLINE | WS)* EOF;

class: mappedImageClass
     | objectClass
//     | upgradeClass
     ;

// MappedImage Class
mappedImageClass: 'MappedImage' WS mappedImage_value NEWLINE (property)* end;


// Object Class
objectClass: 'Object' WS object_value NEWLINE (module_modifier | objectProperty | NEWLINE)* end;

module_modifier: WS? (addModule
                     | removeModule
//                     | replcaeModule
                     )
                     ;

addModule: 'AddModule' NEWLINE (module | property | NEWLINE)* end;
removeModule: 'RemoveModule' WS moduleTag_value;

module: WS ?(drawModule
            | bodyModule
            | behaviorModule
            | clientModule)
            ;

// Draw Modules
drawModule: 'Draw' EQ drawModule_type WS moduleTag_value NEWLINE (conditionState | aliasCondition | property | NEWLINE)* end;
conditionState: WS? ('DefaultConditionState' | ('ConditionState' EQ conditionState_values) | ('TransitionState' EQ conditionState_values)) NEWLINE (property | NEWLINE)* end;
aliasCondition: WS? 'AliasConditionState' EQ conditionState_values NEWLINE;

bodyModule: 'Body' EQ bodyModule_type WS moduleTag_value NEWLINE (property | NEWLINE)* end;

behaviorModule: 'Behavior' EQ behaviorModule_type WS moduleTag_value NEWLINE (property | NEWLINE)* end;

clientModule: 'Client' EQ clientModule_type WS moduleTag_value NEWLINE (property | NEWLINE)* end;

objectProperty: property;
property: WS? ID EQ property_values NEWLINE;

// Module values
drawModule_type: ID;
conditionState_values: ID (WS ID)*;
bodyModule_type: ID;
behaviorModule_type: ID;
clientModule_type: ID;
moduleTag_value: ID;

// Class values
mappedImage_value: ID;
object_value: ID;

// Property values
property_values: ID (WS ID)*;

// General
EQ: WS? '=' WS?;

// Map.ini
end: WS? 'End' | 'end' | 'END';

// General
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: [a-zA-Z_0-9+\-][a-zA-Z_0-9%:.]*;

NEWLINE: WS? ([\r]?[\n]);
WS: [ \t]+;

// Skips
COMMENT: WS? (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be a