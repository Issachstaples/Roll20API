let spellRoll = spellRoll || {};

on("chat:message", function (msg) {
	// Exit if not an api command...
	if (msg.type != "api") return;
	
	// Get the api command...
	let command = msg.content.split(" ", 1)[0];
	if (command === "!spellRoll") spellRoll.Process(msg);
});

spellRoll.Process = function(msg, who){
	msg = processInlineRolls(msg)
    let i = msg.split(" ");
    let character = getObj(graphic, i[1]);
    let characterId = character.get("represents");
    let diceRoll = ParseInt(i[2], 10);
    let rollModifier = ParseInt(i[3], 10);
    let spellWasCast = ParseInt(i[4], 10);
    /* i[1] is our player's token, i[2] is our spell roll, i[3] is our spell burn i[4] has to be our spell name written withour spaces*/
    let totalRoll = diceRoll + rollModifier;
    //sendChat("character|"+characterId, "I cast my spell and roll" +i[2]+ "I willingliy spellburn" +i[3]+ "for a total roll of" +totalRoll);
    /* now find the spell that was cast spellWasCast and compare it to our Spells */
}
/* end of spells from core rules */
/*fuction for inline rolls processing in msg */
function processInlinerolls(msg) {
    if (_.has(msg, 'inlinerolls')) {
        return _.chain(msg.inlinerolls)
                .reduce(function(previous, current, index) {
                    previous['$[[' + index + ']]'] = current.results.total || 0;
                    return previous;
                },{})
                .reduce(function(previous, current, index) {
                    return previous.replace(index, current);
                }, msg.content)
                .value();
    } else {
        return msg.content;
    }
}   
/*let msg;
let i[1, 2, 3, 4];
let character;
let characterId;
let diceRoll;
let rollModifier;
let spellWasCast;
let totalRoll; */

function range(x, min, max) {
    return x-1 > min && x> max+1;
}

