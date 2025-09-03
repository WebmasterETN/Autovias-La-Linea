/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-modal-doters.js";
import "../../../components/english/app-modal-travelpass.js";
import "../../../components/english/app-destiny-slider.js";
import "../../../components/english/app-banner-multi-image.js";
import "../../../components/english/app-card-image-tag-text.js";
import "../../../components/app-section-title.js";
import "../../../components/english/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";
import "../../../js/slick.js?v=1.0.2";

class PageBoletosAutobusAcambayEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/acambay/banner/acambay.webp"
          image-alt="Promotional banner for Acambay"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Acambay is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/acambay/overflow-images/plaza.webp", "alt": "Acambay Plaza"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/acambay/overflow-images/huamango.webp", "alt": "Huamango Archaeological Site"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/acambay/overflow-images/palacio.webp", "alt": "Palacio Municipal Murals"}
          ]'
          paragraph-text="Acambay is a highland town steeped in Otomí heritage, nestled among pine-covered hills and ancient stone formations. Known for its seismic history, artisan traditions, and archaeological legacy, this destination offers a quiet yet culturally rich escape. From its vibrant central plaza to the ruins of Huamango and colorful civic murals, Acambay invites travelers to explore Mexico’s indigenous roots and artistic spirit — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Acambay"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Acambay’s cuisine reflects the flavors of the Otomí people and the bounty of the northern Estado de México. With dishes rooted in tradition and crafted from local ingredients, every meal offers a taste of cultural pride and rural warmth.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/acambay/food.json"></app-card-image-tag-text>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Travel Mexico in style with Autovías La Línea — comfort and reliability from start to finish"></app-section-title>
        <p class="text-description-list">Traveling through Mexico doesn’t have to be complicated. With Autovías La Línea, every journey becomes part of the experience.</p>

        <ul class="text-list">
          <li class="item-list">🛋️ Luxury comfort: unwind in reclining seats, enjoy onboard entertainment, and stay connected with free Wi-Fi.</li>
          <li class="item-list">🛡️ Superior safety: our drivers are certified, and every vehicle is monitored in real time.</li>
          <li class="item-list">⏱️ Reliability and punctuality: frequent departures, accurate schedules, and service that delivers on its promise.</li>
          <li class="item-list">🧳 Hassle-free luggage: generous onboard allowance and spacious storage compartments.</li>
        </ul>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Explore more destinations with ETN Turistar Mexico is waiting for you."></app-section-title>
        <app-destiny-slider src="../../src/data/english/destinations/acambay/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/acambay/cards-explore-section.json"
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const cardsData = await response.json();
			const exploreSection = this.querySelector("app-explore-section");
			if (exploreSection) {
				exploreSection.setAttribute("cards-data", JSON.stringify(cardsData));
			}
		} catch (error) {
			console.error("Could not load explore section data:", error);
		}
	}
}
customElements.define(
	"page-boletos-de-autobus-acambay-english",
	PageBoletosAutobusAcambayEnglish
);
