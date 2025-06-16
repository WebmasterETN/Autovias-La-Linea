/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-destinations-grid.js";
import "../components/app-list-destinations.js";
import "../components/app-tickets-sales-locations.js";
import "../components/app-other-services.js";
import "../components/app-blog.js";
import "../components/app-img-shop-left.js";
import "../components/app-section-title.js";

class AppHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-modal-doters></app-modal-doters>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_Doters_Feria_Tacambaro1_Autovias.webp","mediumImage": "./src/assets/img/banner/Tablet-1.png", "smallImage": "./src/assets/img/banner/Movil-1.png", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/Bw_Patio_Santa_Fe_Morelia2_Autovias.webp", "mediumImage": "./src/assets/img/banner/Tablet.png","smallImage": "./src/assets/img/banner/Movil.png", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/Bw_Playas_Semana_Santa_Autovias.webp", "mediumImage": "./src/assets/img/banner/Tablet-1.png","smallImage": "./src/assets/img/banner/Movil-1.png", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>
            <app-payments></app-payments>
            <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "¿Aún no sabes a dónde viajar?", "text": "Conoce nuestros destinos Autovías La Línea y elige tu lugar favorito"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Ciudad de México", "content": "Sumérgete en la esencia vibrante y cultural de la Ciudad de México.", "image": "./src/assets/img/destinos-img/ciudad-de-mexico.webp", "link": "../boletos-de-autobus-a-ciudad-de-mexico.html"},
        
                {"id": "destination2", "title": "Colima", "content": "Explora la serenidad y riqueza natural de Colima.", "image": "./src/assets/img/destinos-img/Colima.webp", "link": "../boletos-de-autobus-a-colima.html"},
        
                {"id": "destination3", "title": "Guadalajara", "content": "Déjate envolver por la energía y el sabor vibrante de Guadalajara.", "image": "./src/assets/img/destinos-img/guadalajara.webp", "link": "../boletos-de-autobus-a-ciudad-de-mexico.html"},
                
                {"id": "destination5", "title": "Morelia", "content": "Descubre el encanto colonial y la riqueza histórica de Morelia.", "image": "./src/assets/img/destinos-img/Morelia.webp", "link": "../boletos-de-autobus-a-morelia.html"},
        
                {"id": "destination4", "title": "Zitácuaro", "content": "Descubre la esencia natural y cultural de Zitácuaro.", "image": "./src/assets/img/destinos-img/Zitacuaro.webp", "link": "../boletos-de-autobus-a-ciudad-de-mexico.html"}
                ]'
            >
            </app-destinations-grid>
            <app-list-destinations></app-list-destinations>

            
            <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "Destinos Autovías La Línea", "text": "Para los amantes de destinos cálidos"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Uruapan", "content": "Déjate llevar por la magia natural de Uruapan.", "image": "./src/assets/img/destinos-img/Uruapan.webp", "link": "../boletos-de-autobus-a-uruapan.html"},

                {"id": "destination2", "title": "Ixtapa", "content": "Descubre la esencia tropical de Ixtapa, Guerrero.", "image": "./src/assets/img/destinos-img/Ixtapan.webp", "link": "../boletos-de-autobus-a-ixtapa.html"},

                {"id": "destination3", "title": "Atlacomulco", "content": "Explora la esencia histórica y natural de Atlacomulco.", "image": "./src/assets/img/destinos-img/Atlacomulco.webp", "link": "../boletos-de-autobus-a-atlacomulco.html"},

                {"id": "destination4", "title": "Querétaro", "content": "Déjate sorprender por la historia y el encanto de Querétaro.", "image": "./src/assets/img/destinos-img/Queretaro.webp", "link": "../boletos-de-autobus-a-queretaro.html"},

                {"id": "destination5", "title": "Estado de México", "content": "Descubre los maravillosos lugares del Estado de México.", "image": "./src/assets/img/destinos-img/Toluca.webp", "link": "../boletos-de-autobus-a-estado-de-mexico.html"}
                ]'
            >
            </app-destinations-grid>
            
            <app-other-services
                section-title-id="other-programs-section"
                title-data-src="../src/data/other-services-loyalty-titles.json"
                cards-data-src="../src/data/other-services-loyalty-cards.json"
            >
            </app-other-services>
            <app-other-services
                title-data-src="../src/data/other-services-general-titles.json"
                cards-data-src="../src/data/other-services-general-cards.json"
        >
            </app-other-services>
            <app-blog></app-blog>
        `;
    }
}
customElements.define("app-home", AppHome);