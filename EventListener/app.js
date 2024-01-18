document.getElementsByClassName('alert-box_close-button')[0].addEventListener('click',function(){
    document.getElementsByClassName('alert-box')[0].style.display = 'none';
});

function openAlertBox(title){
    document.getElementById('alert-box_title').innerHTML = title;
    document.getElementsByClassName('alert-box')[0].style.display = 'block';
}