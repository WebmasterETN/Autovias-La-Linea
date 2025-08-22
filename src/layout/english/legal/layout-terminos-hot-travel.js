/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-modal-doters.js";
import "../../../components/english/app-modal-travelpass.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../js/slick.js?v=1.0.0";

class LayoutTerminosHotTravelEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>
		<app-modal-travelpass-english></app-modal-travelpass-english>
		<app-modal-doters-english></app-modal-doters-english>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/Hot_Travel_web.webp","mediumImage": "../../src/assets/img/banner/tablet/Hot_Travel_tablet.webp", "smallImage": "../../src/assets/img/banner/mobile/Hot_Travel_mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
                
        <app-payments></app-payments>
                    
        <section class="__section">
            <app-section-title section-title="Terms and Conditions"></app-section-title>
            <h3 class="__subtitle">Hot Travel Terms and Conditions</h3>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Hot Travel</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            <b>Hot Travel</b> applies to online sales <b>(Autovías App and website)</b> and the telephone contact center, and tickets may be purchased using any payment method.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            It does not apply to sales at ticket offices, Autovías-owned sales points, or external sales channels or locations.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            On routes designated for <b>Hot Travel</b>, open tickets cannot be sold—only confirmed tickets. Open tickets may be sold but only at the standard adult fare.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            <b>Hot Travel</b> fares do not apply in combination with other discounts or promotions.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            <b>Hot Travel</b> fares are personal and non-transferable. To validate the fare, the customer must present official identification before boarding the bus. Failure to do so will result in payment of the full fare.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The period to purchase bus tickets and obtain the <b>Hot Travel</b> fare begins at the first minute of the day following the inquiry and extends up to one month later. If no advance fare is available, a 10% discount applies for one-way trips purchased online, and 15% for round trips purchased online. A 10% discount applies for round trips purchased at the ticket office.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Fares and discounts are always subject to availability.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            <b>Hot Travel</b> fares do not apply to tickets purchased with INAPAM, minor, student, teacher, or open ticket benefits.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Doters point accumulation for a ticket purchased with a <b>Hot Travel</b> fare must be calculated based on the amount paid by the customer in cash, bank card, or any other payment method (excluding points). Doters points earned may be used as a payment method and are subject to the same policies and restrictions as Doters point payments.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Passengers who miss their trip and arrive at the terminal within 30 minutes of their scheduled departure will be rescheduled at no cost for the next available departure. If they arrive after 30 minutes or wish to travel later or on another day, 50% of the adult fare will be charged.
                        </p>
                    </li>
                </ol>

            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Hot Travel Referenced Payment Policies:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For references generated by the system for <b>Hot Travel</b> operations, the customer will have 24 hours to complete the corresponding payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Payment for Full Fare travel reservations may be made up to 24 hours before the bus departure.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For reservations involving both <b>Hot Travel</b> and Full Fare operations, the customer will have 24 hours to complete the corresponding payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            After the mentioned timeframes, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            <b>Hot Travel</b> fares are personal and non-transferable. To validate the fare, the customer must present official identification before boarding the bus. If this requirement is not met, the Full Fare must be paid.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The customer may make changes to service class, date, and time. For Advance Traveler Fares, passenger name changes are not allowed, and the customer must pay the difference with the current fare at the ticket office at the time of travel.
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
                            Passenger name changes are not allowed for Hot Travel fares.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Travel itinerary changes (date or time) can be made directly on the website (www.Autovías.com.mx) in the “modify your itinerary” section, or at Autovías ticket offices and sales points by presenting the boarding pass and valid official identification. Each ticket is limited to a maximum of two changes.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If the current fare at the time of the schedule change is higher than the Hot Travel fare originally paid, the customer must pay the difference. This payment may be made using the same method as the original transaction. All payment methods apply.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If the current fare at the time of the schedule change is lower than the Hot Travel fare originally paid, no refunds will be issued.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Cancellations are not accepted for Hot Travel fares.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            All payment methods are accepted on the website.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Seats are subject to availability. Check availability at <b>www.Autovías.com.mx</b> and <b>Autovías App</b>.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For questions or comments, contact our customer service center at <b>800 8000 386</b> Option 1.
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
                            Purchase period from - to - of -- 2025.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Valid for travel from --- of --- to -- --- ---- and from -- --- to -- --- of 2025.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Discounts of up to 45%.
                        </p>
                    </li>
                </ol>

            </article>
        </section>
    `;
	}
}
customElements.define(
	"layout-terminos-hot-travel-english",
	LayoutTerminosHotTravelEnglish
);
