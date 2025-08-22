/*-------------------------SCRIPTS---------------------------*/

import "../../js/english/travelpass-cookie.js?v=1.0.0";

class AppModalTravelpassEnglish extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <!-- Modal de inicio de sesión con selector de marca -->
      <div id="modalTravelPass" class="ModalTravelPs">
        <div class="modal-content">
          <button class="close" class="close" id="close-login-modal"><span>&times;</span></button>
          <div class="card-modal">
            <div class="modal-header">
              <img src="../../../src/assets/img/gho-img/logos/logo-travel-pass.webp" alt="TravelPass Logo" title="Travel Pass Form" width="100" height="32" class="modal-logo">
              <hr class="__line-separador"/>
              <img src="../../../src/assets/img/gho-img/logos/logo_Pegasso.webp" class="modal-logo" alt="Traveler">
            </div>

            <div>
              <h2 class="titulo-2">Welcome!</h2>
              <h3 class="subtitle">Log in to your Travelpass account</h3>
            </div>

            <!-- Brand selector 
            <div id="brand-selector" class="brand-selector">
              <button type="button" class="brand-btn" data-brand="surdejalisco">
                <img src="https://rsrvms-vanda-prod.s3.us-east-1.amazonaws.com/funnel/test/surdejalisco.png" class="__image__button-size" alt="Sur de Jalisco">
              </button>
              <button type="button" class="brand-btn" data-brand="pegasso">
                <img src="../../../src/assets/img/gho-img/logos/logo_Pegasso.webp" class="__image__button-size" alt="Traveler">
              </button>
            </div>-->

            <form id="login-form" class="__login-form">
              <fieldset class="__section-inputs">
                <input type="hidden" id="brand" value="viajero"> <!-- Default value -->
                <label for="email">Email address:</label>
                <input type="email" id="email" required>
                <label for="password">Password:</label>
                <input type="password" id="password" required>
              </fieldset>
              <button type="submit" class="__submit-button">Log in</button>
            </form>

            <div class="__card-footer">
              <a id="info-link" class="w-modal-link color-1 center" href="https://autovias.com.mx/pegasso/travel-pass.html">Learn more&nbsp;<span class="bold">What is Travel Pass?</span></a>
              <a id="register-link" class="w-modal-link color-1" href="#">Don't have an account? <span class="bold">Sign up</span></a>
              <div id="message" class="message"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logged-in user modal -->
      <div id="modalTravelPassLogueado" class="ModalTravelPs">
        <div class="modal-content">
          <button class="close" id="close-profile-modal"><span>&times;</span></button>
          <div class="card-modal">
            <div class="modal-header">
              <img src="../../../src/assets/img/gho-img/logos/logo-travel-pass.webp" alt="TravelPass Logo" title="Travel Pass Logo" width="100" height="32" class="modal-logo">
            </div>
            <div class="modalContenido">
              <h2>User Information</h2>
              <p id="user-name"></p>
              <p id="user-balance"></p>
              <a id="miCuentaBtn" class="btn-cuenta">My Account</a>
              <a href="#" id="logout-link" class="btn-logout" title="log out">Log out</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-modal-travelpass-english', AppModalTravelpassEnglish);