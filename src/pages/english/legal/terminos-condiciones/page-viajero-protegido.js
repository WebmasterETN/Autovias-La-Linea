/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../../components/app-cotiza.js";
import "../../../../components/english/app-modal-doters.js";
import "../../../../components/english/app-modal-travelpass.js";
import "../../../../components/app-banner-slider.js";
import "../../../../components/app-payments.js";
import "../../../../components/app-section-title.js";
import "../../../../js/slick.js?v=1.0.0";

class PageViajeroProtegidoEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-modal-travelpass-english></app-modal-travelpass-english>
            <app-modal-doters-english></app-modal-doters-english>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/banner-viajero-protegido-gho.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>
            
            <section class="__section">
                <app-section-title section-title="Terms and Conditions"></app-section-title>
                <h3 class="__subtitle">PROTECTED TRAVELER BASIC SERVICE</h3>
                <p class="__subtitle"><b>Insurance</b></p>

            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">HAND LUGGAGE THEFT</h3>

                    <p class="__terms-purchase-text">Compensation will be provided through reimbursement, up to the total amount of the insured sum contracted, in the event of theft of hand luggage. This includes electronic and/or computing equipment, electronic devices identified as “gadgets,” “wearables,” “pocket” or handheld items, and their accessories such as cell phones, tablets, laptops, video games, among others, contained within the hand luggage.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Requirements</h3>

                    <p class="__terms-purchase-text">Liability waiver from the bus line and a certified report filed with the Public Prosecutor. Coverage applies only if the incident occurs during the trip.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Passports, visas, personal identification documents, transportation tickets, certificates and other documents such as deeds, cash, credit cards, debit cards, payment cards, negotiable securities, gold, silver, stamps, and keys.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Cash contained in the handbag.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Incidents resulting from any crime involving direct participation by the Insured, any of their ascendants or descendants up to the second degree, or relatives by affinity up to the second degree, as well as any employee, dependent, or servant of the Insured.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">As a consequence of attacks, riots, civil disturbances, or other events classified by law as crimes against public order.</p>
                        </li>
                    </ol>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">TRANSPORTATION OF REMAINS DUE TO ACCIDENTAL DEATH</h3>

                    <p class="__terms-purchase-text">In the event of accidental death of the passenger during the trip, coverage will be provided up to the limit of the insured sum:</p>

                    <p class="__terms-purchase-text">Procedures for the transportation or repatriation of the remains will be covered, including transfer expenses up to the point of burial.</p>

                    <p class="__terms-purchase-text">Burial at the place of death or the transfer of ashes to the passenger’s permanent residence, upon request by the next of kin.</p>

                    <p class="__terms-purchase-text">Transportation costs for the passenger’s companions to their respective homes or to the burial site, provided such transportation cannot be carried out using the originally planned travel method.</p>

                    <p class="__terms-purchase-text">Payment for a round-trip ticket in the same class as the deceased passenger for a family member, using the most convenient means of transportation, from their place of residence to the place of death—only if the deceased passenger was traveling without an adult companion and local authorities require a family member or representative. This applies within the same insurance provider specified in the plan.</p>

                    <p class="__terms-purchase-text">Requirements: Payment will be made via reimbursement upon presentation of a copy of the death certificate and the required invoice(s), receipt(s), and/or proof of payment. Coverage applies only if the incident occurs during the trip.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">MEDICAL EXPENSES DUE TO ACCIDENT OR ILLNESS</h3>

                    <p class="__terms-purchase-text">If the passenger suffers an accident within 7 days of its occurrence, or experiences a serious illness, medical emergency, emergency surgery, or the onset of a non-preexisting illness during the trip requiring medical treatment, surgical intervention, hospitalization, ambulance services, medications, lab tests, or diagnostic imaging—up to the Usual and Customary Expense—the amount of covered medical expenses will be reimbursed. Expenses incurred for medical services during the trip will preferably be paid directly to the service provider under agreement with the Company, except in emergency cases.</p>

                    <p class="__terms-purchase-text">
                        Covered expenses include:
                    </p>

                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Emergency Medical Transfer to the nearest hospital and return to the place of lodging.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Medical and hospitalization expenses due to a medical emergency, including the first consultation and newborn expenses for pregnancies up to the 7th month.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Transfer and lodging of a companion for hospitalizations longer than 5 days.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Transfer and accompaniment of minors under 16 years old in hospitalizations longer than 5 days or in the event of death.</p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        The relationship between the passenger covered under this policy and the medical providers is the passenger’s sole responsibility. The Company assumes no liability for the service received or for any damages.
                    </p>

                    <p class="__terms-purchase-text">
                        Requirements: Payment will be made via reimbursement to the passenger upon presentation of the medical report, performed studies, and the required invoice(s), receipt(s), and/or proof of payment. Coverage applies only if the incident occurs during the trip.
                    </p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <p class="__terms-purchase-text">Under no circumstances will the insurance policy cover expenses arising from any of the following situations:</p>

                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the illness originated or showed symptoms prior to the start of the insured coverage period (“preexisting”), including its consequences and exacerbations. Except as specified in Section B, item 5 of this section.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Conditions, injuries, and their consequences or complications resulting from treatments not provided by qualified medical professionals.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Replacement and/or repair of prosthetics or orthotics, orthopedic items, hearing aids, eyeglasses, and contact lenses.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Illnesses resulting from chronic conditions or previously diagnosed ailments prior to the trip, unless medically controlled. In emergencies, only the initial expense to stabilize the patient will be reimbursed.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transplants of any type of organs or tissues.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Mental illnesses, psychiatric disorders, depression, or any type of mental or nervous condition, except as stipulated in item J. Psychological Assistance of this section.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Medical or hospital expenses incurred without a medical prescription.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Routine checkups or medical exams, meaning medical expenses without a diagnosis of a covered illness or accident.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rehabilitation treatments or physical recovery therapy not resulting from medical assistance provided during the trip.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sexually transmitted diseases (STDs).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                High blood pressure and all its consequences and complications, including blood pressure monitoring.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Injuries resulting from surgical interventions or medical treatments not caused by covered medical assistance provided during the trip.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any additional expense not related to medical treatment, such as: tissues, hairdressing, body lotions, creams and cosmetics, companion meals, safe deposit box, bail bond, candy, parking, florist, telephone service, entertainment rentals, TV control, bookstore service, newspapers, restaurant and cafeteria service. (This list is illustrative, not exhaustive).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the travel destination has travel alerts due to health, safety, weather, or other concerns issued by local or international authorities.
                            </p>
                        </li>
                    </ol>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">DESCRIPTION OF ASSISTANCE SERVICES</h3>

                    <p class="__terms-purchase-text">MEDICAL ASSISTANCE</p>

                    <p class="__terms-purchase-text">Client</p>
                    <p class="__terms-purchase-text">If the passenger requires assistance for a non-urgent condition, a general practitioner will be coordinated to visit the passenger’s location, subject to availability in each state and up to the number of events contracted in each plan.</p>
                    <p class="__terms-purchase-text">Subsequent events at preferential cost</p>
                    <p class="__terms-purchase-text">The general practitioner performs a general physical examination for diagnostic purposes, without conducting any procedures that require surgical equipment such as wound care, injections, catheterization, or suturing. This service must be coordinated from the beginning by SSIST. No reimbursements apply.</p>
                    <p class="__terms-purchase-text">The referred client may cancel the appointment with the general practitioner in advance. If the referred client does not cancel or fails to attend the appointment coordinated by SSIST, it will be considered a service rendered and will count toward the number of entitled events.</p>
                    <p class="__terms-purchase-text">DO NOT TAKE INFORMATION PROVIDED BY THESE SERVICES AS MEDICAL AND/OR HEALTH ADVICE. NONE OF THE INFORMATION PROVIDED IS INTENDED TO SUBSTITUTE FOR PROFESSIONAL HEALTHCARE, INCLUDING THE DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. DO NOT DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING IT BASED ON INFORMATION OBTAINED THROUGH THESE SERVICES. IF A BENEFICIARY USES INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.</p>
                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the start of the trip, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after arrival at their residence.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">PSYCHOLOGICAL ASSISTANCE</h3>

                    <p class="__terms-purchase-text">Telephone guidance will be provided by a general practitioner when the beneficiary requires medical orientation for a non-urgent condition (pregnancy, COVID, family planning and contraceptives, alcoholism and drug dependency, as well as the use of medications prescribed by a treating physician, side effects of medications, and recommended dosages).</p>

                    <p class="__terms-purchase-text">A clinical file will also be created for the beneficiary. This service is available 24 hours a day, 365 days a year, with no limit on the number of events. The service must be coordinated from the beginning by SSIST in order to validate the benefit.</p>

                    <p class="__terms-purchase-text">The service does not cover any medical expenses incurred. To uphold good medical practices, the on-call physician will not prescribe medications or provide any diagnosis under any circumstances. No reimbursements apply.</p>

                    <p class="__terms-purchase-text">Personnel providing this assistance are licensed physicians with professional credentials, experienced in first-contact medical care, ethical medical standards, and capable of identifying situations that require a higher level of care.</p>

                    <p class="__terms-purchase-text">This service is available 24 hours a day, 365 days a year. Each call has a maximum duration of thirty minutes; once this time is reached, the call will be terminated without liability for SSIST.</p>

                    <p class="__terms-purchase-text">DO NOT TAKE INFORMATION PROVIDED BY THESE SERVICES AS MEDICAL AND/OR HEALTH ADVICE. NONE OF THE INFORMATION PROVIDED IS INTENDED TO SUBSTITUTE FOR PROPER CARE FROM HEALTH PROFESSIONALS, INCLUDING THE DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. DO NOT IGNORE PROFESSIONAL MEDICAL ADVICE OR DISREGARD PREVIOUS GUIDANCE BASED ON INFORMATION OBTAINED THROUGH THESE SERVICES. IF A BENEFICIARY USES INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the start of the trip, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after arrival at their residence.</p>

                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">PSYCHOLOGICAL ASSISTANCE</h3>

                    <p class="__terms-purchase-text">The beneficiary will have access to SSIST’s network of affiliated medical providers who offer discounts at pharmacies, clinics, laboratories, and hospitals ranging from 5% to 30%. This service is available 24 hours a day, 365 days a year, with no limit on the number of events.</p>

                    <p class="__terms-purchase-text">The service must be coordinated from the beginning by SSIST to validate the benefit. No reimbursements apply.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the start of the trip, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after arrival at their residence. TELEMEDICINE WITH GENERAL OR SPECIALIST PHYSICIAN (INTERNIST, GYNECOLOGIST, PEDIATRICIAN, AND GASTROENTEROLOGIST)</p>

                    <p class="__terms-purchase-text">In the event of illness or medical emergency, the beneficiary may have immediate contact via video conference with general physicians, virtually and personally, who will assist in taking necessary measures to stabilize the beneficiary and alleviate their discomfort. The service must be coordinated from the beginning by SSIST to validate the benefit. The service does not cover any medical expenses incurred. Under no circumstances may the physician provide a diagnosis or prescribe medications. No reimbursements apply.</p>

                    <p class="__terms-purchase-text">Personnel providing this assistance are licensed physicians with professional credentials, experienced in first-contact medical care, ethical medical standards, and capable of identifying situations that require a higher level of care.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the start of the trip, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after arrival at their residence.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">EMERGENCY SERVICES</h3>

                    <p class="__terms-purchase-text">In the event that the beneficiary or a direct family member suffers an accident or illness and/or requires emergency transportation to a hospital, a basic ground ambulance will be coordinated to transfer the patient to the nearest hospital of their choice.</p>

                    <p class="__terms-purchase-text">If the client requests a special ambulance (transfer, COVID, specialized), a quote will be provided to the beneficiary. This service is available 24 hours a day, 365 days a year. The service must be coordinated from the beginning by SSIST to validate the benefit. An emergency is defined as a situation that endangers life, the viability of any organ, or the physical integrity of the beneficiary, requiring immediate medical attention.</p>

                    <p class="__terms-purchase-text">Emergency ambulance service will consist of a mobile basic life support unit, staffed by a driver and a basic emergency medical technician, equipped according to NOM34 standards.</p>

                    <p class="__terms-purchase-text">Basic-level emergency medical technicians will have knowledge of basic cardiopulmonary resuscitation, elementary anatomy and physiology, lifting, mobilization, immobilization and packaging of the patient, basic airway management, evaluation and examination, identification and management of trauma-related issues (bleeding, shock, soft tissue injuries, musculoskeletal system, head and spine), basic pharmacology, identification and management of clinical medical emergencies (respiratory, cardiovascular, diabetic, allergic, environmental, obstetric, behavioral, and poisoning), medication administration routes under medical supervision (subcutaneous, oral, inhalation), general ambulance operation, communication systems, initial handling of hazardous materials incidents, basic rescue techniques, triage and classification of beneficiaries, and interaction with aircraft.</p>

                    <p class="__terms-purchase-text">About the unit: The basic emergency ambulance is a ground mobile unit intended for patients requiring pre-hospital medical care through basic life support.</p>

                    <p class="__terms-purchase-text">SSIST is not responsible for any complications that may arise during medical transport or for any outcomes. However, SSIST will assist the beneficiary in pursuing accountability from the third party responsible.</p>

                    <p class="__terms-purchase-text">Only one transfer to the nearest hospital is considered. If there is no availability and the beneficiary must be transferred to another hospital, it will be considered a second event, and the additional cost must be covered by the beneficiary.</p>

                    <p class="__terms-purchase-text">If the ambulance service must wait for the patient to be admitted or discharged from the hospital, or due to any circumstance beyond the provider’s control, the beneficiary must pay the provider directly for each additional hour of waiting. The cost will be communicated to the beneficiary at the time.</p>

                    <p class="__terms-purchase-text">If the beneficiary is overweight and requires a larger-than-standard ambulance for transport, the additional charge for this special requirement must be paid directly to the ambulance service provider.</p>

                    <p class="__terms-purchase-text">Ambulance assistance service does not apply to cases involving pandemic illnesses such as COVID-19, monkeypox, or any other pandemic disease. These will be quoted separately to the beneficiary and must be paid according to the quote provided at the time.</p>

                    <p class="__terms-purchase-text">SSIST is not responsible for services provided by third-party providers or for the actions performed by them. The service provider is solely responsible. In case of any complaint, claim, or legal action, SSIST’s role is limited to coordinating and managing the dispatch of providers. SSIST will assist the beneficiary at all times in resolving issues with the provider.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the start of the trip, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after arrival at their residence.</p>

                    <p class="__terms-purchase-text">Exclusions:</p>


                                        <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">The beneficiary is responsible for covering the cost of hospitalization, as well as any expenses related to medications, surgical materials, and medical fees.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">If the beneficiary requires a specialized ambulance, it will be quoted separately and charged to the beneficiary.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Rescue operations or situations in which the beneficiary is under conditions that hinder or prevent access, or endanger the lives of those providing assistance services—due to being in remote, inaccessible, extremely difficult or dangerous areas, or far from populated zones or roads suitable for safe ambulance transit—are excluded. This also applies to terrains requiring specialized rescue personnel. Examples include, but are not limited to: forests, jungles, trails, deserts, mountains, seas, lakes, dams, rivers, beaches, areas far from roads and towns, ravines, caves, slopes, peaks and summits of hills, mountains, ranges, oil platforms, ships, yachts, and other terrain or location-related hazards. Additionally, lack of express authorization for scheduled transfers by the treating physician certifying clinical stability is excluded.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">SSIST is not responsible if the hospital or clinic to which the beneficiary is to be transferred reserves the right of admission.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">In the case of public health emergencies, services will be subject to the regulations issued by the competent authority.</p>
                        </li>
                    </ol>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">FUNERAL ASSISTANCE</h3>

                    <p class="__terms-purchase-text">In the event of death—whether due to natural causes or an accident—the beneficiary is covered through burial agencies or agencies within SSIST’s funeral assistance network, which includes the following services:</p>

                    <ol class="__order-list-column-left">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Personalized attention 24 hours a day, 365 days a year, via the Telephone Assistance Center.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Personalized support and guidance before the Public Prosecutor for the recovery of the deceased within national territory.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Transfers:</p>

                            <ol type="A" class="__order-list-column">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">First transfer of the deceased from the place of death to any burial agency. In Mexico City and the metropolitan area, this includes J. García López branches such as Casa Observatorio, Casa Satélite, Casa Iztapalapa, Casa Coyoacán, and Casa Tlalpan, or the corresponding funeral agency in other parts of the country.</p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Second transfer from the wake location to the cemetery designated by the responsible family member, or to the crematorium (subject to availability).</p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Transfers between points will cover a maximum of 60 KM, always within the same locality, municipality, or metropolitan area. If the distance exceeds 30 KM, the beneficiary must pay $30.00 MXN per additional kilometer, plus any fees or charges required for service provision or legal rights.</p>
                                </li>
                            </ol>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Aesthetic preparation of the body (makeup and dressing).</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Embalming (upon request by the beneficiary).</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Basic metal casket.</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Basic metal casket (for cremation use rights).</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Funeral room or standard wake chapel with capacity for 20 people in rotation, or home wake equipment if required (subject to authority approval).</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Facilities for religious services.</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Cremation and delivery of a basic urn (if services are available in the corresponding area within the country). (Subject to authority approval)</p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Coverage includes children under 21 and adults up to 69 years old. Family members are covered according to each financial institution’s agreement.</p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the trip starts, provided the beneficiary is not at their place of residence, and continues throughout the journey and for 6 days after returning home.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="I" class="__order-list-column-left">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Procedures and transfers related to medico-legal deaths (Public Prosecutor and Forensic Medical Service).</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Any expenses or costs arising from procedures before the Public Prosecutor and Forensic Medical Service.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Exhumation of dry remains.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Floral arrangements.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Cemetery fees and handling.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Out-of-town transfers (procedures, land or air freight).</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Costs and procedures for internment.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Repatriation.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">International transfers.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Cafeteria service.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Niche, grave, crypt, vault.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Pullman transportation for companions.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Failure to request the service through the Telephone Assistance Center. (No reimbursement applies).</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">If the beneficiary has already contracted another provider at the time of requesting the service, no reimbursement will apply.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">If false declarations regarding the age of the contracting parties are proven.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Acts of God or force majeure that materially and humanly prevent service delivery.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Access to obituary publication in newspapers.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">The maximum weight supported by a basic casket under this coverage is 100 kg. If the beneficiary exceeds this weight, a different casket will be sought, provided it does not exceed the covered cost.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Suicide.</p>
                        </li>
                    </ol>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">TRAVEL ASSISTANCE AND LEGAL GUIDANCE</h3>

                    <p class="__terms-purchase-text">If the passenger is traveling alone and is hospitalized for more than five consecutive days due to a condition or illness not excluded under these general terms, the Company will reimburse the cost of a round-trip ground ticket in economy class, up to the maximum contracted liability limit. It is essential that the passenger, if health permits, or a family member or representative, notify the Company of this situation within 7 days.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the trip starts, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after returning home. Includes concierge and travel advisory services, hotel reservations, and access to travel-related discount networks.</p>

                    <p class="__terms-purchase-text">SSIST will provide telephone references and information about: travel agencies, weather, exhibitions, exchange rates, shopping centers, hotels, restaurants, museums, galleries, consulate information abroad, reservations, shows, listings, theaters, concerts, nightlife, and guidance for passport replacement in case of theft or loss, among others. Telephone assistance is available 24 hours a day, 365 days a year. Unlimited access.</p>

                    <p class="__terms-purchase-text">Unlimited access to our discount network for car rentals, travel agencies, hotels, and many other services. Available 24 hours a day, 365 days a year. No event limit.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the trip starts, provided the passenger is not at their place of residence, and continues throughout the journey and for 6 days after returning home.</p>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">TELEPHONE LEGAL ASSISTANCE</h3>

                    <p class="__terms-purchase-text">If the beneficiary requires the services of a lawyer, SSIST will provide telephone guidance through licensed attorneys specializing in various branches of law, available 24 hours a day, 365 days a year.</p>

                    <p class="__terms-purchase-text">The personnel providing this assistance are exclusively licensed attorneys with professional credentials, experienced in their field, and capable of identifying situations that require a higher level of attention. They operate independently from SSIST.</p>

                    <p class="__terms-purchase-text">SSIST does not provide legal opinions, legal advice, or any other type of counsel. The attorney will only offer immediate legal orientation, and no contact with SSIST may be used to ask legal questions. Furthermore, SSIST does not act as a legal advisor or attorney and is not responsible for any information exchanged between the beneficiary and the provider.</p>

                    <p class="__terms-purchase-text">DO NOT TAKE INFORMATION PROVIDED BY THESE SERVICES AS LEGAL ADVICE. NONE OF THE INFORMATION PROVIDED IS INTENDED TO SUBSTITUTE FOR PROPER PROFESSIONAL ATTENTION, INCLUDING STUDIES, OPINIONS, OR REVIEW OF FILES RELATED TO POTENTIAL CRIMINAL, CIVIL, OR ADMINISTRATIVE INVESTIGATIONS. DO NOT IGNORE PROFESSIONAL ADVICE OR DISREGARD PREVIOUS GUIDANCE BASED ON INFORMATION OBTAINED THROUGH THESE ASSISTANCE SERVICES. IF THE BENEFICIARY USES INFORMATION FROM ANY ASSISTANCE SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.</p>

                    <p class="__terms-purchase-text">Coverage: Begins 24 hours before the start of the trip, provided the beneficiary is not at their place of residence, and continues throughout the journey and for 6 days after returning home.</p>

                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">This SERVICE is strictly limited to the accredited beneficiary.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Preparation of documents and/or writings to be submitted in any type of trial, complaint, procedure, or dispute initiated by the beneficiary; it also excludes the preparation of documents and/or writings in any trial, complaint, procedure, or dispute in which the beneficiary has been summoned, sued, or called to trial under any procedural figure.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Acts, facts, or omissions that are contrary to the law, professional or commercial best practices, morality, or good customs.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Anything, without limitation, that is contrary to law or not strictly aligned with applicable and current legislation, provisions, or regulations within national territory.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">When truthful and timely information is not provided to properly address the matter, or if false information is given.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">In-person legal representation.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Any act aimed at committing any type of fraud.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Any act, fact, or omission requiring services detailed in this document's terms and conditions while abroad.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">This SERVICE is strictly limited to the membership holder when dealing with matters related to divorce, child support, custody, or guardianship where the spouse is the opposing party.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Any expense, gratuity, judicial or extrajudicial payment other than attorney fees.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Any legal guidance on matters not specified in this document.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Due to a conflict of interest between the membership holder and potential beneficiaries, legal advice and representation in family matters such as divorce, child support, custody, and guardianship will only be provided to the membership holder.</p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">This service is available 24 hours a day, 365 days a year. Phone or video consultations are limited to a maximum duration of thirty minutes. Video consultations may be conducted from any mobile device (cell phone, tablet) or PC equipped with a front-facing camera and data connection (preferably Wi-Fi) via the digital platform operated by SSIST. The beneficiary must contact the support line, and if a video medical consultation is required, a link to the SSIST platform with access details will be sent to their email or mobile phone.</p>

                </article>
            </section>

        `;
	}
}
customElements.define(
	"page-viajero-protegido-english",
	PageViajeroProtegidoEnglish
);
