/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-table-pets.js";
import "../js/slick.js?v=1.0.0";

class LayoutTerminosBuenFin extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-modal-doters></app-modal-doters>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Buen_Fin_web.webp","mediumImage": "../src/assets/img/banner/tablet/Buen_Fin_tablet.webp", "smallImage": "../src/assets/img/banner/mobile/Buen_Fin_mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>

        <app-payments></app-payments>
                    
        <section class="__section">
            <app-section-title section-title="Términos y Condiciones"></app-section-title>
            <h3 class="__subtitle">Términos y Condiciones BUEN FIN</h3>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Buen Fin</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">La tarifa de <b>BUEN FIN</b> aplica tanto para venta en línea <b>(App AUTOVIAS, LA LINEA y sitios web)</b> y se puede realizar la compra con cualquier forma de pago.</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No aplica para taquilla, canales o puntos de venta externos.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En la ruta definida para <b>BUEN FIN</b> no se podrán vender Boletos Abiertos, solo Confirmados.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La tarifa <b>BUEN FIN</b> no aplica con otro tipo de descuentos o promociones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La Tarifa <b>BUEN FIN</b> son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de <b>NO </b>contar con Tarifa <b>BUEN FIN </b>aplica el descuento del 10% por compra en internet por viaje sencillo y 10% por viaje redondo comprando en línea o bien aplica el 10% por viaje redondo comprando en la taquilla.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La Tarifa <b>BUEN FIN</b>  y los descuentos siempre estarán sujetos a disponibilidad.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La Tarifa <b>BUEN FIN</b> no aplica en la compra de boletos con beneficios de INAPAM, MENORES, ESTUDIANTES, MAESTROS y BOLETOS ABIERTOS.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Promoción no acumulable con otras promociones
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Fecha de venta del 15 al 18 de noviembre 2024
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Fecha de viaje del 16 de noviembre al 17 diciembre 2024 y del 9 enero al 15 febrero de 2025
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Políticas de Pagos Referenciados TARIFA BUEN FIN:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para las referencias que genere el sistema por operaciones de Tarifa <b>BUEN FIN</b> el cliente tendrá 24 horas para realizar el pago correspondiente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En las reservaciones que involucren operaciones de Tarifa <b>BUEN FIN</b> Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La Tarifa <b>BUEN FIN</b> son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El cliente puede realizar cambio de fecha y horario. Para la Tarifa <b>BUEN FIN</b>, no aplica cambio de nombre de pasajero, teniendo que pagar el cliente la diferencia con la tarifa vigente en la taquilla al momento de realizar el viaje.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Políticas de Intercambio de Boletos:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para la Tarifa <b>BUEN FIN</b> no aplica cambio de nombre de pasajero.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.autovias.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en taquillas y/o puntos de venta <b>GHO COORDINADORA</b> presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a un máximo de UN CAMBIO por boleto.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la de Tarifa <b>BUEN FIN</b> pagada, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago podrá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la de Tarifa <b>BUEN FIN</b> pagada, no habrá devoluciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Con la Tarifa <b>BUEN FIN</b> no se aceptan cancelaciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Asientos sujetos a disponibilidad, consúltalos en <b>www.autovias.com.mx, App AUTOVIAS y taquillas</b>.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para dudas y comentarios, comunícate a nuestro centro de atención a clientes al <b>800 622 22 22</b>.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Rutas Participantes:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Vigencia de compra del 15 al 18 de noviembre 2024
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para viajar del 16 de noviembre al 17 diciembre 2024.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Descuentos de hasta el 40%.
                        </p>
                    </li>
                </ol>

                <p class="__terms-purchase-text">
                    Las rutas Vigentes para Tarifa <b>BUEN FIN</b> son las que se listan a continuación: Rutas marcadas (*) ver condiciones de compra en el punto 7 de estos términos y condiciones.
                </p>
            </article>
        </section>
    `;
	}
}

customElements.define("layout-terminos-buen-fin", LayoutTerminosBuenFin);
