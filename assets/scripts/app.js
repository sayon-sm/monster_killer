const health = prompt('enter max health of your player');
adjustHealthBars(health);

const damage = 20;
const heal = 10;
const log = [];

let monsterDamage;
let playerDamage;

function attack() {
  monsterDamage = dealMonsterDamage(damage);
  playerDamage = dealPlayerDamage(damage * 1.5);
  const displayLog = {
    damageToMonster: monsterDamage,
    damageToPlayer: playerDamage,
  };
  log.push(displayLog);
}

function strongAttack() {
  monsterDamage = dealMonsterDamage(damage * 3);
  playerDamage = dealPlayerDamage(damage * 1.5);
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

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click', loging);
