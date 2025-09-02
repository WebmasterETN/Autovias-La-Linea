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

class PageBoletosAutobusCdmxEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/ciudad-de-mexico/banner/CiudadDeMexico.webp"
          image-alt="Promotional banner for Ciudad de Mexico"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Mexico City is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/ciudad-de-mexico/overflow-images/zocalo-main-square.webp", "alt": "Zócalo Main Square"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/ciudad-de-mexico/overflow-images/chapultepec-forest.webp", "alt": "Chapultepec Forest"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/ciudad-de-mexico/overflow-images/national-museum-anthropology.webp", "alt": "National Museum of Anthropology"}
          ]'
          paragraph-text="Mexico City is a vibrant mosaic of history, art, and modern life. As the capital of Mexico, it offers a dynamic blend of pre-Hispanic heritage, colonial architecture, and contemporary culture. From the iconic Zócalo to world-class museums, lush parks, and bohemian neighborhoods, this city invites travelers to explore its soul with curiosity and confidence. Whether you're drawn to ancient ruins or avant-garde galleries, Mexico City delivers an unforgettable experience — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Mexico City"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">The cuisine of Mexico City is a celebration of flavor, tradition, and creativity. Influenced by indigenous roots and colonial fusion, its dishes reflect the diversity and richness of Mexican identity. From street food to gourmet experiences, every bite tells a story — one of warmth, pride, and culinary excellence.</p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/ciudad-de-mexico/food.json"></app-card-image-tag-text>
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
        <app-section-title section-title="Explore more destinations with Autovías La Línea — Mexico is waiting for you."></app-section-title>
        <app-destiny-slider src="../../src/data/english/destinations/ciudad-de-mexico/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/ciudad-de-mexico/cards-explore-section.json"
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
	"page-boletos-de-autobus-cdmx-english",
	PageBoletosAutobusCdmxEnglish
);
