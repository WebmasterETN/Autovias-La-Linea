class AppCookiesPolicyEnglish extends HTMLElement {
  connectedCallback() {
    if (localStorage.getItem("allow-cookie") === "true") {
      return;
    }

    this.innerHTML = `
      <section id="cookies-policy-baner" class="cookies-policy d-block">
          <div class="main-container policy-info">
            <div class="policy-info__text">
              <h2>Accept the use of cookies.</h2>

              <p>
                We use cookies to enhance your browsing experience, deliver personalized content, and analyze our traffic.
              </p>
              <p>
                By clicking <span>Accept all cookies</span>, you agree to have them stored on your device.
              </p>
              <p>
                You can customize your settings by clicking Manage preferences.
              </p>
              <p>For more information, please refer to our <a href="#">Cookie Policy</a>.</p>
            </div>
            <div class="policy-info__btns">
              <button id="allow-get-cookies" role="button" aria-label="Accept all cookies" tabindex="0">Accept all cookies</button>
              <button role="button" aria-label="Manage preferences" tabindex="0">Manage preferences</button>
            </div>
          </div>
        </section>
    `;

    const allowCookiesBtn = document.getElementById("allow-get-cookies");
    const banerCookies = document.getElementById("cookies-policy-baner");
    
    function action() {
        localStorage.setItem("allow-cookie", "true");
        banerCookies.classList.remove("d-block");
    }

    allowCookiesBtn.addEventListener("click", action);
  }
}
customElements.define("app-cookies-policy-english", AppCookiesPolicyEnglish);
