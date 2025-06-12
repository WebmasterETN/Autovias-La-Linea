class AppButtonTravelpass extends HTMLElement {
  connectecCallback() {
    this.innerHTML = `
      <button id="login-icon">
        <a href="#" id="open-login-modal" title="Abrir modal de inicio de sesión">
          <img src="../assets/img/gho-img/logos/logo-travel-pass.png" alt="Inicia sesión en Travel Pass" title="Travel Pass Ingreso" width="100" height="32" style="cursor: pointer; max-width: 70%; height: auto; aspect-ratio: auto;">
        </a>
      </button>
      
      <!-- Modal de inicio de sesión con selector de marca -->
      <div id="modalTravelPass" class="ModalTravelPs">
          <div class="modal-content">
              <div class="modal-header">
                  <img src="../assets/img/gho-img/logos/logo-travel-pass.png" alt="Logotipo TravelPass" title="Travel Pass Formulario" width="100" height="32" class="modal-logo">
                  <span class="close" id="close-login-modal">&times;</span>
              </div>
              <h2 class="titulo-2 center">Inicia sesión</h2>
              
              <!-- Selector de marca -->
              <div id="brand-selector" class="brand-selector">
                  <button type="button" class="brand-btn" data-brand="surdejalisco">
                      <img src="https://rsrvms-vanda-prod.s3.us-east-1.amazonaws.com/funnel/test/surdejalisco.png" alt="Sur de Jalisco">
                  </button>
                  <button type="button" class="brand-btn" data-brand="viajero">
                      <img src="https://gho-prod.s3.amazonaws.com/uploads/line/logo/7/logo_viajero.png" alt="Viajero">
                  </button>
              </div>
              
              <form id="login-form">
                  <input type="hidden" id="brand" value="viajero"> <!-- Valor por defecto -->
                  <label for="email">Correo electrónico:</label>
                  <input type="email" id="email" required>
                  <label for="password">Contraseña:</label>
                  <input type="password" id="password" required>
                  <button type="submit">Iniciar sesión</button>
              </form>
              
              <a class="w-modal-link color-1 center" href="https://autovias.com.mx/sur-de-jalisco/travel-pass.html">Conoce aquí&nbsp; <span class="bold"> ¿Qué es Travel Pass?</span></a>
              <a class="w-modal-link color-1" href="https://travelpass-sur-de-jalisco.autovias.com.mx/signup"> ¿No tienes cuenta?&nbsp; <span class="bold"> Regístrate</span></a>
              
              <div id="message" class="message"></div>
          </div>
      </div>

      <!-- Modal de usuario logueado -->
      <div id="modalTravelPassLogueado" class="ModalTravelPs">
          <div class="modal-content">
              <div class="modal-header">
                  <img src="../assets/img/gho-img/logos/logo-travel-pass.png" alt="Logotipo TravelPass" title="Logo Travel Pass" width="100" height="32" class="modal-logo">
                  <span class="close" id="close-profile-modal">&times;</span>
              </div>
              <div class="modalContenido">
                  <h2>Información del Usuario</h2>
                  <p id="user-name"></p>
                  <p id="user-balance"></p>
                  <a id="miCuentaBtn" class="btn-cuenta">Mi cuenta</a>
                  <a href="#" id="logout-link" title="cerrar sesion">Cerrar sesión</a>
              </div>
          </div>
      </div>
    `;
  }
}

customElements.define('app-button-travelpass', AppButtonTravelpass);