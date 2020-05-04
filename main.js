window.onload=function(){
    const fillos = document.querySelectorAll('.fillo');
    const emptys = document.querySelectorAll('.empty');
    const fillxs = document.querySelectorAll('.fillx');
    window.player = 'fillx';

    for(const fillx of fillxs){
        fillx.addEventListener('click',click)
    }
    for(const empty of emptys){
        empty.addEventListener('click',click)
    }
    for(const fillo of fillos){
        fillo.addEventListener('click',click)
    }

    const gameover = document.getElementById('gameover');
    gameover.addEventListener('click',newgame); 

}

function newgame(){
    location.reload();
}

function click() {
    if(currentPlayer(this)==true){
        if(checkEmpty(this)==true)
        {
            const selected = document.querySelector('.clicked');
            const className = getClassName(selected);
            selected.classList.remove(className);
            selected.classList.remove('clicked')
            selected.classList.add('empty');
            this.classList.remove('empty');
            this.classList.add(className);
            checkWinning();
        }
        else{
            removeSelect();
            this.classList.toggle('clicked');
        }
    }
    else{
        console.log("false");
    }
    
}

function checkEmpty(e) {
    if(e.classList.contains('empty')===true){
        return true;
    }
    else{
        return false;
    }
}

function removeSelect(){
    const selected = document.querySelector('.clicked');
    if(selected != null)
    {
        selected.classList.remove('clicked');    
    }    
}

function getClassName(e){
    if(e.classList.contains('empty')===true){
        return 'empty';
    }
    else if(e.classList.contains('fillx')===true){
        return 'fillx';
    }
    else{
        return 'fillo';
    }
}

function currentPlayer(e){
    const className = getClassName(e);
    if(className == 'empty'){
        return true;
    }
    else if (className == player )
    {
        changePlayer(className);
        return true;
    }
    else{
        return false;
    }
}

function changePlayer(e){
    if(e == 'fillx'){
        window.player='fillo';
    }
    else if(e == 'fillo'){
        window.player='fillx';
    }
}

function checkWinning(){
    const winArr = [['1','2','3'],['4','5','6'],['7','8','9'],
                    ['1','4','7'],['2','5','8'],['3','6','9'],
                    ['1','5','9'],['3','5','7']]
    for(const a of winArr){
        const x = getClassName(document.getElementById(a[0]));
        const y = getClassName(document.getElementById(a[1]));
        const z = getClassName(document.getElementById(a[2]));
        const container = document.getElementsByClassName('container');
        const GameOver = document.getElementById('gameover');
        const Xwon = document.getElementById("Xwon");
        const Owon = document.getElementById("Owon");

        if(x==y && y==z && x=='fillx'){
            //return 'Player X win';
            console.log('Player X win');
            GameOver.style.display = 'block';
            Xwon.style.display='block';
        }
        else if (x==y && y==z && x=='fillo'){
            //return 'Player O win';
            console.log('Player O win');
            GameOver.style.display = 'block';
            Owon.style.display='block';
        }
        else{
        }
    }
}