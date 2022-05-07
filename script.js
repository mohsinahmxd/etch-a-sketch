const documentContainer = document.querySelector('.div-container')

function sixteendivs () {
    for (let i = 1; i < 17; i++) {
        const div = document.createElement('div');
        div.className = "div" + i;
        documentContainer.appendChild(div);
        console.log(div)
    }
}

sixteendivs();
