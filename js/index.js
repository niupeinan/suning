window.onload=function () {

    // 头部导航
    let nav1=document.querySelectorAll(".nav .con .navs1");
	console.log(nav1);
	nav1.forEach(function(v,i){
		let cons2;
		if(i!=2){
			cons2=v.querySelector(".box")
			console.log(cons2)
		}
		else{
			cons2=v.querySelector(".box3")
			console.log(cons2)
		}
		v.onmouseenter=function(){
			v.style.overflow="";
			cons2.style.display="block";
		}
		v.onmouseleave=function(){
			v.style.overflow="hidden";
			cons2.style.display="none";
		}
	})
	let nav2=document.querySelectorAll(".nav .con .nav2");
	nav2.forEach(function(v){
		let cons2=v.querySelector(".box")
		v.onmouseenter=function(){
			v.style.overflow="";
			cons2.style.display="block";

		}
		v.onmouseleave=function(){
			v.style.overflow="hidden";
			cons2.style.display="none";
		}
	})

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
    //轮播图
    let bigtu=document.getElementsByClassName("bigtu")[0];
    let wraper=document.getElementsByClassName("wraper")[0];
    let abox=wraper.getElementsByTagName("a");
    let rightbtn=bigtu.getElementsByClassName("right")[0];
    let leftbtn=bigtu.getElementsByClassName("left")[0];
    let btn=bigtu.getElementsByClassName("btn");
    console.log(wraper, abox,btn);

    rightbtn.onclick=function(){
        move();
    };
    leftbtn.onclick=function(){
        move1();
    };

    bigtu.onmouseenter=function(){
        clearInterval(t);
    };
    bigtu.onmouseleave=function(){
        t=setInterval(move,2000);
    };

    num=0;
    let t=setInterval(move,2000);
    function move() {
        num++;
        if(num==abox.length){
			num=0;
		}
        for(let i=0;i<abox.length;i++){
			abox[i].style.zIndex=5;
			btn[i].className="btn";
		}
		abox[num].style.zIndex=10;
		btn[num].className="btn btnchange";
    }

    function move1() {
        num--;
        if(num<0){
			num=abox.length-1;
		}
		for(let i=0;i<abox.length;i++){
			abox[i].style.zIndex=5;
			btn[i].className="btn";
		}
		abox[num].style.zIndex=10;
		btn[num].className="btn btnchange";
    }
    //按钮
    // btn.onmouseenter=function () {
    //     btn[0].className="btn btnchange";
    // }

    // 评论
    let pinglun=document.querySelectorAll(".shoplist .smalltu .smallmid .box");
	let q=setInterval(move5,3000);
	let now1=0;
	let next1=0;
	function move5(){
		next1++;
		if(next1==pinglun.length){
			next1=0;
		}
		pinglun[next1].style.top=115+"px";
		animate(pinglun[now1],{top:-115});
		animate(pinglun[next1],{top:0});
		now1=next1;
    }
    
    let H=innerHeight;
	let CON=document.querySelectorAll(".CON");
	let floor=document.querySelector(".floor .con");
	let cons=floor.querySelectorAll(".box");
	let TOP=floor.querySelector(".top");
	let flg=true;
	let arr=[];
	CON.forEach(function(v){
		arr.push(v.offsetTop);
	})

	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;
		arr.forEach(function(element,i){
			if (st+H>=arr[0]){
				floor.style.display="block";
			}
			else{
				floor.style.display="none";
			}
			if (st+H>element+200){
				if(flg){
					cons.forEach(function(v){
						v.classList.remove("hot6");
					})
					cons[i].classList.add("hot6");
				}
				if(!flg && i!=Now){
					cons[i].classList.remove("hot6");
				}
			}
		})
	}

	let Now=0;
	cons.forEach(function(v,i){
		v.onclick=function(){
			animate(document.body,{scrollTop:arr[i]});
			animate(document.documentElement,{scrollTop:arr[i]});
			Now=i;
			flg=false;
			v.classList.add("hot6");
		}
	})
	TOP.onclick=function(){
			animate(document.body,{scrollTop:0});
			animate(document.documentElement,{scrollTop:0});
	}

};