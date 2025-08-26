

class AppHeaderEnglish extends HTMLElement {
	connectedCallback() {
		const logoData = JSON.parse(this.getAttribute("logo"));
		const { src, alt, href } = logoData;

		this.innerHTML = `
      <header aria-label="Autovías La Línea Header">
				<a href="${href}" class="main-header__container-logo" aria-label="Autovías La Línea" tabindex="0">
					<img src="${src}"
						alt="${alt}" 
						class="header__logo" width="922" height="143" loading="lazy"/>
				</a>

				<nav aria-label="Navigation Menu">
					<ul>
						<li><a href="../../english/" aria-label="Go to homepage" tabindex="0">Home</a></li>
					</ul>
				</nav>
				<button id="login-icon" aria-label="Open TravelPass login modal" title="Log in to Travel Pass" class="btn-travelpass btn-travelpass-active js-open-travelpass-login-modal">
					<a href="#" id="open-login-modal" title="Open login modal" class="btn-travelpass-icon">
						<img src="../../../src/assets/img/gho-img/logos/logo-travel-pass.webp" alt="Log in to Travel Pass" width="100" height="32" style="cursor: pointer;">
					</a>
				</button>
				<button id="openDotersModal" class="btn btn-doters" aria-label="Log in with Doters" tabindex="0">
					<img src='../../../src/assets/img/logos/doters.svg' alt="Doters Button" loading="lazy">
				</button>
				<a class="li__languaje" href="../../" aria-label="Change language" tabindex="0">
					<img src='../../../src/assets/img/icons-img/USA_Flag.webp' style="width:3.125rem;" width="800" height="416" alt="Image description" loading="lazy">
				</a>

				<button class="container-menu-hamburguer" aria-label="Menu" id="hamburger-icon" aria-label="Open dropdown menu">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 72 72">
						<path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
					</svg>
				</button>

				<!-- Dropdown Menu -->

				<div id="dropdown-menu" class="show">
					<ul>
						<li>
							<a href="../../english/" aria-label="Go to homepage">HOME</a>
						</li>
						<li>
							<button id="login-icon" aria-label="Open TravelPass login modal" title="Log in to Travel Pass" class="btn-travelpass btn-travelpass__submenu js-open-travelpass-login-modal">
								<a href="#" id="open-login-modal" title="Open login modal" class="btn-travelpass-icon">
									<img src="../../../src/assets/img/gho-img/logos/logo-travel-pass.webp" alt="Log in to Travel Pass" width="100" height="32" style="cursor: pointer;">
								</a>
							</button>
						</li>
						<li>
							<button id="openDotersModalMovil" class="btn btn-doters" aria-label="Log in with Doters" tabindex="0">
								<img src="../../../src/assets/img/logos/doters.svg" loading="lazy" alt="Doters Logo">
							</button>
						</li>
						<li>
							<a href="../../" aria-label="Change language">
								<img src='../../../src/assets/img/icons-img/USA_Flag.webp' style="width:3.125rem; height:2rem;" alt="Image description"  width="800" height="416" loading="lazy">
							</a>
						</li>
					</ul>
				</div>
			</header>
    `;

		this.openDesktopSubmenuInstance = null;
		this.desktopSubmenuHideTimeout = null;

		// Bind methods for event listeners
		this.boundHandleResizeForMobileMenu =
		this._handleResizeForMobileMenu.bind(this);
		this.boundHamburgerClickHandler = this._handleHamburgerClick.bind(this);

		this._initDesktopSubmenus();
		this._initMobileMenu();
		this._initDotersModals();
		this._initScrollBehavior();

		window.addEventListener("resize", this.boundHandleResizeForMobileMenu);
	}

