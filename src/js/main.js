const table = [];
const field = document.querySelectorAll('.Field_zone_playground');

let tableHtml = '<table class=field>';
for (let i = 0; i < 8; i++) {
          table.push([]);
          tableHtml += '<tr class="row">';
    for (let j = 0; j < 18; j++) {
          table[i].push(`${i}.${j}`);
          tableHtml += '<td class="cell">' + '<div class="field_img_container"></div>' + table[i][j] + '</td>';
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';

field.forEach(function(field) {
     field.innerHTML = tableHtml;
 });

 
let crystalImg = document.querySelectorAll('.cell')
let crystalText = document.querySelector('.crystal_text')

let crystalNumber = 0;
crystalText.innerHTML = crystalNumber;

let incrementRock = () => {
      crystalNumber++;
      crystalText.innerHTML = crystalNumber;
}

crystalImg.forEach(function (currentCell, indexCell){
      currentCell.addEventListener('click', incrementRock);
})

