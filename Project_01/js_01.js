var isstatus  = document.querySelector('h5')
var addFriend = document.querySelector('#add')
var check = 0
addFriend.addEventListener('click',function(){
    if(check == 0){
        isstatus.innerHTML = "Now Friend"
        addFriend.innerHTML = "Remove Friend"
        isstatus.style.color = 'green'
        check = 1
    }
    else{
        isstatus.innerHTML = "Now Stranger"
        addFriend.innerHTML = "Add Friend"
        isstatus.style.color = 'red'
        check = 0
    }
})
var main = document.querySelector('#main')
var crsr = document.querySelector('.cursor')

main.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x+'px'
    crsr.style.top = dets.y+'px'
})
