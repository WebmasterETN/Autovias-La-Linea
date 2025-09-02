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

class PageBoletosAutobusUruapanEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/uruapan/banner/Uruapan.webp"
          image-alt="Promotional banner for Uruapan"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Uruapan is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/uruapan/overflow-images/barranca-cupatitzio.webp", "alt": "Barranca del Cupatitzio National Park"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/uruapan/overflow-images/tzararacua-waterfall.webp", "alt": "La Tzaráracua Waterfall"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/uruapan/overflow-images/volcan.webp", "alt": "Paricutín Volcano"}
          ]'
          paragraph-text="Uruapan is a lush gateway to Michoacán’s natural and cultural wonders. Known as the “World Capital of Avocados,” this city blends vibrant artisan traditions with breathtaking landscapes. From its cascading rivers and volcanic terrain to its colorful markets and crafts, Uruapan offers a refreshing escape into the heart of Mexico — where nature, creativity, and authenticity thrive in harmony."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Uruapan"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for México? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Uruapan’s cuisine is a flavorful tribute to its Purépecha roots and fertile lands. From hearty stews to sweet corn tamales, every dish tells a story of tradition, community, and bold regional identity.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/uruapan/food.json"></app-card-image-tag-text>
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
        <app-destiny-slider src="../../src/data/english/destinations/uruapan/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/uruapan/cards-explore-section.json"
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
	"page-boletos-de-autobus-uruapan-english",
	PageBoletosAutobusUruapanEnglish
);
