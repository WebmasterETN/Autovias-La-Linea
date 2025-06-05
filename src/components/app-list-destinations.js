class AppListDestinations extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="main-container">
        <h2 class="accordion-title">
          Destinos con Autovías La Línea
          <button id="accordion-button" aria-expanded="false" aria-controls="accordion-panel" aria-label="Botón para expandir o contraer la seccion del acordeón de destinos" class="accordion-button" type="button"></button>
        </h2>
        <section id="accordion-panel" class="destinations-list panel" aria-labelledby="accordion-button">
          <article class="region_column" role="region">
            <h3 id="region-bajio">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Bajío
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acámbaro "
                  title="Boletos de Autobús a Acámbaro"
                  >Boletos de Autobús a Acámbaro</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Dolores Hidalgo"
                  title="Boletos de Autobús a Dolores Hidalgo"
                  >Boletos de Autobús a Dolores Hidalgo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a San Miguel de Allende"
                  title="Boletos de Autobús a San Miguel de Allende"
                  >Boletos de Autobús a San Miguel de Allende</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Centro
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Ciudad de México Norte"
                  title="Boletos de Autobús a Ciudad de México Norte"
                  >Boletos de Autobús a Ciudad de México Norte</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos a Ciudad de México Poniente"
                  title="Boletos de Autobús a Ciudad de México Poniente"
                  >Boletos de Autobús a Ciudad de México Poniente</a
                >
              </li>
              <li>Tepotzotlán (Estado de México)
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Toluca (Estado de México)"
                  title="Boletos de Autobús a Toluca (Estado de México)"
                  >Boletos de Autobús a Toluca (Estado de México)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a San Felipe del Progreso (Estado de México)"
                  title="Boletos de Autobús a San Felipe del Progreso (Estado de México)"
                  >Boletos de Autobús a San Felipe del Progreso (Estado de México)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tepotzotlán (Estado de México)"
                  title="Boletos de Autobús a Tepotzotlán (Estado de México)"
                  >Boletos de Autobús a Tepotzotlán (Estado de México)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Jilotepec (Estado de México)"
                  title="Boletos de Autobús a Jilotepec (Estado de México)"
                  >Boletos de Autobús a Jilotepec (Estado de México)
                  </a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-norte">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Norte
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Zacapu (Michoacán)"
                  title="Boletos de Autobús a Zacapu (Michoacán)"
                  >Boletos de Autobús a Zacapu (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Zamora (Michoacán)"
                  title="Boletos de Autobús a Zamora (Michoacán)"
                  >Boletos de Autobús a Zamora (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Sahuayo (Michoacán)"
                  title="Boletos de Autobús a Sahuayo (Michoacán)"
                  >Boletos de Autobús a Sahuayo (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Maravatío (Michoacán)"
                  title="Boletos de Autobús a Maravatío (Michoacán)"
                  >Boletos de Autobús a Maravatío (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Queréndaro (Michoacán)"
                  title="Boletos de Autobús a Queréndaro (Michoacán)"
                  >Boletos de Autobús a Queréndaro (Michoacán)</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-occidente">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Occidente
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Guadalajara"
                  title="Boletos de Autobús a Guadalajara"
                  >Boletos de Autobús a Guadalajara</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Aeropuerto (Jalisco)"
                  title="Boletos de Autobús a Aeropuerto (Jalisco)"
                  >Boletos de Autobús a Aeropuerto (Jalisco)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tren Ligero (Jalisco)"
                  title="Boletos de Autobús a Tren Ligero (Jalisco)"
                  >Boletos de Autobús a Tren Ligero (Jalisco)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Ciudad Guzmán (Jalisco)"
                  title="Boletos de Autobús a Ciudad Guzmán (Jalisco)"
                  >Boletos de Autobús a Ciudad Guzmán (Jalisco)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Colima (Colima)"
                  title="Boletos de Autobús a Colima (Colima)"
                  >Boletos de Autobús a Colima (Colima)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Manzanillo (Colima)"
                  title="Boletos de Autobús a Manzanillo (Colima)"
                  >Boletos de Autobús a Manzanillo (Colima)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tecomán (Colima)"
                  title="Boletos de Autobús a Tecomán (Colima)"
                  >Boletos de Autobús a Tecomán (Colima)</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-sur">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Sur y Sureste
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Morelia"
                  title="Boletos de Autobús a Morelia"
                  >Boletos de Autobús a Morelia</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Pátzcuaro  (Michoacán)"
                  title="Boletos de Autobús a Pátzcuaro  (Michoacán)"
                  >Boletos de Autobús a Pátzcuaro (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a  Santa Clara del Cobre (Michoacán)"
                  title="Boletos de Autobús a  Santa Clara del Cobre (Michoacán)"
                  >Boletos de Autobús a  Santa Clara del Cobre (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acámbaro (Michoacán)"
                  title="Boletos de Autobús a Acámbaro (Michoacán)"
                  >Boletos de Autobús a Acámbaro (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tacámbaro (Michoacán)"
                  title="Boletos de Autobús a Tacámbaro (Michoacán)"
                  >Boletos de Autobús a Tacámbaro (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tepalcatepec (Michoacán)"
                  title="Boletos de Autobús a Tepalcatepec (Michoacán)"
                  >Boletos de Autobús a Tepalcatepec (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tequicheo (Michoacán)"
                  title="Boletos de Autobús a Tequicheo (Michoacán)"
                  >Boletos de Autobús a Tequicheo (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tuzantla (Michoacán)"
                  title="Boletos de Autobús a Tuzantla (Michoacán)"
                  >Boletos de Autobús a Tuzantla (Michoacán)</a
                >
              </li>
               <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Ucareo (Michoacán)"
                  title="Boletos de Autobús a Ucareo (Michoacán)"
                  >Boletos de Autobús a Ucareo (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Uruapan (Michoacán)"
                  title="Boletos de Autobús a Uruapan (Michoacán)"
                  >Boletos de Autobús a Uruapan (Michoacán)</a
                >
              </li>
               <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Zitácuaro (Michoacán)"
                  title="Boletos de Autobús a Zitácuaro (Michoacán)"
                  >Boletos de Autobús a Zitácuaro (Michoacán)</a
                >
              </li>
               <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Ixtapa (Michoacán)"
                  title="Boletos de Autobús a Ixtapa (Michoacán)"
                  >Boletos de Autobús a Ixtapa (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Zihuatanejo (Guerrero)"
                  title="Boletos de Autobús a Zihuatanejo (Guerrero)"
                  >Boletos de Autobús a Zihuatanejo (Guerrero)</a
                >
              </li>
                <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Lázaro Cárdenas (Michoacán)"
                  title="Boletos de Autobús a Lázaro Cárdenas (Michoacán)"
                  >Boletos de Autobús a Lázaro Cárdenas (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Huetamo (Michoacán)"
                  title="Boletos de Autobús a Huetamo (Michoacán)"
                  >Boletos de Autobús a Huetamo (Michoacán)</a
                >
              </li>
               <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Infiernillo (Michoacán)"
                  title="Boletos de Autobús a Infiernillo (Michoacán)"
                  >Boletos de Autobús a Infiernillo (Michoacán)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Jerahuaro (Michoacán)"
                  title="Boletos de Autobús a Jerahuaro (Michoacán)"
                  >Boletos de Autobús a Jerahuaro (Michoacán)</a
                >
              </li>
            </ul>
          </article>
        </section>
      </div>
    `;

    let acc = this.querySelectorAll(".accordion-title");
    let button = this.querySelectorAll("#accordion-button");

    function checkWindowsSize(acc) {
      const w = window.innerWidth;
      let firstPanel = acc[0].nextElementSibling;

      if (w >= 835) {
        firstPanel.classList.add("open");
        button[0].setAttribute("aria-expanded", "true");
      } else {
        firstPanel.classList.remove("open");
        button[0].setAttribute("aria-expanded", "false");
      }
    }

    checkWindowsSize(acc);

    window.addEventListener("resize", () => checkWindowsSize(acc));

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active-item");
        let panel = this.nextElementSibling;
        panel.classList.toggle("open");
        const isExpanded = panel.classList.contains("open");
        button[i].setAttribute("aria-expanded", isExpanded.toString());
      });
    }
  }
}
customElements.define("app-list-destinations", AppListDestinations);
