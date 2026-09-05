function formatName(firstName, lastName){
    return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay){
    switch(timeOfDay){
        case "morning":
            return "Good " + "morning"
        case "afternoon":
            return "Good " + "morning"
        case "evening":
            return "Good " + "evening"
    }
}


function createGreeting(firstName, lastName, timeOfDay){
    const name = formatName(firstName, lastName)
    const greet = getGreeting(timeOfDay)

    return `${greet}, ${name}`
}

console.log(createGreeting('Noah', 'Kim', 'evening'));

