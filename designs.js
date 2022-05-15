// Select color input
let color = document.querySelector('#colorPicker')

// Select size input
let grid = document.querySelectorAll('#sizePicker [type="number"]');

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector('#sizePicker [type="submit"]');
const tbl = document.querySelector('#pixelCanvas')


function makeGrid() {
// clear former table contents    
    tbl.innerHTML =''
// create new row elemnts for the table
    for (i = 0; i < grid[0].value; i++){
        let newRow = tbl.insertRow(i)

// create new column elemnts
        for(j = 0; j < grid[1].value; j++){
            let newCol = newRow.insertCell(j)
            newCol.style.width = '20px'
            newCol.style.height = '20px'
        }
    }
}

// prevent default submit event
submit.addEventListener("click", function(event) {
    event.preventDefault()
})
// make grid when submit button is clicked
submit.addEventListener("click", makeGrid);
// color boxes with selected color
tbl.addEventListener("click", function(event){
    if (event.target.nodeName == "TD"){
        event.target.style.backgroundColor = color.value
    }
})
