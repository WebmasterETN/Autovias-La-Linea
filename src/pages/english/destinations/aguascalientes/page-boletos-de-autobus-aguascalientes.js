/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../../components/app-cotiza.js";
import "../../../../components/english/app-modal-doters.js";
import "../../../../components/english/app-modal-travelpass.js";
import "../../../../components/english/app-destiny-slider.js";
import "../../../../components/english/app-banner-multi-image.js";
import "../../../../components/english/app-card-image-tag-text.js";
import "../../../../components/app-section-title.js";
import "../../../../components/english/app-banner-image.js";
import "../../../../components/app-description-destination.js";
import "../../../../components/app-explore-section.js";
import "../../../../js/slick.js?v=1.0.2";

class PageBoletosAutobusAguascalientesEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/aguascalientes-english/banner/banner-aguascalientes-english.webp"
          image-alt="Promotional banner for Aguascalientes"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Aguascalientes is waiting. ETN will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/aguascalientes-english/templo-san-antonio-paduba.webp", "alt": "San Marcos Fair"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/aguascalientes-english/museo-aguascalientes.webp", "alt": "Cathedral Basilica of Our Lady of the Assumption"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/aguascalientes-english/templo-san-antonio.webp", "alt": "Tres Centurias Park"}
          ]'
          paragraph-text="Aguascalientes is a hidden gem in the heart of Mexico. Renowned for its warm hospitality, colonial architecture, vibrant festivals, and one of a kind museums, this destination blends history, culture, and modern charm in every corner. From the iconic San Marcos Fair to its temples, plazas, and cultural spaces, Aguascalientes offers an authentic and safe experience for travelers seeking to explore the soul of Mexico — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title=" Explore the Highlights of Aguascalientes"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">The cuisine of Aguascalientes is a living expression of its history, its roots, and its people. Influenced by the Bajío and central Mexico, its gastronomy blends local ingredients, traditional techniques, and a homemade touch that wins over every palate. Each recipe reflects the region’s warm and authentic character, offering a culinary experience that goes beyond flavor—it’s a way to discover its culture, share its identity, and enjoy Mexican hospitality in every meal.</p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/aguascalientes/aguascalientes-food.json"></app-card-image-tag-text>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Travel Mexico in style with ETN Turistar—luxury and reliability from start to finish"></app-section-title>
        <p class="text-description-list">Traveling through Mexico doesn’t have to be complicated with ETN Turistar, every journey becomes part of the experience.</p>

        <ul class="text-list">
          <li class="item-list">🛋️  Luxury comfort: unwind in lie-flat reclining seats, enjoy onboard entertainment, and stay connected with free Wi-Fi.</li>
          <li class="item-list">🛡️ Superior safety: our drivers are certified, and every vehicle is monitored in real time.</li>
          <li class="item-list">⏱️ Reliability and punctuality: frequent departures, accurate schedules, and service that delivers on its promise.</li>
          <li class="item-list">🧳 Hassle-free luggage: generous onboard allowance and spacious storage compartments.</li>
        </ul>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Explore more destinations with ETN Turistar Mexico is waiting for you."></app-section-title>
        <app-destiny-slider src="../../src/data/english/destinations/aguascalientes/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/aguascalientes/cards-explore-section.json"
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
	"page-boletos-de-autobus-aguascalientes-english",
	PageBoletosAutobusAguascalientesEnglish
);
