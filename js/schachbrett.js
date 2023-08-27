let schachbrett = document.querySelector('.schachbrett');

function showSchachbrett(){
    let ausgabe = '';
    let count = 1;
    
    for(let i = 8; i >= 1; i--){
        ausgabe += "<tr>" ;
        
        let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let arr = arr2.reverse();

        for(let j = 7; j >= 0; j--){
            if(i % 2 === 0){
                if(j % 2 !== 0){
                    ausgabe += '<td class="white">'  + arr[j] + i + '<br>[' + count + "]</td>";
                } else {
                    ausgabe += '<td class="black">' + arr[j] + i  + '<br>[' + count +"]</td>";
                }
            
            } else {
                if(j % 2 !== 0){
                    ausgabe += '<td class="black">' + arr[j] + i + '<br>[' + count +"]</td>";
                } else {
                    ausgabe += '<td class="white">'+ arr[j] + i + '<br>[' + count +"]</td>";
                }
                
            }
            count++;
        }
        ausgabe += "</tr>"
    }

    schachbrett.innerHTML = ausgabe;
}

showSchachbrett();