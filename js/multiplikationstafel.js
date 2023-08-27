let tafel = document.querySelector('.tafel');

function showMultiTafel(){
    let ausgabe = '';
    for(let i = 1; i < 11; i++){
        ausgabe += "<tr>" ;

        for(let j = 1; j < 11; j++){
            ausgabe += "<td>" + i * j + "</td>";
        }
        ausgabe += "</tr>"
    }

    tafel.innerHTML = ausgabe;
}
showMultiTafel();