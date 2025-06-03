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
                {"id": "destination1", "title": "Ciudad de México", "content": "Sumérgete en la esencia vibrante y cultural de la Ciudad de México.", "image": "./src/assets/img/destinos-img/aguascalientes.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
        
                {"id": "destination2", "title": "Colima", "content": "Explora la serenidad y riqueza natural de Colima.", "image": "./src/assets/img/destinos-img/culiacan.webp", "corner": "./src/assets/img/assets/destinos-img/etn-corner-img.svg"},
        
                {"id": "destination3", "title": "Guadalajara", "content": "Déjate envolver por la energía y el sabor vibrante de Guadalajara.", "image": "./src/assets/img/destinos-img/guadalajara.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
                
                {"id": "destination5", "title": "Morelia", "content": "Descubre el encanto colonial y la riqueza histórica de Morelia.", "image": "./src/assets/img/destinos-img/leon.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
        
                {"id": "destination4", "title": "Zitácuaro", "content": "Adéntrate en la naturaleza exuberante y el espíritu acogedor de Zitácuaro.", "image": "./src/assets/img/destinos-img/guanajuato.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"}
                ]'
            >
            </app-destinations-grid>
            <app-list-destinations></app-list-destinations>
            <app-tickets-sales-locations></app-tickets-sales-locations>
            
            <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "Destinos Costa Line", "text": "Para los amantes de destinos cálidos"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Acapulco", "content": "Relájate en las playas doradas de Acapulco.", "image": "./src/assets/img/destinos-img/acapulco.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
                {"id": "destination2", "title": "Chilpancingo", "content": "Explora la historia y cultura de Chilpancingo.", "image": "./src/assets/img/destinos-img/chilpancingo.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
                {"id": "destination3", "title": "Cuernavaca", "content": "Disfruta del eterno clima primaveral de Cuernavaca.", "image": "./src/assets/img/destinos-img/cuernavaca.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
                {"id": "destination4", "title": "Taxco", "content": "Déjate sorprender por la magia colonial de Taxco.", "image": "./src/assets/img/destinos-img/taxco.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"},
                {"id": "destination5", "title": "Ixtapa", "content": "Sumérgete en las playas paradisíacas de Ixtapa.", "image": "./src/assets/img/destinos-img/ixtapa.webp", "corner": "./src/assets/img/destinos-img/etn-corner-img.svg"}
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