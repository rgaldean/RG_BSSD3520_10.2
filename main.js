/*
    Homework Due Mon. before 10 PM (complete remaining tasks not done in class)
    
    xTask 1: Make 3 more behaviors: walk, swim, eat
    xTask 2: Make a creature who walks and swims
    xTask 3: Make a creature who walks and flys
    xTask 4: Make both creatures eat
    xTask 5: Make a walk, swim, eat, fly creature
    xTask 6: Let the user enter a name for the creature
    xTask 7: Let the user select the type of creature.
    xTask 8: Print the creatures name then call every function it can perform and print output to a div.
    
    xTask 9: Move every factory into a new creature.js file
    xTask 10: main.js only uses factory functions and gets user input
    XTask 11: Make a creature who only eats and add it to the selector.
    XTask 12: Check if a food is set before trying to eat and say 'Creature unable to eat.' if not food set.
    
    Some references:
    Constructors vs Factories:
    https://www.youtube.com/watch?v=23AOrSN-wmI
    
    Composition (same video posted on brightspace Tues):
    https://www.youtube.com/watch?v=nnwD5Lwwqdo&t=308s
    
    More complex example of this using state:
    https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6
*/


document.addEventListener('DOMContentLoaded', () => {
 //use new object
    const possibleTypes = ['WalkerSwimmer','WalkerFlyer','WalkerFlyerSwimmer','tummyEater'];
    
    const typeSelector = document.getElementById('type');
    for(const type of possibleTypes){
        const opt = document.createElement('option')
        opt.innerHTML = type
        typeSelector.appendChild(opt);
    }
    
    document.getElementById('submit').addEventListener('click', ()=> {
        const nameEntry = document.getElementById('entry').value;
        typeSelector.value
        
        let carl;
        if (typeSelector.value === 'WalkerSwimmer'){
            carl = creatureWSCreator (baseCreatureCreator(nameEntry));
        } else if(typeSelector.value === 'WalkerFlyer'){
            carl = creatureWFCreator(baseCreatureCreator(nameEntry,'Creature eats humans'));   
        } else if(typeSelector.value === 'tummyEater'){
            carl = baseCreatureCreator(nameEntry,'I only eat watermelon');    
        } else {
            carl = creatureWSFCreator(baseCreatureCreator(nameEntry));
        }
        
        
        const{name, food, ...funcs} = carl;
        
        let str = '';
        
        for (const func of Object.values(funcs)){
            console.log(func);
            str+= func() + '<br/>';
        }
         
        
        document.getElementById('message').innerHTML = str;

    
    });

});