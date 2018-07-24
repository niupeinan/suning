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
    //轮播图展示
    let shop=document.getElementsByClassName("shoplist")[0];
    let bigtu=shop.getElementsByClassName("bigtu")[0];
    let wraper=bigtu.getElementsByClassName("wraper")[0];
    let lis=wraper.getElementsByTagName("a");
    let back=bigtu.getElementsByClassName("left")[0];
    let forward=bigtu.getElementsByClassName("right")[0];
    console.log(shop,bigtu,wraper,lis,back,forward);
    let num=0;
    let t=setInterval(move,2000);
    function move(){
        num++;
        if(num==lis.length){
            num=0;
        }
        for(let j=0;j<lis.length;j++){
            lis[j].style.zIndex=5;
        }
        lis[num].style.zIndex=10;
    }
    function move1(){
        num--;
        if(num<0){
            num=lis.length-1;
        }
        for(let j=0;j<lis.length;j++){
            lis[j].style.zIndex=5;
        }
        lis[num].style.zIndex=10;
    }
    wraper.onmouseenter=function(){
        clearInterval(t);
    }
    wraper.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    back.onclick=function(){
        move1();
    }
    forward.onclick=function(){
        move();
    }
}