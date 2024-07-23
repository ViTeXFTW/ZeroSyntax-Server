grammar MapIni;

// Parser rules
program: object* EOF;

object: 'Object' ID (moduleBlocks | property)* end;

moduleBlocks: addModuleBlock           #AddModule
            | replaceModuleBlock       #ReplaceModule
            | removeModuleBlock        #RemoveModule
            ;

addModuleBlock: 'AddModule'  (modules | property)* end;

replaceModuleBlock: 'ReplaceModule' ID (modules | property)* end;

modules: drawModuleBlock           #DrawModule
       | bodyModuleBlock           #BodyModule
       | behaviormoduleBlock       #BehaviorModule
       ;

behaviormoduleBlock: 'Behavior' '=' ID ID property* end;

bodyModuleBlock: 'Body' '=' ID ID property* end ;

drawModuleBlock: 'Draw' '=' ID ID (conditionStateBlocks+ | property)* end ;

conditionStateBlocks: 'ConditionState' '=' ID+ property* end          #ConditionState
                    | 'DefaultConditionState' property* end           #DefaultConditionState
                    | 'TransitionState' '=' ID ID property* end       #TransitionState
                    | 'AliasConditionState' '=' ID+                   #AliasConditionState
                    | 'IgnoreConditionStates' '=' ID+                 #IgnoreConditionStates
                    ;

removeModuleBlock: 'RemoveModule' ID;

property: ID '=' value+;

end: 'End'
   | 'end'
   | 'END'
   ;

value: quoutedID              #string
     | ftype                  #filetype
     | ID                     #id
     | INT                    #int
     | FLOAT                  #float
     | BOOL                   #bool
     ;

ftype: ID '.' ID;
rgb: INT256 INT256 INT256 INT256;
procent: INT '%';
intRang: INT INT;
floatRang: FLOAT FLOAT;

quoutedID: '"' ID '"';

// Lexer rules
INT: '-'? [0-9]+;
INT256: '-'? ('0' [0-9][0-9] | '1' [0-9][0-9] | '2' [0-4][0-9] | '25' [0-5] | [0-9][0-9] | [0-9] );
FLOAT: '-'? [0-9]+ '.' [0-9]+;

BOOL: 'Yes' | 'No';
ID: [a-zA-Z_+-][a-zA-Z_0-9]*;

SKIp: [ \t\r\n]+ -> skip; // skip whitespaces

COMMENT: ';' ~[\r\n]* -> skip; // skip comments