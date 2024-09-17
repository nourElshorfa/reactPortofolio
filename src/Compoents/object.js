let user = {
    name: 'kimo',
    age: 20,
    skills: ['html', 'css', 'js'],
    isMarried: true,
    eat:function(meal){
        console.log(`eat ${meal}`);
    }
}

let human = {
    gender: 'male',
    country: 'kenya'
}

let Nour = {
    city:"mokkatam",
    apartment:8881
}
Object.setPrototypeOf(user, human)
Object.setPrototypeOf(Nour, user)

console.log(Nour.age)