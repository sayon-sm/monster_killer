'use strict';
/* taking user input for maximum life
checking if its a valid number */
let health = parseInt(
  prompt('enter max health of your player, a value more than 10', '100')
);
if (!health || health < 10) {
  health = 100;
  alert('invalid input \nmax life is 100');
}
adjustHealthBars(health);
let life = 1; //bonus life counter
const damage = 5;
const heal = 15;

// variable to maintain log
let history = [];
let playerAttack = [];
let monsterAttack = [];
let operation = [];
let monsterDamage;
let playerDamage;

function attack(msg, n, c = 'yes') {
  switch (c) {
    case 'yes':
      playerAttack.push(Math.floor(dealMonsterDamage(damage * n)));
    default:
      monsterAttack.push(Math.floor(dealPlayerDamage(damage * (n + 0.5))));
      operation.push(msg);
      logic();
  }
}

function healing() {
  if (playerHealthBar.value < health / 2) {
    increasePlayerHealth(heal);
    operation.push('HEAL');
    attack(null, 1, 'no');
  } else {
    alert('healing not allowed \npast half life !');
  }
}

function loging(verdict, operation, monsterDamage, playerDamage) {
  const displayLog = {
    verdict: verdict,
    operation: operation,
    PlayerAttackBy: monsterDamage,
    MonsterAttackBy: playerDamage,
  };
  history.push(displayLog);
}

function log() {
  console.log(history);

  history = [];
  playerAttack = [];
  monsterAttack = [];
  operation = [];
}

function logic() {
  if (playerHealthBar.value === 0 && life > 0) {
    --life;
    alert(`Bonus life saved you !
      your health is at ${health / 5}`);
    setPlayerHealth(health / 5);
    !life ? removeBonusLife() : null;
  } else {
    if (monsterHealthBar.value === 0 && playerHealthBar.value > 0) {
      alert('PLAYER WON !');
      resetGame(health);
      loging('PLAYER WON', operation, playerAttack, monsterAttack);
    } else if (monsterHealthBar.value > 0 && playerHealthBar.value === 0) {
      alert('MONSTER WON ! \nBetter luck next time.');
      resetGame(health);
      loging('MONSTER WON', operation, playerAttack, monsterAttack);
    } else if (monsterHealthBar.value === 0 && playerHealthBar.value === 0) {
      alert('thats a DRAW !');
      resetGame(health);
      loging('DRAW', operation, playerAttack, monsterAttack);
    }
  }
}

attackBtn.addEventListener('click', attack.bind(this, 'ATTACK', 1, 'yes'));
strongAttackBtn.addEventListener(
  'click',
  attack.bind(this, 'STRONG ATTACK', 2, 'yes')
);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click', log);