	_initMobileMenu() {
		const hamburgerIcon = this.querySelector("#hamburger-icon");
		const dropdownMenu = this.querySelector("#dropdown-menu");

		// Guardar el SVG original del ícono de hamburguesa
		const originalSvg = hamburgerIcon.innerHTML;
		// Crear el SVG de "X"
		const closeSvg = `
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0e385a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
     </svg>
      `;
		// Store references and SVGs on the instance
		this.hamburgerIcon = hamburgerIcon;
		this.dropdownMenu = dropdownMenu;
		this.originalHamburgerSvg = originalSvg;
		this.closeMenuSvg = closeSvg;

		this._closeMobileMenu(); // Ensure it's closed initially and ARIA attributes are set
		this.hamburgerIcon.addEventListener(
			"click",
			this.boundHamburgerClickHandler
		);

		const mobileSubmenuTriggers = this.querySelectorAll(
			".submenu__media-queries > a"
		);

		mobileSubmenuTriggers.forEach((trigger) => {
			const submenuList = trigger.nextElementSibling;
			if (!submenuList || submenuList.tagName !== "UL") return;

			// Initialize ARIA attributes and state for submenus
			trigger.setAttribute("aria-expanded", "false");
			submenuList.style.display = "none";

			trigger.addEventListener("click", (event) => {
				event.preventDefault();
				const isOpen = submenuList.style.display === "block";
				this.querySelectorAll(".submenu__media-queries > ul").forEach((ul) => {
					if (ul !== submenuList && ul.style.display === "block") {
						ul.style.display = "none";
						ul.previousElementSibling.setAttribute("aria-expanded", "false");
					}
				});

				if (isOpen) {
					submenuList.style.display = "none";
					trigger.setAttribute("aria-expanded", "false");
				} else {
					submenuList.style.display = "block";
					trigger.setAttribute("aria-expanded", "true");
				}
				event.stopPropagation();
			});

			trigger.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					trigger.click();
					if (submenuList.style.display === "block") {
						submenuList.querySelector("a")?.focus();
					}
				}
			});

