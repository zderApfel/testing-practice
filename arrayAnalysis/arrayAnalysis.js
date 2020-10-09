const analyze = (array) => {
    let object = {
        average: average(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }

    return object
}

function average(array){ //Rounded to nearest integer
    let total = array.reduce((total, num) => {
        return total + num;
    })
    return Math.round(total/array.length);
}

module.exports = analyze;