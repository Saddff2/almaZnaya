const backgroundArray = [];
const backgroundField = document.querySelectorAll('.field-zone__background');

let tableHtml = '<table class=field-zone__playground>';
for (let i = 0; i < 8; i++) {
          backgroundArray.push([]);
          tableHtml += '<tr class="background__row">';
    for (let j = 0; j < 10; j++) {
          backgroundArray[i].push(`${i}.${j}`);
          tableHtml += '<td class="background__cell">' + '<div class="field__img__container"></div>' + backgroundArray[i][j] + '</td>';
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';

backgroundField.forEach(function(field) {
     field.innerHTML = tableHtml;
});

// const backgroundArray = [];
// const backgroundField = document.querySelectorAll('.field-zone__background');

// let tableHtml = '<table class=field-zone__playground>';
// for (let i = 0; i < 8; i++) {
//           backgroundArray.push([]);
//           tableHtml += '<tr class="background__row">';
//     for (let j = 0; j < 18; j++) {
//           backgroundArray[i].push(`${i}.${j}`);
//           tableHtml += '<td class="background__cell">' + '<div class="field__img__container"></div>' + backgroundArray[i][j] + '</td>';
//     }
//     tableHtml += '</tr>';
// }
// tableHtml += '</table>';

// backgroundField.forEach(function(field) {
//      field.innerHTML = tableHtml;
//  });

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

