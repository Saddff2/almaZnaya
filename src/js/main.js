const table = [];
for(let i = 0; i < 13; i++){
     table.push([]);
     for(let j = 0; j < 10; j++){
          table[i].push(j);
     }
}

const field = document.querySelectorAll('.Field_zone_playground');

var tableHtml = '<table class=field>';
for (var i = 0; i < 13; i++) {
     tableHtml += '<tr class="row">';
    for (var j = 0; j < 10; j++) {
        tableHtml += '<td class="cell">' + '<div class="field_img_container"></div>' + table[i][j] + '</td>';
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';


field.forEach(function(field) {
     field.innerHTML = tableHtml;
 });