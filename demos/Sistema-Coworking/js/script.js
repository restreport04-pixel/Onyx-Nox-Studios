/* ==========================================================================
   SISTEMA DE COWORKING - LÓGICA MULTIPÁGINA (AUTH + DASHBOARD)
   ========================================================================== */

const TARIFAS = {
    flexible: { hora: 8000, dia: 35000, mes: 450000 },
    fijo: { hora: 12000, dia: 55000, mes: 750000 },
    sala: { hora: 45000, dia: 280000, mes: 3200000 },
    oficina: { hora: 60000, dia: 300000, mes: 4500000 }
};

const CAPACIDADES = {
    flexible: 10,
    fijo: 6,
    sala: 2,
    oficina: 3
};

const NOMBRES_ESPACIOS = {
    flexible: "Puesto flexible",
    fijo: "Escritorio fijo",
    sala: "Sala de reuniones",
    oficina: "Oficina privada"
};

let usuarios = JSON.parse(localStorage.getItem('coworking_usuarios')) || [];
let reservas = JSON.parse(localStorage.getItem('coworking_reservas')) || [];
let usuarioLogueado = JSON.parse(localStorage.getItem('coworking_sesion')) || null;

function inicializarDatosEjemplo() {
    if (reservas.length === 0) {
        const hoy = new Date().toISOString().split('T')[0];
        reservas = [
            { id: "R-001", correo: "juan@gmail.com", espacio: "flexible", modalidad: "hora", fechaInicio: hoy, horaInicio: "09:00", cantidad: 3, personas: 1, total: 24000, estado: "confirmada" },
            { id: "R-002", correo: "maria@gmail.com", espacio: "fijo", modalidad: "dia", fechaInicio: hoy, horaInicio: "--:--", cantidad: 5, personas: 1, total: 275000, estado: "confirmada" },
            { id: "R-003", correo: "pedro@gmail.com", espacio: "sala", modalidad: "hora", fechaInicio: "2026-11-18", horaInicio: "15:00", cantidad: 2, personas: 4, total: 90000, estado: "pendiente" },
            { id: "R-004", correo: "ana@gmail.com", espacio: "oficina", modalidad: "mes", fechaInicio: "2026-12-01", horaInicio: "--:--", cantidad: 1, personas: 3, total: 4500000, estado: "confirmada" }
        ];
        guardarReservasEnStorage();
    }
}

function guardarUsuariosEnStorage() {
    localStorage.setItem('coworking_usuarios', JSON.stringify(usuarios));
}

function guardarReservasEnStorage() {
    localStorage.setItem('coworking_reservas', JSON.stringify(reservas));
}

function guardarSesionEnStorage(usuario) {
    usuarioLogueado = usuario;
    if (usuario) {
        localStorage.setItem('coworking_sesion', JSON.stringify(usuario));
    } else {
        localStorage.removeItem('coworking_sesion');
    }
}

function formatearMoneda(valor) {
    return "$" + Number(valor).toLocaleString('es-CO');
}

// --------------------------------------------------------------------------
// LÓGICA DE AUTENTICACIÓN (index.html)
// --------------------------------------------------------------------------

function registrarUsuario(event) {
    event.preventDefault();

    const nombre = document.getElementById('reg-nombre').value.trim();
    const apellido = document.getElementById('reg-apellido').value.trim();
    const tipoDoc = document.getElementById('reg-tipo-doc').value;
    const doc = document.getElementById('reg-doc').value.trim();
    const correo = document.getElementById('reg-correo').value.trim().toLowerCase();
    const clave = document.getElementById('reg-clave').value;
    const clave2 = document.getElementById('reg-clave2').value;

    if (clave !== clave2) {
        alert("Las contraseñas no coinciden. Por favor verifica.");
        return;
    }

    if (usuarios.find(user => user.correo === correo)) {
        alert("Este correo electrónico ya está registrado.");
        return;
    }

    const nuevoUsuario = { nombre, apellido, tipoDoc, documento: doc, correo, clave };
    usuarios.push(nuevoUsuario);
    guardarUsuariosEnStorage();
    guardarSesionEnStorage(nuevoUsuario);

    alert(`¡Cuenta creada con éxito, ${nombre}! Ingresando al sistema...`);
    window.location.href = "dashboard.html";
}

function iniciarSesion(event) {
    event.preventDefault();

    const correo = document.getElementById('log-correo').value.trim().toLowerCase();
    const clave = document.getElementById('log-clave').value;

    const usuarioEncontrado = usuarios.find(user => user.correo === correo && user.clave === clave);

    if (usuarioEncontrado) {
        guardarSesionEnStorage(usuarioEncontrado);
        window.location.href = "dashboard.html";
    } else {
        alert("Correo o contraseña incorrectos. Si aún no tienes cuenta, regístrate o usa el Acceso Demo.");
    }
}

function entrarModoDemo() {
    const demoUser = {
        nombre: "Cliente",
        apellido: "Ejecutivo",
        correo: "demo@onyxnoxstudios.com"
    };
    guardarSesionEnStorage(demoUser);
    window.location.href = "dashboard.html";
}

