function battleHorde(zombies, humans) {
    zombies = zombies.split('').map(Number);
    humans = humans.split('').map(Number);
    let z = 0;
    let h = 0;
    for (let i = 0; i < zombies.length; i++) {
        let zombiePower = zombies[i] + z;
        let humanPower = humans[i] + h;
        if (zombiePower > humanPower) {
            z = zombiePower - humanPower;
            h = 0;
        } else if (humanPower > zombiePower) {
            h = humanPower - zombiePower;
            z = 0;
        } else {
            z = 0;
            h = 0;
        }
    }
    
    if (z > 0) {
        return `${z}z`;
    } else if (h > 0) {
        return `${h}h`;
    }
    return 'x';
}

const zombies1 = '242';
const humans1 = '334';
const result1 = battleHorde(zombies1, humans1);  // -> "2h"

const zombies2 = '444';
const humans2 = '282';
const result2 = battleHorde(zombies2, humans2);  // -> "x"