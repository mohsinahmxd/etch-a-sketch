const divContainer = document.querySelector('.div-container')

function sixteendivs () {
    for (let i = 1; i < 17; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        div.innerText = "div" + i;
        divContainer.appendChild(div);
        console.log(div)
    }
}

sixteendivs();
