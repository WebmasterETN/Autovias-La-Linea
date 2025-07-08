/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../js/slick.js?v=1.0.0";

class LayoutQuienesSomos extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>
    
            <app-banner-slider
                    slides-data='[
                    {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/metodos_pago_web.webp","mediumImage": "../src/assets/img/banner/tablet/metodos_pago_tablet.webp", "smallImage": "../src/assets/img/banner/mobile/metodos_pago_mobile.webp", "link": "#index.html/banner1"},
                    {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/Doters_web.webp", "mediumImage": "../src/assets/img/banner/tablet/doters_tablet.webp","smallImage": "../src/assets/img/banner/mobile/Doters_mobile.webp", "link": "#index.html/banner2"},
                    {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/verano_web.webp", "mediumImage": "../src/assets/img/banner/tablet/verano_tablet.webp","smallImage": "../src/assets/img/banner/mobile/Verano_mobile.webp", "link": "#index.html/banner3"}
                    ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>
            
            <section class="__section">
                <app-section-title section-title="¿Quiénes somos?"></app-section-title>
                <h3 class="__subtitle">Somos una empresa 100% mexicana, dedicada al autotransporte de pasajeros con más de 68 años de experiencia y servicio.</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Misión</h3>

                    <p class="__terms-purchase-text">Satisfacer las necesidades de transportación de nuestros clientes, asegurando un servicio confiable y con valores agregados.</p>
                    
                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Visión</h3>

                    <p class="__terms-purchase-text">Ser líderes en la industria del transporte al ofrecer servicios que usen los recursos del entorno con sabiduría, comprometidos con la sociedad y con el medio ambiete.</p>
                    
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Valores</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Compromiso: </b>Cumplimos lo prometido de manera impecable.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Integridad: </b>Somos transparentes y respetuosos con la verdad para transmitir seguridad y confianza en nuestras acciones.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Lealtad: </b>Generamos y fomentamos un sólido sentido de pertenencia y orgullo hacia la empresa, por parte de nuestros colaboradores.</p></li>
                    </ul>
                </article>
            </section>
        `;
	}
}
customElements.define("layout-quienes-somos", LayoutQuienesSomos);
