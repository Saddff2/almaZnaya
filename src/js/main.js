const table = [];
const field = document.querySelectorAll('.field-zone__playground');

let tableHtml = '<table class=field-zone__playground>';
for (let i = 0; i < 8; i++) {
          table.push([]);
          tableHtml += '<tr class="playground__row">';
    for (let j = 0; j < 18; j++) {
          table[i].push(`${i}.${j}`);
          tableHtml += '<td class="playground__cell">' + '<div class="field__img__container"></div>' + table[i][j] + '</td>';
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';

field.forEach(function(field) {
     field.innerHTML = tableHtml;
 });

//  start td.playground__cell = based
// mined + .playground__cell_wood = td.playground__cell.playground__cell_wood
// increment counter wood 

 
let crystalImg = document.querySelectorAll('.playground__cell')
let crystalText = document.querySelector('.resource__mined_wood')

let crystalNumber = 0;
crystalText.innerHTML = crystalNumber;

let incrementRock = () => {
      crystalNumber++;
      crystalText.innerHTML = crystalNumber;
}

crystalImg.forEach(function (currentCell, indexCell){
      currentCell.addEventListener('click', incrementRock);
})

