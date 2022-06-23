const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let damage = Math.floor(Math.random()*(dragon.strength - 15 + 1) + 15);
  return damage;
}


const warriorDamageCaused = () => {
  let damage = Math.floor((Math.random()*(warrior.strength*warrior.weaponDmg - warrior.strength + 1)) + warrior.strength);
  return damage;
}

const mageDamage = () => {
  let mana = 0;
  let dano = '';
 if (mage.mana < 15) {
   mana = 0;
   dano = 'Não possui Mana suficiente';
 } else {
   dano = Math.floor(Math.random()*(mage.intelligence*2 - mage.intelligence +1) + mage.intelligence);
   mana = 15;
 }
 let obj = {dano, mana}
 return obj ;
}

const gameActions = {
  
  warriorTurn: (func) => {
    warrior.damage = func();
    dragon.healthPoints -= func();

  }, 

  mageTurn: (func) => {
    const dmg = func();
    mage.mana = dmg.mana;
    mage.damage = dmg.dano;
    dragon.healthPoints -= dmg.dano;
  },

  dragonTurn: (func) => {
    const dmg = func();
    mage.healthPoints -= dmg;
    warrior.healthPoints -= dmg;
    dragon.damage = dmg;
  },

  members: () => battleMembers

};

gameActions.warriorTurn(warriorDamageCaused);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.members());

 