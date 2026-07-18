// ==========================
// WAHAT EL REEF
// script.js
// ==========================

// شاشة البداية

//==============================
// ظهور العناصر أثناء النزول
//==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".section,.card").forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


//==============================
// تغيير لون الهيدر أثناء النزول
//==============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>100){

        header.style.background="rgba(18,80,40,.96)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(0,70,35,.85)";
        header.style.boxShadow="none";

    }

});


//==============================
// تأثير تكبير صور الفوتو سيشن
//==============================

document.querySelectorAll(".card img").forEach((img)=>{

    img.addEventListener("mousemove",(e)=>{

        img.style.transform="scale(1.1)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


//==============================
// زر العودة للأعلى
//==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#1B5E20;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:99999;
box-shadow:0 8px 20px rgba(0,0,0,.25);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};