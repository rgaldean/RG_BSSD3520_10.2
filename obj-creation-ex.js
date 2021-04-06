// 3 ways to do the same thing

//object literal
const grif = {
    name:'griffon',
    fly: () => {
        console.log(`${name} flew`);
    }
}
grif.fly();

//object constructor
function Creature() {
    this.name = 'griffon',
    this.fly = () => {
        console.log(`${name} flew`);
    }
}
const griff = new Creature;
griff.fly();

//object factory
function creatureCreator() {
    return {
        name:'griffon',
        fly: () => {
            console.log(`${name} flew`);
        }
    }
}

const griffo = creatureCreator();
griffo.fly();


//copy an object with rest operator during destructuring.
//griffo coul dbe grif, or griff and work the same.
const {...secondGrif} = griffo;
secondGrif.name = 'fred';
console.log(secondGrif.name)
console.log(griffo.name)
