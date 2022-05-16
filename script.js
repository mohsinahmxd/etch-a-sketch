const divContainer = document.querySelector('.div-container')


function sixteendivs () {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });
        divContainer.appendChild(div);
    }

    // go around the grid and make sure there is only 2px border. not every square will need to have a border set for each of its sides many can share in this grid and it wil look neater
    
    for (let i = 0; i < 256; i++) {
        document.querySelector('.div' + [i]).style.borderRight = `0px`;
        document.querySelector('.div' + [i]).style.borderBottom = `0px`;
    }

    // go round the sides by incrementing by 16

    for (let i = 15; i < 256; i+= 16) {
        document.querySelector('.div' + [i]).style.borderRight = `2px solid black`;
    }

    // go to the bottom of the grid

    for (let i = 240; i < 256; i++) {
        document.querySelector('.div' + [i]).style.borderBottom = `2px solid black`;
    }

}

function changeLayout () {
    let uservalue = prompt("Enter new layout value")
    uservalue = parseInt(uservalue);
    totalSquares = uservalue * uservalue


    // clear grid
    while (divContainer.firstElementChild) { // while a firstelementchild exists
        divContainer.removeChild(divContainer.firstElementChild); // remove the first element child
    }

    // calc length and width of square 

    let squareArea = 372100 / totalSquares; // 372100 is area of grid
    let length = Math.sqrt(squareArea);
    length = length - 4; // account for border


    // put each square in with the new measurements
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        divContainer.appendChild(div);

        document.querySelector('.div' + [i]).style.height = `${length}` + `px`;
        document.querySelector('.div' + [i]).style.width = `${length}` + `px`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });

    }

    // go around the grid and make sure there is only 2px border. not every square will need to have a border set for each of its sides many can share in this grid and it wil look neater

    for (let i = 0; i < totalSquares; i++) {
        document.querySelector('.div' + [i]).style.borderRight = `0px`;
        document.querySelector('.div' + [i]).style.borderBottom = `0px`;
    }

    // go round the sides by incrementing by 16

    
    
    for (let i = (uservalue - 1); i < totalSquares; i+= uservalue) {
        console.log(uservalue);
        console.log(i);
        console.log(totalSquares);
        document.querySelector('.div' + [i]).style.borderRight = `2px solid black`;
    }

    // go to the bottom of the grid

    for (let i = (totalSquares - uservalue); i < totalSquares; i++) {
        document.querySelector('.div' + [i]).style.borderBottom = `2px solid black`;
    }

};

sixteendivs();
