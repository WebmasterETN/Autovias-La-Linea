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

class PageBoletosAutobusAcambaroEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/colima/banner/colima.webp"
          image-alt="Promotional banner for Colima"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Acámbaro is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/acambaro/overflow-images/comala.webp", "alt": "Comala"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/acambaro/overflow-images/volcan-colima.webp", "alt": "Colima Volcano"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/acambaro/overflow-images/la-campana-archaeological.webp", "alt": "La Campana Archaeological Zone"}
          ]'
          paragraph-text="Acámbaro is a cultural crossroads in southern Guanajuato, where ancient civilizations, artisan traditions, and natural beauty converge. Known as the “City of Bread,” this destination offers a unique blend of history, creativity, and outdoor adventure. From its archaeological roots to its scenic dam and iconic monuments, Acámbaro invites travelers to explore a lesser-known side of Mexico — full of flavor, character, and quiet charm."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Acámbaro"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Colima’s cuisine is a flavorful fusion of coastal freshness, mountain ingredients, and deep-rooted traditions. From seafood to slow-cooked stews, every dish reflects the state’s generous spirit and culinary pride. Eating in Colima isn’t just a pleasure — it’s a cultural experience.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/colima/food.json"></app-card-image-tag-text>
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
        <app-destiny-slider src="../../src/data/english/destinations/colima/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/colima/cards-explore-section.json"
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
	"page-boletos-de-autobus-acambaro-english",
	PageBoletosAutobusAcambaroEnglish
);
