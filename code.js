let COLOR = "Black"
function testFunction(number)
{
    
    RESOLUTION = Number(number);

    while(container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
    
    strng = "repeat( " + number + ",auto)";
    container.style.gridTemplateRows = strng;
    container.style.gridTemplateColumns = strng;

    for(let i=0;i<(number*number);i++)
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    const cells = document.querySelectorAll('.cell');

    for(let i = 0; i<cells.length;i++)
    {
        
        // cells[i].addEventListener('mouseover',makeSolid);
        cells[i].addEventListener('mouseover', function (e) {
            e.target.style.background = COLOR;
        });

    }
 
}
let RESOLUTION = 0;
const container = document.querySelector('.container');
container.style.gridTemplateRows = "repeat(6,6fr)"
container.style.gridTemplateColumns = "repeat(6,6fr)"
const input_box = document.getElementById("input_box");
input_box.addEventListener('change', function(e) {
   testFunction(e.target.value);
});


for(let i=0;i<36;i++)
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}

const btn_4 = document.querySelector('#b4');
btn_4.addEventListener('click', () => {
    
    COLOR = "green";

});

const btn_6 = document.querySelector('#b6');
btn_6.addEventListener('click', () => {
    COLOR = "blue";
});

const btn_8 = document.querySelector('#b8');
btn_8.addEventListener('click', () => {
    COLOR = 'pink';
});



const cells = document.querySelectorAll('.cell');

for(let i = 0; i<cells.length;i++)
{
    
    // cells[i].addEventListener('mouseover',makeSolid);
    cells[i].addEventListener('mouseover', function (e) {
        e.target.style.background = COLOR;
    });

}