const animalSummoning = {
    "Name": "Animal Summoning",
    "Manifest": "Manifestation Roll 1d4: (1) an egg shimmers into existence, then hatches into the animal summoned; (2) a flash of dark clouds and the animal appears; (3) the animal’s skeleton appears first, then organs appear, then muscles knit them together, then skin grows, and the animal appears; (4) animal erupts from the ground fully formed",
    "range1": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + misfire + patron taint, 1-2 corruption gained, 3 patron taint (or corruption if no patron),4+) misfire.",
    "range2to11": "lost, spell failure.",
    "range12to13": "The caster summons one mundane animal of 1 HD or less. The animal remains for up to 1 hour, though it hungers, thirsts, and rests as normal. The animal obeys the caster’s commands within normal bounds – suicidal commands or those contrary to its nature (e.g., ordering a rabbit to consume meat) have a 50% chance of releasing the animal from service, in which case it returns from whence it came. Due to the nature of the summoning, the caster cannot directly harm the creature summoned.",
    "range14to17": "The caster summons one mundane animal of up to 2 HD, or two animals of 1 HD or less. The animals remain for up to 1 hour, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands within normal bounds – suicidal commands or those contrary to its nature (e.g., ordering a rabbit to consume meat) have a 50% chance of releasing the animal from service, in which case it returns from whence it came. Due to the nature of the summoning, the caster cannot directly harm the creature summoned.",
    "range18to19": "The caster summons one mundane animal of up to 2 HD, or two animals of 1 HD or less. The animals remain for up to 2 hours, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands within normal bounds – suicidal commands or those contrary to its nature (e.g., ordering a rabbit to consume meat) have a 50% chance of releasing the animal from service, in which case it returns from whence it came. Due to the nature of the summoning, the caster cannot directly harm the creature summoned.",
    "range20to23": "The caster summons one mundane animal of up to 4 HD, two animals of 2 HD, or up to four animals of 1 HD or less. The animals remain for up to 2 hours, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands within normal bounds – suicidal commands or those contrary to its nature (e.g., ordering a rabbit to consume meat) have a 25% chance of releasing the animal from service, in which case it returns from whence it came. Due to the nature of the summoning, the caster cannot di- rectly harm the creature summoned.",
    "range24to27": "The caster summons one mundane animal of up to 8 HD, two animals of 4 HD, four animals of 2 HD, or up to eight animals of 1 HD or less. The animals remain for up to 2 hours, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands within normal bounds – suicidal commands or those contrary to their nature (e.g., ordering a rabbit to consume meat) have a 25% chance of releasing the animals from service, in which case they return to whence they came. Due to the nature of the summon-ing, the caster cannot directly harm the animals summoned",
    "range28to29": "The caster summons one mundane animal of up to 8 HD, two animals of 4 HD, four animals of 2 HD, or up to eight animals of 1 HD or less. The animals remain for up to a day, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands within normal bounds – suicidal commands or those contrary to their nature (e.g., ordering a rabbit to consume meat) have a 10% chance of releasing the animals from service, in which case they return to whence they came. Due to the nature of the summon-ing, the caster cannot directly harm the animals summoned.",
    "range30to31": "The caster summons one mundane animal of up to 16 HD, two animals of up to 8 HD, four animals of up to 4 HD, or up to eight animals of 2 HD or less. The animals remain for up to a day, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands within normal bounds – suicidal commands or those contrary to their nature (e.g., ordering a rabbit to consume meat) have a 10% chance of releasing the animals from service, in which case they return to whence they came. Due to the nature of the summoning, the caster cannot directly harm the animals summoned.",
    "range32plus": "The caster summons a large group of mundane animals. This could be a herd of cattle, a pride of lions, a flock of geese, or a pack of wolves. All animals must be of the same type, and the total hit dice must be 100 HD or less. The herd remains for up to a week, though they hunger, thirst, and rest as normal. The animals obey the caster’s commands and even undertake suicidal commands or those contrary to their nature (e.g., ordering a rabbit to consume meat). Due to the nature of the summoning, the caster cannot directly harm the animals summoned."

}
const charmPerson = {
    "Name": "Charm Person",
    "Manifest": "Roll 1d6: (1) flash of light; (2) lulling harmony; (3) black cloud; (4) glittering pixie dust; (5) black beam; (6) moonbeam from above",
    "range1": "lost, spell failure and worse!! Roll 1d6 modified by Luck: (0 or less) corruption + misfire + patron taint; (1-2) corruption; (3) patron taint (or corruption if no patron); (4+) misfire ",
    "range2to11": "lost, spell failure.",
    "range12to13": "A single target must make a Will save or be dazed for 1d4 rounds. Dazed targets can move at half speed but can perform no other actions.",
    "range14to17": "A single target must make a Will save or fall under the caster’s complete control, as if it were his friend. However, the target will not perform actions that are suicidal or which a devoted friend would not other-wise perform. Unfortunately, the target’s willpower must be forcibly subverted for the caster to exercisecontrol, so it is but a shell of its former self, operating at a -2 penalty to all rolls, saves, checks, and ability scores while under the wizard’s control. The target receives another save to break the charm according to its original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10-11 = two weeks; Int 12-15= one week; Int 16-17 = three days; Int 18+ = next day. While affected by the spell, the target is marked by a sign of the caster’s control. Roll 1d4: (1) odd facial tic; (2) deep bags under eyes; (3) posture and facial expressions resemble caster; (4) hair stands straight up.",
    "range18to19": "A single target must make a Will save or fall under the caster’s complete control, as if it were his friend. However, the target will not perform actions that are suicidal or which a devoted friend would not other-wise perform. The target is able to operate at full normal functionality while charmed. The target receives another save to break the charm ac-cording to its original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10-11 = two weeks; Int 12-15= one week; Int 16-17 = three days; Int 18+ = next day. While affected by the spell, the target is marked by a sign of the caster’s control, and its posture and facial expressions subtly change to resemble the caster’s.",
    "range20to23": "The wizard can target a number of creatures equal to his caster level. Each target must make a Will save or fall under the caster’s complete control, as if it were his friend. However, the target will not per-form actions that are suicidal or which a devoted friend would not otherwise perform. The target is able to operate at full normal func- tionality while charmed. The target receives another save to break the charm according to its original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10- 11 = two weeks; Int 12-15= one week; Int 16-17 = three days; Int 18+ = next day.",
    "range24to27": "The caster can target a number of creatures equal to 1d6 + caster level. Each target must make a Will saveor fall under the caster’s complete control, as if it were his friend. However, the target will not performactions that are suicidal or which a devoted friend would not otherwise perform. The target is able to operate at full normal functionality while charmed. The target receives another save to break the charm according to its original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10-11 = two weeks; Int 12-15= one week; Int 16-17 = three days; Int 18+ = next day. ",
    "range28to29": "The caster can target a number of creatures equal to 2d6 + caster level. Each target must make a Will save or fall under the caster’s complete control, as if it were his friend. However, the target will not perform actions that are suicidal or which a devoted friend would not otherwise perform. The target is able to operate at full normal functionality while charmed. The target receives another save to break the charm according to its original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10-11 = two weeks; Int 12-15= one week; Int 16-17 = three days; Int 18+ = next day ",
    "range30to31": "The caster can target a number of creatures equal to 3d6 + caster level. Targets of equal to or less HD than the caster do not receive a save. Those with greater HD than the caster must make a Will save or fall under the wizard’s complete control, as if it were his friend. However, the target will not perform actions that are suicidal or which a devoted friend would not otherwise perform. The target is able to operate at full normal functionality while charmed. The target receives another save to break the charm according to its original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10-11 = two weeks; Int 12-15= one week; Int 16-17 = three days; Int 18+ = next day ",
    "range32plus": "The caster can influence the emotions of large groups of people, including crowds of public spectators or armies of angry warriors. The caster can attempt to charm up to 100 people at once, as long as they are within his line of sight – there is no effective range limit, and the targets need not be grouped together (e.g., if the wizard is using scrying means to observe multiple armies, he can target 20 people from each army). Targets of equal to or less HD than the caster do not receive a save. Those with greater HD than the caster receive a Will save. Failure indicates the targets fall under the caster’s complete control and consider him their close friend. The targets receive another save to break the charm according to their original Intelligence, as follows: Int 3-6 = one month; Int 7-9 = three weeks; Int 10-11 = two weeks; Int 12- 15= one week; Int 16-17 = three days; Int 18+ = next day."
}
const cantrip = {
    "Name": "Catrip",
    "Manifest": "Varies.",
    "range1": "Spell lost, Spell Failure, Misfire.",
    "range2to11": "Spell lost, Spell Failure.",
    "range12to13": "The caster creates a simple visual effect at a distance of up to 20’ per caster level. For example, a flash of light, dancing lights, a ray of moonlight, or a patch of darkness",
    "range14to17": "The caster creates a simple visual effect at a distance of up to 20’ per caster level. For example, a flash of light, dancing lights, a ray of moonlight, or a patch of darkness. OR the caster can create a similar auditory effect at the same distance.",
    "range18to19": "The caster can choose between a Viual, Auditory or kninetic effect at a distance of up to 20 feet per caster level.",
    "range20to23": "The Caster can create an energy effect at a range of up to 20' per caster level inflicting 1d3 damage.",
    "range24to27": "the caster can create any Two effects from Visual, Auditory, Kinetic, and energy and combine them into a combined effect at a range of up to 20 feet per caster level.",
    "range28to30": "The caster can create any Three effects from Visual, Auditory, Kinetic, and energy and combine them into a combined effect at a range of up to 20 feet per caster level.",

}
let resultOutput = ["error", "error", "error"];
function castAnimalSummoning(){
  let x = totalRoll;
     if (x = 1){let resultOutput = [animalSummoning.Name, "n/a", animalSummoning.range1];}
     if (range(x, 2, 11)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range2to11];}
     if (range(x, 12, 13)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range12to13];}
     if (range(x, 14, 17)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range14to17];}
     if (range(x, 18, 19)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range18to19];}
     if (range(x, 20, 23)){let resultoutput = [animalSummining.Name, animalSummoning.Manifest, animalSummoning.range20to23];}
     if (range(x, 24, 27)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range24to27];}
     if (range(x, 28, 29)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range28to29];}
     if (range(x, 30, 31)){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range30to31];}
     if (x >= 32){let resultOutput = [animalSummoning.Name, animalSummoning.Manifest, animalSummoning.range32plus];}
}
//function = castCharmPerson(){}
//function = castCantrip(){}

// check spell
if (spellWasCast = "animalSummoning"){castAnimalSummoning();}
// send chats
//sendChat("character|"+characterId, "I cast my spell " +resultOutput.pop(0)+ "and roll" +i[2]+ "I willingliy spellburn" +i[3]+ "for a total roll of" +totalRoll +resultOutput.pop(1)+ " " +resultOutput.pop(2));
sendChat("character|"+characterId, `I cast my spell ${resultOutput.pop(0)} and roll ${i[2]} I willingly spellburn ${i[3]} for a total of ${totalRoll}.`);
