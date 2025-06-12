document.addEventListener('DOMContentLoaded', function () {
    const loginIcon = document.getElementById('login-icon');
    const loginModal = document.getElementById('modalTravelPass');
    const profileModal = document.getElementById('modalTravelPassLogueado');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');
    const userNameElement = document.getElementById('user-name');
    const userBalanceElement = document.getElementById('user-balance');
    const logoutLink = document.getElementById('logout-link');
    const brandButtons = document.querySelectorAll('.brand-btn');
    const brandInput = document.getElementById('brand');
    const miCuentaBtn = document.getElementById('miCuentaBtn');
    
    const loginUrl = 'https://one-api.autovias.com.mx/api/v2/ewallet/login';
    const profileUrl = 'https://one-api.autovias.com.mx/api/v2/ewallet/profile';

    const dashboardUrls = {
        'surdejalisco': 'https://travelpass-sur-de-jalisco.autovias.com.mx/dashboard',
        'viajero': 'https://travelpass-viajero.autovias.com.mx/dashboard'
    };

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

    // Función para cerrar ambos modales
    function closeModals() {
        loginModal.style.display = 'none';
        profileModal.style.display = 'none';
    }

    // Actualizar ícono de login
    function updateLoginIcon(profileData) {
        loginIcon.innerHTML = profileData ? 
            `<a href="#" id="open-profile-modal"><img src="../assets/img/gho-img-web/iconos/icono-travel-pass.webp" class="icono-travel" alt="Travel Pass" title="Perfil Travel Pass"> Hola, ${profileData.name}</a>` : 
            `<a id="open-login-modal" href="#"><img src="../assets/img/gho-img/logos/logo-travel-pass.png" alt="Iniciar sesión en Travel Pass" title="Ingresa a Travel Pass" width="100" height="32" style="cursor: pointer;"></a>`;

        document.getElementById(profileData ? 'open-profile-modal' : 'open-login-modal')?.addEventListener('click', function (event) {
            event.preventDefault();
            closeModals();
            (profileData ? profileModal : loginModal).style.display = 'flex';
        });
    }

    // Verificar sesión activa
    function checkSession() {
        const token = getToken();
        if (token) {
            fetch(profileUrl, { method: 'GET', headers: { 'Authorization': `Bearer ${token}` } })
                .then(response => response.json())
                .then(profileData => {
                    if (profileData.name) {
                        updateLoginIcon(profileData);
                        userNameElement.textContent = `Nombre: ${profileData.name}`;
                        userBalanceElement.textContent = `Saldo: ${profileData.balance} MXN`;
                    } else {
                        updateLoginIcon(null);
                    }
                })
                .catch(() => updateLoginIcon(null));
        } else {
            updateLoginIcon(null);
        }
    }

    // Selector de marca
    brandButtons.forEach(button => {
        button.addEventListener('click', function () {
            brandButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            brandInput.value = this.dataset.brand;
        });
    });

    // Envío del formulario de login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const brand = brandInput.value;

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

    // Cerrar sesión
    logoutLink.addEventListener('click', function (event) {
        event.preventDefault();
        removeToken();
        updateLoginIcon(null);
        closeModals();
    });

    // Redirigir a "Mi cuenta"
    if (miCuentaBtn) {
        miCuentaBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const userBrand = localStorage.getItem('userBrand');
            if (userBrand && dashboardUrls[userBrand]) {
                window.open(dashboardUrls[userBrand], '_blank');
            }
        });
    }

    // Eventos de cierre de modal
    document.getElementById('close-login-modal')?.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    document.getElementById('close-profile-modal')?.addEventListener('click', function () {
        profileModal.style.display = 'none';
    });

    checkSession();
});
