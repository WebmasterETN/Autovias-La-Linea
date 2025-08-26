/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-modal-doters.js";
import "../../../components/english/app-modal-travelpass.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../js/slick.js?v=1.0.0";

class PageTerminosBuenFinEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>
		<app-modal-travelpass-english></app-modal-travelpass-english>
		<app-modal-doters-english></app-modal-doters-english>

        <app-banner-slider
            slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/Buen_Fin_web.webp","mediumImage": "../../src/assets/img/banner/tablet/Buen_Fin_tablet.webp", "smallImage": "../../src/assets/img/banner/mobile/Buen_Fin_mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>

        <app-payments></app-payments>
                    
        <section class="__section">
            <app-section-title section-title="Terms and Conditions"></app-section-title>
            <h3 class="__subtitle">BUEN FIN Terms and Conditions</h3>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Buen Fin</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">The <b>BUEN FIN</b> fare applies to online sales <b>(App AUTOVIAS, LA LINEA and websites)</b> and can be purchased with any payment method.</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Not valid for ticket offices, external channels or points of sale.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            On the route defined for <b>BUEN FIN</b>, Open Tickets cannot be sold, only Confirmed ones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The <b>BUEN FIN</b> fare does not apply with other types of discounts or promotions.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The <b>BUEN FIN</b> fare is personal and non-transferable. To make it effective, the customer must present an official ID before boarding the bus. If the requirement is not met, the Full Fare must be paid.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If <b>NOT</b> eligible for the <b>BUEN FIN</b> fare, a 10% discount applies for one-way trips purchased online and 10% for round trips purchased online or at the ticket office.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The <b>BUEN FIN</b> fare and discounts are always subject to availability.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The <b>BUEN FIN</b> fare does not apply to ticket purchases with INAPAM, MINORS, STUDENTS, TEACHERS, and OPEN TICKETS benefits.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Promotion not combinable with other promotions.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Sale period from November 15 to 18, 2024.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Travel period from November 16 to December 17, 2024 and from January 9 to February 15, 2025.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Referenced Payment Policies BUEN FIN FARE:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For references generated by the system for <b>BUEN FIN</b> fare operations, the customer will have 24 hours to make the corresponding payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For reservations involving <b>BUEN FIN</b> Full Fare operations, the customer will have 24 hours to make the corresponding payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            After the mentioned timeframes, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The <b>BUEN FIN</b> fare is personal and non-transferable. To make it effective, the customer must present an official ID before boarding the bus.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The customer may change the date and time. For the <b>BUEN FIN</b> fare, passenger name changes do not apply, and the customer must pay the difference with the current fare at the ticket office at the time of travel.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Ticket Exchange Policies:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Passenger name changes do not apply for the <b>BUEN FIN</b> fare.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Travel itinerary changes (date or time) can be made directly from the website (www.autovias.com.mx) in the “modify your itinerary” section or at ticket offices and/or <b>GHO COORDINADORA</b> sales points by presenting the boarding pass and a valid official ID. Each operation is limited to ONE CHANGE per ticket.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If the current fare at the time of the schedule change is higher than the paid <b>BUEN FIN</b> fare, the customer must pay the difference between the paid fare and the current fare at the time of the original schedule change. This payment can be made using the same payment method previously used. Applies to all payment methods.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If the current fare at the time of the schedule change is lower than the paid <b>BUEN FIN</b> fare, no refunds will be issued.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Cancellations are not accepted with the <b>BUEN FIN</b> fare.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Seats are subject to availability. Check them at <b>www.autovias.com.mx, App AUTOVIAS and ticket offices</b>.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For questions and comments, contact our customer service center at <b>800 622 22 22</b>.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Participating Routes:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Purchase period from November 15 to 18, 2024.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For travel from November 16 to December 17, 2024.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Discounts up to 40%.
                        </p>
                    </li>
                </ol>

                <p class="__terms-purchase-text">
                    The valid routes for the <b>BUEN FIN</b> fare are listed below: Routes marked (*) see purchase conditions in point 7 of these terms and conditions.
                </p>
            </article>
        </section>
    `;
	}
}

customElements.define(
	"page-terminos-buen-fin-english",
	PageTerminosBuenFinEnglish
);
