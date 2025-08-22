/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-modal-travelpass.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-card-open-modal.js";
import "../components/app-dropdown.js";
import "../components/app-card-destination-opacity.js";
import "../components/app-slider-opacity.js";
import "../components/app-modal-multi-image.js";
import "../components/app-modal-image.js";

class AppBoletosAutobusMorelia extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Morelia_Banner_web.webp","mediumImage": "./src/assets/img/banner/tablet/Morelia_tablet.webp", "smallImage": "./src/assets/img/banner/mobile/Morelia_mobile.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__monterrey__destinations">
                <app-section-title section-title="Viaja a Morelia en autobús con Autovías La Línea"></app-section-title>
                <p class="__subtitle__destinos">Morelia</p>
                <p class="__paragraph">Morelia, joya colonial en el corazón de México, deslumbra con su arquitectura de cantera rosa, su gastronomía y su riqueza cultural. Autovías La Línea ofrece un servicio de autobús de lujo desde la Ciudad de México, asegurando un viaje seguro, cómodo y sin estrés. Ya sea una escapada de fin de semana o una estancia prolongada, tu experiencia será tan extraordinaria como el destino.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Morelia?</p>
                <p class="__paragraph">Bienvenido a Morelia, la majestuosa capital del estado de Michoacán, en el centro de México. Conocida por su arquitectura de cantera rosa y su vibrante vida cultural, Morelia es un destino que fusiona historia y modernidad con un encanto inigualable. Enmarcada por imponentes construcciones coloniales, la ciudad ofrece experiencias inolvidables en lugares como la Catedral de Morelia, el Callejón del Romance, el Acueducto y el Santuario de Guadalupe</p>
             </section>

             <section class="__section __section__grid" id="monterrey-grid-section">
                <article class="grid-container">
                    <!-- Los elementos del grid se cargarán aquí -->
                </article>
             </section>

              <section class="__section __section__monterrey__food">
                <p class="__paragraph__xl">Morelia, la encantadora capital de Michoacán, destaca por su exquisita tradición culinaria. Su gastronomía es una fusión de influencias indígenas y españolas, dando como resultado una riqueza de sabores auténticos. Desde las tradicionales carnitas y uchepos hasta los deliciosos gazpachos morelianos, cada platillo refleja la identidad cultural de la ciudad con una mezcla única de historia y sabor.</p>
                 <article class="container-cards__food">
                    <!-- Las tarjetas de comida se cargarán aquí dinámicamente -->
                </article>
             </section>

             <section class="__section __section__monterrey__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <!-- Contenedor para los dropdowns -->
                </article>
            </section>

              <section class="__section __section__monterrey__other">
                <app-section-title section-title="Otros destinos"></app-section-title>
                <article class="container-slider-other">
                    <app-slider-opacity></app-slider-opacity>
                </article>
             </section>

             <app-modal-multi-image></app-modal-multi-image>
              <app-modal-image></app-modal-image>


        `;
		await this.loadAndRenderGridItems();
		await this.loadAndRenderFoodCards();
		await this.loadAndRenderDropdowns();
		await this._configureDestinationSlider();
	}

	async loadAndRenderGridItems() {
		const gridContainer = this.querySelector(
			"#monterrey-grid-section .grid-container"
		);
		if (!gridContainer) {
			console.error("El contenedor del grid no fue encontrado.");
			return;
		}

		try {
			const response = await fetch("../src/data/lugares-morelia.json");
			if (!response.ok) {
				throw new Error(`Error HTTP: ${response.status}`);
			}
			const items = await response.json();

			items.forEach((item) => {
				const cardDiv = document.createElement("div");
				cardDiv.className = `card ${item.className || ""}`.trim();
				const bgValue = item.backgroundImage;

				if (bgValue) {
					if (bgValue.includes(".") || bgValue.includes("/")) {
						cardDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${bgValue}')`;
					} else {
						cardDiv.style.backgroundColor = bgValue;
					}
				}

				cardDiv.innerHTML = `<span>${item.text}</span>`;
				gridContainer.appendChild(cardDiv);

				cardDiv.addEventListener("click", () => this.openMultiImageModal(item));
			});
		} catch (error) {
			console.error("Error al cargar los items del grid:", error);
			gridContainer.innerHTML = "<p>Error al cargar el contenido del grid.</p>";
		}
	}

	async loadAndRenderFoodCards() {
		const foodContainer = this.querySelector(".container-cards__food");
		if (!foodContainer) {
			console.error(
				"El contenedor '.container-cards__food' no fue encontrado."
			);
			return;
		}
		foodContainer.innerHTML = "";

		try {
			const response = await fetch("../src/data/platillos-morelia.json");
			if (!response.ok) {
				throw new Error(
					`Error HTTP al cargar platillos-morelia.json: ${response.status}`
				);
			}
			const foodData = await response.json();

			if (!foodData || !Array.isArray(foodData) || foodData.length === 0) {
				foodContainer.innerHTML =
					"<p>No hay platillos para mostrar en este momento.</p>";
				console.warn(
					"No se encontraron datos de platillos en food-monterrey.json"
				);
				return;
			}

			foodData.forEach((foodItem) => {
				const cardElement = document.createElement("app-card-open-modal");

				cardElement.setAttribute(
					"card-title",
					foodItem.title || "Título no disponible"
				);
				cardElement.setAttribute(
					"card-modal-description",
					foodItem.description || "Descripción no disponible"
				);
				cardElement.setAttribute(
					"card-image",
					foodItem.imageSrc || "src/assets/img/platillos/default-card.png"
				);
				cardElement.setAttribute(
					"card-modal-image",
					foodItem.imageModal ||
						foodItem.imageSrc ||
						"src/assets/img/platillos/default-modal.png"
				);
				cardElement.setAttribute(
					"card-alt",
					foodItem.altText || foodItem.title || "Platillo"
				);
				cardElement.setAttribute(
					"card-link-text",
					foodItem.linkText || "Ver más..."
				);
				foodContainer.appendChild(cardElement);
			});
		} catch (error) {
			console.error(
				"Error al cargar o renderizar las tarjetas de comida:",
				error
			);
			foodContainer.innerHTML =
				"<p>Error al cargar la información de los platillos. Intente más tarde.</p>";
		}
	}
	async loadAndRenderDropdowns() {
		try {
			const response = await fetch(
				"../src/data/dropdown-preguntas-morelia.json"
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const dropdownsData = await response.json();
			this.renderDropdowns(dropdownsData);
		} catch (error) {
			console.error("Error al cargar o parsear dropdown-data.json:", error);
			const container = this.querySelector("#dropdowns-container");
			if (container) {
				container.innerHTML =
					"<p>Error al cargar las preguntas frecuentes.</p>";
			}
		}
	}

	renderDropdowns(dropdownsData) {
		const container = this.querySelector("#dropdowns-container");
		if (!container) {
			console.error("El contenedor #dropdowns-container no fue encontrado.");
			return;
		}
		container.innerHTML = "";

		dropdownsData.forEach((data) => {
			const dropdownElement = document.createElement("app-dropdown");
			dropdownElement.setAttribute("title-dropdown", data["title-dropdown"]);
			dropdownElement.setAttribute(
				"content-dropdown",
				data["content-dropdown"]
			);
			container.appendChild(dropdownElement);
		});
	}

	async _configureDestinationSlider() {
		const sliderElement = this.querySelector("app-slider-opacity");
		if (!sliderElement) {
			console.error(
				"AppBoletosAutobusMorelia: app-slider-opacity element not found."
			);
			return;
		}

		try {
			const response = await fetch(
				"../src/data/card-opacity-destinations.json"
			);
			if (!response.ok) {
				throw new Error(
					`HTTP error loading destination slider data! status: ${response.status}`
				);
			}
			const destinationsData = await response.json();

			sliderElement.setAttribute(
				"destinations-data",
				JSON.stringify(destinationsData)
			);
		} catch (error) {
			console.error(
				"AppBoletosAutobusMorelia: Error loading or setting data for destination slider:",
				error
			);
			sliderElement.innerHTML =
				'<p style="color: red; text-align: center;">Could not load destination slider.</p>';
		}
	}

	openMultiImageModal(itemData) {
		const modal = this.querySelector("app-modal-multi-image");
		if (!modal) {
			console.error(
				"AppBoletosAutobusMorelia: app-modal-multi-image element not found."
			);
			return;
		}

		modal.setAttribute("modal-title", itemData.text || "Detalles del Lugar");

		modal.setAttribute("content-title", itemData.title || "");
		modal.setAttribute("content-description", itemData.description || "");

		modal.setAttribute("image-1", itemData.backgroundImage || "");
		modal.setAttribute(
			"alt-1",
			`Imagen principal de ${itemData.text || "lugar"}`
		);

		modal.setAttribute("image-2", itemData.image2 || "");
		modal.setAttribute(
			"alt-2",
			`Imagen adicional 1 de ${itemData.text || "lugar"}`
		);

		modal.setAttribute("image-3", itemData.image3 || "");
		modal.setAttribute(
			"alt-3",
			`Imagen adicional 2 de ${itemData.text || "lugar"}`
		);

		modal.setAttribute("image-4", itemData.image4 || "");
		modal.setAttribute(
			"alt-4",
			`Imagen adicional 3 de ${itemData.text || "lugar"}`
		);

		if (typeof modal.openModal === "function") {
			modal.openModal();
		} else if (typeof modal.open === "function") {
			modal.open();
		} else if (typeof modal.show === "function") {
			modal.show();
		} else {
			console.warn(
				'AppBoletosAutobusMorelia: app-modal-multi-image necesita un método openModal(), open() o show(). Alternativamente, podría usar un atributo como "opened" para controlar la visibilidad.'
			);
		}
	}
}
customElements.define(
	"layout-boletos-de-autobus-morelia",
	AppBoletosAutobusMorelia
);
