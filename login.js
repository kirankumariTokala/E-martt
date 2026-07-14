function login(){
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if(u === "" || p === ""){
    msg.style.color = "red";
    msg.innerText = "Please enter username and password";
    return;
  }

  // accept ANY username & password
  localStorage.setItem("loggedIn","true");

  msg.style.color = "green";
  msg.innerText = "Login successful ✅";

 document.body.classList.add("fade-out");

setTimeout(()=>{
  window.location.href = "index.html";
},800);

}

// Eye toggle
function togglePassword(){
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}


// ❄️ Snow animation
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flakes = [];

for(let i=0;i<120;i++){
  flakes.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*4+1,
    d: Math.random()+1
  });
}

function drawSnow(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,0.9)";
  ctx.beginPath();
  flakes.forEach(f=>{
    ctx.moveTo(f.x,f.y);
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
  });
  ctx.fill();
  moveSnow();
}

let angle = 0;
function moveSnow(){
  angle += 0.01;
  flakes.forEach(f=>{
    f.y += Math.pow(f.d,2)+1;
    f.x += Math.sin(angle)*2;

    if(f.y > canvas.height){
      f.y = 0;
      f.x = Math.random()*canvas.width;
    }
  });
}

setInterval(drawSnow,25);



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const btn = document.getElementById("loginBtn");
  const msg = document.getElementById("loginMsg");

  if(!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "Please wait...";
    msg.style.display = "block";
    msg.innerHTML = `
      <span style="font-size:14px">Logging you in</span>
      <div class="loader"></div>
    `;

    setTimeout(() => {
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 500);
    }, 2000);
  });
});



document.getElementById("loginBtn").onclick = function(){
  document.getElementById("loading-screen").style.display = "flex";

  setTimeout(()=>{
    window.location.href = "index.html"; // home page
  }, 2200);
};


function openForgot(){
  document.getElementById("forgot-box").style.display="flex";
}

function closeForgot(){
  document.getElementById("forgot-box").style.display="none";
}





