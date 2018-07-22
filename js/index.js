window.onload=function () {
    let shoplist=document.getElementsByClassName("shoplist")[0];
    let list=shoplist.getElementsByClassName("list")[0];
    let box1=shoplist.getElementsByClassName("box1");
    let rightnav=shoplist.getElementsByClassName("rightnav");
    for (let i=0;i<box1.length;i++){
        box1[i].onmouseenter=function () {
            for (let j=0;j<box1.length;j++){
                rightnav[j].style.display="";
                rightnav[i].style.display="block";
            }
        }
        box1[i].onmouseleave=function () {
            rightnav[i].style.display="none";
        }
    } 
}