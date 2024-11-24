function mdtamanho(){
    if(window.innerWidth >= 768){
        home.style.display = 'block'
    }else{
        home.style.display = 'none'
    }
}


function clickmenu(){
    if (home.style.display == 'block'){
        home.style.display = 'none'
    }else{
        home.style.display = 'block'
    }
}