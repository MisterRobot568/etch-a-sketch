function createGrid(numSquares) {
    const outer_container = document.querySelector(".container");
    const grid_dims = 960 / numSquares;


    // 1) start by deleting all divs in outer_container
    while (outer_container.firstChild) {
        outer_container.removeChild(outer_container.firstChild)
    }

    // 2) create new grid using input
    for (let i = 1; i <= numSquares; i++) {
        const inner_container = document.createElement('div');
        outer_container.appendChild(inner_container)
        for (let j = 1; j <= numSquares; j++) {
            const grid_unit = document.createElement('div')
            inner_container.appendChild(grid_unit)
            // grid_unit.textContent = "testing";
            grid_unit.style.width = grid_dims + "px";
            grid_unit.style.height = grid_dims + "px";

            grid_unit.addEventListener("mouseover", () => {
                // grid_unit.textContent = 'hovered';
                let random_color = getRandomColor();
                grid_unit.style.backgroundColor = random_color;
            })

        }
    }
}

// gets a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

// get user input and calls createGrid using that input
function userInput() {
    const user_input = prompt("Please input a length/width <= 100.")
    createGrid(user_input)
}

// runs all of the other functions
function masterFunc() {
    createGrid(16)

    const button = document.querySelector('#button')
    button.addEventListener('click', userInput)


}
// call to the master function
masterFunc()