/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/english/app-modal-doters.js";
import "../../components/english/app-modal-travelpass.js";
import "../../components/english/app-grid-text.js";
import "../../components/english/app-destinations-grid-english.js";
import "../../components/english/app-banner-promotional.js";
import "../../components/english/app-card-left-description.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../js/slick.js?v=1.0.0";

class PageHomeEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-payments></app-payments>
      </div>
      <section class="__section">
        <app-section-title section-title="Travel differently. Discover Mexico with Autovías"></app-section-title>
        <article>
          <h3 class="subtitle_text">Autovías takes you straight to the heart of Mexico.</h3>
          <p class="description_text">We’re ready when you are.</p>
        </article>
        <!-- Grid here -->
        <app-destinations-grid-english
          destinations='[
            {"id": "destination1", "title": "Morelia", "content": "Cathedrals, flavors, and magic in every corner.", "image": "../../src/assets/img/english/home/grid-english/bg-morelia-english.webp", "link": "../english/destinations/boletos-de-autobus-a-aguascalientes.html"},

            {"id": "destination2", "title": "Colima", "content": "Where the volcano and the sea join hands.", "image": "../../src/assets/img/english/home/grid-english/bg-colima-english.webp", "link": "../english/destinations/boletos-de-autobus-a-culiacan.html"},

            {"id": "destination3", "title": "Guadalajara", "content": "Culture, tequila, and rhythm on every corner.", "image": "../../src/assets/img/english/home/grid-english/bg-guadalajara-english.webp", "link": "../english/destinations/boletos-de-autobus-a-guadalajara.html"},

            {"id": "destination4", "title": "Ciudad de México", "content": "The beating heart of Mexico.", "image": "../../src/assets/img/english/home/grid-english/bg-cdmx-english.webp", "link": "../english/destinations/boletos-de-autobus-a-cdmx.html"},

            {"id": "destination5", "title": "Zitácuaro", "content": "The magical gateway to the monarch butterflies.", "image": "../../src/assets/img/english/home/grid-english/bg-zitacuaro-english.webp", "link": "../english/destinations/boletos-de-autobus-a-guanajuato.html"},

            {"id": "destination6", "title": "Uruapan", "content": "Waterfalls, culture, and magic in every corner.", "image": "../../src/assets/img/english/home/grid-english/bg-uruapan-english.webp", "link": "../english/destinations/boletos-de-autobus-a-queretaro.html"}
            ]'
        ></app-destinations-grid-english>
      </section>

      <section class="__section">
        <app-section-title section-title="Because a good journey begins with good treatment"></app-section-title>
        <!-- Banner promotional "viajero protegido" here-->
        
        <app-banner-promotional
          link-href="./viajero-protegido.html"
          image-alt="Banner promocional de Viajero Protegido"
          image-src="../../src/assets/img/english/home/banner/viajero/banner-viajero-protegido.webp"
          image-src-tablet="../../src/assets/img/english/home/banner/viajero/banner-viajero-protegido-tablet.webp"
          image-src-mobile="../../src/assets/img/english/home/banner/viajero/banner-viajero-protegido-mobile.webp"
        ></app-banner-promotional>
        
      </section>

      <section class="__section">
        <app-section-title section-title="Your well-being is our priority from the very start."></app-section-title>
        <article>
          <p class="description_text">Autovías takes you on a journey with views, comfort, and zero worries.</p>
          <h3 class="subtitle_text">What makes your journey unique isn’t just the destination—it’s the services designed just for you.</h3>
        </article>
        <app-card-left-description src="../../src/data/english/home/special-services-data.json"></app-card-left-description>
      </section>

      <section class="__section">
        <app-section-title section-title="The Mexico that moves you is best experienced with Autovías."></app-section-title>
        <article>
          <h3 class="subtitle_text">Every trip with Autovías is a story worth telling.</h3>
        </article>
        <app-grid-text src="../../src/data/english/home/grid-text-data.json"></app-grid-text>
      </section>

    `;
	}
}
customElements.define("page-home-english", PageHomeEnglish);
