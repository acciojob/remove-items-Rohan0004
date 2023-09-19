let btn=document.getElementsByTagName("input")[0];
btn.addEventListener("click",()=>{
    let val=document.getElementById("colorSelect");
    val.remove(val.selectedIndex);
});
