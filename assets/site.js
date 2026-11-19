
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
function cookieChoice(value){localStorage.setItem('liberty_cookie_choice',value);document.getElementById('cookieBanner')?.classList.add('hidden')}
(function(){const b=document.getElementById('cookieBanner');if(b&&!localStorage.getItem('liberty_cookie_choice'))b.style.display='block'})();
function submitEnquiry(e){e.preventDefault();const f=e.target;const data={name:f.name.value,email:f.email.value,phone:f.phone.value,service:f.service.value,message:f.message.value};const subject=encodeURIComponent('Website enquiry from '+data.name);const body=encodeURIComponent('Name: '+data.name+'\nEmail: '+data.email+'\nPhone: '+data.phone+'\nService: '+data.service+'\n\n'+data.message);window.location.href='mailto:libertygeotechnicsltd@gmail.com?subject='+subject+'&body='+body;document.getElementById('formNotice').textContent='Your email app should open with this enquiry ready to send.'}
