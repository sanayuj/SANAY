const text = document.querySelector(".typed-text");
const words = ["MERN Stack Developer","Cybersecurity Enthusiast","Linux Automation Builder"];
let i=0,j=0,current="",isDeleting=false;

function type(){
if(i>=words.length)i=0;
current=words[i];
text.textContent=current.slice(0,j);

if(!isDeleting){j++;}
else{j--;}

if(j===current.length){isDeleting=true;setTimeout(type,1000);return;}
if(j===0){isDeleting=false;i++;}

setTimeout(type,isDeleting?50:100);
}
type();