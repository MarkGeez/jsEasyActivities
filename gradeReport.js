function getLetterGrade(score){
    if(score > 90){
        return "A"
    }else if(score >75){
        return "B"
    }else if(score >= 60){
        return "C";
    }else if(score > 48){
        return "D";
    }else{
        return "E";
    }
} //should return "A", "B", "C", "D", or "F" based on the score.

function hasPassed(score){
    if(score >= 60){
        return true
    }else{
        return false
    }
} //should return true when the score is 60 or higher.

function getFeedback(grade){
    if(grade === "A"){
        return "Excellent work"
    }else if(grade === "B"){
        return "Good job"
    }else if(grade === "C" || grade === "D"){
        return "You passed"
    }else{
        return "Keep Practicing"

    }
   
    
} 

function createGradeReport(name, score){
    const result = getLetterGrade(score);
    

    return{
        "name" : name,
        "score" : score,
        "grade" : result,
        "passed" : hasPassed(score),
        "feedaback" : getFeedback(result)
    }

} //should return one object with name, score, grade, passed, and feedback.

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
