# context.md — Brief para construir el sitio web de **bole.to** (AI Agent)

Este documento le da contexto al AI Agent que construirá el sitio de **bole.to**. Explica el negocio, las funciones del producto, el modelo de planes, la arquitectura de páginas, el contenido por sección y lineamientos de diseño/UX. El objetivo es que puedas **maquetar el sitio en Next.js/Tailwind** y conectar más adelante las APIs.

---

## 1) Qué es bole.to (resumen ejecutivo)

**bole.to** es una **plataforma todo‑en‑uno para eventos**: publicar, vender entradas, cobrar, **controlar acceso con QR (modo offline real)** y medir con métricas en tiempo real. Además, integra un **twist social**: feed del evento (posts, anuncios y encuestas) y **cámara D+1** (fotos capturadas durante el evento que se revelan al día siguiente en una galería compartida).

**Para asistentes:** descubrir eventos, comprar en 3 pasos, entrar con QR sin señal, participar del feed, recibir anuncios en vivo y ver la galería D+1.

**Para organizadores/venues:** crear eventos en minutos, definir tipos de ticket y cupos, cobrar en NIO/USD, operar la entrada con scanner móvil (sin hardware extra), ver métricas y activar funciones sociales para aumentar engagement y conversiones.

---

## 2) Propuesta de valor & diferenciales

* **Operación robusta:** scanner en tu teléfono + **modo offline real** (lista precargada, validación local, sync automático, alertas de duplicado).
* **Ticketing completo:** tiers, preventas, cupones, listas de invitados, reembolsos/transferencias opcionales, payouts claros.
* **Métricas accionables:** ventas por canal y fase, ritmo de aforo, picos de check‑in, uso de códigos, ingresos netos/payouts, engagement social.
* **Social integrado:** feed con posts/comentarios/reacciones, **anuncios fijados** del organizador, **encuestas/votaciones** y **cámara D+1**.
* **Escalable de bar a estadio:** multipuerta, roles de staff, API/webhooks.
* **Experiencia rápida y moderna:** compra en 3 pasos, UX mobile‑first, dark/light.

---

## 3) Módulos funcionales del producto

### 3.1 Publicación de eventos

* Portada (imagen/video), descripción, fecha y horario, venue (mapa), categorías, capacidad/aforo.
* Página pública SEO (schema.org `Event` + `Offer`).

### 3.2 Ticketing & pagos

* Tipos de ticket (general, VIP, preventa, donación, combos), cupos y escalones de precio.
* Códigos promocionales y enlaces con UTM.
* Checkouts en NIO y USD (proveedor por confirmar; soportar dLocal/PayPal/Stripe según región).
* Payouts y conciliación; impuestos/comisiones visibles.

### 3.3 Acceso en puerta (QR + offline)

* App de escaneo (iOS/Android): validación en milisegundos, **sin internet**.
* Precarga de lista de tickets; sync de check‑ins cuando regresa la señal.
* Detección de duplicados; check‑in manual por nombre/correo.

### 3.4 Social del evento

* **Feed**: posts con texto/imagen, comentarios, reacciones; notificaciones.
* **Anuncios**: publicaciones fijadas por el organizador.
* **Encuestas**: votaciones en vivo; resultados en barras/porcentajes.

### 3.5 Cámara D+1

* Modo cámara dentro del evento con límite de fotos por usuario.
* Subida de fotos al storage con **fecha de revelado**; moderación básica.
* “Revelado” automático al día siguiente (push + galería compartida).

### 3.6 Analytics & panel

* Ventas por tipo/fase, conversión por canal, aforo y ritmo, check‑ins por minuto.
* Duplicados detectados, ingresos netos y payouts, uso de cupones.
* KPIs sociales: posts, participación en encuestas, CTR de anuncios del host.

### 3.7 Roles & equipo

* Organizador, administrador, staff de puerta, promotores (links únicos), permisos granulares.

### 3.8 Integraciones & API

* API REST/GraphQL para eventos, tickets, órdenes, check‑ins.
* Webhooks (pago aprobado, reembolso, check‑in, post creado, encuesta cerrada).

---

## 4) Planes y monetización (propuesta inicial)

> Los números exactos se ajustarán; usar texto descriptivo en el sitio.

**Starter (pago por ticket)**

* Ticketing completo, **QR offline**, cupones básicos, feed básico, soporte por email.

**Pro (menor fee por ticket / o suscripción)**

* Todo Starter + campañas avanzadas, encuestas ilimitadas, analytics extendido, multi‑roles y promotores, soporte prioritario.

**Enterprise (a medida)**

* SLAs, multi‑venue, integraciones personalizadas, account manager, límites elevados.

