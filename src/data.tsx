import {v4 as uuidv4} from "uuid";

export const cards = [
    {
        taste: 'фуа-гра',
        portion: 10,
        presents: 1,
        weight: '0,5',
        selected: false,
        id: uuidv4(),
        selectMenu: 'Печень утки разварная с артишоками.',
        productAvailability: false
    },
    {
        taste: 'рыбой',
        portion: 40,
        presents: 2,
        weight: '2',
        selected: false,
        id: uuidv4(),
        selectMenu: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        productAvailability: true
    },
    {
        taste: 'курой',
        portion: 100,
        presents: 5,
        weight: '5',
        selected: false,
        id: uuidv4(),
        selectMenu: 'Филе из цыплят с трюфелями в бульоне.',
        productAvailability: true
    }
]