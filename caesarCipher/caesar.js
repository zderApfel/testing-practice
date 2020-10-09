// a-z is 97-122
// A-Z is 65-90

const caesar = (string, shiftFactor) => {
    string = string.split("");
    for (let x in string){
        string[x] = codeify(string[x], shiftFactor);
    }
    return string.join("");
}

const codeify = (char, shiftFactor) => {
    let charCode = char.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122){
        charCode = charCode + shiftFactor;
        if(charCode > 122){
            charCode = 96 + (charCode-122);
        }
    }
    else if(charCode >= 65 && charCode <= 90){
        charCode = charCode + shiftFactor;
        if(charCode > 90){
            charCode = 64 + (charCode-90);
        }
    }
    else{
        console.log("Skipped character");
    }
    return String.fromCharCode(charCode);
}

module.exports = caesar;