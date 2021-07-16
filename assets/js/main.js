const user = {
    firstname: 'Salam',
    lastname: 'Qədirzadə',
    age: 55,
    address: {
        city: {
            name: 'Baku',
            lang: '41',
            long: '40'
        },
        street: 'M. Hadi 9, mənzil 77, sol qapı',
        postalCode: 'AZ1000',
        district: 'Khatai district'
    },
    getFullName: function () {
        // return this.firstname + " " + this.lastname;
        return `${this.firstname} ${this.lastname}`;
    }
}

// const randomName = 'address';

// console.log(user.lastname);
// console.log(user[randomName]['city']['name']);

// Object.keys(user).forEach((userProperty) => {
//     if (typeof user[userProperty] === 'string' || typeof user[userProperty] === 'number') {
//         console.log(userProperty, '------', user[userProperty])
//     }
// });

// Object.values(user).forEach(userValue => {
//     console.log(userValue);
// });

// Object.entries(user).forEach(entry => {
//     if (typeof entry[1] === 'object') {
//         Object.entries(entry[1]).forEach(innerEntry => {
//             if (typeof innerEntry[1] === 'object') {
//                 console.log(innerEntry[1]);
//             }
//         });
//     }
// });


// function changeUserAge(user) {
//     // const userCopy = { ...user };
//     // const userCopy = JSON.parse(JSON.stringify(user));
//     const userCopy = Object.assign({}, user);
//     userCopy.age = 30;
//     return userCopy;
// }

// console.log(changeUserAge(user));
// console.log(user);

// function Person(firstname, lastname, birthdate) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthdate = birthdate;
// }


// const user1 = new Person('Ilham', 'Baghirov', '16-03-2001');
// console.log(user1);

// class Human {
//     constructor(firstname, lastname, birthdate) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.birthdate = birthdate;
//     }

//     getfullname() {
//         return `${this.firstname} ${this.lastname}`;
//     }

//     static greet() {
//         return 'hi i am a human';
//     }
// }

// class Man extends Human {
//     constructor(firstname, lastname, birthdate, height, weight, nation) {
//         super(firstname, lastname, birthdate);
//         this.height = height;
//         this.weight = weight;
//         this.nation = nation;
//     }
// }

// const human = new Human('Baycan', 'Salmanoghlu', '27-06-1996');
// const man = new Man('Agil', 'Ata', '26-01-1999', '180', '98.3', 'Azərbaycanlı');

// console.log(man.getfullname());
// console.log(human.getfullname());
// console.log(human);

// console.log(Human.greet())


/* TASK - 1 : IMPLEMENT CUSTOMMATH CLASS THAT I CAN USE IT LIKE IN LINE 111 */
// class CustomMath {
//     constructor(number) {
//         this.number = number;
//     }
// }

// const customMath = new CustomMath(5)
// console.log(customMath.add(10).minus(5).multiply(3).divide(2)); // 15


/* TASK - 2 : IMPLEMENT SOMETHING THAT I CAN DO SOME OPERATIONS ON NUMBERS */
// (1).add(5) // 6


/* TASK - 3 : [].customFilter, [].customMap,  */
// [1, 2, 3, 4, 5].filter((value) => value > 3);  // [4,5]
// [1, 2, 3, 4, 5].customFilter((value) => value > 3); // [4,5]

// Array.prototype.customMap = function (cb) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this));
//     }
//     return result;
// };


// const result = [1, 2, 3, 4, 5].customMap((value) => value * 2);
// console.log(result);

// function Person(firstname, lastname, birthdate) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthdate = birthdate;
// }

// function Man(height, weight) {
//     this.height = height;
//     this.weight = weight;
// }

// Man.prototype = new Person('Agil', 'Ata', '26-01-1999');

// const man = new Man('180', '98.3');

// console.log(man);
