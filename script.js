const imgs=document.querySelectorAll('.header-slider ul img')
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');
let n=0;
function change(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';

}
change();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;

    }
    else{
        n=imgs.length-1;
    }
    change();

})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;

    }
    else{
        n=0;
    }
    change();

})