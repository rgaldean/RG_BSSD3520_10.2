function walker({name}) {
    return {
       walk: () => {
            console.log(`${name} walked`);
        } 
    }
}

function swimmer({name}) {
    return {
       swim: () => {
            return`${name} swam`;
        } 
    }
}


//action. think 'is a' relationship. griffon is a flyer
function flyer({name}) {
    return {
       fly: () => {
            return`${name} flew`;
        } 
    }
}

function eater({name,food}) {
    return {
       eat: () => {
           if(food == undefined){
               return "Creature unable to eat.";
           }
        
        } 
    }
}


function baseCreatureCreator(name, food){
    const state = {
        name: name,
        food: food
    }
    return {
        ...state,
        ...eater(state)
    }
}

function creatureWSCreator(state) {
    return {
        ...state,
        ...walker(state),
        ...swimmer(state),
    
    }
}

function creatureWFCreator(state) {
    return {
        ...state,
        ...walker(state),
        ...flyer(state)
    }
}
    
function creatureWSFCreator(state) {
    return {
        ...creatureWSCreator(state),
        ...flyer(state)
    }
}