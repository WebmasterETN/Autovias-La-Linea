/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/packmultienlace/app-dropdown-quest-services.js";
import "../../components/packmultienlace/app-header-pack-multienlace.js";
import "../../components/packmultienlace/app-footer-pack-multienlace.js";
import "../../components/packmultienlace/app-time-line-packm.js";
import "../../js/slick.js?v=1.0.0";

class PageComoFunciona extends HTMLElement {
	async connectedCallback() {
		// Make connectedCallback async
		this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/pack-banner-como-funciona.webp","mediumImage": "../../src/assets/img/paqueteria/banner/tablet/pack-banner-como-funciona.webp", "smallImage": "../../src/assets/img/paqueteria/banner/movil/pack-banner-como-funciona.webp", "link": "#index.html/banner1"}

            ]'
        >
        </app-banner-slider>
        
        <app-section-title section-title="¿Cómo funciona el servicio?"></app-section-title>
        
        <section class="__como-funciona__container">
          <app-dropdown-quest-services></app-dropdown-quest-services>
        </section>
      `;

		// Fetch data and pass it to the custom element
		const dropdownQuestServicesElement = this.querySelector(
			"app-dropdown-quest-services"
		);
		if (dropdownQuestServicesElement) {
			try {
				const response = await fetch(
					"../../src/data/pack-multienlace/dropdown-quest-services.json"
				); // Path to the new JSON file
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const dropdownData = await response.json();
				dropdownQuestServicesElement.setDropdownData(dropdownData);
			} catch (error) {
				console.error("Error loading dropdown data:", error);
				// Optionally display an error message in the component
				dropdownQuestServicesElement.innerHTML =
					"<p>Error al cargar las preguntas frecuentes.</p>";
			}
		}
	}
}

customElements.define("page-como-funciona", PageComoFunciona);
