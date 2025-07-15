const txt=document.getElementById('txtbox')
const dis=document.getElementById('display')
txt.addEventListener('input', function(e){
    dis.textContent=txt.value;
})

const img1=document.getElementById('img1')
const img2=document.getElementById('img2')
img1.addEventListener('mouseenter', function(e){
    img1.style.opacity=0;
    img2.style.opacity=1;
})
img1.addEventListener('mouseleave',function(e){
    img1.style.opacity=1;
    img2.style.opacity=0;
})

const bkground=document.getElementById('bg')
const resetbtn=document.getElementById('rst')
bkground.addEventListener('click',function(e){
    const randomcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomcolor;
    bkground.style.backgroundColor=randomcolor;
    resetbtn.style.backgroundColor=randomcolor;
})

resetbtn.addEventListener('click',function(e){
    location.reload();
})