			const mobileSubmenuItems = Array.from(submenuList.querySelectorAll("a"));
			mobileSubmenuItems.forEach((subItem) => {
				subItem.addEventListener("keydown", (e) => {
					if (e.key === "Escape") {
						e.preventDefault();
						submenuList.style.display = "none";
						trigger.setAttribute("aria-expanded", "false");
						trigger.focus();
					}
				});
			});
		});
	}

	_handleHamburgerClick(event) {
		const isMenuOpen = this.dropdownMenu.classList.contains("show");
		if (isMenuOpen) {
			this._closeMobileMenu();
		} else {
			this._openMobileMenu();
		}
		event.stopPropagation();
	}

	_openMobileMenu() {
		if (!this.dropdownMenu || !this.hamburgerIcon) return;
		this.dropdownMenu.classList.add("show");
		this.hamburgerIcon.innerHTML = this.closeMenuSvg;
		this.hamburgerIcon.setAttribute("aria-expanded", "true");
		this.dispatchEvent(
			new CustomEvent("mobile-menu-opened", {
				bubbles: true,
				composed: true,
			})
		);
	}

	_closeMobileMenu() {
		if (!this.dropdownMenu || !this.hamburgerIcon) return;
		this.dropdownMenu.classList.remove("show");
		this.hamburgerIcon.innerHTML = this.originalHamburgerSvg;
		this.hamburgerIcon.setAttribute("aria-expanded", "false");

		// Reset mobile submenus inside dropdownMenu
		const mobileSubmenuTriggers = this.dropdownMenu.querySelectorAll(
			".submenu__media-queries > a"
		);
		mobileSubmenuTriggers.forEach((trigger) => {
			const submenuList = trigger.nextElementSibling;
			if (submenuList && submenuList.tagName === "UL") {
				submenuList.style.display = "none";
				trigger.setAttribute("aria-expanded", "false");
			}
		});

		this.dispatchEvent(
			new CustomEvent("mobile-menu-closed", { bubbles: true, composed: true })
		);
	}

	_animateSubmenu(submenuList, show) {
		if (show) {
			submenuList.style.display = "block";
			submenuList.style.overflow = "hidden";
			submenuList.style.maxHeight = "0";
			submenuList.style.opacity = "0";
			submenuList.style.transition =
				"max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s";
			setTimeout(() => {
				submenuList.style.maxHeight = submenuList.scrollHeight + "px";
				submenuList.style.opacity = "1";
			}, 10);
		} else {
			submenuList.style.overflow = "hidden";
			submenuList.style.maxHeight = submenuList.scrollHeight + "px";
			submenuList.style.opacity = "1";
			submenuList.style.transition =
				"max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s";
			setTimeout(() => {
				submenuList.style.maxHeight = "0";
				submenuList.style.opacity = "0";
			}, 10);
			setTimeout(() => {
				submenuList.style.display = "none";
			}, 410);
		}
	}

	_isDesktopSubmenuOpen(submenuList) {
		return (
			submenuList.style.display === "block" &&
			submenuList.style.maxHeight !== "0px" &&
			parseFloat(submenuList.style.opacity) === 1
		);
	}

	_openDesktopSubmenu(submenuList, triggerLink) {
		if (this._isDesktopSubmenuOpen(submenuList)) return;
		this._animateSubmenu(submenuList, true);
		triggerLink.setAttribute("aria-expanded", "true");
	}

	_closeDesktopSubmenu(submenuList, triggerLink) {
		if (!this._isDesktopSubmenuOpen(submenuList)) return;
		this._animateSubmenu(submenuList, false);
		if (triggerLink) triggerLink.setAttribute("aria-expanded", "false");
	}

	_toggleDesktopSubmenu(submenuList, triggerLink) {
		if (this._isDesktopSubmenuOpen(submenuList)) {
			this._closeDesktopSubmenu(submenuList, triggerLink);
			if (this.openDesktopSubmenuInstance === submenuList) {
				this.openDesktopSubmenuInstance = null;
			}
		} else {
			if (
				this.openDesktopSubmenuInstance &&
				this.openDesktopSubmenuInstance !== submenuList
			) {
				const prevTrigger =
					this.openDesktopSubmenuInstance.previousElementSibling;
				this._closeDesktopSubmenu(
					this.openDesktopSubmenuInstance,
					prevTrigger && prevTrigger.matches("a") ? prevTrigger : null
				);
			}
			this._openDesktopSubmenu(submenuList, triggerLink);
			this.openDesktopSubmenuInstance = submenuList;
		}
	}

	_initDesktopSubmenus() {
		const submenuContainers = this.querySelectorAll(".submenu");

		submenuContainers.forEach((container) => {
			const link = container.querySelector("a");
			const list = container.querySelector("ul");

			if (!link || !list) return;

			link.setAttribute("aria-expanded", "false");
			list.style.display = "none";
			list.style.overflow = "hidden";
			list.style.maxHeight = "0";
			list.style.opacity = "0";

			link.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					this._toggleDesktopSubmenu(list, link);
					if (this._isDesktopSubmenuOpen(list)) {
						list.querySelector("a")?.focus();
					}
				} else if (event.key === "ArrowDown") {
					event.preventDefault();
					if (!this._isDesktopSubmenuOpen(list)) {
						this._toggleDesktopSubmenu(list, link); // Opens it
					}
					list.querySelector("a")?.focus();
				} else if (event.key === "Escape") {
					if (this._isDesktopSubmenuOpen(list)) {
						event.preventDefault();
						this._closeDesktopSubmenu(list, link);
						link.focus();
						this.openDesktopSubmenuInstance = null;
					}
				}
			});

			container.addEventListener("mouseenter", () => {
				if (this.desktopSubmenuHideTimeout)
					clearTimeout(this.desktopSubmenuHideTimeout);
				if (
					this.openDesktopSubmenuInstance &&
					this.openDesktopSubmenuInstance !== list
				) {
					const prevTrigger =
						this.openDesktopSubmenuInstance.previousElementSibling;
					this._closeDesktopSubmenu(
						this.openDesktopSubmenuInstance,
						prevTrigger && prevTrigger.matches("a") ? prevTrigger : null
					);
				}
				this._openDesktopSubmenu(list, link);
				this.openDesktopSubmenuInstance = list;
			});

			container.addEventListener("mouseleave", () => {
				this.desktopSubmenuHideTimeout = setTimeout(() => {
					this._closeDesktopSubmenu(list, link);
					if (this.openDesktopSubmenuInstance === list) {
						this.openDesktopSubmenuInstance = null;
					}
				}, 300);
			});

			link.addEventListener("click", (event) => {
				event.preventDefault();
				this._toggleDesktopSubmenu(list, link);
				event.stopPropagation();
			});

			const submenuItems = Array.from(list.querySelectorAll("a"));
			submenuItems.forEach((subItem, index) => {
				subItem.addEventListener("keydown", (e) => {
					if (e.key === "Escape") {
						e.preventDefault();
						this._closeDesktopSubmenu(list, link);
						link.focus();
						this.openDesktopSubmenuInstance = null;
					} else if (
						e.key === "Tab" &&
						!e.shiftKey &&
						index === submenuItems.length - 1
					) {
						this._closeDesktopSubmenu(list, link);
						this.openDesktopSubmenuInstance = null;
					} else if (e.key === "Tab" && e.shiftKey && index === 0) {
						this._closeDesktopSubmenu(list, link);
						this.openDesktopSubmenuInstance = null;
					}
				});
			});
		});

		document.addEventListener("click", (event) => {
			if (
				this.openDesktopSubmenuInstance &&
				!this.openDesktopSubmenuInstance.parentElement.contains(event.target)
			) {
				const trigger = this.openDesktopSubmenuInstance.previousElementSibling;
				this._closeDesktopSubmenu(
					this.openDesktopSubmenuInstance,
					trigger && trigger.matches("a") ? trigger : null
				);
				this.openDesktopSubmenuInstance = null;
			}
		});
	}

	// Ejemplo conceptual de cómo se usaría en app-header.js
	_initDotersModals() {
		const openModalButtonDesktop = this.querySelector("#openDotersModal"); // Botón en el header para desktop
		const openModalButtonMovil = this.querySelector("#openDotersModalMovil"); // Botón en el header para móvil

		// Asumimos que solo hay UNA instancia de app-modal-doters en la página.
		// Si tienes más, necesitarás una forma más específica de seleccionarlo (ej. por un ID único en el tag <app-modal-doters id="miModalUnico">).
		const dotersModalElement = document.querySelector("app-modal-doters-english");

		if (dotersModalElement) {
			const openAction = () => {
				if (typeof dotersModalElement.open === "function") {
					dotersModalElement.open();
				} else {
					console.error(
						"El método open() no está disponible en el elemento app-modal-doters-english.",
						dotersModalElement
					);
				}
			};

			if (openModalButtonDesktop) {
				openModalButtonDesktop.addEventListener("click", openAction);
			}
			if (openModalButtonMovil) {
				openModalButtonMovil.addEventListener("click", openAction);
			}
		} else {
			console.warn("Elemento <app-modal-doters> no encontrado en el DOM.");
		}
	}

	_initScrollBehavior() {
		window.addEventListener("scroll", function (event) {
			// Detectar si se está en el tope superior o inferior
			if (window.scrollY < 0) {
				// Evitar el rebote (ejemplo: deteniendo el scroll)
				window.scrollTo(0, 0);
			}
		});

		// Evento para manejar el scroll
		const header = this.querySelector("header");
		let lastScrollY = window.scrollY;

		// Evento para manejar el scroll
		window.addEventListener("scroll", () => {
			if (window.innerWidth >= 990) {
				const currentScrollY = window.scrollY;

				if (currentScrollY > lastScrollY) {
					// Scroll hacia abajo: ocultar el header
					header.classList.add("hidden");
				} else {
					// Scroll hacia arriba: mostrar el header
					header.classList.remove("hidden");
				}

				lastScrollY = currentScrollY;
			}
		});
	}

	_handleResizeForMobileMenu() {
		const MOBILE_BREAKPOINT = 990;
		if (!this.dropdownMenu || !this.hamburgerIcon) return;

		if (window.innerWidth > MOBILE_BREAKPOINT) {
			// Desktop view
			if (this.dropdownMenu.classList.contains("show")) {
				this._closeMobileMenu();
			}
		}
	}

	disconnectedCallback() {
		window.removeEventListener("resize", this.boundHandleResizeForMobileMenu);
		if (this.hamburgerIcon && this.boundHamburgerClickHandler) {
			this.hamburgerIcon.removeEventListener(
				"click",
				this.boundHamburgerClickHandler
			);
		}
	}
}
customElements.define("app-header-english", AppHeaderEnglish);
