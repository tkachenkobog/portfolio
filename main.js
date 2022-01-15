const btns=document.querySelectorAll(".filter-btns_item");
const img=document.querySelectorAll('.filter-content div');
const sel=document.getElementById('filter-options')

for(let btn of btns){
    btn.onclick=function(){
        filter(this.dataset.filter);
    };
}
function filter(select){
    for(let im of img){
        if(!im.classList.contains(select)){
            im.style.display="none";
           
           
        } else{
            im.style.display="flex";
         
           
           
        }
    }

for(let btn of btns){
    if(btn.dataset.filter===select){
         btn.classList.add('active');

    }else{
        btn.classList.remove('active');
    }
}

sel.value=select;
}


sel.addEventListener("change", ()=>{
    filter(sel.value)
});