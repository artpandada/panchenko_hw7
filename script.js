'use strict';


function insertIndex(array, index, value) {

    const result = [];

    for (let i = 0; i < array.length; i++) {


        if (i === index) {

            result[result.length] = value;

            for (let j = i; j < array.length; j++) {

                result[result.length] = array[j];
            }

            break;
        }

        result[result.length] = array[i];
    }

    return result;
}


function indexOf(array, symbol) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === symbol) {
            return i;
        }

    }
    return -1;

}

function lastIndexOf(array, symbol) {
    let result;

    for (let i = 0; i < array.length; i++) {


        if (array[i] === symbol) {
            result = i;
        }

    }
    if (result === undefined) {
        return -1;
    }
    return result;

}


function includes(array, symbol) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === symbol) {
            return true;
        }
    }

    return false;

}