Notas: cargos por payout, impuestos aplicables, compatibilidad NIO/USD.

---

## 5) Arquitectura de información (sitio web)

### Mapa de sitio

* **Home**
* **Descubrir** (listado + mapa + filtros)
* **Evento** (landing pública por evento)
* **Organizadores** (beneficios + demo)
* **Precios**
* **Cómo funciona** (asistentes y organizadores)
* **Blog / Recursos**
* **Soporte** (FAQ + help center)
* **Descargar app** (deep links iOS/Android)
* **Legal** (Términos, Privacidad, Reembolsos)

---

## 6) Home – secciones y contenido

### 6.1 Hero

* **Título (ejemplo):** “La app definitiva para eventos: vende, controla acceso y crea comunidad.”
* **Subcopy:** “Tickets en segundos, **QR que funciona sin señal**, scanner en tu teléfono y un feed social con anuncios, encuestas y cámara D+1.”
* **CTAs:** Crear mi evento (primario) · Descubrir eventos (secundario)
* **Badges:** QR offline · iOS/Android · NIO/USD · Analytics

### 6.2 Paquete completo (value props)

Tarjetas: Publicación rápida · Venta y cobro · Control de acceso (offline) · Códigos/pricing · Panel y métricas · Equipo/roles · API/webhooks · Soporte.

### 6.3 Para organizadores: 4 pasos

1. Crear evento 2) Definir tickets 3) Cobrar NIO/USD 4) Controlar acceso (QR offline, roles).

### 6.4 Operación en sitio (diferencial técnico)

Bullets: scanner móvil, offline real (precarga + validación local), sync automático, duplicados, check‑in manual.

### 6.5 Métricas & panel

KPI cards (ventas por canal/fase, aforo, check‑ins por minuto, cupones, ingresos/payouts, engagement social) + mini‑gráficas.

### 6.6 Social (protagonista)

Feed con posts/comentarios/reacciones; anuncios fijados; encuestas; **cámara D+1** (galería compartida, revelado mañana, moderación, descargas habilitables).

### 6.7 Precios simples

Tabla Starter/Pro/Enterprise con bullets y notas (payouts/impuestos). CTA a “Ver detalles”/“Hablar con ventas”.

### 6.8 Beneficios & verticales

Beneficios: menos filas, más conversión, control total, datos accionables. Verticales: Clubs/Bares, Conciertos/Festivales, Deportes, Ferias/Conferencias. Testimonios/Logos (cuando existan).

### 6.9 Demo & cierre

Video 60–90s (crear → vender → escaneo offline → métricas → social). CTAs finales: Crear mi evento · Solicitar demo. Enlaces: Descargar app, Centro de ayuda.

### 6.10 FAQ

Preguntas sobre QR offline, métodos de pago/monedas, moderación D+1, migraciones, reembolsos.

---

## 7) Páginas clave – contenido mínimo por sección

### 7.1 Descubrir

* Filtros (ciudad, fecha, categoría, precio), tarjetas de evento (imagen, fecha, venue, “desde \$”, “Quedan X”), toggle mapa.

### 7.2 Evento

* Header (título, fecha, venue + mapa, organizador verificado), selector de tickets (tiers, códigos), descripción, line‑up, políticas, preguntas, Tabs: **Social** (solo compradores) y **Galería D+1**.
* Sidebar sticky: CTA comprar, contador, “Amigos que van”.

### 7.3 Organizadores

* Beneficios: publicación, cobro/conciliación, acceso offline, social, analytics.
* Mini‑checklist: roles staff, exportaciones, reembolsos, API.
* CTA: Empezar gratis / Solicitar demo.

### 7.4 Precios

* Tabla clara, notas de comisiones/payouts/impuestos, comparativa de funciones.

### 7.5 Cómo funciona

* Dos tabs: **Asistentes** (Descubrir → Comprar → Entrar QR) y **Organizadores** (Crear → Definir tickets → Cobrar → Operar → Medir).

### 7.6 Blog / Recursos

* Pilares: marketing de eventos, control de acceso sin señal, best practices de pricing/cupones, casos de éxito.

### 7.7 Soporte (FAQ + help center)

* Buscador, categorías, artículos intro, contacto.

---

## 8) Lineamientos de diseño (UI/UX)

### 8.1 Identidad

* **Tono:** profesional y confiable, con energía social. Español neutro con guiños locales.
* **Tipografía:** Sans moderna (Inter/Manrope). Jerarquía clara (H1 48–64, H2 32–40, body 16–18).
* **Color (accesible):**

  * Primario **Azul** (confianza) — p.ej., `#1E3A8A` / `#0B1020` (dark bg).
  * **CTA Naranja** (acción) — p.ej., `#FF6B2D` / hover un tono más oscuro.
  * Éxito `#10B981`, Advertencia `#F59E0B`, Neutros `#111827`–`#F8FAFC`.
