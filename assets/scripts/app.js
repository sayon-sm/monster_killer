/* taking user input for maximum life
checking if its a valid number */
let health = prompt('enter max health of your player');
if (!health || isNaN(health)) {
  health = 100;
  alert('invalid input \nmax life is 100');
}
adjustHealthBars(health);
let life = 1; //bonus life counter
const damage = health / 10;
const heal = health / 15;

// variable to maintain log
const log = [];
let monsterDamage;
let playerDamage;

function attack() {
  monsterDamage = dealMonsterDamage(damage);
  playerDamage = dealPlayerDamage(damage * 2);
  logic();
  const displayLog = {
    damageToMonster: monsterDamage,
    damageToPlayer: playerDamage,
  };
  log.push(displayLog);
}

function strongAttack() {
  monsterDamage = dealMonsterDamage(damage * 2);
  playerDamage = dealPlayerDamage(damage * 2);
  logic();
  const displayLog = {
    damageToMonster: monsterDamage,
    damageToPlayer: playerDamage,
  };
  log.push(displayLog);
}

function healing() {
  increasePlayerHealth(heal);
}

function loging() {
  console.log(log);
}

function logic() {
  if (playerHealthBar.value === 0 && life > 0) {
    --life;
    alert(`Bonus life saved you !
      your health is at ${health / 5}`);
    setPlayerHealth(health / 5);
    if (life) removeBonusLife();
  }

  if (monsterHealthBar.value === 0 && playerHealthBar.value > 0 && life > 0) {
    alert('PLAYER WON !');
    resetGame(health);
  } else if (
    monsterHealthBar.value > 0 &&
    playerHealthBar.value === 0 &&
    life === 0
  ) {
    alert('MONSTER WON ! \nBetter luck next time.');
    resetGame(health);
  } else if (
    monsterHealthBar.value === 0 &&
    playerHealthBar.value === 0 &&
    life === 0
  ) {
    alert('thats a DRAW !');
    resetGame(health);
  }
}

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click', loging);
