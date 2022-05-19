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
    


}

function changeLayout () {
    let uservalue = prompt("Enter new layout value")
    if (uservalue == "" || isNaN(uservalue)) {
        return ""
    } else {
        uservalue = parseInt(uservalue);
        totalSquares = uservalue * uservalue
    
    
        // clear grid
        while (divContainer.firstElementChild) { // while a firstelementchild exists
            divContainer.removeChild(divContainer.firstElementChild); // remove the first element child
        }
    
        // calc length and width of square 
    
        let squareArea = 409600 / totalSquares; // 372100 is area of grid
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
    
    }

};

sixteendivs();
