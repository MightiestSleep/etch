function makeSolid()
{
   alert("Good work");
}


const container = document.querySelector('.container');
container.style.gridTemplateRows = "repeat(6,6fr)"
container.style.gridTemplateColumns = "repeat(6,6fr)"
document.getElement

for(let i=0;i<36;i++)
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}

const btn_4 = document.querySelector('#b4');
btn_4.addEventListener('click', () => {
    
    while(container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
    alert("test");
    
    container.style.gridTemplateRows = "repeat(4,auto)"
    container.style.gridTemplateColumns = "repeat(4,auto)"

    for(let i=0;i<16;i++)
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
            e.target.style.background = 'pink';
        });

    }

});

const btn_6 = document.querySelector('#b6');
btn_6.addEventListener('click', () => {
    while(container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
    alert("test");
    
    container.style.gridTemplateRows = "repeat(6,auto)"
    container.style.gridTemplateColumns = "repeat(6,auto)"

    for(let i=0;i<36;i++)
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
            e.target.style.background = 'pink';
        });

    }

});

const btn_8 = document.querySelector('#b8');
btn_8.addEventListener('click', () => {
    while(container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
    alert("test");
    
    container.style.gridTemplateRows = "repeat(100,auto)"
    container.style.gridTemplateColumns = "repeat(100,auto)"

    for(let i=0;i<10000;i++)
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
            e.target.style.background = 'black';
        });

    }

});



const cells = document.querySelectorAll('.cell');

for(let i = 0; i<cells.length;i++)
{
    
    // cells[i].addEventListener('mouseover',makeSolid);
    cells[i].addEventListener('mouseover', function (e) {
        e.target.style.background = 'pink';
    });

}