function cerrarSesion() {
    guardarSesionEnStorage(null);
    window.location.href = "index.html";
}

// --------------------------------------------------------------------------
// LÓGICA DEL DASHBOARD (dashboard.html)
// --------------------------------------------------------------------------

function calcularTotalReserva(espacioKey, modalidad, cantidad) {
    if (!TARIFAS[espacioKey] || !TARIFAS[espacioKey][modalidad]) return 0;
    return TARIFAS[espacioKey][modalidad] * cantidad;
}

function actualizarCotizadorEnVivo() {
    const espacio = document.getElementById('res-espacio')?.value;
    const cantidad = parseInt(document.getElementById('res-cantidad')?.value) || 0;
    const modalidadRadio = document.querySelector('input[name="modalidad"]:checked');
    const modalidad = modalidadRadio ? modalidadRadio.value : 'hora';
    const totalEl = document.getElementById('live-total-amount');

    if (totalEl) {
        const total = calcularTotalReserva(espacio, modalidad, cantidad);
        totalEl.textContent = formatearMoneda(total);
    }
}

function crearReserva(event) {
    event.preventDefault();

    const correo = document.getElementById('res-correo').value.trim().toLowerCase();
    const espacio = document.getElementById('res-espacio').value;
    const fecha = document.getElementById('res-fecha').value;
    const hora = document.getElementById('res-hora').value || "--:--";
    const cantidad = parseInt(document.getElementById('res-cantidad').value);
    const personas = parseInt(document.getElementById('res-personas').value);
    const modalidadRadio = document.querySelector('input[name="modalidad"]:checked');
    const modalidad = modalidadRadio ? modalidadRadio.value : 'hora';

    if (!espacio || !fecha || isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor completa todos los campos obligatorios de la reserva.");
        return;
    }

    const reservasOcupadas = reservas.filter(r => r.espacio === espacio && r.fechaInicio === fecha && r.estado === 'confirmada').length;
    if (reservasOcupadas >= CAPACIDADES[espacio]) {
        alert("Lo sentimos, no hay cupos disponibles para este espacio en la fecha seleccionada.");
        return;
    }

    const nuevoCodigo = "R-" + String(reservas.length + 1).padStart(3, '0');
    const total = calcularTotalReserva(espacio, modalidad, cantidad);

    const nuevaReserva = {
        id: nuevoCodigo,
        correo,
        espacio,
        modalidad,
        fechaInicio: fecha,
        horaInicio: hora,
        cantidad,
        personas,
        total,
        estado: "confirmada"
    };

    reservas.push(nuevaReserva);
    guardarReservasEnStorage();

    alert(`¡Reserva confirmada! Código: ${nuevoCodigo} · Total: ${formatearMoneda(total)}`);
    document.getElementById('form-reserva').reset();
    if (usuarioLogueado) document.getElementById('res-correo').value = usuarioLogueado.correo;
    actualizarCotizadorEnVivo();

    renderizarTablaReservas();
    actualizarTablaDisponibilidad();
    window.location.hash = "#consultar";
}

function cancelarReserva(codigoReserva) {
    const reserva = reservas.find(r => r.id === codigoReserva);
    if (reserva && confirm(`¿Deseas cancelar la reserva ${codigoReserva}?`)) {
        reserva.estado = "cancelada";
        guardarReservasEnStorage();
        renderizarTablaReservas();
        actualizarTablaDisponibilidad();
    }
}

