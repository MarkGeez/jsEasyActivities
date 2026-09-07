function cleanText(text) {
    return text.trim()
}

function capitalize(text) {
   return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

}

function formatDisplayName(firstName, lastName){
    let name1 = capitalize(cleanText(firstName));
    let name2 =  capitalize(cleanText(lastName));

    return `${name1} ${name2}`
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));