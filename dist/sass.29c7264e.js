const e=document.querySelectorAll("service__section-small-circle");e.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("bounce")})}),function(){let e=new Date().getFullYear();document.getElementById("current-year").textContent=e}();const t=document.querySelectorAll("a:link");t.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();let n=e.getAttribute("href");if("#"===n&&window.scrollTo({top:0,behavior:"smooth"}),"#"!==n&&n.startsWith("#")){let e=document.querySelector(n);e.scrollIntoView({behavior:"smooth"})}e.classList.contains("main-nav-link")&&headerEl.classList.toggle("nav-open")})});const n=document.getElementById("modal");document.querySelector(".modal-content");const l=document.getElementById("backdrop"),o=()=>{n.classList.toggle("visible"),l.classList.toggle("visible")},c=document.getElementById("contactForm");c.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("name").value,n=document.getElementById("email").value,l=document.getElementById("phone").value,c=document.getElementById("website").value,a=document.getElementById("message").value;if(""===t.trim()||""===n.trim()||""===l.trim()||""===c.trim()||""===a.trim()){alert("Please fill in all fields");return}let m={name:t,email:n,phone:l,website:c,message:a};console.log(m),o(),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("website").value="",document.getElementById("message").value="",localStorage.setItem("formData",JSON.stringify(m))});const a=document.querySelector(".close");a.addEventListener("click",o),l.addEventListener("click",e=>{e.target===l&&o()}),document.getElementById("whatsappLink").addEventListener("click",function(){var e=encodeURIComponent("+355670254518");window.open("https://api.whatsapp.com/send?phone="+e,"_blank")});
//# sourceMappingURL=sass.29c7264e.js.map