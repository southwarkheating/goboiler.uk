(function(){
var d=document;
/* mobile menu */
var b=d.querySelector('.menu-btn'),n=d.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus()}})}
/* Southwark Heating winter deal: hide after 31 Dec 2026 (UK time), tap to copy the code */
try{var t=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());if(t>'2026-12-31')d.documentElement.classList.add('deal-off')}catch(e){}
[].forEach.call(d.querySelectorAll('[data-code]'),function(x){x.addEventListener('click',function(){var c=x.getAttribute('data-code');try{navigator.clipboard.writeText(c);var o=x.textContent;x.textContent='Copied';setTimeout(function(){x.textContent=o},1400)}catch(e){}})});
/* callback form: goes straight into the Southwark Heating app as an enquiry */
var f=d.getElementById('cform');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.fmsg'),btn=f.querySelector('button[type=submit]');
var v=function(k){return (f.elements[k].value||'').trim()};
var name=v('name'),phone=v('phone'),email=v('email'),pc=v('postcode').toUpperCase(),msg=v('message');
var bad=[];if(name.length<2)bad.push('your name');if(!/\d{10,}/.test(phone.replace(/\D/g,''))&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))bad.push('a phone number or email');if(pc&&!/^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/.test(pc))bad.push('a full postcode, like SE16 7SZ');if(!msg)bad.push('what you need');
if(bad.length){m.className='fmsg err';m.textContent='Please add '+bad.join(', ')+'.';return}
var id;try{id=crypto.randomUUID()}catch(x){id='xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g,function(){return(Math.random()*16|0).toString(16)})}
btn.disabled=true;m.className='fmsg';m.textContent='Sending...';
fetch(f.getAttribute('data-endpoint'),{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({enquiry_id:id,name:name,phone:phone,email:email,postcode:pc,message:msg,category:'Heating & Boilers',service:'Boiler installation',source:f.getAttribute('data-source'),_gotcha:v('_gotcha')})})
.then(function(r){if(!r.ok)throw 0;f.reset();m.className='fmsg ok';m.textContent='Thanks, '+name.split(' ')[0]+'. We have your message and will call or email you back.'})
.catch(function(){m.className='fmsg err';m.textContent='That did not send. Please call 020 8050 2022 or 07988 991963 instead.'})
.then(function(){btn.disabled=false})})}
})();