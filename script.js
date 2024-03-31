function hideShow(id) {
    if(document.getElementById(id).classList.contains('show')){
        document.getElementById(id).classList.remove('show')
    }else{
        document.getElementById(id).classList.add('show')
    }
}