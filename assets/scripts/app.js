'use strict';
/* taking user input for maximum life
checking if its a valid number */
let health = parseInt(prompt('enter max health of your player', '100'));
if (!health || health < 0) {
  health = 100;
  alert('invalid input \nmax life is 100');
}
adjustHealthBars(health);
let life = 1; //bonus life counter
const damage = health / 10;
const heal = health / 15;

// variable to maintain log
let history = [];
let playerAttack = [];
let monsterAttack = [];
let operation = [];
let monsterDamage;
let playerDamage;

function attack() {
  playerAttack.push(Math.floor(dealMonsterDamage(damage)));
  monsterAttack.push(Math.floor(dealPlayerDamage(damage)));
  operation.push('ATTACK');
  logic();
}

function strongAttack() {
  playerAttack.push(Math.floor(dealMonsterDamage(damage * 2)));
  monsterAttack.push(Math.floor(dealPlayerDamage(damage * 2)));
  operation.push('STRONG ATTACK');
  logic();
}

function healing() {
  playerHealthBar.value < health / 2
    ? increasePlayerHealth(heal)
    : alert('healing not allowed \npast half life !');
  operation.push('HEAL');
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
    if (!life) removeBonusLife();
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

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click', log);
