grammar MapIni;

// Parser rules
program: object* EOF;

object: 'Object' ID ((modules | objectProperty)* | (moduleBlocks | objectProperty)*) end;

objectProperty: ID '=' value+;

moduleBlocks: addModuleBlock
            | replaceModuleBlock
            | removeModuleBlock
            ;

addModuleBlock: 'AddModule'  (modules | addModuleProperty)* end;

addModuleProperty: ID '=' value+;

replaceModuleBlock: 'ReplaceModule' ID (modules | replaceModuleProperty)* end;

replaceModuleProperty: ID '=' value+;

modules: drawModuleBlock
       | bodyModuleBlock
       | behaviormoduleBlock
       | objectBlocks
       ;

objectBlocks: objectPrerequisites
            | objectWeaponSet
            | objectArmorSet
            | objectUnitSpecificSounds
            | objectUnitSpecificFX
            ;

objectPrerequisites: 'Prerequisites' (objectPrerequisitesobjectProperty | objectPrerequisitessciencePropety)* end;
objectPrerequisitesobjectProperty: 'Object' '=' ID+;
objectPrerequisitessciencePropety: 'Science' '=' ID+;

objectWeaponSet: 'WeaponSet' objectWeaponSetPropety* end;
objectWeaponSetPropety: ID '=' value+;

objectArmorSet: 'ArmorSet' objectArmorSetPropety* end;
objectArmorSetPropety: ID '=' value+;

objectUnitSpecificSounds: 'UnitSpecificSounds' objectUnitSpecificSoundsPropety* end;
objectUnitSpecificSoundsPropety: ID '=' value+;

objectUnitSpecificFX: 'UnitSpecificFX' objectUnitSpecificFXPropety* end;
objectUnitSpecificFXPropety: ID '=' value+;

behaviormoduleBlock: 'Behavior' '=' ID ID (property | behaviorTurret)* end;

behaviorTurret: ('Turret' | 'AltTurret') genericProperty* end;

bodyModuleBlock: 'Body' '=' ID ID property* end ;

drawModuleBlock: 'Draw' '=' ID ID (conditionStateBlocks+ | drawModuleProperty)* end ;
drawModuleProperty: ID '=' value+;

conditionStateBlocks: conditionStateBlock
                    | defaultConditionStateBlock
                    | transitionStateBlock
                    | aliasConditionStateBlock
                    | ignoreConditionStateBlock
                    ;

conditionStateBlock: 'ConditionState' '=' ID+ (conditionStateProperty | transitionKeyProperty)* end;
defaultConditionStateBlock: 'DefaultConditionState' (conditionStateProperty | transitionKeyProperty)* end;
conditionStateProperty: ID '=' value+;
transitionKeyProperty: 'TransitionKey' '=' ID;

transitionStateBlock: 'TransitionState' '=' ID ID+ transitionStateProperty* end;
transitionStateProperty: ID '=' value+;

aliasConditionStateBlock: 'AliasConditionState' '=' ID+;
ignoreConditionStateBlock: 'IgnoreConditionStates' '=' ID+;

removeModuleBlock: 'RemoveModule' ID;

property: genericProperty
        | turretProperty
        | altTurretProperty;

genericProperty: ID '=' value+;
turretProperty: ('Turret' | 'turret' | 'TURRET') '=' value+;
altTurretProperty: ('AltTurret' | 'altturret' | 'ALTTURRET') '=' value+;


end: 'End'
   | 'end'
   | 'END'
   ;

value: quoutedID              #string
     | ftype                  #filetype
     | procent                #procentage
     | ID                     #id
     | INT                    #int
     | FLOAT                  #float
     | BOOL                   #bool
     | ('Turret' | 'turret' | 'TURRET') #turretValue
     | ('AltTurret' | 'altturret' | 'ALTTURRET') #altTurretValue
     ;

ftype: ID '.' ID;
rgb: INT256 INT256 INT256 INT256;
procent: (FLOAT | INT) '%';
intRang: INT INT;
floatRang: FLOAT FLOAT;

quoutedID: '"' ID '"';

// Lexer rules
INT: '-'? [0-9]+;
INT256: '-'? ('0' [0-9][0-9] | '1' [0-9][0-9] | '2' [0-4][0-9] | '25' [0-5] | [0-9][0-9] | [0-9] );
FLOAT: '-'? [0-9]+ '.' [0-9]+;

BOOL: 'Yes' | 'yes' | 'YES' | 'No' | 'no' | 'NO';
ID: [a-zA-Z_+-][a-zA-Z_0-9%]*;

SKIp: [ \t\r\n]+ -> skip; // skip whitespaces

COMMENT: (';' | '//') ~[\r\n]* -> skip; // skip comments