const divContainer = document.querySelector('.div-container')
// const divChildren = divContainer.childNodes;


function sixteendivs () {
    for (let i = 1; i < 257; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        // div.innerText = "div" + i; removing the numbers
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });
        divContainer.appendChild(div);
    }
}

function changeLayout () {
    let uservalue = prompt("Enter new layout value")
    console.log(uservalue)

    while (divContainer.firstElementChild) { // while a firstelementchild exists
        divContainer.removeChild(divContainer.firstElementChild); // remove the first element child
    }
    


    // create new grid
    for (let i = 1; i < uservalue; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        divContainer.appendChild(div);
    }

}

sixteendivs();