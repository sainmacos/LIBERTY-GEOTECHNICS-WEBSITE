
const DEMO_USER='admin';
const DEFAULT_PASS='Liberty@2026';
function adminLogin(e){e.preventDefault();let u=document.getElementById('username').value,p=document.getElementById('password').value;let stored=localStorage.getItem('liberty_admin_password')||DEFAULT_PASS;if(u===DEMO_USER&&p===stored){sessionStorage.setItem('liberty_admin_session','yes');location.href='/admin/dashboard.html'}else{document.getElementById('loginError').textContent='Login details not recognised.'}}
function requireAdmin(){if(sessionStorage.getItem('liberty_admin_session')!=='yes'){location.href='/admin/login.html'}}
function adminLogout(){sessionStorage.removeItem('liberty_admin_session');location.href='/admin/login.html'}
function savePassword(e){e.preventDefault();let oldp=document.getElementById('oldpass').value,newp=document.getElementById('newpass').value,cur=localStorage.getItem('liberty_admin_password')||DEFAULT_PASS;if(oldp!==cur){document.getElementById('passMsg').textContent='Current password is incorrect.';return}if(newp.length<10){document.getElementById('passMsg').textContent='Use at least 10 characters.';return}localStorage.setItem('liberty_admin_password',newp);document.getElementById('passMsg').textContent='Password updated in this browser.';e.target.reset()}
function getList(k){try{return JSON.parse(localStorage.getItem(k)||'[]')}catch(e){return []}}
function setList(k,v){localStorage.setItem(k,JSON.stringify(v))}
function addRecord(key,fields){let arr=getList(key);arr.push(fields);setList(key,arr);location.reload()}
function renderRecords(key,target){let arr=getList(key),el=document.getElementById(target);if(!el)return;if(!arr.length){el.innerHTML='<tr><td colspan="4">No custom records added yet.</td></tr>';return}el.innerHTML=arr.map((x,i)=>'<tr><td>'+escapeHtml(x.title||x.name||'Untitled')+'</td><td>'+escapeHtml(x.detail||x.category||'—')+'</td><td><span class="tag">Local draft</span></td><td><button class="small-btn danger" onclick="deleteRecord(\''+key+'\','+i+')">Delete</button></td></tr>').join('')}
function deleteRecord(key,i){let a=getList(key);a.splice(i,1);setList(key,a);location.reload()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function addFromForm(e,key){e.preventDefault();let f=e.target;let o={title:f.title.value,detail:f.detail.value,category:f.category?.value||''};addRecord(key,o)}
function showImageName(input){document.getElementById('imageName').textContent=input.files.length?Array.from(input.files).map(f=>f.name).join(', '):'No files selected';}
