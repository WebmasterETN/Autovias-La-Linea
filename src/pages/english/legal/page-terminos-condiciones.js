/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-modal-doters.js";
import "../../../components/english/app-modal-travelpass.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../js/slick.js?v=1.0.0";

class PageTerminosCondicionesEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-modal-travelpass-english></app-modal-travelpass-english>
            <app-modal-doters-english></app-modal-doters-english>
    
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
                <app-section-title section-title="Terms and Conditions"></app-section-title>
                <h3 class="__subtitle">I. TERMS AND CONDITIONS</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">1. GENERAL SALES POLICIES.</h3>
                    
                    <h4 class="__subtitle-subsection">1.1 CANCELLATIONS, CHANGES AND REFUNDS.</h4>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Date, time, and destination changes will be governed according to section 3 EXCHANGES of these commercial policies.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">There are no cancellations or refunds for tickets through any sales channel, regardless of the payment method used.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Customers are advised to verify their information and carefully read the terms and conditions of sale. If they disagree with any point of the policies, they should not complete the transaction.</p>
                        </li>
                    </ul>

                    <h4 class="__subtitle-subsection">1.2 DISCOUNTS.</h4>
                    <p class="__terms-purchase-text">In accordance with current regulations, GHO grants discounts to Customers who meet the guidelines established for each case according to the following criteria:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">a) The discount offer per bus is limited, complying with the minimum indicated by the Secretary of Communications and Transportation.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">b) The following are eligible for discounts or exempt from payment:</p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Children between 0 and 2 years 11 months do not pay for a ticket and must travel accompanied by an adult in the same seat paid by the adult.</p>
                                    <ul class="__terms-purchase-list __nested-list-bullet">
                                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">«Only one child aged 2 years 11 months per adult is allowed. If this limit is exceeded, an additional seat must be purchased at 50% (one to two children under 3 years per additional seat).</p></li>
                                    </ul>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">- Children between 3 and 11 years 11 months will receive a 50% discount off the full ticket price. If the child’s age is not evident, an ID must be presented to verify age, such as: birth certificate, CURP, passport, or valid school ID with recent photo.</p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">- Minors under 18 years old may only travel accompanied by an adult.</p>
                                    <ul class="__terms-purchase-list __nested-list-bullet">
                                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">» FOUR discounts apply per bus.</p></li>
                                    </ul>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">» Teenagers between 12 and 18 years old must pay the full ticket price. The customer is subject to seat availability per bus.</p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>INSEN OR INAPAM.</b> A permanent 50% discount is offered to Customers who present the original and valid INSEN or INAPAM ID of the person traveling. Limited to four seats per unit. The following conditions apply:</p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the Customer does not present the original ID but the discount eligibility is evident, the discount will be allowed only with prior authorization from the Regional Manager.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">« If the Customer does not present the original ID and eligibility is not evident, the discount will be denied.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">« If the Customer presents a copy of the INAPAM or INSEN ID, they must also present the original official identification (INE, IFE).</p></li>
                            </ul>
                        </li>

                                            <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text"><b>Students.</b> Boarding passes with a 50% discount are offered during vacation periods according to the official SEP calendar, for Customers who prove they are Students with the original and valid ID from an institution within the national education system affiliated with SEP. The following conditions apply:</p>
                        <ul class="__terms-purchase-list __nested-list">
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The discount will be 50% for students (6 discounts per bus) and will apply according to the vacation period indicated in the School Calendar issued by the Secretaría de Educación Pública (SEP).</p></li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">- To obtain the student discount, you must present the valid corresponding ID or, alternatively, a certificate issued by the school, which must include:</p>
                                <ul class="__terms-purchase-list __nested-list-bullet">
                                    <li class="__terms-purchase-item"><p class="__terms-purchase-text">Name, school stamp, holder’s photo, and account or enrollment number.</p></li>
                                </ul>
                            </li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">+ If the ID or corresponding document is not presented at any of the checkpoints, the company reserves the right to charge the difference between the discount and 100% of the ticket price.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The ID must be legible, without erasures or alterations that cast doubt on its authenticity.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Foreign students enrolled in a Mexican SEP-affiliated institution will receive discounts under the same conditions as national students.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Foreign students with IDs from foreign institutions will not be eligible for the discount and must pay the full ticket price.</p></li>
                        </ul>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">The customer is subject to seat availability per bus.</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text"><b>Teachers.</b> Up to (4 tickets per bus) are offered with a 25% discount during vacation periods according to the official SEP calendar, for Customers who prove they are Teachers with the original and valid ID from an institution within the national education system affiliated with SEP. Required documentation includes: Institution ID, Union ID, and/or pay stub.</p>
                        <ul class="__terms-purchase-list __nested-list">
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">Discounts will be granted to institutions affiliated with SEP, as well as schools incorporated into them.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- To purchase their ticket, teachers must present the valid corresponding ID or, alternatively, a certificate issued by the school to which they belong, which must include the school’s name and stamp, the holder’s name and photo, and must be shown again when boarding the bus and at any checkpoint.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the documents are not presented at any of the indicated checkpoints, the company reserves the right to charge the difference between the discount and 100% of the ticket price.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The ID must be legible, without erasures or alterations that cast doubt on its authenticity.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Foreign teachers enrolled in a Mexican SEP-affiliated institution will receive discounts under the same conditions as national teachers.</p></li>
                            <li class="__terms-purchase-item"><p class="__terms-purchase-text">- TWO discounts apply per bus.</p></li>
                        </ul>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text"><b>People with disabilities.</b> Up to two seats per bus are offered with a permanent 50% discount to Customers who prove their disability with an original ID issued by any public and/or private institution with sufficient authority to issue such documents.</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">The customer is subject to seat availability per bus.</p>
                    </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">2. SALES CHANNELS.</h3>
                    <h4 class="__subtitle-subsection">2.1 CONTACT CENTER.</h4>
                    <p class="__terms-purchase-text">Customer service phone number 800 622 2222, where the Customer can purchase bus tickets charged to their credit or debit card (except American Express) at no additional cost, through the Telephone Center, as long as the cardholder is the one making the call. Otherwise, the Telephone Sales Executive will provide information but must invite the Customer to have the cardholder call or purchase the tickets at the ticket counter.</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">There is no additional charge for ticket purchase service.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Arrive 30 minutes before your trip.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Purchases can only be made with:</p>
                            <ul class="__terms-purchase-list __nested-list-bullet">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Credit and debit card (except American Express).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Only the account and/or cardholder may pay for the trip.</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">You must present official identification and the card used for the purchase when exchanging the boarding pass and sign the corresponding vouchers. The passenger will not be allowed to travel without complete documentation.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">If the passenger misses the scheduled departure, there will be no changes or refunds.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Limited to a maximum amount of $3,500.00 in two transactions per day.</p></li>
                    </ul>

                    <h4 class="__subtitle-subsection">2.2 TICKET OFFICE</h4>
                    <p class="__terms-purchase-text">The following payment methods are accepted at the ticket office:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Cash:</b> Only national currency is accepted.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Credit and debit card:</b> Purchases can only be made with credit or debit cards (except American Express), and you must present valid official identification: INE, Passport, Professional License, and the card used for the purchase.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Open Ticket:</b></p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">It is necessary to present the open ticket to obtain a ticket with date and time.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">The Open Ticket is valid for 6 months from the date of purchase.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">The Open Ticket can only be redeemed through the sales channel where it was purchased; that is, if the customer purchased the open ticket at the ticket office, it can ONLY be confirmed at the ticket office.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Once the Open Ticket is exchanged for a confirmed ticket, it cannot be changed again or transferred to another person.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">The Open Ticket can be CONFIRMED only ONCE.</p></li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>- Doters Points:</b></p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">You must provide your membership number and password to redeem points.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Only the account holder may pay for the trip.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">If the passenger misses the scheduled departure, there will be no changes or refunds.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">In cases attributable to the company, the ticket may be subject to change.</p></li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>- Mixed Payment</b></p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Purchases can be made with Viaja Más points and credit or debit cards (except American Express).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Purchases can be made with Viaja Más points and cash payment.</p></li>
                            </ol>
                        </li>
                    </ul>

                    <h4 class="__subtitle-subsection">2.3 WEBSITES.</h4>
                    <p class="__terms-purchase-text">The Customer accesses the websites <a href="http://www.autovias.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">http://www.autovias.com.mx</a> and <a href="http://www.lalinea.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">http://www.lalinea.com.mx</a>, where they can make inquiries and book their trip for the Plus service using a credit or debit card (except American Express). This allows them to obtain a boarding pass and go directly to the platform without queuing at the ticket office. Purchases through the website are subject to the following terms and conditions:</p>

                    <h5 class="__subtitle-subsubsection">2.3.1 PURCHASE AND BILLING CONDITIONS.</h5>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) You may purchase bus tickets with a set date and time for yourself and/or other individuals.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) No refunds or exchanges apply. If the Customer does not use their ticket due to reasons unrelated to the company, they must purchase a new ticket to travel.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Tickets may be purchased up to one hour and thirty minutes before the desired departure time.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) Tickets purchased are unique, personal, and non-transferable.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) If the system experiences any failure during the process, the customer must immediately contact 800 622 22 22.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">f) If the Customer fails to board the bus on time, the trip will be forfeited and no refund or exchange will be issued.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">g) To board the bus, you only need to present your printed ticket or show it on your mobile device along with official identification.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">h) Sales may be made up to one hour and thirty minutes before the desired trip begins.</p></li>
                    </ul>
                    <p class="__terms-purchase-text">The following payment methods are accepted:</p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>National Credit/Debit Cards:</b> Purchases can only be made with credit cards (except American Express). For debit cards, only City Banamex, HSBC, Banco Azteca, Bancomer, Banorte / IXE, and Santander are accepted. Subject to the maximum amounts established in these policies.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Open Ticket:</b></p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The Open Ticket is valid for 6 months from the date of purchase.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- It can only be confirmed through the website, and the customer has up to 2 hours before the desired trip to confirm it (subject to availability).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Once the Open Ticket is exchanged for a confirmed ticket, it cannot be canceled or transferred under any circumstances or through any sales channel.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- You may request an invoice after completing your trip by visiting our websites: <a href="http://www.autovias.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.autovias.com.mx</a> <a href="http://www.lalinea.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.lalinea.com.mx</a></p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Then go to the ONLINE INVOICE option and enter your RFC and Email Address in the fields. [Click on Request or Issue Invoice]</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">In the new tab that opens, verify that your tax information is correct. If incorrect, select [Modify Information]. If correct, enter the INVOICE FOLIO, FOLIO NUMBER, and TOTAL PRICE, which can be found on your bus ticket.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Only purchases made in cash or with bank cards (except American Express) can be invoiced.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- In the case of mixed payment (card + Viaja Más points or cash + Viaja Más points), only the amount paid in cash or card will be invoiced.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If invoicing cannot be completed through the process mentioned above, the customer must call 800 622 2222 to request the invoice, or alternatively, send their tax information and boarding pass to the following emails: <a href="mailto:buzondeatencion@gho.mx" class="__link-text">buzondeatencion@gho.mx</a> and/or <a href="mailto:atencionaclientes@gho.mx" class="__link-text">atencionaclientes@gho.mx</a></p></li>
                            </ul>
                        </li>
                    </ul>
                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">3. EXCHANGES</h3>
                    <p class="__terms-purchase-text">The Customer is entitled to make one exchange under the following conditions:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) The ticket may be exchanged by presenting it at the ticket office at least one hour before the originally scheduled departure time.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) The ticket must not have been printed previously.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) The data that may be modified include: Date, Time, Origin, Destination, and Service Type. If the ticket has already been printed, the exchange must be made directly at the ticket office.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) This operation may only be carried out by the ticket holder and is non-transferable.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) The exchange may be made for the same route or a different one. In the latter case, the customer must pay the difference if the new ticket is more expensive and must understand that no refund will be given if the new ticket is cheaper than the original.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">f) Changes for customers with discounts (INSEN, minors, students and teachers, people with disabilities) are subject to availability. Otherwise, the price difference must be paid, and only the date and time may be changed.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">g) If a Customer purchases an NE and converts it to a CE, this automatically consumes their exchange, meaning no further changes may be made.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">h) If the trip is not completed on time due to reasons attributable to the company, the Customer may be granted an additional exchange through the Ticket Office Manager, with prior authorization from the Regional Manager. Alternatively, they may request a refund through the applicable banking institution.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">i) Only one exchange is allowed per transaction.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">j) The exchange will be carried out with prior authorization from the Regional Manager, through the Ticket Office Manager.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">4. LOST TICKET REPLACEMENT</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Lost tickets will not be replaced, and as a result, the customer will forfeit their trip. The customer may receive a 50% discount on the next available departure (subject to availability).</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">5. LUGGAGE TRANSPORTATION</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Passengers must check their luggage at the platform before boarding the bus and will receive a claim ticket (luggage receipt). This ticket must be kept and presented at the end of the trip to retrieve their belongings.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the passenger forgets to collect their luggage at the end of the trip, the company, without any liability, may have recovered it. If so, the luggage will be held by the company for the next 72 business hours and will only be returned upon presentation of the claim ticket and the travel ticket.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Each passenger may carry one suitcase in the overhead compartment weighing up to 10 kg or measuring up to 115 linear cm with wheels.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Each passenger may carry one additional suitcase in the trunk at no extra cost, weighing up to 25 kg or measuring up to 158 linear cm with wheels.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the luggage exceeds 25 kg or 158 linear cm, the passenger must pay a fee indicated at the ticket counter.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- A ticket will be issued for excess luggage charges.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- In case of loss of undeclared and unregistered luggage on board, the company will not be held responsible, including for carry-on items.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Luggage is understood to mean personal items and clothing.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Only carry-on luggage is allowed on board (e.g., laptop, small bags, and any item not exceeding 115 linear cm).</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- It is prohibited to transport the following items in either trunk or carry-on luggage:</p>
                            <ul class="__terms-purchase-list __nested-list-bullet">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">* Explosives</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">* Toxic, hazardous, or harmful substances</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">* Matches, lighters, or any other flammable item or material that may pose a risk to passengers</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Transporting alcoholic beverages in carry-on luggage is prohibited.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the luggage handler observes poor condition of the luggage (tears, stains, etc.), they must report it to the owner and obtain their signed acknowledgment on the luggage record.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">6. LOST LUGGAGE COMPENSATION</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- In the event of loss or misplacement of luggage by the transporting company, it will have a maximum of 72 hours to conduct a thorough search at the origin, intermediate, or final destination terminals.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Once the luggage is officially declared lost after the search, the affected passenger will be compensated with an amount equivalent to a maximum of 15 days of the current general minimum wage, in accordance with Article 66, Section V of the Federal Roads, Bridges, and Motor Transport Law. This amount is paid per passenger and upon presentation of the luggage claim ticket(s), with no liability for the contents of the luggage.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Compensation for lost or misplaced luggage will be made within a maximum of 30 business days after the loss has been declared.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the passenger does not present the luggage claim tickets, the company will not be held responsible for the loss of such items.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- If the customer has Bus Protect or BAS Protegido assistance, they must report the incident within the first 30 minutes after the end of their trip by calling 800 622 2222, option 8, then option 1.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Terms and conditions:</p>
                            <ol type="1" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Bus Protect: <a href="https://www.autovias.com.mx/" target="_blank" rel="noopener noreferrer" class="__link-text">www.autovias.com.mx</a></p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">BAS Protegido: <a href="http://www.basprotegido.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.basprotegido.com.mx</a> (site unavailable)</p></li>
                            </ol>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">7. FRAGILE LUGGAGE</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The company will not be held responsible for any deterioration or damage to glassware, electronics, or other fragile or perishable items during the trip, as they travel under the passenger’s responsibility.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">The transportation of this type of luggage is strictly under the passenger’s responsibility.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">8. PET TRANSPORTATION</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Passengers must inquire about pet transportation before boarding.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- It is essential that the passenger travels on the same bus as their pet.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- There is no extra charge if the pet does not exceed 25 kg. Charges will apply according to excess baggage rates.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Snakes, spiders, birds, mice (of various species), and any other animals restricted by current ecological regulations may not be transported.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Domestic pets not classified as endangered (according to SEMARNAT or PROFEPA) may be transported.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- In the trunks of buses offering Direct service, other types of farm animals may be transported, properly tied and packed, under the passenger’s responsibility.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Only ONE pet may be registered per passenger. Additionally, only TWO pets are allowed per bus, accepted on a first-come, first-served basis.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Permitted domestic pets (dogs and cats) must travel in the luggage compartment of the bus, regardless of breed or size, except for guide or companion dogs, which may accompany the passenger.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Passengers traveling with a companion dog must present medical documentation when boarding.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- All pets, except those mentioned in the previous policy, must be transported throughout the journey inside a carrier (kennel) appropriate to the physical and emotional characteristics of the species.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Only ONE pet per carrier.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The carrier (kennel) must be provided by the passenger.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Pet, carrier, and contents must not exceed 32 kg. Otherwise, transportation service will be denied.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Carrier requirements:</p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must have enough space for the animal to stand, turn, sit, and lie down naturally.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must be made of wood, metal, rigid plastic, or similar material. CARDBOARD IS PROHIBITED (no boxes).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must have a metal access grate, either welded or cast.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must be escape-proof. The grate must be securely fastened.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must be leak-proof.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must have ventilation on two sides, in addition to the grate.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Must be clean, without strong or unpleasant odors. It must contain absorbent sand or material that retains waste (STRAW, HAY, OR WOOD SHAVINGS ARE NOT ALLOWED).</p></li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- The passenger is responsible for presenting all documents related to the animal, such as vaccination certificates, health certificates, import permits if required, and any other documentation that may be requested by authorities at any point during the trip.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Pets will not be accepted if the current or forecasted temperature at any point along the itinerary exceeds 29.2°C. For example, on beach trips or those exceeding FOUR hours. Likewise, pets will not be accepted if the ground temperature is below 7.2°C at any point during the trip. These restrictions are in place to ensure maximum safety in case of delays, cancellations, or other unforeseen circumstances. Temperature limits are established to prevent animals from being exposed to extreme conditions (hot or cold), whether inside the terminal/ticket office, waiting area, or on the bus.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- We do not accept pet breeds with brachycephalic or flat-nose characteristics due to their breathing difficulties. For example:</p>
                            <ul class="__terms-purchase-list __nested-list-bullet">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">. Affenpinscher</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">. Bulldog (all breeds)</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">. Boxer (all breeds)</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Pit Bull</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">. The customer must sign a liability waiver at the origin ticket office.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Pets should preferably remain sedated during the trip and are under the full responsibility of the passenger.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">9. MULTI-COMPANY SALES POLICIES</h3>
                    <p class="__terms-purchase-text">GHO disclaims any responsibility regarding the transportation service provided by third-party companies participating in the multi-company sales agreement. Sales Executives and Ticket Office Managers are solely responsible for selling tickets, and their authority and responsibility are limited to this activity, as regulated by the policies agreed upon between GHO and the participating companies. Any customer complaints must be directed to the customer service department of the respective company from which the ticket was purchased.</p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">10. BOARDING POLICIES</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Service may be denied if the passenger is under the influence of alcohol or appears intoxicated.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Service may be denied if the passenger is under the influence of narcotics.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">11. TRAVEL POLICIES</h3>
                    <p class="__terms-purchase-text">Traveling at the scheduled time. By purchasing a ticket for any of the routes offered by GHO brands, the Customer acknowledges and accepts the following conditions:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) Arrive at the platform of the corresponding origin terminal at least 30 minutes before the scheduled departure time to board the assigned bus.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) Hand over luggage for check-in at the bus, noting that any luggage without a claim ticket cannot be retrieved.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Present and keep the respective ticket throughout the entire trip.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) The ticket is only valid for the date and time indicated on it.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) It is the passenger’s sole responsibility to accept food or beverages from another passenger during the trip, and the company is not liable for any consequences.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">12. REASONS SERVICE MAY BE DENIED:</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) Passenger in an unsuitable condition or under the influence of any type of narcotic substances.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) Passenger consuming any type of alcoholic beverage or narcotic during the trip. In such cases, a warning will be issued, and if not followed, a report will be filed with the appropriate authority at the earliest opportunity.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Passenger carrying weapons, even with a permit issued by SEDENA. Under no circumstances may the weapon travel with its magazine or ammunition.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) Service will be expressly denied to passengers carrying explosives, hazardous substances, drugs, or any other item that poses a risk.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) Passenger displaying physical aggression or attempting to do so toward company staff or other passengers.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">f) Passenger engaging in acts of vandalism within company facilities or equipment.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">g) Passenger committing acts offensive to public decency within GHO facilities and/or buses.</p></li>
                    </ul>
                </article>
            </section>
        `;
	}
}
customElements.define(
	"page-terminos-condiciones-english",
	PageTerminosCondicionesEnglish
);
