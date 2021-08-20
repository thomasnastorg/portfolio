var modal = document.getElementById('modale1')
var modalbtn = document.getElementById('modalebtn')
var closeBtn = document.getElementsByClassName('closeBtn')[0]
modalbtn.addEventListener('click',openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click, clickOutside')


function openModal(){
    modal.style.display = 'block'
}

function closeModal(){
    modal.style.display = 'none'
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}