function reverseString(string){
    let newString = [];
    for(let x = string.length+1; x >= 0; x--){
        newString.push(string.charAt(x));
    }
    return newString.join("");
}

module.exports = reverseString;