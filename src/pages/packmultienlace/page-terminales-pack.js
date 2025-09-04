/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/packmultienlace/app-header-pack-multienlace.js";
import "../../components/packmultienlace/app-cotiza-pack.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/packmultienlace/app-map-pack.js";
import "../../components/packmultienlace/app-footer-pack-multienlace.js";
import "../../js/slick.js?v=1.0.0";

class PageTerminalesPack extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/pack-banner-terminales.webp","mediumImage": "../../src/assets/img/banner/Tablet-1.png", "smallImage": "../../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
               
                ]'
            >
            </app-banner-slider>
            <app-section-title section-title="Cotiza tu paquete"></app-section-title>

        <app-map-pack></app-map-pack>
    `;
	}
}

customElements.define("page-terminales-pack", PageTerminalesPack);
