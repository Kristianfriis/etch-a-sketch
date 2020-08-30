

function createGrid(pixels){
    const app = document.getElementById("app");
    let width = pixels;
    let height = pixels;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let div = document.createElement('div');
            div.classList.add(`tile-${i}${j}`)
            app.appendChild(div)
        }
        
    }
}