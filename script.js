let user1 = prompt('1-ci oyunçunun adı:');
let user2 = prompt('2-ci oyunçunun adı:');
let user3 = prompt('3-cü oyunçunun adı:');
let user4 = prompt('4-cü oyunçunun adı:');
let user5 = prompt('5-ci oyunçunun adı:');

function oyna(){

    let player;
    let qurban;
    let dc;
    
    let reqem1 = Math.floor(Math.random() * 5) + 1;
    let reqem2 = Math.floor(Math.random() * 2) + 1;
    let reqem3 = Math.floor(Math.random() * 5) + 1;
    
    if(reqem3 == 1){
        qurban = user1;
    } else if(reqem3 == 2){
        qurban = user2;
    } else if(reqem3 == 3){
        qurban = user3;
    } else if(reqem3 == 4){
        qurban = user4;
    } else if(reqem3 == 5){
        qurban = user5;
    }
    
    if(reqem3 == 1){
        player = user1;
    } else if(reqem1 == 2){
        player = user2;
    } else if(reqem1 == 3){
        player = user3;
    } else if(reqem1 == 4){
        player = user4;
    } else if(reqem1 == 5){
        player = user5;
    }
    
    if(reqem2 == 1){
        dc = 'Doğruluq';
    } else{
        dc = 'Cəsarət';
    }
    
    document.getElementById('players').innerHTML = `${user1}, ${user2},  ${user3},  ${user4} ve ${user5} istirak ediller`;
    
    document.getElementById('dc').innerHTML = (`Oyuncu ${player}, sizin qurbanınız ${qurban} olacaq ${dc} oyununda oynayacaq`);
}