const app = document.getElementById("app");
const etchFixedSize = 300;

function createGrid(pixels){

    let width = pixels;
    let height = pixels;
    let widthHeight = etchFixedSize / pixels;
    console.log(widthHeight)
    for (let i = 0; i < height; i++) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add(`rowDiv-${i}`);
        app.appendChild(outerDiv);
        for (let j = 0; j < width; j++) {
            let div = document.createElement('div');
            // div.classList.add(`tile-${i}${j}`);
            div.classList.add(`tile`)
            // div.style.cssText = `width: ${widthHeight}; height: ${widthHeight};`
            div.style.cssText = `width: ${widthHeight-1.5}px; height: ${widthHeight-1.5}px;`
            outerDiv.appendChild(div);
        }
        
    }
    getDivs();
}

function getDivs() {
    const divs = document.getElementsByClassName('tile');
    l = divs.length;
    for (let k = 0; k < l; k++) {
        const element = array[k];   
        
    }
    divs.forEach((div) => {
    div.addEventListener('click', () => {
        alert(div.classList)
    })
});
}


