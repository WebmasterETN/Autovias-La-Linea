document.addEventListener('DOMContentLoaded', function () {
    const loginIconDesktop = document.getElementById('login-icon'); // Botón de escritorio para actualización visual
    const loginModal = document.getElementById('modalTravelPass');
    const openLoginModalTriggers = document.querySelectorAll('.js-open-travelpass-login-modal'); // Todos los botones que abren el modal
    const profileModal = document.getElementById('modalTravelPassLogueado');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');
    const userNameElement = document.getElementById('user-name');
    const userBalanceElement = document.getElementById('user-balance');
    const logoutLink = document.getElementById('logout-link');
    const miCuentaBtn = document.getElementById('miCuentaBtn');
    const registerLink = document.getElementById('register-link');
    const infoLink = document.getElementById('info-link');

    const loginUrl = 'https://one-api.autovias.com.mx/api/v2/ewallet/login';
    const profileUrl = 'https://one-api.autovias.com.mx/api/v2/ewallet/profile';

    // Solo Pegasso
    const dashboardUrl = 'https://travelpass-pegasso.autovias.com.mx/dashboard';
    const registerUrl = 'https://travelpass-pegasso.autovias.com.mx/signup';
    const infoUrl = 'https://www.autovias.com.mx/pegasso/travel-pass.html';


    // Funciones para manejo de cookies
    function setCookie(name, value, days = 7) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; domain=autovias.com.mx; SameSite=None; Secure`;
    }

    function getCookie(name) {
        return document.cookie.split('; ').find(row => row.startsWith(name))?.split('=')[1] || null;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=autovias.com.mx; SameSite=None; Secure`;
    }

    function getToken() {
        return getCookie('costapassToken');
    }

    function setToken(token) {
        setCookie('costapassToken', token, 7);
    }

    function removeToken() {
        deleteCookie('costapassToken');
    }

    function closeModals() {
        loginModal.style.display = 'none';
        profileModal.style.display = 'none';
    }

    
    // Función para abrir el modal de login
    function openLoginModal(event) {
        event?.preventDefault();
        closeModals();
        loginModal.style.display = 'flex';
        message.textContent = '';
    }

    // Función para abrir el modal de perfil
    function openProfileModal(event) {
        event?.preventDefault();
        closeModals();
        profileModal.style.display = 'flex';
    }

    // Adjunta listeners a todos los triggers
    function attachLoginModalListeners() {
        const triggers = document.querySelectorAll('.js-open-travelpass-login-modal');
        triggers.forEach(trigger => {
            trigger.removeEventListener('click', openLoginModal);
            trigger.addEventListener('click', openLoginModal);
        });
    }

    function attachProfileModalListeners() {
        const triggers = document.querySelectorAll('.js-open-travelpass-login-modal');
        triggers.forEach(trigger => {
            trigger.removeEventListener('click', openProfileModal);
            trigger.addEventListener('click', openProfileModal);
        });
    }

    function updateLoginIcon(profileData) {
        // Solo actualiza el botón de escritorio
        const loginIconDesktop = document.getElementById('login-icon');
        if (loginIconDesktop) {
            loginIconDesktop.innerHTML = profileData ?
                `<a href="#" class="js-open-travelpass-login-modal"><img src="https://autovias.com.mx/gho-test/gho-img-web/iconos/icono-travel-pass.webp" class="icono-travel" alt="Travel Pass" title="Perfil Travel Pass"> Hola, ${profileData.name}</a>` :
                `<a href="#" class="js-open-travelpass-login-modal"><img src="../../../src/assets/img/gho-img/logos/logo-travel-pass.webp" alt="Iniciar sesión en Travel Pass" title="Ingresa a Travel Pass" width="100" height="32" style="cursor: pointer;"></a>`;
        }
        // Re-atachea los listeners después de actualizar el DOM
        checkSessionTriggers();
    }

    function checkSessionTriggers() {
        const token = getToken();
        if (token) {
            attachProfileModalListeners();
        } else {
            attachLoginModalListeners();
        }
    }

    function checkSession() {
        const token = getToken();
        if (token) {
            fetch(profileUrl, { method: 'GET', headers: { 'Authorization': `Bearer ${token}` } })
                .then(response => response.json())
                .then(profileData => {
                    if (profileData.name) {
                        updateLoginIcon(profileData);
                        userNameElement.textContent = `Nombre: ${profileData.name}`;
                        userBalanceElement.textContent = `Saldo: ${profileData.balance !== undefined ? profileData.balance : 'N/A'} MXN`;
                    } else {
                        removeToken();
                        updateLoginIcon(null);
                    }
                })
                .catch(() => {
                    updateLoginIcon(null);
                });
        } else {
            updateLoginIcon(null);
        }
    }

    // Actualiza enlace de registro
    function updateRegisterLink() {
        registerLink.href = registerUrl;
    }

    // Actualiza enlace de "¿Qué es Travel Pass?"
    function updateInfoLink() {
        infoLink.href = infoUrl;
    }

    // Envío del formulario de login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const brand = 'pegasso'; //fijo pegasso

        fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, brand })
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    setToken(data.token);
                    localStorage.setItem('userBrand', brand);
                    message.textContent = 'Inicio de sesión exitoso!';
                    message.style.color = 'green';
                    checkSession();
                    loginModal.style.display = 'none';
                } else {
                    message.textContent = 'Inicio de sesión fallido. Verifica tus credenciales.';
                    message.style.color = 'red';
                }
            })
            .catch(() => {
                message.textContent = 'Ocurrió un error al iniciar sesión.';
                message.style.color = 'red';
            });
    });

    logoutLink.addEventListener('click', function (event) {
        event.preventDefault();
        removeToken();
        updateLoginIcon(null);
        closeModals();
    });

    if (miCuentaBtn) {
        miCuentaBtn.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(dashboardUrl, '_blank'); // <-- corregido
        });
    }

    document.getElementById('close-login-modal')?.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    document.getElementById('close-profile-modal')?.addEventListener('click', function () {
        profileModal.style.display = 'none';
    });

    updateRegisterLink();
    updateInfoLink();
    checkSession();
    checkSessionTriggers(); // <-- asegúrate de llamar esto al final
});