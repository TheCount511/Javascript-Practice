const numbers = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 89, 79, 89, 79, 89, 0100];

function cleanRoom(array) {let checked = [];
    let cleaned = []
    array.forEach(num => {if (checked.includes(num)) {return;} else {checked.push(num);
            cleaned.push(array.filter(item => item === num));
        }
    })
    console.log(cleaned);
}

const numbers = [1, 2, 3, 4];

function addcheck(array, sum) {let sumNumberArray = [];
    array.forEach(num => {array.forEach(num2 => {if ((num + num2) === sum) {let sumNumbers = [];
                sumNumbers.push(num);
                sumNumbers.push(num2);
                sumNumberArray.push(sumNumbers);

            } else {return;}

        })

    })
    console.log(sumNumberArray);
}