* **Iconografía:** línea simple (Lucide), esquinas 8–16px.
* **Imágenes:** eventos reales, público, artistas, puertas; mockups de feed/encuestas/escaneo.
* **Motion:** micro‑animaciones en KPI/encuestas; transición suave en tabs; confetti minimal tras compra.
* **Accesibilidad:** contraste AA, foco visible, targets ≥ 44px, soporte teclado.

### 8.2 Componentes clave

* Navbar, CTA primario/ secundario, Hero con mock, Cards de evento, Selector de tickets (tabla + stepper), KPI cards, Chart (línea/área/barras), Tabs (Asistente/Organizador), Alertas (éxito/error), Footer.

### 8.3 Performance & SEO

* Next/Image, lazy load, prefetch, minimizar JS, PWA opcional.
* Metadatos por evento; schema.org `Event` + `Offer`; Open Graph con portada.

---

## 9) Stack sugerido (sitio)

* **Next.js 14 (App Router)** + **TypeScript**.
* **Tailwind CSS** + **shadcn/ui** + **Lucide** + **Framer Motion**.
* **React Query** para datos; **Contentlayer/MDX** para páginas informativas.
* **i18n** (ES base; EN opcional tras lanzamiento).
* Deploy en **Vercel**. Variables para `API_BASE_URL` (Hi.Events) y `SOCIAL_API_URL`.

> Nota: el backend de ticketing (Hi.Events/Laravel) ya existe; el social puede ser un servicio aparte (Firebase/Supabase). El sitio web consume ambos según necesidad.

---

## 10) Contratos de datos (placeholder para conectar después)

* **Auth**: JWT emitido por Hi.Events; guardar en cookies httpOnly (SSR) o Secure Storage (app).
* **Eventos**: `GET /api/v1/events?city=&date=&category=` → listado con paginación.
* **Evento**: `GET /api/v1/events/:id` → datos + tiers; `POST /orders` para iniciar checkout.
* **Social**: `GET /social/events/:id/feed`, `POST /social/posts`, `POST /social/polls/:id/vote`.
* **Galería D+1**: `GET /social/events/:id/gallery` (bloqueada hasta hora de revelado).

---

## 11) Copy de referencia (hero)

1. **La app de eventos que también es tu comunidad.** Vende y controla acceso con QR offline, mientras tu audiencia vibra en el feed con anuncios, encuestas y cámara D+1.
2. **La app definitiva para tus eventos.** Publicá, cobrá y escaneá con tu teléfono. Encendé el hype con feed y galería revelada al día siguiente.
3. **Operación impecable, hype medible.** Ticketing robusto con modo offline + un ecosistema social integrado. Medí ventas y engagement en un solo panel.

---

## 12) Analítica & medición

* Eventos de clic en CTAs (Hero, Precios, Demo).
* Scroll‑depth por sección del home.
* Filtros usados en Descubrir.
* Funnel de compra (vista Evento → add to cart → checkout → success).
* Interacciones sociales (posts, encuestas) — cuando se conecte el microservicio.

---

## 13) Criterios de aceptación (MVP sitio)

* **Home** con todas las secciones arriba listadas, responsive y accesible (AA).
* **Descubrir** con filtros funcionales (client‑side) y tarjetas.
* **Evento** con selector de tickets (UI) y CTA a checkout (stub si no hay API).
* **Organizadores** con checklist y CTA demo/onboarding.
* **Precios** con tabla comparativa editable.
* **FAQ** con 8–12 preguntas base.
* **SEO**: metas, OG, schema en páginas de evento.
* **Rendimiento**: LCP < 2.5s en 4G, CLS \~0.

---

## 14) Roadmap próximo

1. Conectar autenticación (JWT Hi.Events) y estados de sesión.
2. Integrar listado/landing de eventos (SSR + caché).
3. Conectar selector de tickets y “Start checkout”.
4. Montar microservicio social (feed + encuestas) y vistas web.
5. Preparar landing de galería D+1 (bloqueo/desbloqueo por hora).
6. Añadir panel de métricas inicial (screenshots reales cuando existan).

---

> **Nota para el AI Agent:** construir componentes atómicos, extracción a `@/components` con props tipadas. Mantener contraste y accesibilidad. Dejar textos en archivos de contenido para edición no técnica (MDX/JSON). No asumir proveedores de pago públicos en el sitio hasta confirmación; usar copy genérico “Pagos locales y USD”.
