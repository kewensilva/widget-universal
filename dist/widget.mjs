const r = {
  initialized: !1,
  sessionId: "",
  config: null,
  tenant: null
}, M = () => {
  const e = document.querySelector(
    "#crm-widget-script"
  );
  if (!e)
    throw new Error(
      "Widget script não encontrado"
    );
  return {
    key: e.dataset.key ?? "",
    position: e.dataset.position === "left" ? "left" : "right",
    debug: e.dataset.debug === "true"
  };
}, N = () => crypto.randomUUID(), g = "crm_widget_session_id", p = "crm_widget_landing_page", f = "crm_widget_utm", S = () => {
  const e = localStorage.getItem(g);
  if (e)
    return e;
  const t = N();
  return localStorage.setItem(g, t), t;
}, a = /* @__PURE__ */ new Map(), O = (e, t) => {
  a.has(e) || a.set(e, /* @__PURE__ */ new Set()), a.get(e)?.add(t);
}, y = (e, t) => {
  a.get(e)?.forEach((n) => n(t));
}, u = {
  LEAD_SUBMIT: "lead:submit",
  SESSION_CREATED: "session:created"
}, U = () => window.location.href, D = () => {
  const e = localStorage.getItem(p);
  if (e)
    return e;
  const t = window.location.href;
  return localStorage.setItem(p, t), t;
}, A = () => document.referrer, k = () => {
  const e = new URLSearchParams(
    window.location.search
  ), t = {
    utmSource: e.get("utm_source") ?? void 0,
    utmMedium: e.get("utm_medium") ?? void 0,
    utmCampaign: e.get("utm_campaign") ?? void 0,
    utmContent: e.get("utm_content") ?? void 0,
    utmTerm: e.get("utm_term") ?? void 0
  };
  if (Object.values(t).some(Boolean))
    return localStorage.setItem(
      f,
      JSON.stringify(
        t
      )
    ), t;
  const o = localStorage.getItem(
    f
  );
  return o ? JSON.parse(
    o
  ) : {};
}, x = () => ({
  sessionId: S(),
  pageUrl: U(),
  landingPage: D(),
  referrer: A(),
  ...k()
}), P = `


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


`, R = `


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


`;
let d = null;
const z = () => {
  if (d)
    return d;
  const e = document.createElement(
    "div"
  );
  e.id = "crm-widget-root", document.body.appendChild(
    e
  );
  const t = e.attachShadow(
    {
      mode: "open"
    }
  ), n = document.createElement(
    "style"
  );
  return n.textContent = `

    ${R}


    ${P}

  `, t.appendChild(
    n
  ), d = t, t;
}, F = (e, t, n) => {
  const o = document.createElement("button");
  return o.className = "crm-widget-button", o.innerHTML = "💬", Object.assign(
    o.style,
    {
      position: "fixed",
      bottom: "20px",
      [t]: "20px",
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: n,
      color: "#fff",
      border: "none",
      cursor: "pointer",
      zIndex: "999999"
    }
  ), e.appendChild(o), o;
}, q = (e) => {
  const t = e.querySelector(
    ".crm-widget-modal"
  );
  if (t)
    return t;
  const n = document.createElement(
    "div"
  );
  return n.className = "crm-widget-modal", n.innerHTML = `

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

 `, e.appendChild(
    n
  ), n;
}, $ = (e) => {
  e.style.display = "flex";
}, W = (e) => {
  e.style.display = "none";
};
let E = null;
const B = (e) => {
  E = e;
}, j = () => E, G = (e) => {
  const t = j();
  if (t)
    return t;
  const n = document.createElement(
    "form"
  );
  return n.className = "crm-widget-form", n.innerHTML = `

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


  `, e.appendChild(
    n
  ), B(
    n
  ), n;
}, v = (e) => e.trim().length > 0, J = (e, t) => e.trim().length >= t, K = (e) => v(e) ? J(
  e,
  3
) : !1, H = (e) => v(e) ? /^\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4}$/.test(
  e.trim()
) : !1, Q = (e) => e ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) : !0, V = (e) => {
  const t = x();
  return {
    lead: e,
    tenant: {
      id: r.tenant?.id ?? "",
      publicKey: r.tenant?.publicKey ?? ""
    },
    tracking: {
      sessionId: t.sessionId,
      pageUrl: t.pageUrl,
      landingPage: t.landingPage,
      referrer: t.referrer,
      utm: {
        utmSource: t.utmSource,
        utmMedium: t.utmMedium,
        utmCampaign: t.utmCampaign,
        utmContent: t.utmContent,
        utmTerm: t.utmTerm
      }
    },
    source: "widget",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
}, I = "crm_widget_lead_queue", T = () => {
  const e = localStorage.getItem(I);
  return e ? JSON.parse(e) : [];
}, c = (e) => {
  localStorage.setItem(
    I,
    JSON.stringify(e)
  );
}, Y = (e) => {
  const t = {
    id: crypto.randomUUID(),
    payload: e,
    status: "pending",
    attempts: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  }, n = T();
  n.push(
    t
  ), c(
    n
  );
};
let _ = !1;
const X = () => _, Z = () => {
  _ = !0;
}, ee = (e) => {
  X() || (Z(), e.addEventListener(
    "submit",
    (t) => {
      t.preventDefault();
      const n = new FormData(e), o = {
        name: String(
          n.get("name") ?? ""
        ),
        phone: String(
          n.get("phone") ?? ""
        ),
        email: String(
          n.get("email") ?? ""
        )
      };
      if (!K(o.name)) {
        console.warn(
          "Nome inválido"
        );
        return;
      }
      if (!H(o.phone)) {
        console.warn(
          "Telefone inválido"
        );
        return;
      }
      if (!Q(o.email)) {
        console.warn(
          "Email inválido"
        );
        return;
      }
      const i = V(
        o
      );
      Y(
        i
      ), y(
        u.LEAD_SUBMIT,
        i
      );
    }
  ));
};
let w = !1;
const te = (e, t) => {
  if (w)
    return;
  w = !0;
  const n = q(
    t
  ), o = n.querySelector(
    ".crm-widget-body"
  ), i = G(
    o
  );
  ee(
    i
  );
  const s = n.querySelector(
    ".crm-widget-close"
  );
  e.addEventListener(
    "click",
    () => {
      $(
        n
      );
    }
  ), s.addEventListener(
    "click",
    () => {
      W(
        n
      );
    }
  );
}, ne = async (e) => (console.log(
  "Loading widget config",
  e
), {
  theme: {
    primaryColor: "#2563eb",
    textColor: "#ffffff"
  },
  widget: {
    position: "right",
    title: "Fale conosco"
  },
  form: {
    fields: [
      "name",
      "phone",
      "email"
    ],
    required: [
      "name",
      "phone"
    ]
  }
}), oe = async (e) => {
  const t = await ne(e);
  return {
    id: "tenant_test_001",
    name: "Empresa Teste",
    publicKey: e,
    allowedDomains: [
      "127.0.0.1",
      "cliente.com.br"
    ],
    widgetConfig: t
  };
}, re = () => window.location.hostname, ie = (e) => {
  const t = re();
  return console.log(
    "[Security] domínio atual:",
    t
  ), console.log(
    "[Security] domínios permitidos:",
    e
  ), e.includes(
    t
  );
}, se = async (e, t) => {
  const n = await fetch(
    e,
    {
      headers: {
        "Content-Type": "application/json",
        ...t?.headers
      },
      ...t
    }
  );
  return {
    data: await n.json(),
    status: n.status
  };
}, h = {
  baseUrl: "http://localhost:3333",
  leadEndpoint: "/v1/leads"
};
let l = !1;
const ae = (e) => {
  l = e;
}, m = {
  info(e, t) {
    l && console.log(`[Widget] ${e}`, t ?? "");
  },
  warn(e, t) {
    l && console.warn(`[Widget] ${e}`, t ?? "");
  },
  error(e, t) {
    console.error(`[Widget] ${e}`, t ?? "");
  }
}, C = async (e) => {
  const t = await se(
    `${h.baseUrl}${h.leadEndpoint}`,
    {
      method: "POST",
      body: JSON.stringify(e)
    }
  );
  return m.info(
    "Enviando lead",
    e
  ), t;
}, de = async () => {
  const e = T();
  for (const t of e)
    if (t.status !== "success")
      try {
        t.status = "sending", t.attempts++, c(e), await C(
          t.payload
        ), t.status = "success";
      } catch (n) {
        t.status = "failed", m.error(
          "Falha ao enviar lead",
          n
        );
      }
  c(e);
}, b = async () => {
  if (r.initialized)
    return;
  de();
  const e = M();
  ae(e.debug);
  const t = await oe(e.key), n = S(), o = x();
  if (!ie(t.allowedDomains)) {
    console.error("[Widget] domínio não autorizado");
    return;
  }
  const s = z();
  r.config = e, r.sessionId = n, r.tenant = t, r.initialized = !0, y(u.SESSION_CREATED, n);
  const L = F(s, t.widgetConfig.widget.position, t.widgetConfig.theme.primaryColor);
  te(L, s), m.info(
    "Widget inicializado",
    {
      config: e,
      tenant: t,
      sessionId: n,
      tracking: o
    }
  );
}, ce = () => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", b);
    return;
  }
  b();
};
O(
  u.LEAD_SUBMIT,
  async (e) => {
    console.log(
      "ENVIANDO LEAD",
      e
    );
    const t = await C(
      e
    );
    console.log(
      "RESPOSTA API",
      t
    );
  }
);
ce();
