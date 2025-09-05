class AppFooterEnglish extends HTMLElement {
	constructor() {
		super();
		this.handleResize = this.handleResize.bind(this);
	}

	connectedCallback() {
		this.innerHTML = `
      <footer class="footer" aria-labelledby="footer-title">
        <h2 id="footer-title" class="visually-hidden">Footer Information</h2>
				<div class="footer__content main-container">
					<div class="footer__content__footer-logo">
						<a href="https://www.autovias.com.mx/" aria-label="Go to homepage of CompanyName">
							<img src="../../src/assets/img/logos/logo.svg" alt="Logo of [Company Name]" class="footer__logo" width="922" height="143" loading="lazy"/>
						</a>
					</div>
					<div class="footer__content__columns"></div>
				</div>
				<div class="footer__content__copyright">
					<p>
						© ${new Date().getFullYear()} Autovías La Línea.
					</p>
				</div>
      </footer>
    `;

		this.fillFooterColumns();
		window.addEventListener("resize", this.handleResize);
	}

	fillFooterColumns() {
		const footerContent = [
			{
				title: "About the Company",
				links: [
					{ text: "Who We Are", href: "../../english/about/quienes-somos.html" },
					{
						text: "Job Opportunities",
						href: "https://Autovías.com.mx/bolsa-de-trabajo/",
					},
				],
			},
			{
				title: "Legal",
				links: [
					{
						text: "Privacy Notices",
						href: "../../english/about/aviso-de-privacidad.html",
					},
					{
						text: "Terms and Conditions",
						href: "../../english/about/terminos-condiciones.html",
					},
				],
			},
			{
				sublevel: [
					{
						title: "Customer Service",
						links: [
							{
								text: "Protected Traveler",
								href: "../../english/viajero-protegido.html",
							},
							{
								text: "Agencies",
								href: "https://venta.autovias.com.mx/request.aspx?PRGNAME=AccesoEx&ARGUMENTS=-AAG,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES",
							},
						],
					},
					{
						title: "Locations",
						links: [
							{
								text: "Destination Terminals",
								href: "../../english/destinos.html",
							},
						],
					},
				],
			},
			{
				title: "Help",
				links: [
					{
						text: "Frequently Asked Questions",
						href: "../../english/preguntas-frecuentes.html",
					},
					{
						text: "Ticket Types",
						href: "../../english/boletos-de-autobus.html",
					},
					{ text: "Where to Buy", href: "../../english/donde-comprar.html" },
					{ text: "Payment Methods", href: "#payment-methods" },
					{ text: "Site Map", href: "../../english/sitemap.html" },
				],
			},
			{
				sublevel: [
					{
						title: "Contact Us",
						links: [
							{ text: "800 8000 386", href: "tel:8008000386", type: "tel" },
						],
					},
					{
						title: "Follow Us",
						links: [
							{
								text: "Facebook",
								href: "https://www.facebook.com/Autobuses.Autovias",
								type: "icon-fb",
							},
							{
								text: "Instagram",
								href: "https://www.instagram.com/autovias/",
								type: "icon-ig",
							},
							{
								text: "X",
								href: "https://twitter.com/autovias_",
								type: "icon-x",
							},
							{
								text: "YouTube",
								href: "https://www.youtube.com/channel/UCOMVpctqR_Q2x__5b3iHDDQ",
								type: "icon-yt",
							},
							{
								text: "TikTok",
								href: "https://www.tiktok.com/@autovias",
								type: "icon-tiktok",
							},
						],
					},
				],
			},
		];

		const columnsContainer = this.querySelector(".footer__content__columns");

		footerContent.forEach((col, index) => {
			const section = document.createElement("section");
			section.classList.add("footer__column");

			if (index === footerContent.length - 1 && col.sublevel) {
				// Último .footer__column con sublevels: Siempre usar <h3> y mostrar <ul>
				col.sublevel.forEach(({ title, links }) => {
					const subSection = document.createElement("section");
					subSection.classList.add("footer__sublevel");
					subSection.append(
						this.createTitle(title, false),
						this.createLinkList(links, false)
					);
					section.appendChild(subSection);
				});
			} else if (col.sublevel) {
				col.sublevel.forEach(({ title, links }) => {
					const subSection = document.createElement("section");
					subSection.classList.add("footer__sublevel");
					subSection.append(
						this.createTitleOrButton(title),
						this.createLinkList(links)
					);
					section.appendChild(subSection);
				});
			} else {
				section.append(
					this.createTitleOrButton(col.title),
					this.createLinkList(col.links)
				);
			}

			columnsContainer.appendChild(section);
		});

		this.handleResize(); // Aplicar cambios según la resolución inicial
	}

	createLinkList(links, collapsible = true) {
		const ul = document.createElement("ul");
		ul.classList.add("footer__list");
		if (collapsible) ul.classList.add("panel-content", "hidden");

		links.forEach(({ text, href, type }) => {
			const li = document.createElement("li");
			li.classList.add("footer__item");

			if (type?.includes("icon")) {
				li.innerHTML = `<a href="${href}" aria-label="${text}" class="social_media_link"><i class="${type}"></i></a>`;
			} else if (type?.includes("tel")) {
				li.innerHTML = `<a class="footer__link tel_link" href="${href}" >${text}</a>`;
			} else {
				li.innerHTML = `<a class="footer__link" href="${href}">${text}</a>`;
			}

			ul.appendChild(li);
		});

		return ul;
	}

	createTitleOrButton(title) {
		const isMobile = window.innerWidth <= 1200;
		return this.createTitle(title, isMobile);
	}

	createTitle(title, isButton) {
		if (isButton) {
			const button = document.createElement("button");
			button.classList.add("accordion-btn");
			button.textContent = title;
			button.addEventListener("click", () => {
				const list = button.nextElementSibling;
				list.classList.toggle("hidden");
				button.classList.toggle("open");
			});
			return button;
		} else {
			const h3 = document.createElement("h3");
			h3.classList.add("footer__title");
			h3.textContent = title;
			return h3;
		}
	}

	handleResize() {
		const isMobile = window.innerWidth <= 1200;
		const columns = this.querySelectorAll(".footer__column");

		columns.forEach((column, index) => {
			if (index === columns.length - 1) return; // Última columna: No se cambia

			column
				.querySelectorAll(".footer__title, .accordion-btn")
				.forEach((titleElement) => {
					const newTitle = this.createTitle(titleElement.textContent, isMobile);
					titleElement.replaceWith(newTitle);
				});

			column.querySelectorAll(".footer__list").forEach((list) => {
				if (isMobile) {
					list.classList.add("hidden");
				} else {
					list.classList.remove("hidden");
				}
			});
		});
	}
}

customElements.define("app-footer-english", AppFooterEnglish);
