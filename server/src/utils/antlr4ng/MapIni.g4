grammar MapIni;

// Parser Rules
program: (class | NEWLINE)* EOF;

class: simpleClass
     | objectClass
     | objectReskinClass
     ;

// Classes that doesn't have sub blocks
simpleClass: class_identifier class_value NEWLINE (property | NEWLINE)* end;
class_identifier: 'Animation' | 'Armor' | 'AudioEvent' | 'CommandButton' | 'CommandSet' | 'DamageFX' | 'DialogEvent' | 'FXList' | 'InGameUI' | 'Locomotor' | 'ParticleSystem' | 'Rank' | 'Science' | 'SpecialPower' | 'Upgrade' | 'WaterTransparency' | 'Weapon' | 'Weather' ;
class_value: ID;

objectReskinClass: objectReskin_identifier object_value object_value NEWLINE (module_modifier | module | objectProperty | objectSets | objectUnitSpecificSounds | objectUnitSpecificFX | NEWLINE)* end;
objectReskin_identifier: 'ObjectReskin';

// Object Class
objectClass: object_identifier object_value NEWLINE (module_modifier | module | objectProperty | objectSets | objectUnitSpecificSounds | objectUnitSpecificFX | NEWLINE)* end;
object_identifier: 'Object';

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
objectWeaponSet: 'WeaponSet' NEWLINE (objectWeaponSetProperty | NEWLINE)* end;
objectWeaponSetProperty: (ID | class_identifier) EQ property_values NEWLINE;

// ArmorSet
objectArmorSet: 'ArmorSet' NEWLINE (objectArmorSetProperty | NEWLINE)* end;
objectArmorSetProperty: (ID | class_identifier) EQ property_values NEWLINE;

// Prerequisite
objectPrerequisite: 'Prerequisites' NEWLINE (objectPrerequisiteProperty | NEWLINE)* end;
objectPrerequisiteProperty: (ID | class_identifier | object_identifier) EQ property_values NEWLINE;

// UnitSpecificSounds
objectUnitSpecificSounds: 'UnitSpecificSounds' NEWLINE (objectUnitSpecificSoundsProperty | NEWLINE)* end;
objectUnitSpecificSoundsProperty: ID EQ property_values NEWLINE;

// UnitSpecificFX
objectUnitSpecificFX: 'UnitSpecificFX' NEWLINE (objectUnitSpecificFXProperty | NEWLINE)* end;
objectUnitSpecificFXProperty: ID EQ property_values NEWLINE;

// Draw Modules
drawModule: 'Draw' EQ drawModule_type moduleTag_value NEWLINE (conditionState | aliasCondition | drawModuleProperty | NEWLINE)* end;
conditionState: defaultConditionStateBlock | conditionStateBlock | transitionStateBlock;
defaultConditionStateBlock: 'DefaultConditionState' NEWLINE (conditionStateProperty | NEWLINE)* end;
conditionStateBlock: 'ConditionState' EQ conditionState_values NEWLINE (conditionStateProperty | NEWLINE)* end;
transitionStateBlock: 'TransitionState' EQ conditionState_values NEWLINE (conditionStateProperty | NEWLINE)* end;
aliasCondition:  'AliasConditionState' EQ conditionState_values NEWLINE;

// Body Module
bodyModule: 'Body' EQ bodyModule_type moduleTag_value NEWLINE (bodyModuleProperty | NEWLINE)* end;
bodyModuleProperty: ID EQ property_values NEWLINE;

// Behavior Module
behaviorModule: 'Behavior' EQ behaviorModule_type moduleTag_value NEWLINE (behaviorModuleProperty | turretBlock | NEWLINE)* end;
behaviorModuleProperty: (ID | class_identifier) EQ property_values NEWLINE;
turretBlock: TURRET NEWLINE (turretProperty | NEWLINE)* end;
turretProperty: (ID | class_identifier | object_identifier) EQ property_values NEWLINE;
TURRET: ('Turret' | 'AltTurret');

// Client Module
clientModule: 'ClientUpdate' EQ clientModule_type moduleTag_value NEWLINE (clientModuleProperty | NEWLINE)* end;
clientModuleProperty: ID EQ property_values NEWLINE;

objectProperty: (ID | class_identifier) EQ property_values NEWLINE;
drawModuleProperty: ID EQ property_values NEWLINE;
conditionStateProperty: (ID | class_identifier | TURRET) EQ property_values NEWLINE;
property:  property_value EQ property_values NEWLINE;

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
property_values: property_value ( property_value)*;
property_value: ID | class_identifier | object_value;

// General
EQ: '=' ;

// Map.ini
end: 'End' | 'end' | 'END';

// General
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: [a-zA-Z_0-9+\-.][a-zA-Z_0-9%:.]*;

NEWLINE: ([\r]?[\n]);


// Skips
WS: [ \t] -> skip;
COMMENT:  (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be a