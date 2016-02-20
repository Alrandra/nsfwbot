var brawl = [];

brawl.push(
    {
        id: 0,
        title: "Punch",
        description: "A solid punch!",
        damageHP: 1,
        damageLust: 0,
        requirements: [{strength: 1},{ agility: 1}, {dexterity: 1}]
    });

brawl.push(
    {
        id: 1,
        title: "Kick",
        description: "A swift kick!",
        damageHP: "currentFighters[currentFight.whoseturn].strength - currentFighters[(currentFight.whoseturn == 0 ? 1 : 0)].toughness", //(User Strength's - Target's Toughness)
        requirements: [{strength: 1},{ agility: 1}, {flexibility : 1}]
    });

brawl.push(
    {
            id: 1,
            title: "Impossible attack",
            description: "For testing purposes",
            damageHP: "0",
            requirements: [{strength: 4, agility: 2},{strength: 5, flexibility: 9}]
    });

module.exports = brawl;