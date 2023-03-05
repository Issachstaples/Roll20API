// macro !spellroll --@{selected||token_id} --[[1d20+x]] --spellNameCamelCase
//begin script
var spellRoll = spellRoll ||{};
 const registerEventHandlers = () => {
        on('chat:message', handleInput);
    };

function handleInput(msg) {
    if (msg.type !== "api") { // <== tests the msg type to be 'api'
        return;
    }
       let args = msg.content.split(/s+--/);
       if(args.shift() === '!spellRoll') spellRoll(msg, args);
    }

class Spell(){
    constructor(spellname, manifest, result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, miscast, corruption){
        this.spellname = spellname;
        this.manifest = manifest;
        this.result1 = result1;
        this.result2 = result2;
        this.result3 = result3;
        this.result4 = result4;
        this.result5 = result5;
        this.result6 = result6;
        this.result7 = result7;
        this.result8 = result8;
        this.result9 = result9;
        this.result10 = result10;
        this.miscast = miscast;
        this.corruption = corruption;
    }

}
const animalSummoning = new Spell("Animal summoning", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const cantrip = new Spell("Cantrip", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const magicMissile = new Spell("Magic missile", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const charmPerson = new Spell("Charm person", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const chillTouch = new Spell("Chill touch", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const chokingCloud = new Spell("Choking cloud", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const colorSpray = new Spell("Color spray", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const comprehendLanguages = new Spell("Comprehend languages", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const detectMagic = new Spell("Detect magic", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const ekimsMysticalMask = new Spell("Ekim's mystical mask", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const enlarge = new Spell("Enlarge", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const featherFall = new Spell("Feather fall", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const findFamiliar = new Spell("Find familiar", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const flamingHands = new Spell("Flaming hands", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const forceManipulation = new Spell("Force Manipulation", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const invokePatron = new Spell("Invoke Patron", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const magicShield = new Spell("Magic shield", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const mending = new Spell("Mending", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const patronBond = new Spell("Patron bond", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const readMagic = new Spell("Read magic", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const ropework = new Spell("Ropework", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const runicAlphabet = new Spell("Runic alphabet", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const sleep = new Spell("Sleep", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const spiderClimb = new Spell("Spider climb", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const ventriloquism = new Spell("Ventriloquism", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const wardPortal = new Spell("Ward portal", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
/* Level two wizard spells */
const arcaneAffinity = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const detectEvil = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const detectInvisible = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const esp = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const fireResistance = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const forget = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const invisibility = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const invisibleCompanion = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const knock = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const levitate = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const locateObject = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const magicMouth = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const mirrorImage = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const monsterSummoning = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const nythuulsPorcupineCoat = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const phantasm = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const rayOfEnfeeblement = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const scare = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const scorchingRay = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const shatter = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const spiderWeb = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const strength = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const wizardStaff = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
/* level three wizard spells*/
const binding = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const breateLife = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const consultSpirit = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const demonSummoning = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const dispelMagic = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const eldritchHound = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const emirikolsEntropicMalestrom = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const eternalChampion = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const fireball = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const ekimsEntropicMalestrom = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const fly = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const lightningBolt = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const makePotion = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const paralysis = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const planarStep = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const runicAlphabetFey = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const slow = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const swordMagic = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const transference = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const turnToStone = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const waterBreathing = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const writeMagic = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
/* fourth level Wizard spells */
const controlFire = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const controlIce = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const lokerimonsOrderlyAssistance = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const polymorph = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const transmuteEarth = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const wizardSense = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
/* level five Wizard spells */
const hepsojsFecundFungi = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const lokerimonsUnerringHunter = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const magicBulwark = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const mindPurge = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
const replication = new Spell("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
/* end of spells from core rules */
