function capitalize(string){
    let newChar = string.charAt(0).toUpperCase();
    return string.replace(string.charAt(0), newChar);
}

module.exports = capitalize;