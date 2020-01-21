class Fighter {
    constructor(name, damage, hp, strength, agility) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.strength = strength;
        this.agility = agility;
        this.losses = 0;
        this.wins = 0;
        this.getName = function() {
            return this.name;
        };
        this.getDamage = function() {
            return this.damage;
        };
        this.getHealth = function() {
            return this.hp;
        };
        this.getStrength = function() {
            return this.strength;
        };
        this.getAgility = function() {
            return this.agility;
        };
    }
    heal(hp) {
        this.hp = this.hp + hp;
    }

    attack(defender) {
        let attackSuccess = 1 - (defender.getStrength() + defender.getAgility()) / 100;
        if (Math.random() < attackSuccess) {
            defender.dealDamage(this.damage);
            console.log(this.name + ' makes ' + this.damage + ' damage to ' + defender.getName());
        } else {
            console.log(defender.getName() + ' attack missed');
        }
    }

    logCombatHistory() {
        console.log('Name: ' + this.name + ', Wins: ' + this.wins + ', Losses: ' + this.loses);
    }
    dealDamage(damag) {
        if (this.hp < damag) {
            this.hp = 0;
        } else {
            this.hp = this.hp - damag;
        }
    }
    addWin() {
        this.wins = this.wins + 1;
    }
    addLoss() {
        this.losses = this.losses + 1;
    }
}

function battle(Fighter1, Fighter2) {
    if (Fighter1.getHealth() === 0) {
        console.log(Fighter1.getName() + ' is dead and can\'t fight');
        return;
    }
    if (Fighter2.getHealth() === 0) {
        console.log(Fighter2.getName() + ' is dead and can\'t fight');
        return;
    }
    while (typeof x === 'undefined') {
        Fighter1.attack(Fighter2);
        if (Fighter2.getHealth() === 0) {
            Fighter1.addWin();
            Fighter2.addLoss();
            console.log(Fighter1.getName() + ' has won!');
            break;
        } else {
            Fighter2.attack(Fighter1);
            if (Fighter1.getHealth() === 0) {
                Fighter2.addWin();
                Fighter1.addLoss();
                console.log(Fighter2.getName() + ' has won!');
                break;
            }
        }
    }
}
const Maximus = new Fighter('Maximus', 20, 100, 50, 15);
const Commodus = new Fighter('Commodus', 25, 90, 25, 20);
battle(Maximus,Commodus);