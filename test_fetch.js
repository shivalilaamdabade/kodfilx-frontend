const fetch = require('node-fetch').default;
(async ()=>{
 try {
   const res = await fetch('http://localhost:3001/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'x', email:'x@x.com', password:'p'})});
   console.log('status', res.status);
   const text = await res.text();
   console.log('body', text);
 } catch(e){ console.error('fetch error', e); }
})();
