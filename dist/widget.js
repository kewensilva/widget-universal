(function(r){typeof define=="function"&&define.amd?define(r):r()})((function(){"use strict";const r={initialized:!1,sessionId:"",config:null,tenant:null},M=()=>{const e=document.querySelector("#crm-widget-script");if(!e)throw new Error("Widget script não encontrado");return{key:e.dataset.key??"",position:e.dataset.position==="left"?"left":"right",debug:e.dataset.debug==="true"}},N=()=>crypto.randomUUID(),g="crm_widget_session_id",p="crm_widget_landing_page",f="crm_widget_utm",w=()=>{const e=localStorage.getItem(g);if(e)return e;const t=N();return localStorage.setItem(g,t),t},a=new Map,O=(e,t)=>{a.has(e)||a.set(e,new Set),a.get(e)?.add(t)},h=(e,t)=>{a.get(e)?.forEach(n=>n(t))},c={LEAD_SUBMIT:"lead:submit",SESSION_CREATED:"session:created"},U=()=>window.location.href,D=()=>{const e=localStorage.getItem(p);if(e)return e;const t=window.location.href;return localStorage.setItem(p,t),t},k=()=>document.referrer,A=()=>{const e=new URLSearchParams(window.location.search),t={utmSource:e.get("utm_source")??void 0,utmMedium:e.get("utm_medium")??void 0,utmCampaign:e.get("utm_campaign")??void 0,utmContent:e.get("utm_content")??void 0,utmTerm:e.get("utm_term")??void 0};if(Object.values(t).some(Boolean))return localStorage.setItem(f,JSON.stringify(t)),t;const o=localStorage.getItem(f);return o?JSON.parse(o):{}},b=()=>({sessionId:w(),pageUrl:U(),landingPage:D(),referrer:k(),...A()}),P=`


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
.crm-widget-status {


 margin-top:12px;


 text-align:center;


 font-size:14px;


}



.crm-success {


 color:#16a34a;


}



.crm-error {


 color:#dc2626;


}

`,R=`


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


`;let d=null;const z=()=>{if(d)return d;const e=document.createElement("div");e.id="crm-widget-root",document.body.appendChild(e);const t=e.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=`

    ${R}


    ${P}

  `,t.appendChild(n),d=t,t},F=(e,t,n)=>{const o=document.createElement("button");return o.className="crm-widget-button",o.innerHTML="💬",Object.assign(o.style,{position:"fixed",bottom:"20px",[t]:"20px",width:"56px",height:"56px",borderRadius:"50%",background:n,color:"#fff",border:"none",cursor:"pointer",zIndex:"999999"}),e.appendChild(o),o},q=e=>{const t=e.querySelector(".crm-widget-modal");if(t)return t;const n=document.createElement("div");return n.className="crm-widget-modal",n.innerHTML=`

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

 `,e.appendChild(n),n},$=e=>{e.style.display="flex"},W=e=>{e.style.display="none"};let S=null;const B=e=>{S=e},H=()=>S,j=e=>{const t=H();if(t)return t;const n=document.createElement("form");return n.className="crm-widget-form",n.innerHTML=`

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
        placeholder="Telefone Ex:(11 999999999)"
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


  `,e.appendChild(n),B(n),n},G=e=>{const t=e.querySelector(".crm-widget-status");if(t)return t;const n=document.createElement("div");return n.className="crm-widget-status",n.style.display="none",e.appendChild(n),n},y=(e,t)=>{e.style.display="block",t==="loading"&&(e.innerHTML=`
        Enviando...
        `),t==="success"&&(e.innerHTML=`
        <div class="crm-success">

            Dados enviados com sucesso!

        </div>
        `),t==="error"&&(e.innerHTML=`
        <div class="crm-error">

            Erro ao enviar dados.

        </div>
        `)},J=e=>{e.reset()},x=e=>e.trim().length>0,K=(e,t)=>e.trim().length>=t,Q=e=>x(e)?K(e,3):!1,V=e=>x(e)?/^\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4}$/.test(e.trim()):!1,Y=e=>e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!0,X=e=>{const t=b();return{lead:e,tenant:{id:r.tenant?.id??"",publicKey:r.tenant?.publicKey??""},tracking:{sessionId:t.sessionId,pageUrl:t.pageUrl,landingPage:t.landingPage,referrer:t.referrer,utm:{utmSource:t.utmSource,utmMedium:t.utmMedium,utmCampaign:t.utmCampaign,utmContent:t.utmContent,utmTerm:t.utmTerm}},source:"widget",timestamp:new Date().toISOString()}},v="crm_widget_lead_queue",E=()=>{const e=localStorage.getItem(v);return e?JSON.parse(e):[]},l=e=>{localStorage.setItem(v,JSON.stringify(e))},Z=e=>{const t={id:crypto.randomUUID(),payload:e,status:"pending",attempts:0,createdAt:new Date().toISOString()},n=E();n.push(t),l(n)};let I=!1;const ee=()=>I,te=()=>{I=!0},ne=e=>{ee()||(te(),e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),o={name:String(n.get("name")??""),phone:String(n.get("phone")??""),email:String(n.get("email")??"")};if(!Q(o.name)){console.warn("Nome inválido!");return}if(!V(o.phone)){console.warn("Telefone inválido");return}if(!Y(o.email)){console.warn("Email inválido");return}const s=X(o),i=G(e.parentElement);y(i,"loading"),Z(s),h(c.LEAD_SUBMIT,s),y(i,"success"),J(e)}))};let T=!1;const oe=(e,t)=>{if(T)return;T=!0;const n=q(t),o=n.querySelector(".crm-widget-body"),s=j(o);ne(s);const i=n.querySelector(".crm-widget-close");e.addEventListener("click",()=>{$(n)}),i.addEventListener("click",()=>{W(n)})},re=async e=>(console.log("Loading widget config",e),{theme:{primaryColor:"#2563eb",textColor:"#ffffff"},widget:{position:"right",title:"Fale conosco"},form:{fields:["name","phone","email"],required:["name","phone"]}}),ie=async e=>{const t=await re(e);return{id:"tenant_test_001",name:"Empresa Teste",publicKey:e,allowedDomains:["127.0.0.1","cliente.com.br","apresentacaocontentmkt.com.br"],widgetConfig:t}},se=()=>window.location.hostname,ae=e=>{const t=se();return console.log("[Security] domínio atual:",t),console.log("[Security] domínios permitidos:",e),e.includes(t)},ce=async(e,t)=>{const n=await fetch(e,{headers:{"Content-Type":"application/json",...t?.headers},...t});return{data:await n.json(),status:n.status}},_={baseUrl:"http://localhost:3333",leadEndpoint:"/v1/leads"};let u=!1;const de=e=>{u=e},m={info(e,t){u&&console.log(`[Widget] ${e}`,t??"")},warn(e,t){u&&console.warn(`[Widget] ${e}`,t??"")},error(e,t){console.error(`[Widget] ${e}`,t??"")}},C=async e=>{const t=await ce(`${_.baseUrl}${_.leadEndpoint}`,{method:"POST",body:JSON.stringify(e)});return m.info("Enviando lead",e),t},le=async()=>{const e=E();for(const t of e)if(t.status!=="success")try{t.status="sending",t.attempts++,l(e),await C(t.payload),t.status="success"}catch(n){t.status="failed",m.error("Falha ao enviar lead",n)}l(e)},L=async()=>{if(r.initialized)return;le();const e=M();de(e.debug);const t=await ie(e.key),n=w(),o=b();if(!ae(t.allowedDomains)){console.error("[Widget] domínio não autorizado");return}const i=z();r.config=e,r.sessionId=n,r.tenant=t,r.initialized=!0,h(c.SESSION_CREATED,n);const me=F(i,t.widgetConfig.widget.position,t.widgetConfig.theme.primaryColor);oe(me,i),m.info("Widget inicializado",{config:e,tenant:t,sessionId:n,tracking:o})},ue=()=>{if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",L);return}L()};O(c.LEAD_SUBMIT,async e=>{console.log("ENVIANDO LEAD",e);const t=await C(e);console.log("RESPOSTA API",t)}),ue()}));
