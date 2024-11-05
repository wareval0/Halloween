function createMagicPotion(potions, target) {
    const complement = {};
    for (let i = 0; i < potions.length; i++) {
        const currentElement = potions[i];
        const difference = target - currentElement;
        if (complement[currentElement] !== undefined) {
            return [complement[currentElement], i];
        }
        complement[difference] = i;
    }
    return undefined
}

const potions1 = [4, 5, 6, 2]
const goal1 = 8
createMagicPotion(potions1, goal1) // [2, 3]

const potions2 = [1, 2, 3, 4]
const goal2 = 9
createMagicPotion(potions2, goal2) // undefined

const potions3 = [1, 2, 3, 4]
const goal3 = 5
createMagicPotion(potions3, goal3) // [1, 2]