const table = [];
const field = document.querySelectorAll('.field-zone__playground');

let tableHtml = '<table class=field-zone__playground>';
for (let i = 0; i < 8; i++) {
          table.push([]);
          tableHtml += '<tr class="field-zone__playground__row">';
    for (let j = 0; j < 18; j++) {
          table[i].push(`${i}.${j}`);
          tableHtml += '<td class="field-zone__playground__cell">' + '<div class="field__img__container"></div>' + table[i][j] + '</td>';
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';

field.forEach(function(field) {
     field.innerHTML = tableHtml;
 });

 
let crystalImg = document.querySelectorAll('.field-zone__playground__cell')
let crystalText = document.querySelector('.bottom-menu__counter__rock-block__text')

let crystalNumber = 0;
crystalText.innerHTML = crystalNumber;

let incrementRock = () => {
      crystalNumber++;
      crystalText.innerHTML = crystalNumber;
}

crystalImg.forEach(function (currentCell, indexCell){
      currentCell.addEventListener('click', incrementRock);
})

