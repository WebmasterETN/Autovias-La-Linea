/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-modal-doters.js";
import "../../../components/english/app-modal-travelpass.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../js/slick.js?v=1.0.0";

class LayoutOfertasClickEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-modal-travelpass-english></app-modal-travelpass-english>
            <app-modal-doters-english></app-modal-doters-english>

            <app-banner-slider
                slides-data='[
                    {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/ofertas-1-click.png","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="Terms and Conditions"></app-section-title>
                <h3 class="__subtitle">Terms and Conditions for 1-Click Offers</h3>

            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">1-Click Offers</h3>
                    <ol class="__terms-purchase-list">

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                1-Click Offers apply to online sales (Autovías App and website) and telephone contact center, and purchases can be made using any payment method.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Not valid for sales at ticket booths, Autovías-owned sales points, or external channels or sales points.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                On routes defined for 1-Click Offers, open tickets cannot be sold—only confirmed ones. Open tickets may be sold but at the full adult fare.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                1-Click Offer fares do not apply nor can they be combined with other discounts or promotions.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                1-Click Offer fares are personal and non-transferable. To validate the fare, the customer must present official identification before boarding the bus. If not, the full fare must be paid.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The period to purchase bus tickets and obtain the 1-Click Offer fare starts at the first minute of the day following the inquiry and lasts up to one month. If no advance fare is available, a 10% discount applies for one-way online purchases and 10% for round-trip purchases online or at ticket booths.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Fares and discounts are always subject to availability.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The 1-Click Offer fare does not apply to tickets purchased with INAPAM, minors, students, teachers, or open tickets.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Doters points accumulation for a ticket with a 1-Click Offer fare must be calculated based on the amount paid by the customer via cash, bank card, or any other payment method (excluding points). Doters points earned may be used as a payment method and will follow the same policies and restrictions as Doters Points Payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Passengers who miss their trip and arrive at the terminal within 30 minutes of their scheduled departure will be relocated to the next available departure at no cost. If they arrive after 30 minutes or need to travel later or on another day, 50% of the adult fare will be charged.
                            </p>
                        </li>

                    </ol>

                </article>
            </section>
        
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Referenced Payment Policies for 1-Click Offers:</h3>
                    <ol class="__terms-purchase-list">

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For references generated by the system for 1-Click Offer operations, the customer will have 24 hours to make the corresponding payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payment for Full Fare travel reservations may be made up to 24 hours before the bus departure.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For reservations involving both 1-Click Offers and Full Fare operations, the customer will have 24 hours to make the corresponding payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                After the mentioned timeframes, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                1-Click Offer fares are personal and non-transferable. To validate the fare, the customer must present official identification before boarding the bus. If not, the Full Fare must be paid.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The customer may change segments, service classes, date, and time. For 1-Click Offer fares, passenger name changes are not allowed, and the customer must pay the difference with the current fare at the ticket booth at the time of travel.
                            </p>
                        </li>

                    </ol>

                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Ticket Exchange Policies</h3>
                    <ol class="__terms-purchase-list">

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Passenger name changes are not allowed for 1-Click Offer fares.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Travel itinerary changes (date or time) can be made directly on the website (www.Autovías.com.mx) in the “modify your itinerary” section, or at Autovías ticket booths and sales points by presenting the boarding pass and valid official ID. Each ticket is limited to a maximum of two changes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the current fare at the time of the schedule change is higher than the 1-Click Offer fare paid, the customer must pay the difference between the paid fare and the current fare. This payment may be made using the same method previously used. All payment methods apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the current fare at the time of the schedule change is lower than the 1-Click Offer fare paid, no refunds will be issued.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cancellations are not accepted with the 1-Click Offer fare.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                All payment methods are accepted on the website.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Seats are subject to availability. Check availability at www.Autovías.com.mx and on the Autovías App.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For questions and comments, contact our customer service center at 800 8000 386 Option 1.
                            </p>
                        </li>

                    </ol>

                </article>
            </section>

             <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Referenced Payment Policies for 1-Click Offers:</h3>
                    <ol class="__terms-purchase-list">

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For references generated by the system for 1-Click Offer operations, the customer will have 24 hours to make the corresponding payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payment for Full Fare travel reservations may be made up to 24 hours before the bus departure.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For reservations involving both 1-Click Offers and Full Fare operations, the customer will have 24 hours to make the corresponding payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                After the mentioned timeframes, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                1-Click Offer fares are personal and non-transferable. To validate the fare, the customer must present official identification before boarding the bus. If not, the Full Fare must be paid.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The customer may change segments, service classes, date, and time. For 1-Click Offer fares, passenger name changes are not allowed, and the customer must pay the difference with the current fare at the ticket booth at the time of travel.
                            </p>
                        </li>

                    </ol>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Participating Routes:</h3>
                    <ol class="__terms-purchase-list">

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
	"layout-ofertas-en-1-click-english",
	LayoutOfertasClickEnglish
);
