function hasMinimumLength(password){
    if(password.length >= 8){
        return true
    }
} //should return true when the password has at least 8 characters.

function hasNumber(password){
    return /\d/.test(password)
} //should return true when the password contains at least one number.

function hasUppercaseLetter(password){
    return /[A-Z]/.test(password)
} //should return true when the password contains at least one uppercase letter.

function getFailedRules(password){
    let failed = []

    if(!hasMinimumLength(password)){
        failed.push("minimum length")
    }

    if(!hasNumber(password)){
        failed.push("number")
    }

    if(!hasUppercaseLetter(password)){
        failed.push("uppercase letter")
    }

    return failed;
    
} //should return an array of missing rule names.

function validatePassword(password){
    let failedRules = getFailedRules(password)

    return{
        "valid": failedRules.length ===0, failedRules
    }
} //should return an object with valid and failedRules.

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));

/*{ valid: false, failedRules: ["minimum length", "number", "uppercase letter"] }
{ valid: true, failedRules: [] }
{ valid: false, failedRules: ["uppercase letter"] }
{ valid: false, failedRules: ["number"] } */