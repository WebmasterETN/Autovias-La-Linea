class AppButtonEvaTripEnglish extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="http://iamsateescucha.com/survey/#/pull" rel="noopener noreferrer" target="_blank" aria-label="Rate your trip" title="Rate your trip" role="button" tabindex="0" class="button-eva-trip">
        Rate your trip
      </a>
    `;

    this.button = this.querySelector('.button-eva-trip'); // Get a reference to the button element

    // Listen for the buy-element-visible event
    window.addEventListener('buy-element-visible', () => {
      this.hideButton();
    });

    // Listen for the buy-element-hidden event
    window.addEventListener('buy-element-hidden', () => {
      this.showButton();
    });
  }

  hideButton() {
    this.button.style.display = 'none';
  }

  showButton() {
    this.button.style.display = 'block';
  }
}
customElements.define("app-button-eva-trip-english", AppButtonEvaTripEnglish);
