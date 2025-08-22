import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-modal-travelpass.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-img-shop-left.js";
import "../components/app-img-shop-right.js";
import "../components/app-section-title.js";
import "../components/app-card-image.js";
import "../js/slick.js?v=1.0.0";

class LayoutDondeComprar extends HTMLElement {
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

        <app-section-title section-title="¿Dónde puedo comprar Boletos de autobús en Autovías?"></app-section-title>
       
        <div class="shop-container" id="shop-cards-container">
            <!-- Las tarjetas de tiendas se cargarán aquí -->
        </div>

      
  
`;
		this.loadAndRenderShopCards();
		this.loadAndRenderTitleIconCards();
	}

	async loadAndRenderShopCards() {
		try {
			const response = await fetch("../src/data/cards-buy-options.json"); // Ruta corregida
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const cardsData = await response.json();
			this.renderShopCards(cardsData);
		} catch (error) {
			console.error("Error al cargar o parsear cards-buy-options.json:", error);
			const container = this.querySelector("#shop-cards-container");
			if (container) {
				container.innerHTML =
					"<p>Error al cargar la información de los puntos de venta.</p>";
			}
		}
	}

	renderShopCards(cardsData) {
		const container = this.querySelector("#shop-cards-container");
		if (!container) {
			console.error("El contenedor de shop-cards no fue encontrado.");
			return;
		}
		container.innerHTML = "";

		cardsData.forEach((data) => {
			const cardElement = document.createElement(
				data.type === "left" ? "app-img-shop-left" : "app-img-shop-right"
			);
			cardElement.setAttribute("image-src", data.imageSrc);
			cardElement.setAttribute("alt-text", data.altText);
			cardElement.setAttribute("card-title", data.cardTitle);
			cardElement.setAttribute("card-link", data.linkUrl);
			container.appendChild(cardElement);
		});
	}
}
customElements.define("layout-donde-comprar", LayoutDondeComprar);
