/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-modal-travelpass.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../js/slick.js?v=1.0.0";

class LayoutAvisoDePrivacidad extends HTMLElement {
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
                <app-section-title section-title="Aviso de Privacidad"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-subsection">GHO Coordinadora S.A.P.I de C.V.</h3>
                    <p class="__terms-purchase-text">De acuerdo a la Ley Federal de Protección de Datos Personales en Posesión de Particulares publicada el día 5 de julio del año 2010, dicha Ley tiene por objeto la protección de los datos personales en posesión de los particulares, con la finalidad de regular su tratamiento legitimo, controlado e informado, a efecto de garantizar la privacidad y el derecho a la autodeterminación informativa de las personas por parte de las empresas.</p>
                    <p class="__terms-purchase-text">GHO Coordinadora S.A.P.I de C.V. con domicilio en Camino Real a Toluca número. 581, Col. Cristo Rey, Delegación Álvaro Obregón, cp. 01150, es responsable del tratamiento de sus datos personales, del uso que se le de a los mismos y de su protección. Para hacer contacto con nosotros respecto del aviso de privacidad puede enviar a un correo a DERECHOS ARCO (acceso, rectificación, cancelación y oposición), con el responsable del cuidado y manejo de sus datos a la siguiente dirección electrónica: <a href="mailto:buzondeatencion@gho.mx" class="__link-text">buzondeatencion@gho.mx</a>, o via telefónica: 800-622-22-22, con el responsable de derechos de ARCO.</p>
                    <p class="__terms-purchase-text">Le es aplicable el presente aviso de privacidad a las empresas AUTOTRANSPORTES HERRADURA DE PLATA, S.A. DE C.V., AUTOTRANSPORTES DEL SUR DE JALISCO, S.A. DE C.v., AUTOBUSES DE OCCIDENTE, S.A. DE C.V., OMNIBUS CUAUHTEMOC, S.A. DE C.V., TRANSPORTES URBANOS Y SUBURBANOS DE ATLACOMULCO, S.A. DE C.V. y AUTOTRANSPORTES HALCONES BLANCOS DEL NORTE FRANJA ROJA, S.A. DE C.V.</p>
                    <p class="__terms-purchase-text">Los datos personales que se llegaran a solicitar, serán utilizados para llevar a cabo las siguientes actividades:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Contactarle con fines de Marketing, para mantenerle al tanto de nuestros productos, servicios y eventos, así como para contactarle en fechas especiales.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Envío de encuesta electrónica.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Participación en trivias, y en su caso, entrega de premios.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Uso y manejo de tarjetas de lealtad.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Suscripción a programas de lealtad.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Realizar actividades relacionadas con la publicidad de productos y servicios.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Atención a clientes.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Llenado de encuestas.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Proveer lo servicios y productos requeridos por nuestros usuarios.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">La transferencia de datos a las compañías aseguradoras con las que estas empresas tengan o llegaran a tener contratado alguno o algunos seguros o asistencias en favor del usuario.</p></li>
                    </ul>
              </article>
            </section>
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">FORMAS DE OBTENCION DE DATOS PERSONALES.</h3>
                    <p class="__terms-purchase-text">Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente; cuando visita nuestro sitio de internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la Ley.</p>
                    <p class="__terms-purchase-text">Recabamos sus datos personales de forma directa cuando usted mismos nos los proporciona por diversos medios, como cuando participa en nuestras promociones o nos da información con objeto de que le presten un servicio. Los datos que obtenemos por este medio pueden ser, entre otros:</p>
                    <ol class="__order-list-row">
                      <li class="__order-list-item"> <p class="__item-text-bold">1) Nombre completo.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">2) Dirección completa de domicilio.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">3) Teléfono de casa, trabajo o celular.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">4) Sexo y edad.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">5) Fecha de nacimiento.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">6) Correo electrónico.</p></li>
                    </ol>
                    <p class="__terms-purchase-text">Los datos personales que recabamos cuando visita nuestro sitio web o utiliza nuestros servicios en línea:</p>
                    <ol class="__order-list-row">
                      <li class="__order-list-item"> <p class="__item-text-bold">1) Información bancaria.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">2) Nombre completo.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">3) Domicilio.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">4) Correo electrónico.</p></li>
                      <li class="__order-list-item"> <p class="__item-text-bold">5) Teléfono.</p></li>
                    </ol>
                    <p class="__terms-purchase-text">Los datos personales sensibles serán tratados bajo las estrictas medidas de seguridad que garanticen su confidencialidad.</p>
                    <p class="__terms-purchase-text">Este proceso es indispensable para que podamos generar el servicio que usted está solicitando por lo que pedimos indique su aceptación en el tratamiento de dichos datos.</p>
                    <p class="__terms-purchase-text">La seguridad y confidencialidad de los datos que proporcionen al contratar un servicio o comprar un producto en línea estarán protegidos por un servidos bajo el protocolo Secure socket Layer (SSL), de tal forma que los datos enviados se transmitirán encriptados para acreditar su resguardo.</p>

              </article>
            </section>
            <section class="__sections">
              <article class="__bg-blue">
                    <h3 class="__subtitle-section">LIMITACION DEL USO O DIVULGACION DE SUS DATOS PERSONALES</h3>
                    <p class="__terms-purchase-text">Usted tiene derecho de acceder a sus datos personales que poseemos y a los detalles del tratamiento a los mismos, así como a rectificarlos en caso de ser inexactos o incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o hayan finalizado la relación contractual o de servicio.</p>

              </article>
            </section>
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">PROCESO PARA REVOCACION DE SU CONSENTIMIENTO PARA EL TRATAMIENTO DE SUS DATOS PERSONALES</h3>
                    <p class="__terms-purchase-text">En todo momento usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos. Para ello es necesario que presente su petición al siguiente correo <a href="mailto:buzondeatencion@gho.mx" class="__link-text">buzondeatencion@gho.mx</a>, o via telefónica: 800-622-22-22.</p>

              </article>
            </section>
            <section class="__sections">
              <article class="__bg-blue">
                    <h3 class="__subtitle-section">MODIFICACIONES AL AVISO DE PRIVACIDAD.</h3>
                    <p class="__terms-purchase-text">Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros productos o servicios.</p>
                    <p class="__terms-purchase-text">Estas modificaciones estarán visibles en todo momento dentro de la página web anuncios o servicios (sección aviso de privacidad).</p>

              </article>
            </section>
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">USO DE COOKIES Y WEB BEACONS.</h3>
                    <p class="__terms-purchase-text">Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro del equipo de cómputo del usuario al navegar en una página de internet algunos datos sobre este usuario, entre ellos, sus preferencias para la visualización de las paginas en ese servidor, nombre y contraseña.</p>
                    <p class="__terms-purchase-text">Las web beacons son imágenes insertadas en una página de internet o correo electrónico, que puede ser utilizado para monitorear el comportamiento de un visitante, como almacenar información sobre la dirección IP del usuario, duración del tiempo de interacción.</p>

              </article>
            </section>
            <section class="__sections">
              <article class="__bg-blue">
                    <h3 class="__subtitle-section">QUEJAS PARA EL TRATAMIENTO DE DATOS PRESONALES.</h3>
                    <p class="__terms-purchase-text">Si usted considera que su derecho de protección de datos personales ha sido lesionado o se ve afectados por alguna conducta de nuestro personal, actuaciones o respuestas de la empresa, existe alguna violación a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en Posesión de Particulares, podrá interponer la queja correspondiente ante el IFAl, para mayor información consulte <a href="http://www.ifai.org.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.ifai.org.mx</a>.</p>
                </article>
            </section>
        `;
	}
}
customElements.define("layout-aviso-de-privacidad", LayoutAvisoDePrivacidad);