function renderizarTablaReservas(listaReservas = reservas) {
    const tbody = document.querySelector('#tabla-reservas tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (listaReservas.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;">No se encontraron reservas con esos filtros.</td></tr>`;
        return;
    }

    listaReservas.forEach(res => {
        const tr = document.createElement('tr');
        let badgeClase = "badge-confirmada";
        if (res.estado === "pendiente") badgeClase = "badge-pendiente";
        if (res.estado === "cancelada") badgeClase = "badge-cancelada";

        const modalidadTexto = `${res.cantidad} ${res.modalidad}${res.cantidad > 1 ? 's' : ''}`;
        const inicioTexto = res.horaInicio !== "--:--" ? `${res.fechaInicio} · ${res.horaInicio}` : res.fechaInicio;

        tr.innerHTML = `
            <td><strong>${res.id}</strong></td>
            <td>${NOMBRES_ESPACIOS[res.espacio] || res.espacio}</td>
            <td>${modalidadTexto}</td>
            <td>${inicioTexto}</td>
            <td>${formatearMoneda(res.total)}</td>
            <td><span class="badge ${badgeClase}">${res.estado.toUpperCase()}</span></td>
            <td>
                ${res.estado !== 'cancelada'
                    ? `<button type="button" onclick="cancelarReserva('${res.id}')" style="padding: 0.25rem 0.65rem; font-size: 0.78rem; color: #b91c1c; background: #fef2f2; border: 1px solid #fecaca; border-radius: 4px; margin:0;">Cancelar</button>`
                    : '-'
                }
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function filtrarReservas(event) {
    event.preventDefault();

    const correoFiltro = document.getElementById('con-correo').value.trim().toLowerCase();
    const espacioFiltro = document.getElementById('con-espacio').value;
    const estadoFiltro = document.getElementById('con-estado').value;
    const desdeFiltro = document.getElementById('con-desde').value;
    const hastaFiltro = document.getElementById('con-hasta').value;

    const filtradas = reservas.filter(res => {
        if (correoFiltro && !res.correo.includes(correoFiltro)) return false;
        if (espacioFiltro !== 'todos' && res.espacio !== espacioFiltro) return false;
        if (estadoFiltro !== 'todos' && res.estado !== estadoFiltro) return false;
        if (desdeFiltro && res.fechaInicio < desdeFiltro) return false;
        if (hastaFiltro && res.fechaInicio > hastaFiltro) return false;
        return true;
    });

    renderizarTablaReservas(filtradas);
}

function actualizarTablaDisponibilidad() {
    const tbody = document.querySelector('#tabla-disponibilidad tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const hoy = new Date().toISOString().split('T')[0];

    for (const espacioKey in CAPACIDADES) {
        const capacidadTotal = CAPACIDADES[espacioKey];
        const ocupados = reservas.filter(res =>
            res.espacio === espacioKey &&
            res.fechaInicio === hoy &&
            res.estado === 'confirmada'
        ).length;

        const disponibles = Math.max(0, capacidadTotal - ocupados);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${NOMBRES_ESPACIOS[espacioKey]}</td>
            <td>${capacidadTotal}</td>
            <td>${ocupados}</td>
            <td><strong>${disponibles}</strong></td>
        `;
        tbody.appendChild(tr);
    }
}

// --------------------------------------------------------------------------
// INICIALIZACIÓN SEGÚN LA PÁGINA ACTIVA
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    inicializarDatosEjemplo();

    // Detectar si estamos en la pantalla de Login/Registro (index.html)
    const formLogin = document.getElementById('form-login');
    const formRegistro = document.getElementById('form-registro');

    if (formLogin || formRegistro) {
        // Pestañas Login / Registro
        document.querySelectorAll('.auth-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById(btn.dataset.target).classList.add('active');
            });
        });

        if (formLogin) formLogin.addEventListener('submit', iniciarSesion);
        if (formRegistro) formRegistro.addEventListener('submit', registrarUsuario);

        const btnDemo = document.getElementById('btn-demo-rapido');
        if (btnDemo) btnDemo.addEventListener('click', entrarModoDemo);
        return;
    }

    // Si estamos en dashboard.html: verificar sesión activa
    if (!usuarioLogueado) {
        window.location.href = "index.html";
        return;
    }

    // Mostrar usuario activo en barra superior y prellenar correo en reserva
    const sessionBar = document.getElementById('user-session-bar');
    if (sessionBar) {
        sessionBar.innerHTML = `
            <span>👤 <strong>${usuarioLogueado.nombre} ${usuarioLogueado.apellido || ''}</strong> (${usuarioLogueado.correo})</span>
            <button type="button" id="btn-logout-top" class="btn-logout-top">Cerrar sesión</button>
        `;
        document.getElementById('btn-logout-top').addEventListener('click', cerrarSesion);
    }

    const resCorreo = document.getElementById('res-correo');
    if (resCorreo) resCorreo.value = usuarioLogueado.correo;

    // Eventos del formulario de reservas y cotizador en vivo
    const formReserva = document.getElementById('form-reserva');
    if (formReserva) {
        formReserva.addEventListener('submit', crearReserva);
        ['res-espacio', 'res-cantidad'].forEach(id => {
            document.getElementById(id)?.addEventListener('change', actualizarCotizadorEnVivo);
            document.getElementById(id)?.addEventListener('input', actualizarCotizadorEnVivo);
        });
        document.querySelectorAll('input[name="modalidad"]').forEach(radio => {
            radio.addEventListener('change', actualizarCotizadorEnVivo);
        });
    }

    // Eventos de consulta y filtros
    const formConsulta = document.getElementById('form-consulta');
    if (formConsulta) formConsulta.addEventListener('submit', filtrarReservas);

    const btnLimpiarFiltros = document.getElementById('btn-limpiar-filtros');
    if (btnLimpiarFiltros) {
        btnLimpiarFiltros.addEventListener('click', () => {
            formConsulta.reset();
            renderizarTablaReservas(reservas);
        });
    }

    const formContacto = document.getElementById('form-contacto');
    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("¡Mensaje enviado! Nuestro equipo ejecutivo te responderá pronto.");
            formContacto.reset();
        });
    }

    const footerLogout = document.getElementById('footer-logout');
    if (footerLogout) {
        footerLogout.addEventListener('click', (e) => {
            e.preventDefault();
            cerrarSesion();
        });
    }

    renderizarTablaReservas();
    actualizarTablaDisponibilidad();
});