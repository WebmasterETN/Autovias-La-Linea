/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza-pack.js";
import "../components/app-banner-slider.js";
import "../components/app-section-title.js";
import "../js/slick.js?v=1.0.0";
import "../components/app-card-bg-primary.js"
import "../components/app-card-small-list.js"
import "../components/app-header-pack-multienlace.js";



class LayoutPackMultienlace extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/paqueteria/pack_banner_home.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
               
                ]'
            >
            </app-banner-slider>
            <section class="__section__pack-services">
                <app-section-title section-title="Entrega tus paquetes en nuestra terminal y recógelos en el destino en tiempo récord."></app-section-title>
                <h3 class="__subtitle">Servicio de envíos </h3>
                <app-card-bg-primary src="../src/data/pack-multienlace/cards-home.json"></app-card-bg-primary>
            </section>

            <section class="__section__pack-process">
                <app-section-title section-title="Proceso de Envío: Rápido y Fácil"></app-section-title>
                <app-card-small-list src="../src/data/pack-multienlace/proceso-envio.json"></app-card-small-list>
                <p class="__paragraph">Además, para que puedas hacer un seguimiento en tiempo real de tu envío, te ofrecemos un sistema de rastreo fácil de usar. ¡Nunca perderás de vista tu paquete!</p>
            </section>


        `;
	}
}
customElements.define("layout-pack-multienlace", LayoutPackMultienlace);
