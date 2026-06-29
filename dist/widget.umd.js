(function(r){typeof define=="function"&&define.amd?define(r):r()})((function(){"use strict";const r={initialized:!1,sessionId:"",config:null,tenant:null},L=()=>{const e=document.querySelector("#crm-widget-script");if(!e)throw new Error("Widget script não encontrado");return{key:e.dataset.key??"",position:e.dataset.position==="left"?"left":"right",debug:e.dataset.debug==="true"}},M=()=>crypto.randomUUID(),g="crm_widget_session_id",p="crm_widget_landing_page",f="crm_widget_utm",w=()=>{const e=localStorage.getItem(g);if(e)return e;const t=M();return localStorage.setItem(g,t),t},s=new Map,N=(e,t)=>{s.has(e)||s.set(e,new Set),s.get(e)?.add(t)},h=(e,t)=>{s.get(e)?.forEach(n=>n(t))},d={LEAD_SUBMIT:"lead:submit",SESSION_CREATED:"session:created"},O=()=>window.location.href,U=()=>{const e=localStorage.getItem(p);if(e)return e;const t=window.location.href;return localStorage.setItem(p,t),t},D=()=>document.referrer,A=()=>{const e=new URLSearchParams(window.location.search),t={utmSource:e.get("utm_source")??void 0,utmMedium:e.get("utm_medium")??void 0,utmCampaign:e.get("utm_campaign")??void 0,utmContent:e.get("utm_content")??void 0,utmTerm:e.get("utm_term")??void 0};if(Object.values(t).some(Boolean))return localStorage.setItem(f,JSON.stringify(t)),t;const o=localStorage.getItem(f);return o?JSON.parse(o):{}},b=()=>({sessionId:w(),pageUrl:O(),landingPage:U(),referrer:D(),...A()}),k=`


.crm-widget-modal {

  position: fixed;

  right: 20px;

  bottom: 90px;

  z-index: 999999;


  display: none;

}



.crm-widget-window {


  width: 320px;


  background: #ffffff;


  border-radius: 16px;


  overflow: hidden;


  box-shadow:
  0 10px 40px rgba(0,0,0,.25);


  font-family:
  Arial, Helvetica, sans-serif;


}



.crm-widget-header {


  height: 50px;


  display:flex;


  align-items:center;


  justify-content:space-between;


  padding:
  0 16px;


  background:
  #2563eb;


  color:white;


}



.crm-widget-close {


  background:none;


  border:none;


  color:white;


  font-size:24px;


  cursor:pointer;


}



.crm-widget-body {


 padding:16px;

}

.crm-widget-field {


 display:flex;

 flex-direction:column;

 gap:5px;


}


.crm-widget-field label {


 font-size:12px;

 color:#555;


}

.crm-widget-field input {


 height:38px;


 border:

 1px solid #ddd;


 border-radius:8px;


 padding:

 0 10px;


 outline:none;


}


.crm-widget-submit {


 height:40px;


 border:none;


 border-radius:8px;


 cursor:pointer;


 background:#2563eb;


 color:white;


}


`,P=`


.crm-widget-button {


 position:fixed;


 right:20px;


 bottom:20px;


 width:56px;


 height:56px;


 border-radius:50%;


 border:none;


 cursor:pointer;


 display:flex;


 align-items:center;


 justify-content:center;


 z-index:999999;


 font-size:22px;


}


`;let c=null;const R=()=>{if(c)return c;const e=document.createElement("div");e.id="crm-widget-root",document.body.appendChild(e);const t=e.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=`

    ${P}


    ${k}

  `,t.appendChild(n),c=t,t},z=(e,t,n)=>{const o=document.createElement("button");return o.className="crm-widget-button",o.innerHTML="💬",Object.assign(o.style,{position:"fixed",bottom:"20px",[t]:"20px",width:"56px",height:"56px",borderRadius:"50%",background:n,color:"#fff",border:"none",cursor:"pointer",zIndex:"999999"}),e.appendChild(o),o},F=e=>{const t=e.querySelector(".crm-widget-modal");if(t)return t;const n=document.createElement("div");return n.className="crm-widget-modal",n.innerHTML=`

 <div class="crm-widget-window">


   <div class="crm-widget-header">

     <span>
       Fale conosco
     </span>


     <button
       class="crm-widget-close"
     >
       ×
     </button>


   </div>


   <div
    class="crm-widget-body"
   ></div>


 </div>

 `,e.appendChild(n),n},q=e=>{e.style.display="flex"},$=e=>{e.style.display="none"};let S=null;const W=e=>{S=e},B=()=>S,j=e=>{const t=B();if(t)return t;const n=document.createElement("form");return n.className="crm-widget-form",n.innerHTML=`

    <div class="crm-widget-field">

      <label>
        Nome
      </label>

      <input
        name="name"
        type="text"
        placeholder="Seu nome"
        required
      />

    </div>



    <div class="crm-widget-field">

      <label>
        Telefone
      </label>


      <input
        name="phone"
        type="tel"
        placeholder="Telefone"
        required
      />

    </div>



    <div class="crm-widget-field">


      <label>
        Email
      </label>


      <input
        name="email"
        type="email"
        placeholder="Email"
      />


    </div>



    <button
      type="submit"
      class="crm-widget-submit"
    >

      Enviar

    </button>


  `,e.appendChild(n),W(n),n},y=e=>e.trim().length>0,G=(e,t)=>e.trim().length>=t,J=e=>y(e)?G(e,3):!1,K=e=>y(e)?/^\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4}$/.test(e.trim()):!1,H=e=>e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!0,Q=e=>{const t=b();return{lead:e,tenant:{id:r.tenant?.id??"",publicKey:r.tenant?.publicKey??""},tracking:{sessionId:t.sessionId,pageUrl:t.pageUrl,landingPage:t.landingPage,referrer:t.referrer,utm:{utmSource:t.utmSource,utmMedium:t.utmMedium,utmCampaign:t.utmCampaign,utmContent:t.utmContent,utmTerm:t.utmTerm}},source:"widget",timestamp:new Date().toISOString()}},x="crm_widget_lead_queue",E=()=>{const e=localStorage.getItem(x);return e?JSON.parse(e):[]},l=e=>{localStorage.setItem(x,JSON.stringify(e))},V=e=>{const t={id:crypto.randomUUID(),payload:e,status:"pending",attempts:0,createdAt:new Date().toISOString()},n=E();n.push(t),l(n)};let v=!1;const Y=()=>v,X=()=>{v=!0},Z=e=>{Y()||(X(),e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),o={name:String(n.get("name")??""),phone:String(n.get("phone")??""),email:String(n.get("email")??"")};if(!J(o.name)){console.warn("Nome inválido");return}if(!K(o.phone)){console.warn("Telefone inválido");return}if(!H(o.email)){console.warn("Email inválido");return}const i=Q(o);V(i),h(d.LEAD_SUBMIT,i)}))};let I=!1;const ee=(e,t)=>{if(I)return;I=!0;const n=F(t),o=n.querySelector(".crm-widget-body"),i=j(o);Z(i);const a=n.querySelector(".crm-widget-close");e.addEventListener("click",()=>{q(n)}),a.addEventListener("click",()=>{$(n)})},te=async e=>(console.log("Loading widget config",e),{theme:{primaryColor:"#2563eb",textColor:"#ffffff"},widget:{position:"right",title:"Fale conosco"},form:{fields:["name","phone","email"],required:["name","phone"]}}),ne=async e=>{const t=await te(e);return{id:"tenant_test_001",name:"Empresa Teste",publicKey:e,allowedDomains:["127.0.0.1","cliente.com.br"],widgetConfig:t}},oe=()=>window.location.hostname,re=e=>{const t=oe();return console.log("[Security] domínio atual:",t),console.log("[Security] domínios permitidos:",e),e.includes(t)},ie=async(e,t)=>{const n=await fetch(e,{headers:{"Content-Type":"application/json",...t?.headers},...t});return{data:await n.json(),status:n.status}},T={baseUrl:"http://localhost:3333",leadEndpoint:"/v1/leads"};let u=!1;const se=e=>{u=e},m={info(e,t){u&&console.log(`[Widget] ${e}`,t??"")},warn(e,t){u&&console.warn(`[Widget] ${e}`,t??"")},error(e,t){console.error(`[Widget] ${e}`,t??"")}},_=async e=>{const t=await ie(`${T.baseUrl}${T.leadEndpoint}`,{method:"POST",body:JSON.stringify(e)});return m.info("Enviando lead",e),t},ae=async()=>{const e=E();for(const t of e)if(t.status!=="success")try{t.status="sending",t.attempts++,l(e),await _(t.payload),t.status="success"}catch(n){t.status="failed",m.error("Falha ao enviar lead",n)}l(e)},C=async()=>{if(r.initialized)return;ae();const e=L();se(e.debug);const t=await ne(e.key),n=w(),o=b();if(!re(t.allowedDomains)){console.error("[Widget] domínio não autorizado");return}const a=R();r.config=e,r.sessionId=n,r.tenant=t,r.initialized=!0,h(d.SESSION_CREATED,n);const ce=z(a,t.widgetConfig.widget.position,t.widgetConfig.theme.primaryColor);ee(ce,a),m.info("Widget inicializado",{config:e,tenant:t,sessionId:n,tracking:o})},de=()=>{if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",C);return}C()};N(d.LEAD_SUBMIT,async e=>{console.log("ENVIANDO LEAD",e);const t=await _(e);console.log("RESPOSTA API",t)}),de()}));
