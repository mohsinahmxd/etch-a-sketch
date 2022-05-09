const divContainer = document.querySelector('.div-container')

function sixteendivs () {
    for (let i = 1; i < 257; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        // div.innerText = "div" + i; removing the numbers
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });
        divContainer.appendChild(div);
        console.log(div)
    }
}


sixteendivs();
