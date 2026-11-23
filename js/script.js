document.addEventListener("DOMContentLoaded", () => {
    const TU_TELEFONO = "573127645859";

    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_portfolio: "Portafolio",
            nav_contact: "Contacto",
            nav_cta: "Iniciar Proyecto",
            back_home: "← Volver al Inicio",
            detail_includes_title: "¿Qué incluye exactamente este plan?",
            req_title: "Requisitos para iniciar:",
            hero_badge: "Estrategia & Desarrollo Web Premium",
            hero_title_1: "Menos visitas perdidas,",
            hero_title_2: "más clientes facturados.",
            hero_desc: "Diseñamos páginas web exclusivas y sistemas automatizados de alta conversión para empresas y marcas que buscan autoridad, velocidad y resultados reales.",
            hero_btn_1: "Ver Portafolio",
            hero_btn_2: "Explorar Planes",
            services_title: "Nuestras Soluciones",
            services_subtitle: "Inversión transparente diseñada para escalar la presencia digital de tu negocio.",
            plan1_tier: "Plan Esencial",
            plan1_name: "El Impulso",
            plan1_desc: "La presencia digital estratégica que tu marca necesita para destacar y captar clientes desde el primer día.",
            plan1_f1: "Landing Page de Alto Impacto",
            plan1_f2: "Diseño 100% Adaptable a Móvil",
            plan1_f3: "Google Maps & Formulario Directo",
            plan1_f4: "Botones de Contacto Automatizados",
            plan1_f5: "Entrega en 3–5 días hábiles",
            plan1_btn: "Ver Detalles y Cotizar",
            plan2_badge: "El Más Solicitado",
            plan2_tier: "Plan Profesional",
            plan2_name: "Crecimiento Automatizado",
            plan2_desc: "Automatización y estructura multipágina. Ideal para empresas de servicios, clínicas, comercios y restaurantes.",
            plan2_f1: "Sitio Web Multipágina (Hasta 5 secciones)",
            plan2_f2: "Catálogo Interactivo o Reserva de Citas",
            plan2_f3: "Cálculo Automático de Pedidos / Presupuestos",
            plan2_f4: "Optimización de Velocidad y SEO Local",
            plan2_f5: "Entrega en 7–10 días hábiles",
            plan2_btn: "Adquirir Plan",
            plan3_tier: "Plan Corporativo",
            plan3_name: "Sistema a Medida",
            plan3_desc: "Desarrollo web avanzado con base de datos y panel administrativo propio para escalar tu operación.",
            plan3_f1: "Todo lo incluido en el Plan Profesional",
            plan3_f2: "Base de Datos y Panel de Gestión Privado",
            plan3_f3: "Integración de Pasarela de Pagos / Reservas",
            plan3_f4: "SEO Técnico Avanzado + Analítica",
            plan3_f5: "30 Días de Soporte Prioritario VIP",
            plan3_btn: "Solicitar Arquitectura",
            maint_badge: "Respaldo Continuo",
            maint_title: "Soporte & Actualización Mensual",
            maint_desc: "Tu negocio evoluciona y tu web debe mantenerse impecable. Nos encargamos de las actualizaciones, seguridad y rendimiento técnico para que tú solo te enfoques en facturar.",
            maint_f1: "Actualización de precios, servicios o catálogo",
            maint_f2: "Optimización de imágenes y velocidad de carga",
            maint_f3: "Monitoreo de disponibilidad y seguridad SSL",
            maint_f4: "Soporte técnico directo por WhatsApp y Email",
            maint_f5: "Ajustes visuales y mejoras mensuales",
            maint_btn: "Asegurar Soporte",
            port_title: "Proyectos & Demos",
            port_subtitle: "Ejemplos reales de interfaces diseñadas para convertir visitantes en clientes.",
            demo1_tag: "Sistema Web & Reservas",
            demo1_desc: "Plataforma completa con autenticación de usuarios, cálculo dinámico de tarifas por hora/día/mes, control de disponibilidad en tiempo real y gestión de reservas.",
            demo_link: "Probar Sistema en Vivo →",
            demo1_title: "Sistema de Coworking Ejecutivo",
            contact_title: "Hablemos de tu Proyecto",
            contact_subtitle: "Cuéntanos qué necesita tu negocio y te responderemos con una propuesta clara en menos de 24 horas.",
            form_name: "Tu nombre o empresa",
            form_email: "Correo electrónico",
            opt_basic: "Plan Esencial — El Impulso (260 €)",
            opt_pro: "Plan Profesional — Crecimiento Automatizado (490 €)",
            opt_prem: "Plan Corporativo — Sistema a Medida (850 €)",
            form_msg: "Cuéntanos brevemente sobre tu negocio y qué objetivo quieres lograr...",
            form_submit: "Enviar Consulta por WhatsApp",
            footer_tagline: "Arquitectura web y soluciones digitales de alto nivel.",
            footer_connect: "Conectemos",
            footer_rights: "Todos los derechos reservados.",
            demo1_tag: "Frontend Web • HTML5 / CSS3 / JS",
            demo1_title: "Sistema de Coworking Ejecutivo (Interfaz Web)",
            demo1_desc: "Prototipo interactivo de alta velocidad con diseño responsivo, cálculo dinámico de tarifas por hora/día/mes y simulación de reservas en cliente.",
            demo2_tag: "Full-Stack Enterprise • Java + Vaadin + PostgreSQL",
            demo2_title: "Sistema de Coworking Cloud (Arquitectura Java)",
            demo2_desc: "Aplicación empresarial con arquitectura en capas, portal dual (Cliente y Administrador), persistencia real en base de datos PostgreSQL (Neon) y despliegue en Docker. (Nota: El servidor gratuito puede tardar ~45s en despertar tras inactividad).",
            

            // Detalles Plan Básico
            pb_badge: "Plan Esencial",
            pb_title: "Plan Esencial: El Impulso",
            pb_desc: "La solución estratégica para negocios locales y marcas que buscan proyectar autoridad desde el primer día y convertir visitas en clientes directos.",
            pb_f1: "Landing Page de Alto Impacto (1 Página): Estructurada estratégicamente para captar atención y guiar al cliente hacia el contacto.",
            pb_f2: "Catálogo o Sección de Servicios: Espacio limpio y optimizado para mostrar tus servicios principales, fotografías y precios claros.",
            pb_f3: "Botones de Acción Directos: Enlaces configurados a WhatsApp, llamada o formulario para recibir consultas formateadas al instante.",
            pb_f4: "Diseño 100% Adaptable (Mobile-First): Visualización impecable en iPhone, Android, tablet y ordenador.",
            pb_f5: "Optimización de Velocidad: Compresión de recursos para tiempos de carga ultrarrápidos.",
            pb_f6: "Acompañamiento Inicial: Entrega llave en mano y 7 días de soporte técnico tras el lanzamiento.",
            pb_cta_title: "¿Listo para arrancar?",
            pb_cta_desc: "Al pulsar el botón, te comunicarás directamente con nuestro equipo de desarrollo para coordinar el inicio de tu proyecto.",
            pb_cta_btn: "🚀 Iniciar Plan Esencial por WhatsApp",
            pb_req1: "Logotipo de tu negocio (en buena calidad).",
            pb_req2: "Fotografías de tus servicios o productos.",
            pb_req3: "Textos, servicios y precios actualizados.",

            // Detalles Plan Profesional
            pp_badge: "El Más Solicitado 🔥",
            pp_title: "Plan Profesional: Crecimiento Automatizado",
            pp_desc: "Diseñado para empresas de servicios, clínicas, comercios y gastronomía que buscan automatizar citas, pedidos o cotizaciones sin pagar comisiones a terceros.",
            pp_f1: "Sitio Web Multipágina (Hasta 5 Secciones): Inicio estratégico, catálogo o servicios interactivos, sobre nosotros, portafolio y contacto.",
            pp_f2: "Catálogo con Filtros Inteligentes: Tus clientes navegan por categorías de forma fluida e intuitiva.",
            pp_f3: "Sistema Automatizado de Pedidos / Presupuestos: El usuario selecciona servicios o productos en la web y envía el resumen calculado directamente a tu WhatsApp o correo.",
            pp_f4: "Captura de Clientes Potenciales: Formulario estructurado para almacenar contactos interesados y hacer seguimiento comercial.",
            pp_f5: "SEO Local y Rendimiento: Optimización técnica para posicionar tu negocio en búsquedas de tu ciudad.",
            pp_f6: "Soporte Prioritario: 15 días de acompañamiento técnico y ajustes tras la publicación.",
            pp_cta_title: "¿Listo para escalar?",
            pp_cta_desc: "Conéctate directamente con nuestro equipo para iniciar la estrategia y arquitectura de tu plataforma digital.",
            pp_cta_btn: "🔥 Adquirir Plan Profesional por WhatsApp",
            pp_req1: "Identidad visual (Logotipo, paleta de colores si dispones de ella).",
            pp_req2: "Listado completo de servicios o productos con precios.",
            pp_req3: "Accesos de dominio o hosting (si ya los adquiriste).",

            // Detalles Plan Corporativo
            pc_badge: "Arquitectura Total 💎",
            pc_title: "Plan Corporativo: Sistema a Medida",
            pc_desc: "Tu departamento de ingeniería web externo. Creamos plataformas robustas con base de datos, gestión de reservas o comercio electrónico adaptadas a la operación de tu empresa.",
            pc_f1: "Plataforma Web Corporativa a Medida: Arquitectura escalable diseñada según los flujos reales de tu negocio.",
            pc_f2: "Base de Datos & Sistema de Reservas / E-commerce: Gestión real de citas, inventario, usuarios o pasarela de pagos integrada.",
            pc_f3: "Panel de Administración Privado: Interfaz intuitiva para que puedas actualizar precios, disponibilidad y contenido sin depender de soporte técnico.",
            pc_f4: "Diseño UI/UX Exclusivo: Prototipado personalizado alineado con estándares internacionales de conversión.",
            pc_f5: "SEO Técnico Avanzado + Analítica: Indexación optimizada y medición de tráfico y conversiones.",
            pc_f6: "Soporte VIP y Capacitación: Sesión de entrenamiento por videollamada para tu equipo y 30 días de soporte prioritario.",
            pc_cta_title: "¿Listo para liderar tu sector?",
            pc_cta_desc: "Agenda una sesión estratégica de diagnóstico para definir la arquitectura tecnológica ideal para tu empresa.",
            pc_cta_btn: "💎 Solicitar Plan Corporativo por WhatsApp",
            pc_req1: "Reunión inicial de requerimientos (Google Meet / Zoom).",
            pc_req2: "Material gráfico corporativo (logotipo, fotos o vídeos).",
            pc_req3: "Información legal y políticas de privacidad del negocio.",

            calc_badge: "Cotizador Instantáneo",
            calc_title: "Calcula la Inversión de tu Web",
            calc_subtitle: "Selecciona las funcionalidades que necesita tu proyecto y obtén un presupuesto estimado al instante.",
            calc_base_label: "1. Estructura Base (Elige una):",
            calc_opt_landing: "Landing Page (1 Página de Alto Impacto)",
            calc_opt_multi: "Sitio Corporativo Multipágina (Hasta 5 secciones)",
            calc_opt_system: "Plataforma Web a Medida con Base de Datos",
            calc_extras_label: "2. Funcionalidades Adicionales:",
            calc_ext_booking: "Sistema de Citas o Pedidos por WhatsApp",
            calc_ext_lang: "Versión Bilingüe (Español + Inglés)",
            calc_ext_seo: "Optimización SEO Local + Google Maps",
            calc_ext_express: "Entrega Express Prioritaria (72 horas)",
            calc_est_label: "Inversión Estimada",
            calc_note: "Pago único. Sin mensualidades obligatorias. 50% al iniciar y 50% contra entrega.",
            calc_btn: "Solicitar este Presupuesto por WhatsApp",
            footer_legal: "Aviso Legal y Privacidad",
            legal_modal_title: "Aviso Legal y Política de Privacidad",
            legal_html: `
                <p><strong>1. Identidad del Titular:</strong> Onyx Nox Studios es un estudio independiente especializado en diseño, desarrollo web y soluciones digitales.</p>
                <p><strong>2. Protección de Datos (RGPD / Privacidad):</strong> Los datos personales facilitados a través de nuestros formularios o canales de contacto (nombre, correo electrónico o teléfono) se utilizan exclusivamente para responder a tu solicitud comercial y elaborar presupuestos a medida. No cedemos ni vendemos datos a terceros.</p>
                <p><strong>3. Propiedad Intelectual:</strong> Todo el código, diseño visual, logotipos y demos mostrados en este sitio web pertenecen a Onyx Nox Studios. Una vez liquidado el proyecto contratado, el cliente recibe la titularidad total de su sitio web.</p>
                <p><strong>4. Derechos del Usuario:</strong> Puedes solicitar la modificación o eliminación de tus datos de contacto en cualquier momento escribiendo a nuestro canal oficial.</p>
            `,

            prices: {
                basic: "260 €",
                pro: "490 €",
                prem: "850 €",
                maint: "45 €",
                curr: "EUR",
                detailCurr: "EUR / Pago Único",
                maintCurr: "EUR / mes"
            },
            wa_general: "Hola, Onyx Nox Studios! Estaba revisando su portafolio web y me gustaría solicitar una asesoría para crear la página web de mi negocio.",
            wa_maint: "Hola, Onyx Nox Studios! Me interesa contratar el Plan de Soporte & Actualización Mensual (45 €/mes).",
            wa_plans: {
                basic: "Hola, Onyx Nox Studios! Estaba revisando su web y me interesa contratar el *Plan Esencial: El Impulso* (260 € EUR). Me gustaría recibir más información para iniciar.",
                pro: "Hola, Onyx Nox Studios! Estaba revisando su web y me interesa contratar el *Plan Profesional: Crecimiento Automatizado* (490 € EUR). Me gustaría recibir más información para iniciar.",
                prem: "Hola, Onyx Nox Studios! Estaba revisando su web y me interesa contratar el *Plan Corporativo: Sistema a Medida* (850 € EUR). Me gustaría agendar una reunión para iniciar."
            }
        },
        us: {
            nav_home: "Home",
            nav_services: "Services",
            nav_portfolio: "Portfolio",
            nav_contact: "Contact",
            nav_cta: "Start Project",
            back_home: "← Back to Home",
            detail_includes_title: "What is included in this plan?",
            req_title: "Requirements to get started:",
            hero_badge: "Premium Web Strategy & Development",
            hero_title_1: "Fewer missed leads,",
            hero_title_2: "more closed revenue.",
            hero_desc: "We build high-converting, custom websites and automated booking or sales flows for businesses that demand authority, speed, and measurable growth.",
            hero_btn_1: "View Portfolio",
            hero_btn_2: "Explore Plans",
            services_title: "Our Solutions",
            services_subtitle: "Transparent investment tiers built to scale your company's digital presence.",
            plan1_tier: "Essential Plan",
            plan1_name: "The Launchpad",
            plan1_desc: "A high-impact digital presence designed to position your brand and capture qualified leads from day one.",
            plan1_f1: "High-Converting Custom Landing Page",
            plan1_f2: "100% Mobile-First Responsive Design",
            plan1_f3: "Google Maps & Direct Lead Form",
            plan1_f4: "Automated Contact & Booking Triggers",
            plan1_f5: "Delivery in 3–5 business days",
            plan1_btn: "View Details & Quote",
            plan2_badge: "Most Popular",
            plan2_tier: "Professional Plan",
            plan2_name: "Automated Growth",
            plan2_desc: "Multi-page architecture and automation. Ideal for local service companies, clinics, retail, and hospitality.",
            plan2_f1: "Multi-Page Website (Up to 5 sections)",
            plan2_f2: "Interactive Service Catalog or Appointment Booking",
            plan2_f3: "Automated Order / Instant Quote Calculator",
            plan2_f4: "Speed Optimization & Local SEO Setup",
            plan2_f5: "Delivery in 7–10 business days",
            plan2_btn: "Select Plan",
            plan3_tier: "Corporate Plan",
            plan3_name: "Custom Web System",
            plan3_desc: "Full-stack web application with custom database and private admin dashboard to streamline operations.",
            plan3_f1: "Everything included in Professional Plan",
            plan3_f2: "Custom Database & Private Admin Dashboard",
            plan3_f3: "Payment Gateway or Advanced Scheduling",
            plan3_f4: "Technical SEO + Conversion Analytics",
            plan3_f5: "30 Days of Priority VIP Support",
            plan3_btn: "Request Architecture",
            maint_badge: "Ongoing Care",
            maint_title: "Monthly Support & Updates",
            maint_desc: "Your business evolves and your website should stay sharp. We handle updates, uptime monitoring, and technical performance while you focus on growth.",
            maint_f1: "Monthly updates to pricing, services, or gallery",
            maint_f2: "Image compression and load speed optimization",
            maint_f3: "24/7 uptime monitoring & SSL security",
            maint_f4: "Direct priority support via WhatsApp & Email",
            maint_f5: "Ongoing UI refinements and content adjustments",
            maint_btn: "Secure Support",
            port_title: "Selected Work & Demos",
            port_subtitle: "Real interface concepts engineered to turn traffic into paying customers.",
            demo1_tag: "Web App & Booking Engine",
            demo1_desc: "Full-featured reservation platform with user authentication, real-time availability tracking, dynamic hourly/daily/monthly pricing, and booking management.",
            demo_link: "Launch Live System →",
            demo1_title: "Executive Coworking System",
            contact_title: "Let's Build Your Project",
            contact_subtitle: "Tell us about your business goals and receive a clear proposal within 24 hours.",
            form_name: "Your name or company",
            form_email: "Business email",
            opt_basic: "Essential Plan — The Launchpad ($290 USD)",
            opt_pro: "Professional Plan — Automated Growth ($550 USD)",
            opt_prem: "Corporate Plan — Custom Web System ($950 USD)",
            form_msg: "Briefly describe your business and what you want to achieve...",
            form_submit: "Send Inquiry via WhatsApp",
            footer_tagline: "High-end web architecture and digital growth solutions.",
            footer_connect: "Connect",
            footer_rights: "All rights reserved.",
            demo1_tag: "Web Frontend • HTML5 / CSS3 / JS",
            demo1_title: "Executive Coworking System (Web Interface)",
            demo1_desc: "High-speed interactive prototype featuring responsive design, dynamic hourly/daily/monthly rate calculation, and client-side booking simulation.",
            demo2_tag: "Full-Stack Enterprise • Java + Vaadin + PostgreSQL",
            demo2_title: "Cloud Coworking System (Java Architecture)",
            demo2_desc: "Enterprise layered application featuring a dual portal (Client & Admin), real database persistence on PostgreSQL (Neon), and Docker cloud deployment. (Note: Free server may take ~45s to wake up after inactivity).",

            // Essential Plan Details
            pb_badge: "Essential Plan",
            pb_title: "Essential Plan: The Launchpad",
            pb_desc: "The strategic solution for local businesses and brands looking to project authority from day one and turn visitors into direct leads.",
            pb_f1: "High-Impact Landing Page (1 Page): Strategically structured to capture attention and guide visitors toward action.",
            pb_f2: "Services or Product Showcase: Clean layout optimized to present your core offerings, photos, and clear pricing.",
            pb_f3: "Direct Action Triggers: Configured links to WhatsApp, phone, or lead forms to receive formatted inquiries instantly.",
            pb_f4: "100% Mobile-First Responsive Design: Flawless display across iPhone, Android, tablet, and desktop.",
            pb_f5: "Speed Optimization: Asset compression for ultra-fast loading times.",
            pb_f6: "Launch Support: Turnkey delivery plus 7 days of technical support after launch.",
            pb_cta_title: "Ready to launch?",
            pb_cta_desc: "Click the button below to connect directly with our development team and kick off your project.",
            pb_cta_btn: "🚀 Start Essential Plan via WhatsApp",
            pb_req1: "Your business logo (high resolution).",
            pb_req2: "Photos of your services, team, or products.",
            pb_req3: "Updated service descriptions and pricing.",

            // Professional Plan Details
            pp_badge: "Most Popular 🔥",
            pp_title: "Professional Plan: Automated Growth",
            pp_desc: "Built for service companies, clinics, retail, and hospitality looking to automate bookings, orders, or quotes with zero third-party fees.",
            pp_f1: "Multi-Page Website (Up to 5 Sections): Strategic Home, interactive catalog/services, About, Portfolio, and Contact.",
            pp_f2: "Smart Category Filtering: Allows visitors to browse services or items smoothly and intuitively.",
            pp_f3: "Automated Order / Quote Calculator: Users build their request online and send the calculated summary straight to your WhatsApp or email.",
            pp_f4: "Lead Capture System: Structured form to collect prospect details for follow-up campaigns.",
            pp_f5: "Local SEO & Performance: Technical setup to help your business rank in local search results.",
            pp_f6: "Priority Support: 15 days of post-launch technical assistance and refinements.",
            pp_cta_title: "Ready to scale?",
            pp_cta_desc: "Connect directly with our team to start planning the architecture of your digital platform.",
            pp_cta_btn: "🔥 Get Professional Plan via WhatsApp",
            pp_req1: "Brand identity (Logo and color palette if available).",
            pp_req2: "Complete list of services or products with pricing.",
            pp_req3: "Domain or hosting credentials (if already purchased).",

            // Corporate Plan Details
            pc_badge: "Full Architecture 💎",
            pc_title: "Corporate Plan: Custom Web System",
            pc_desc: "Your external web engineering partner. We build robust platforms with custom databases, booking engines, or e-commerce tailored to your operations.",
            pc_f1: "Custom Corporate Web Platform: Scalable architecture engineered around your exact business workflows.",
            pc_f2: "Database & Booking / E-commerce Engine: Real-time appointment scheduling, inventory, user accounts, or payment gateway integration.",
            pc_f3: "Private Admin Dashboard: Intuitive control panel so you can update pricing, availability, and content without touching code.",
            pc_f4: "Bespoke UI/UX Design: Custom prototyping aligned with international conversion standards.",
            pc_f5: "Advanced Technical SEO + Analytics: Optimized indexing and conversion tracking setup.",
            pc_f6: "VIP Support & Training: Live video onboarding session for your team plus 30 days of priority support.",
            pc_cta_title: "Ready to lead your market?",
            pc_cta_desc: "Schedule a strategy session to define the ideal technical architecture for your company.",
            pc_cta_btn: "💎 Request Corporate Plan via WhatsApp",
            pc_req1: "Initial discovery call (Google Meet / Zoom).",
            pc_req2: "Corporate media assets (logo, high-res photos, or videos).",
            pc_req3: "Legal information and business privacy policies.",

            calc_badge: "Instant Quote Builder",
            calc_title: "Estimate Your Website Investment",
            calc_subtitle: "Select the structure and features your business needs to get an instant project estimate.",
            calc_base_label: "1. Core Structure (Choose one):",
            calc_opt_landing: "High-Converting Landing Page (1 Page)",
            calc_opt_multi: "Multi-Page Corporate Website (Up to 5 sections)",
            calc_opt_system: "Custom Web Application with Database",
            calc_extras_label: "2. Optional Add-Ons:",
            calc_ext_booking: "Appointment Booking or Direct Order Flow",
            calc_ext_lang: "Bilingual Version (English + Spanish)",
            calc_ext_seo: "Local SEO Optimization + Google Maps",
            calc_ext_express: "Priority Express Delivery (72 Hours)",
            calc_est_label: "Estimated Investment",
            calc_note: "One-time payment. No mandatory monthly fees. 50% upfront and 50% upon delivery.",
            calc_btn: "Send This Quote via WhatsApp",
            footer_legal: "Legal Notice & Privacy Policy",
            legal_modal_title: "Legal Notice & Privacy Policy",
            legal_html: `
                <p><strong>1. Business Identity:</strong> Onyx Nox Studios is an independent digital studio specializing in custom web development, UI/UX design, and web applications.</p>
                <p><strong>2. Data Privacy:</strong> Personal information submitted through our contact forms or direct messaging channels (name, email, phone number) is used strictly to respond to project inquiries and prepare proposals. We never sell or share client data with third parties.</p>
                <p><strong>3. Intellectual Property:</strong> All source code, visual assets, branding, and portfolio demos displayed on this site are the property of Onyx Nox Studios. Upon full payment of a commissioned project, full ownership of the delivered website transfers to the client.</p>
                <p><strong>4. Contact & Data Removal:</strong> You may request the update or deletion of your inquiry records at any time through our official contact channels.</p>
            `,

            prices: {
                basic: "$290",
                pro: "$550",
                prem: "$950",
                maint: "$49",
                curr: "USD",
                detailCurr: "USD / One-Time",
                maintCurr: "USD / mo"
            },
            wa_general: "Hello Onyx Nox Studios! I was reviewing your web portfolio and would like to schedule a consultation for my business website.",
            wa_maint: "Hello Onyx Nox Studios! I am interested in the Monthly Support & Updates plan ($49 USD/mo).",
            wa_plans: {
                basic: "Hello Onyx Nox Studios! I was reviewing your website and I am interested in the *Essential Plan: The Launchpad* ($290 USD). I would like more information to get started.",
                pro: "Hello Onyx Nox Studios! I was reviewing your website and I am interested in the *Professional Plan: Automated Growth* ($550 USD). I would like more information to get started.",
                prem: "Hello Onyx Nox Studios! I was reviewing your website and I am interested in the *Corporate Plan: Custom Web System* ($950 USD). I would like to schedule a meeting to get started."
            }
        }
    };

    let currentRegion = localStorage.getItem("onyx_region") || "es";

    const applyRegion = (region) => {
        currentRegion = region;
        localStorage.setItem("onyx_region", region);
        const t = translations[region];
        document.documentElement.lang = region === "us" ? "en" : "es";

        // Actualizar botones activos
        document.querySelectorAll(".region-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.region === region);
        });

        // Actualizar textos
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (t[key]) el.textContent = t[key];
        });

        // Actualizar placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (t[key]) el.setAttribute("placeholder", t[key]);
        });

        // Actualizar precios en index.html
        const priceMap = {
            "price-basic": t.prices.basic,
            "curr-basic": t.prices.curr,
            "price-pro": t.prices.pro,
            "curr-pro": t.prices.curr,
            "price-prem": t.prices.prem,
            "curr-prem": t.prices.curr,
            "price-maint": t.prices.maint,
            "curr-maint": t.prices.maintCurr
        };

        Object.entries(priceMap).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        });

        // Actualizar precio en páginas internas de detalle (plan-basico, plan-profesional, plan-premium)
        const planType = document.body.getAttribute("data-plan-page");
        if (planType && t.prices[planType]) {
            const detailPriceEl = document.getElementById("detail-price");
            const detailCurrEl = document.getElementById("detail-curr");
            if (detailPriceEl) detailPriceEl.textContent = t.prices[planType];
            if (detailCurrEl) detailCurrEl.textContent = t.prices.detailCurr;
        }

        // Actualizar enlace flotante de WhatsApp
        const btnFloat = document.getElementById("btn-whatsapp-flotante");
        if (btnFloat) {
            btnFloat.href = `https://wa.me/${TU_TELEFONO}?text=${encodeURIComponent(t.wa_general)}`;
        }
    };

    // Eventos del selector ES / US
    document.querySelectorAll(".region-btn").forEach((btn) => {
        btn.addEventListener("click", () => applyRegion(btn.dataset.region));
    });

    // Botón de mantenimiento mensual (index.html)
    const btnMantenimiento = document.getElementById("btn-cotizar-mantenimiento");
    if (btnMantenimiento) {
        btnMantenimiento.addEventListener("click", () => {
            const msg = translations[currentRegion].wa_maint;
            window.open(`https://wa.me/${TU_TELEFONO}?text=${encodeURIComponent(msg)}`, "_blank");
        });
    }

    // Botón de contratación en páginas internas de detalle
    const btnDetalle = document.getElementById("btn-contratar-detalle");
    if (btnDetalle) {
        btnDetalle.addEventListener("click", () => {
            const planType = document.body.getAttribute("data-plan-page") || "basic";
            const msg = translations[currentRegion].wa_plans[planType];
            window.open(`https://wa.me/${TU_TELEFONO}?text=${encodeURIComponent(msg)}`, "_blank");
        });
    }

    // Formulario de contacto (index.html)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("client-name").value.trim();
            const email = document.getElementById("client-email").value.trim();
            const plan = document.getElementById("client-plan").value;
            const message = document.getElementById("client-message").value.trim();

            const text = currentRegion === "us"
                ? `Hello Onyx Nox Studios! My name is *${name}* (${email}).\n\nI am interested in: *${plan}*\n\nProject details: ${message}`
                : `Hola, Onyx Nox Studios! Mi nombre es *${name}* (${email}).\n\nMe interesa: *${plan}*\n\nDetalles del proyecto: ${message}`;

            window.open(`https://wa.me/${TU_TELEFONO}?text=${encodeURIComponent(text)}`, "_blank");
        });
    }

    // Inicializar con la región guardada
    applyRegion(currentRegion);

    // CALCULADORA DINÁMICA DE PRESUPUESTO
    const calcRates = {
        es: { symbol: "€", suffix: " €", base: { landing: 260, multi: 450, system: 800 }, extras: { booking: 90, lang: 80, seo: 60, express: 100 } },
        us: { symbol: "$", suffix: " USD", base: { landing: 290, multi: 500, system: 900 }, extras: { booking: 100, lang: 90, seo: 70, express: 120 } }
    };

    const updateCalculator = () => {
        const displayEl = document.getElementById("calc-total-price");
        if (!displayEl) return;

        const rates = calcRates[currentRegion];
        const selectedBase = document.querySelector('input[name="calc-base"]:checked')?.value || "landing";
        let total = rates.base[selectedBase] || 0;

        document.querySelectorAll(".calc-extra:checked").forEach((chk) => {
            total += rates.extras[chk.value] || 0;
        });

        displayEl.textContent = currentRegion === "us" ? `$${total} USD` : `${total} €`;
    };

    document.querySelectorAll('input[name="calc-base"], .calc-extra').forEach((input) => {
        input.addEventListener("change", updateCalculator);
    });

    const btnSendCalc = document.getElementById("btn-send-calc");
    if (btnSendCalc) {
        btnSendCalc.addEventListener("click", () => {
            const totalText = document.getElementById("calc-total-price")?.textContent || "";
            const baseLabel = document.querySelector('input[name="calc-base"]:checked')?.nextElementSibling?.textContent || "";
            const extras = Array.from(document.querySelectorAll(".calc-extra:checked"))
                .map((chk) => chk.nextElementSibling?.textContent)
                .filter(Boolean);

            const extrasText = extras.length > 0 ? extras.join(", ") : (currentRegion === "us" ? "None" : "Ninguno");
            const msg = currentRegion === "us"
                ? `Hello Onyx Nox Studios! I used your website quote calculator:\n\n• *Structure:* ${baseLabel}\n• *Add-ons:* ${extrasText}\n• *Estimated Total:* ${totalText}\n\nI would like to discuss starting this project.`
                : `Hola, Onyx Nox Studios! Usé la calculadora de presupuesto en su web:\n\n• *Estructura:* ${baseLabel}\n• *Extras:* ${extrasText}\n• *Total Estimado:* ${totalText}\n\nMe gustaría conversar para iniciar este proyecto.`;

            window.open(`https://wa.me/${TU_TELEFONO}?text=${encodeURIComponent(msg)}`, "_blank");
        });
    }

    // MODAL LEGAL
    const legalModal = document.getElementById("legal-modal");
    const openLegalBtn = document.getElementById("open-legal-modal");
    const closeLegalBtn = document.getElementById("close-legal-modal");

    if (legalModal && openLegalBtn && closeLegalBtn) {
        openLegalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const bodyEl = document.getElementById("legal-modal-body");
            if (bodyEl) bodyEl.innerHTML = translations[currentRegion].legal_html;
            legalModal.classList.add("open");
        });

        closeLegalBtn.addEventListener("click", () => legalModal.classList.remove("open"));
        legalModal.addEventListener("click", (e) => {
            if (e.target === legalModal) legalModal.classList.remove("open");
        });
    }

    // Asegurar que la calculadora se actualice también al cambiar de región ES/US
    document.querySelectorAll(".region-btn").forEach((btn) => {
        btn.addEventListener("click", updateCalculator);
    });
    updateCalculator();
});