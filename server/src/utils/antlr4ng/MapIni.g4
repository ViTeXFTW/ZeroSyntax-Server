grammar MapIni;

// Parser Rules
program: (class | NEWLINE)* EOF;

class: mappedImageClass
     | objectClass
//     | upgradeClass
     ;

// MappedImage Class
mappedImageClass: 'MappedImage' mappedImage_value NEWLINE (property)* end;


// Object Class
objectClass: 'Object' object_value NEWLINE (module_modifier | module | objectProperty | objectSets | NEWLINE)* end;

module_modifier:  (addModule
                     | removeModule
//                     | replcaeModule
                     )
                     ;

addModule: 'AddModule' NEWLINE (module | objectProperty | NEWLINE)* end;
removeModule: 'RemoveModule'  moduleTag_value;

module: (drawModule
        | bodyModule
        | behaviorModule
        | clientModule)
        ;

objectSets: (objectWeaponSet | objectArmorSet | objectPrerequisite);

// WeaponSet
objectWeaponSet: 'WeaponSet' NEWLINE (propertyCondition | objectWeaponSetWeapon | NEWLINE)* end;
propertyCondition: 'Condition' EQ property_values NEWLINE;
objectWeaponSetWeapon: 'Weapon' EQ weaponSlot_value property_values NEWLINE;
weaponSlot_value: ID;

// ArmorSet
objectArmorSet: 'ArmorSet' NEWLINE (propertyCondition | objectArmorSetArmor | NEWLINE)* end;
objectArmorSetArmor: 'Armor' EQ property_values NEWLINE;

// Prerequisite
objectPrerequisite: 'Prerequisites' NEWLINE (objectPrerequisite_object | objectPrerequisite_science | NEWLINE)* end;
objectPrerequisite_object: 'Object' EQ property_values NEWLINE;
objectPrerequisite_science: 'Science' EQ property_values NEWLINE;

// Draw Modules
drawModule: 'Draw' EQ drawModule_type moduleTag_value NEWLINE (conditionState | aliasCondition | drawModuleProperty | NEWLINE)* end;
conditionState:  ('DefaultConditionState' | ('ConditionState' EQ conditionState_values) | ('TransitionState' EQ conditionState_values)) NEWLINE (conditionStateProperty | NEWLINE)* end;
aliasCondition:  'AliasConditionState' EQ conditionState_values NEWLINE;

// Body Module
bodyModule: 'Body' EQ bodyModule_type moduleTag_value NEWLINE (property | NEWLINE)* end;

// Behavior Module
behaviorModule: 'Behavior' EQ behaviorModule_type moduleTag_value NEWLINE (property | NEWLINE)* end;

// Client Module
clientModule: 'Client' EQ clientModule_type moduleTag_value NEWLINE (property | NEWLINE)* end;

objectProperty: ID EQ property_values NEWLINE;
drawModuleProperty: ID EQ property_values NEWLINE;
conditionStateProperty: ID EQ property_values NEWLINE;
property:  ID EQ property_values NEWLINE;

// Module values
drawModule_type: ID;
conditionState_values: ID (ID)*;
bodyModule_type: ID;
behaviorModule_type: ID;
clientModule_type: ID;
moduleTag_value: ID;

// Class values
mappedImage_value: ID;
object_value: ID;

// Object Special Values
locomotor_modifier: ID;

// Property values
property_value: ID;
property_values: ID ( ID)*;

// General
EQ: '=' ;

// Map.ini
end: 'End' | 'end' | 'END';

// General
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: [a-zA-Z_0-9+\-][a-zA-Z_0-9%:.]*;

NEWLINE: ([\r]?[\n]);


// Skips
WS: [ \t] -> skip;
COMMENT:  (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be a