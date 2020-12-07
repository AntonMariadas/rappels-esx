const character = {
    id: 0,
    firstname : "Jon",
    lastname: "Snow",
    lives: {
        city: "Winterfell"
    }
};

const character2 = {
    id: 1,
    firstname : "Eddard",
    lastname: "Stark",
    lives: {
        city: "Winterfell"
    },
    isAlive: false
}

// Je veux stocker dans une variable firstname et chacune des key/value
const firstname = character.firstname;
const lastname = character.lastname;
const id = character.id;
const city = character.lives.city

// On peut faire la même chose en une seule ligne avec la DESTRUCTURATION
const { id, firstname, lastname } = character;

// Je veux recuperer city
const { id, firstname, lastname, lives : {city} } = character;

// Modifier une value, ou lui donner une value par défaut
const { id: id2, firstname: firstname2, lastname: lastname2, lives :{ city: city2 }, isAlive: isAlives2 = true } = character2
console.log(id2, firstname2, lastname2, city2, isAlive2);

// Clé dynamique - Dynamic key -> Pratique pour mettre un nom de clé variable dans un objet. [dynamicKey]
const dynamicKey = "surname";

const tyrion = {
    id: 1,
    firstname : "Tyrion",
    lastname: "Lannister",
    [dynamicKey]: "himp",
    lives: {
        city: "Kings Landing"
    }
};

// Spread Operator - Ou comment copier un objet rapidement
const gender = "male";

const tyrion2 = {
    ... tyrion,
    lives: {
        city: "Meereen "
    },
    // gender: gender
    gender,
};

// Function default parameter
const sayHello = (name = "Anton") => {
    console.log(`Hello ${name.toUpperCase()}`);
}

sayHello("Fabio");
sayHello(); //"Hello Anton"

// Rest Operator
const add = (...numbers) => {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    console.log(total);
}

add(5, 6);
add(1, 4, 3);
add();








