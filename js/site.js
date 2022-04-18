// Controller Function
// Get user values from page
function getValues() {

    // Adds "invisible" class to alert box to initially hide from user
    document.getElementById("alert").classList.add("invisible");

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // Validate numbers and convert to integer
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        // Call Fizz Buzz
        let fbData = fizzBuzz(fizzValue, buzzValue);

        // Call Display Data
        displayData(fbData);

    } else {

        // alert("You Must Enter Integers.");
        document.getElementById("alert").classList.remove("invisible");
    }

}


// Logic Function
// Solve Fizz Buzz
function fizzBuzz(value1, value2) {

    let returnArray = [];

    // Count from 1 - 100
    for (let index = value1; index <= value2; index++) {

        // Check each number against the zero modulus
        if(index % 3 === 0 && index % 5 === 0) {
            returnArray.push("Fizz Buzz");
        }
        else if (index % 3 === 0) {
            returnArray.push("Fizz");
        }
        else if (index % 5 === 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(index);
        }
    }

    return returnArray;
}


// View Function
// Displays numbers, Fizz, Buzz and Fizz Buzz
function displayData(fbData) {

    let templateRows = "";

    for(let index = 0; index < fbData.length; index++) {

        let data = fbData[index];

        templateRows += `<tr><td>${data}</td></tr>`;
    }
    
    document.getElementById("results").innerHTML = templateRows;
    
}


// Coder Foundry Custom View Function
// Displays numbers, Fizz, Buzz and Fizz Buzz
// function displayData(fbData) {

//     // Get the <tbody> element from the page
//     let tableBody = document.getElementById("results");

//     // Get the row from the template
//     let templateRow = document.getElementById("fbTemplate");

//     // Clear table
//     tableBody.innerHTML = "";

//     for (index = 0; index < fbData.length; index += 5) {

//         let tableRow = document.importNode(templateRow.content, ture);

//         // Get only the columns in the template
//         rowCols = tableRow.querySelectorAll("td");

//         rowCols[0].classList.add(fbData[i]);
//         rowCols[0].textContent = fbData[i];
       
//         rowCols[1].classList.add(fbData[i+ 1]);
//         rowCols[1].textContent = fbData[i + 1];
       
//         rowCols[2].classList.add(fbData[i+2]);
//         rowCols[2].textContent = fbData[i + 2];
       
//         rowCols[3].classList.add(fbData[i+3]);
//         rowCols[3].textContent = fbData[i + 3];
       
//         rowCols[4].classList.add(fbData[i+4]);
//         rowCols[4].textContent = fbData[i + 4];

//         tableBody.appendChild(tableRow);
//     }

// }