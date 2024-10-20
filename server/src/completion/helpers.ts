import { CandidatesCollection } from "antlr4-c3";
import { ParserRuleContext, TerminalNode, Token } from "antlr4ng";
import { MapIniParser } from "../utils/antlr4ng/MapIniParser";
import { CompletionItem, CompletionItemKind, InsertTextFormat } from "vscode-languageserver";
import * as list from '../utils/lists'
import { RBTree } from "bintrees";



export function findTokenIndex(tokens: Token[], offset: number): number {
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.start <= offset && token.stop + 1 >= offset) {
            return i;
        }
    }
    // If no exact match, return the last token
    return tokens.length - 1;
}

export function generateCompletionItems(candidates: CandidatesCollection, parser: MapIniParser): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    // Process token candidates (keywords, symbols)
    for (const [tokenType, candidate] of candidates.tokens) {
        const tokenName = parser.vocabulary.getDisplayName(tokenType);

        if (!tokenName) {
            continue
        }

        // Clean up the token name
        let label = tokenName.startsWith("'") && tokenName.endsWith("'")
            ? tokenName.substring(1, tokenName.length - 1)
            : tokenName;


        // completionItems.push(createCompletionItem(label, CompletionItemKind.Field, tokenType, `Rule: ${label}`));

        switch (label) {

            case 'NEWLINE':
            case 'COMMENT':
            case 'END':
            case 'end':
                break;

            case 'BOOLEAN':
                completionItems.push(createCompletionItem('Yes', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('No', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;

            case 'PERCENT':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Percentage',
                    insertText: '${0:100}%',
                    documentation: `Snippet: ${label}`
                })
                break

            case 'WEAPONSLOT':
                completionItems.push(createCompletionItem('PRIMARY', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('SECONDARY', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('TERTIARY', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;


            case 'VETERENCY':
                completionItems.push(createCompletionItem('REGULAR', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('VETERAN', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('ELITE', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('HEROIC', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;

            case 'RGB':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert RGB',
                    insertText: 'R:${1:0} G:${2:0} B:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'RGBA':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert RGBA',
                    insertText: 'R:${1:0} G:${2:0} B:${3:0} A:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Coords':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Left, Top, Right & Bottom',
                    insertText: 'Coords = Left:${1:0} Top:${2:0} Right:${3:0} Bottom:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'COORDLEFT':
                completionItems.push({
                    label: 'Left',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Left coordinate',
                    insertText: 'Left:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'COORDTOP':
                completionItems.push({
                    label: 'Top',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Top coordinate',
                    insertText: 'Top:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'COORDRIGHT':
                completionItems.push({
                    label: 'Right',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Right coordinate',
                    insertText: 'Right:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'COORDBOTTOM':
                completionItems.push({
                    label: 'Bottom',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Bottom coordinate',
                    insertText: 'Bottom:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'XCOORD':
                completionItems.push({
                    label: 'X',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert X coordinate',
                    insertText: 'X:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'YCOORD':
                completionItems.push({
                    label: 'Y',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Y coordinate',
                    insertText: 'Y:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'ZCOORD':
                completionItems.push({
                    label: 'Z',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Z coordinate',
                    insertText: 'Z:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Location':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert X: & Y: coordinate',
                    insertText: 'Location = X:${1:0} Y:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Mapped Image Snippets
            case 'MappedImage':
                completionItems.push(createCompletionItem('MappedImage', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'MappedImage',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Mapped Image',
                    insertText: 'MappedImage ${1:MappedImageName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Command Button Snippets
            case 'CommandButton':
                completionItems.push(createCompletionItem('CommandButton', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'CommandButton',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Command Button',
                    insertText: 'CommandButton ${1:CommandButtonName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Command Set Snippets
            case 'CommandSet':
                completionItems.push(createCompletionItem('CommandSet', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'CommandSet',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Command Set',
                    insertText: 'CommandSet ${1:CommandSetName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Damage FX Snippets
            case 'DamageFX':
                completionItems.push(createCompletionItem('DamageFX', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'DamageFX',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Damage FX',
                    insertText: 'DamageFX ${1:DamageFXName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // FX List Snippets
            case 'FXList':
                completionItems.push(createCompletionItem('FXList', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'FXList',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert FX List',
                    insertText: 'FXList ${1:FXListName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Locomotor Snippets
            case 'Locomotor':
                completionItems.push(createCompletionItem('Locomotor', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Locomotor',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Locomotor',
                    insertText: 'Locomotor ${1:LocomotorName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Object Snippets
            case 'Object':
                completionItems.push(createCompletionItem('Object', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Object',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Object',
                    insertText: 'Object ${1:ObjectName}\n\t${0:}\n\n\tRemoveModule ModuleTag_DefaultInactiveBody\n\tRemoveModule ModuleTag_DefaultDestroyDie\n\tRemoveModule ModuleTag_DefaultW3DDefaultDraw\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'AddModule':
                completionItems.push(createCompletionItem('AddModule', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'AddModule',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert AddModule',
                    insertText: 'AddModule\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Draw':
                completionItems.push(createCompletionItem('Draw', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Draw',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Draw',
                    insertText: 'Draw = ${1|W3DDebrisDraw,W3DDefaultDraw,W3DDependencyModelDraw,W3DModelDraw,W3DOverlordTankDraw,W3DOverlordAircraftDraw,W3DOverlordTruckDraw,W3DLaserDraw,W3DPoliceCarDraw,W3DTreeDraw,W3DPropDraw,W3DProjectileStreamDraw,W3DRopeDraw,W3DScienceModelDraw,W3DSupplyDraw,W3DTankDraw,W3DTankTruckDraw,W3DTracerDraw,W3DTruckDraw|} ModuleTag_${2:01}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'DefaultConditionState':
                completionItems.push(createCompletionItem('DefaultConditionState', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'DefaultConditionState',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert DefaultConditionState',
                    insertText: 'DefaultConditionState\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;
            
            // TODO: Make snippet get conditionstates from customList
            case 'ConditionState':
                completionItems.push(createCompletionItem('ConditionState', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'ConditionState',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert ConditionState',
                    insertText: 'ConditionState = ${1|USER_1,USER_2,JAMMED,ATTACKING,WEAPONSET_CRATEUPGRADE_ONE,WEAPONSET_CRATEUPGRADE_TWO,ARMORSET_CRATEUPGRADE_TWO,ARMORSET_CRATEUPGRADE_ONE,PREORDER,STUNNED,STUNNED_FLAILING,EXPLODED_BOUNCING,EXPLODED_FLAILING,CAPTURED,RAISING_FLAG,CONTINUOUS_FIRE_SLOW,CONTINUOUS_FIRE_FAST,CONTINUOUS_FIRE_MEAN,SPECIAL_CHEERING,ARMED,RAPELLING,PARACHUTING,CLIMBING,SPLATTED,BURNED,AFLAME,SMOLDERING,POWER_PLANT_UPGRADING,POWER_PLANT_UPGRADED,OVER_WATER,MOVING,DEPLOYED,UNPACKING,PACKING,JETEXHAUST,JETAFTERBURNER,LOADED,CARRYING,DOCKING_ENDING,DOCKING_ACTIVE,DOCKING_BEGINNING,DOCKING,PANICKING,RADAR_UPGRADED,RADAR_EXTENDED,CONSTRUCTION_COMPLETE,ACTIVELY_CONSTRUCTING,ACTIVELY_BEING_CONSTRUCTED,PARTIALLY_CONSTRUCTED,AWAITING_CONSTRUCTION,DYING,PRONE,FREEFALL,POST_COLLAPSE,TOPPLED,TURRET_ROTATE,RELOADING_A,BETWEEN_FIRING_SHOTS_A,FIRING_A,PREATTACK_A,USING_WEAPON_A,RELOADING_B,BETWEEN_FIRING_SHOTS_B,FIRING_B,PREATTACK_B,USING_WEAPON_B,RELOADING_C,BETWEEN_FIRING_SHOTS_C,FIRING_C,PREATTACK_C,USING_WEAPON_C,DOOR_4_WAITING_TO_CLOSE,DOOR_4_WAITING_OPEN,DOOR_4_CLOSING,DOOR_4_OPENING,DOOR_3_WAITING_TO_CLOSE,DOOR_3_WAITING_OPEN,DOOR_3_CLOSING,DOOR_3_OPENING,DOOR_2_WAITING_TO_CLOSE,DOOR_2_WAITING_OPEN,DOOR_2_CLOSING,DOOR_2_OPENING,DOOR_1_WAITING_TO_CLOSE,DOOR_1_WAITING_OPEN,DOOR_1_CLOSING,DOOR_1_OPENING,WEAPONSET_PLAYER_UPGRADE,WEAPONSET_HERO,WEAPONSET_ELITE,WEAPONSET_VETERAN,ENEMYNEAR,REALLYDAMAGED,RUBBLE,DAMAGED,SNOW,SOLD,DISGUISED,NIGHT,RAPPELLING,SPECIAL_DAMAGED,BACKCRUSHED,FRONTCRUSHED,SECOND_LIFE,RIDER1,RIDER2,RIDER3,RIDER4,RIDER5,RIDER6,RIDER7,RIDER8,PRISTINE,RIGHT_TO_CENTER,CENTER_TO_RIGHT,LEFT_TO_CENTER,CENTER_TO_LEFT,DOWN_DEFAULT,AWAITING_CONSTRUCTION,PARTIALLY_CONSTRUCTED,ACTIVELY_BEING_CONSTRUCTED,UP_DAY,UP_NIGHT,UP_SNOW,UP_SNOWNIGHT,RADAR_EXTENDING,GARRISONED|}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'TransitionState':
                completionItems.push(createCompletionItem('TransitionState', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'TransitionState',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert TransitionState',
                    insertText: 'TransitionState = ${1|USER_1,USER_2,JAMMED,ATTACKING,WEAPONSET_CRATEUPGRADE_ONE,WEAPONSET_CRATEUPGRADE_TWO,ARMORSET_CRATEUPGRADE_TWO,ARMORSET_CRATEUPGRADE_ONE,PREORDER,STUNNED,STUNNED_FLAILING,EXPLODED_BOUNCING,EXPLODED_FLAILING,CAPTURED,RAISING_FLAG,CONTINUOUS_FIRE_SLOW,CONTINUOUS_FIRE_FAST,CONTINUOUS_FIRE_MEAN,SPECIAL_CHEERING,ARMED,RAPELLING,PARACHUTING,CLIMBING,SPLATTED,BURNED,AFLAME,SMOLDERING,POWER_PLANT_UPGRADING,POWER_PLANT_UPGRADED,OVER_WATER,MOVING,DEPLOYED,UNPACKING,PACKING,JETEXHAUST,JETAFTERBURNER,LOADED,CARRYING,DOCKING_ENDING,DOCKING_ACTIVE,DOCKING_BEGINNING,DOCKING,PANICKING,RADAR_UPGRADED,RADAR_EXTENDED,CONSTRUCTION_COMPLETE,ACTIVELY_CONSTRUCTING,ACTIVELY_BEING_CONSTRUCTED,PARTIALLY_CONSTRUCTED,AWAITING_CONSTRUCTION,DYING,PRONE,FREEFALL,POST_COLLAPSE,TOPPLED,TURRET_ROTATE,RELOADING_A,BETWEEN_FIRING_SHOTS_A,FIRING_A,PREATTACK_A,USING_WEAPON_A,RELOADING_B,BETWEEN_FIRING_SHOTS_B,FIRING_B,PREATTACK_B,USING_WEAPON_B,RELOADING_C,BETWEEN_FIRING_SHOTS_C,FIRING_C,PREATTACK_C,USING_WEAPON_C,DOOR_4_WAITING_TO_CLOSE,DOOR_4_WAITING_OPEN,DOOR_4_CLOSING,DOOR_4_OPENING,DOOR_3_WAITING_TO_CLOSE,DOOR_3_WAITING_OPEN,DOOR_3_CLOSING,DOOR_3_OPENING,DOOR_2_WAITING_TO_CLOSE,DOOR_2_WAITING_OPEN,DOOR_2_CLOSING,DOOR_2_OPENING,DOOR_1_WAITING_TO_CLOSE,DOOR_1_WAITING_OPEN,DOOR_1_CLOSING,DOOR_1_OPENING,WEAPONSET_PLAYER_UPGRADE,WEAPONSET_HERO,WEAPONSET_ELITE,WEAPONSET_VETERAN,ENEMYNEAR,REALLYDAMAGED,RUBBLE,DAMAGED,SNOW,SOLD,DISGUISED,NIGHT,RAPPELLING,SPECIAL_DAMAGED,BACKCRUSHED,FRONTCRUSHED,SECOND_LIFE,RIDER1,RIDER2,RIDER3,RIDER4,RIDER5,RIDER6,RIDER7,RIDER8,PRISTINE,RIGHT_TO_CENTER,CENTER_TO_RIGHT,LEFT_TO_CENTER,CENTER_TO_LEFT,DOWN_DEFAULT,AWAITING_CONSTRUCTION,PARTIALLY_CONSTRUCTED,ACTIVELY_BEING_CONSTRUCTED,UP_DAY,UP_NIGHT,UP_SNOW,UP_SNOWNIGHT,RADAR_EXTENDING,GARRISONED|}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Body':
                completionItems.push(createCompletionItem('Body', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Body',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Body',
                    insertText: 'Body = ${1|ActiveBody,HighlanderBody,HiveStructureBody,ImmortalBody,InactiveBody,StructureBody,UndeadBody|} ModuleTag_${2:01}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Behavior':
                completionItems.push(createCompletionItem('Behavior', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Behavior',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Behavior',
                    insertText: 'Behavior = ${1|AnimationSteeringUpdate,ActiveShroudUpgrade,AIUpdateInterface,ArmorUpgrade,AssaultTransportAIUpdate,AssistedTargetingUpdate,AutoDepositUpdate,AutoFindHealingUpdate,AutoHealBehavior,BattleBusSlowDeathBehavior,BunkerBusterBehavior,BaikonurLaunchPower,BaseRegenerateUpdate,BattlePlanUpdate,BoneFXUpdate,CashBountyPower,CashHackSpecialPower,CaveContain,CountermeasuresBehavior,CheckpointUpdate,ChinookAIUpdate,CleanupAreaPower,CleanupHazardUpdate,CommandSetUpgrade,ConvertToCarBombCrateCollide,ConvertToHijackedVehicleCrateCollide,CostModifierUpgrade,CreateCrateDie,CreateObjectDie,CrushDie,DefectorSpecialPower,DefaultProductionExitUpdate,DelayedUpgrade,DemoTrapUpdate,DeployStyleAIUpdate,DozerAIUpdate,DumbProjectileBehavior,DynamicGeometryInfoUpdate,DynamicShroudClearingRangeUpdate,EjectPilotDie,EMPUpdate,EnemyNearUpdate,ExperienceScalarUpgrade,FireSpreadUpdate,FirestormDynamicGeometryInfoUpdate,FireOCLAfterWeaponCooldownUpdate,FireWeaponCollide,FireWeaponWhenDamagedBehavior,FireWeaponWhenDeadBehavior,FireWeaponUpdate,FireWeaponPower,FloatUpdate,GarrisonContain,GrantStealthBehavior,GenerateMinefieldBehavior,GrantUpgradeCreate,HackInternetAIUpdate,HealCrateCollide,HelixContain,HeightDieUpdate,HijackerUpdate,HordeUpdate,InternetHackContain,JetAIUpdate,JetSlowDeathBehavior,LaserUpdate,LifetimeUpdate,LocomotorSetUpgrade,MinefieldBehavior,MissileAIUpdate,MissileLauncherBuildingUpdate,MobMemberSlavedUpdate,MobNexusContain,NeutronMissileSlowDeathBehavior,NeutronBlastBehavior,NeutronMissileUpdate,ObjectCreationUpgrade,OCLSpecialPower,OpenContain,OverchargeBehavior,OverlordContain,ParkingPlaceBehavior,PassengersFireUpgrade,ParachuteContain,ParticleUplinkCannonUpdate,PilotFindVehicleUpdate,PointDefenseLaserUpdate,PoisonedBehavior,PowerPlantUpdate,PowerPlantUpgrade,ProductionUpdate,ProneUpdate,PropagandaTowerBehavior,QueueProductionExitUpdate,RadarUpgrade,RadarUpdate,ReplaceObjectUpgrade,RebuildHoleBehavior,RepairDockUpdate,RailedTransportContain,SalvageCrateCollide,SabotagePowerPlantCrateCollide,SabotageSupplyDropzoneCrateCollide,SabotageSuperweaponCrateCollide,SabotageCommandCenterCrateCollide,SabotageSupplyCenterCrateCollide,SabotageMilitaryFactoryCrateCollide,SabotageFakeBuildingCrateCollide,SabotageInternetCenterCrateCollide,SlavedUpdate,SlowDeathBehavior,SpawnBehavior,SpecialAbility,SpecialAbilityUpdate,SpectreGunshipUpdate,SpyVisionUpdate,SpyVisionSpecialPower,StealthDetectorUpdate,StealthUpdate,StealthUpgrade,StickyBombUpdate,StructureCollapseUpdate,StructureToppleUpdate,SupplyCenterDockUpdate,SupplyTruckAIUpdate,TensileFormationUpdate,TunnelContain,TransportContain,TransitionDamageFX,ToppleUpdate,UndeadBody,VeterancyCrateCollide,WanderAIUpdate,WeaponBonusUpgrade,WeaponBonusUpdate,WeaponSetUpgrade,WorkerAIUpdate|} ModuleTag_${2:01}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;


            case 'WeaponSet':
                completionItems.push(createCompletionItem('WeaponSet', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'WeaponSet',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert WeaponSet',
                    insertText: 'WeaponSet\n\tConditions = ${1|NONE,PLAYER_UPGRADE,MINE_CLEARING_DETAIL,CRATEUPGRADE_ONE,CRATEUPGRADE_TWO,WEAPON_RIDER1,WEAPON_RIDER2,WEAPON_RIDER3,WEAPON_RIDER4,WEAPON_RIDER5,WEAPON_RIDER6,WEAPON_RIDER7,WEAPON_RIDER8,SECOND_LIFE,CRATE_UPGRADE_ONE,CRATE_UPGRADE_TWO|}\n\tWeapon = ${2|PRIMARY,SECONDARY,TERTIARY|} ${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'ArmorSet':
                completionItems.push(createCompletionItem('ArmorSet', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'ArmorSet',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert ArmorSet',
                    insertText: 'ArmorSet\n\tConditions = ${1|NONE,PLAYER_UPGRADE,MINE_CLEARING_DETAIL,CRATEUPGRADE_ONE,CRATEUPGRADE_TWO,WEAPON_RIDER1,WEAPON_RIDER2,WEAPON_RIDER3,WEAPON_RIDER4,WEAPON_RIDER5,WEAPON_RIDER6,WEAPON_RIDER7,WEAPON_RIDER8,SECOND_LIFE,CRATE_UPGRADE_ONE,CRATE_UPGRADE_TWO|}\n\tArmor = ${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Prerequisite':
                completionItems.push(createCompletionItem('Prerequisite', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Prerequisite',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Prerequisite',
                    insertText: 'Prerequisite\n\t${1|Object,Science|} = ${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'UnitSpecificSounds':
                completionItems.push(createCompletionItem('UnitSpecificSounds', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'UnitSpecificSounds',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Unit Specific Sounds',
                    insertText: 'UnitSpecificSounds\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // OCL Snippets
            case 'ObjectCreationList':
                completionItems.push(createCompletionItem('ObjectCreationList', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'ObjectCreationList',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Object Creation List',
                    insertText: 'ObjectCreationList ${1:OCLName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'CreateDebris':
                completionItems.push(createCompletionItem('CreateDebris', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'CreateDebris',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Create Debris',
                    insertText: 'CreateDebris\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'CreateObject':
                completionItems.push(createCompletionItem('CreateObject', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'CreateObject',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Create Object',
                    insertText: 'CreateObject\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'FireWeapon':
                completionItems.push(createCompletionItem('FireWeapon', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'FireWeapon',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Fire Weapon',
                    insertText: 'FireWeapon\n\tWeapon = ${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'DeliveryPayload':
                completionItems.push(createCompletionItem('DeliveryPayload', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'DeliveryPayload',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Delivery Payload',
                    insertText: 'DeliveryPayload\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'DeliveryDecal':
                completionItems.push(createCompletionItem('DeliveryDecal', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'DeliveryDecal',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Delivery Decal',
                    insertText: 'DeliveryDecal\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'ApplyRandomForce':
                completionItems.push(createCompletionItem('ApplyRandomForce', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'ApplyRandomForce',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Apply Random Force',
                    insertText: 'ApplyRandomForce\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Attack':
                completionItems.push(createCompletionItem('Attack', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Attack',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Attack',
                    insertText: 'Attack\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Particle System Snippets
            case 'ParticleSystem':
                completionItems.push(createCompletionItem('ParticleSystem', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'ParticleSystem',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Particle System',
                    insertText: 'ParticleSystem ${1:ParticleSystemName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // PlayerTemplate Snippets
            case 'PlayerTemplate':
                completionItems.push(createCompletionItem('PlayerTemplate', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'PlayerTemplate',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Player Template',
                    insertText: 'PlayerTemplate ${1|FactionUSA,FactionChina,FactionGLA,FactionCivilian,FactionObserver,FactionAmericaSuperWeaponGeneral,FactionAmericaLaserGeneral,FactionAmericaAirforceGeneral,FactionChinaTankGeneral,FactionChinaNukeGeneral,FactionChinaInfantryGeneral,FactionGLAToxinGeneral,FactionGLADemolitionGeneral,FactionGLAStealthGeneral,FactionBossGeneral|}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Rank Snippets
            case 'Rank':
                completionItems.push(createCompletionItem('Rank', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Rank',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Rank',
                    insertText: 'Rank ${1:Rank} ${2|1,2,3,4,5,6,7,8|}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            // Upgrade Snippets
            case 'Upgrade':
                completionItems.push(createCompletionItem('Upgrade', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push({
                    label: 'Upgrade',
                    kind: CompletionItemKind.Property,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Upgrade',
                    insertText: 'Upgrade ${1:UpgradeName}\n\t${0:}\nEnd',
                    documentation: `Snippet: ${label}`
                })
                break;

            default:
                completionItems.push(createCompletionItem(label, CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;
        }
    }

    // Process rule candidates (snippets, templates)
    // for (const [ruleIndex, candidate] of candidates.rules) {
    //     const ruleName = parser.ruleNames[ruleIndex];

    //     completionItems.push({
    //         label: ruleName,
    //         kind: CompletionItemKind.Property,
    //         data: ruleIndex,
    //         documentation: `Rule: ${ruleName}`,
    //     });
    // }

    return completionItems;
}

function createCompletionItem(label: string, kind: CompletionItemKind, data: any, documentation: string): CompletionItem {
    return {
        label: label,
        kind: kind,
        data: data,
        documentation: documentation
    }
}

export function findContextAtPosition(tree: ParserRuleContext, position: number): ParserRuleContext | null {
    if (!tree || tree.start === null || tree.stop === null) {
        return null;
    }

    // console.log(`Start: ${tree.start.start}, End: ${tree.stop.stop}, Position: ${position}`)

    const start = tree.start.start;
    const stop = tree.stop.stop + 1;

    if (position < start || position > stop) {
        // console.log('out of range')
        return null;
    }

    // If the node covers the position, check its children
    for (let i = 0; i < tree.getChildCount(); i++) {
        const child = tree.getChild(i);

        if (child instanceof ParserRuleContext) {
            const result = findContextAtPosition(child, position);
            if (result !== null) {
                return result;
            }
        }
    }

    // If no children cover the position, return this node
    return tree;
}

export function getContextSpecificCompletions(ruleName: string): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    console.log(`Rules: ${ruleName}`)

    //TODO: Add retrievels here
    switch (ruleName) {
        case 'audioevent_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.audioEvent))
            completionItems.push(...getCompletionItemsFromRBTree(list.customAudioEvent))
            break;

        case 'armor_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.definedArmor))
            completionItems.push(...getCompletionItemsFromRBTree(list.customArmor))
            break;

        case 'commandbutton_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.commandButtons))
            completionItems.push(...getCompletionItemsFromRBTree(list.customCommandButtons))
            break;

        case 'commandSet_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.commandSets))
            completionItems.push(...getCompletionItemsFromRBTree(list.customCommandSets))
            break;

        case 'damagefx_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.definedDamageFX))
            completionItems.push(...getCompletionItemsFromRBTree(list.customDamageFX))
            break;


        case 'dialogevent_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.dialogEvent))
            completionItems.push(...getCompletionItemsFromRBTree(list.customDialogEvent))
            break;

        case 'fxlist_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.fxLists))
            completionItems.push(...getCompletionItemsFromRBTree(list.customFXLists))
            break;

        case 'mappedimage_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.mappedImages))
            completionItems.push(...getCompletionItemsFromRBTree(list.customMappedImages))
            break;

        case 'object_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.objects))
            completionItems.push(...getCompletionItemsFromRBTree(list.customObjects))
            break;

        case 'ocl_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.ocls))
            completionItems.push(...getCompletionItemsFromRBTree(list.customOCLs))
            break;

        case 'locomotor_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.definedLocomotors))
            completionItems.push(...getCompletionItemsFromRBTree(list.customLocomotor))
            break;

        case 'science_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.science))
            completionItems.push(...getCompletionItemsFromRBTree(list.customScience))
            break;

        case 'specialpower_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.specialPower))
            completionItems.push(...getCompletionItemsFromRBTree(list.customSpecialPower))
            break;

        case 'rand_value':
            completionItems.push({
                label: 'Random Value Distribution',
                kind: CompletionItemKind.Property,
                insertTextFormat: InsertTextFormat.Snippet,
                detail: 'Insert rand_value',
                insertText: '${1:0} ${2:0} ${3|CONSTANT,UNIFORM,GAUSSIAN,TRIANGULAR,LOW_BIAS,HIGH_BIAS|}',
                documentation: `Snippet: Random Value Distribution}`
            })
            break;

        case 'coord3D':
            completionItems.push({
                label: '3D Coordinates',
                kind: CompletionItemKind.Property,
                insertTextFormat: InsertTextFormat.Snippet,
                detail: 'Insert X: Y: & Z:',
                insertText: 'X:${1:0} Y:${2:0} Z:${0:0}',
                documentation: `Snippet: 3D Coordinates`
            })
            break;

        case 'particlesystem_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.particleSystem))
            completionItems.push(...getCompletionItemsFromRBTree(list.customParticleSystem))
            break;

        case 'upgrade_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.upgrades));
            completionItems.push(...getCompletionItemsFromRBTree(list.customUpgrades));
            break;

        case 'weapon_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.weapons));
            completionItems.push(...getCompletionItemsFromRBTree(list.customWeapons));
            break;

        // Add more cases for different contexts
        default:
            break;
    }

    return completionItems;
}

function getCompletionItemsFromRBTree(tree: RBTree<string>): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    if (tree.size === 0) {
        return completionItems; // Return empty array if tree is empty
    }

    // Proceed with traversal
    tree.each((value: string) => {
        completionItems.push({
            label: value,
            kind: CompletionItemKind.Field,
            data: value,
            documentation: `Value: ${value}`,
        });
    });

    return completionItems;
}

function getCompletionItemsFromStringArray(stringArray: string[]): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    stringArray.forEach(string => {
        completionItems.push({
            label: string,
            kind: CompletionItemKind.Field,
            data: string,
            documentation: `Value: ${string}`,
        });
    });

    return completionItems;
}