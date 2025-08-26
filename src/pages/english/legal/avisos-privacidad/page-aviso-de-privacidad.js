/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../../components/app-cotiza.js";
import "../../../../components/english/app-modal-doters.js";
import "../../../../components/english/app-modal-travelpass.js";
import "../../../../components/app-banner-slider.js";
import "../../../../components/app-payments.js";
import "../../../../components/app-section-title.js";
import "../../../../js/slick.js?v=1.0.0";

class PageAvisoDePrivacidadEnglish extends HTMLElement {
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
        <app-section-title section-title="Privacy Notice"></app-section-title>
      </section>

      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-subsection">GHO Coordinadora S.A.P.I de C.V.</h3>
          <p class="__terms-purchase-text">In accordance with the Federal Law on Protection of Personal Data Held by Private Parties, published on July 5, 2010, this law aims to protect personal data held by private entities, with the purpose of regulating its legitimate, controlled, and informed processing, in order to guarantee individuals’ privacy and their right to informational self-determination by companies.</p>
          <p class="__terms-purchase-text">GHO Coordinadora S.A.P.I de C.V., located at Camino Real a Toluca No. 581, Col. Cristo Rey, Delegación Álvaro Obregón, C.P. 01150, is responsible for the processing of your personal data, its use, and its protection. To contact us regarding the privacy notice, you may send an email to exercise your ARCO rights (access, rectification, cancellation, and opposition), directed to the person responsible for the care and handling of your data at the following email address: <a href="mailto:buzondeatencion@gho.mx" class="__link-text">buzondeatencion@gho.mx</a>, or via telephone: 800-622-22-22, with the ARCO rights officer.</p>
          <p class="__terms-purchase-text">This privacy notice applies to the companies AUTOTRANSPORTES HERRADURA DE PLATA, S.A. DE C.V., AUTOTRANSPORTES DEL SUR DE JALISCO, S.A. DE C.V., AUTOBUSES DE OCCIDENTE, S.A. DE C.V., OMNIBUS CUAUHTEMOC, S.A. DE C.V., TRANSPORTES URBANOS Y SUBURBANOS DE ATLACOMULCO, S.A. DE C.V., and AUTOTRANSPORTES HALCONES BLANCOS DEL NORTE FRANJA ROJA, S.A. DE C.V.</p>
          <p class="__terms-purchase-text">The personal data that may be requested will be used to carry out the following activities:</p>
          <ul class="__terms-purchase-list">
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Contact you for marketing purposes, to keep you informed about our products, services, and events, as well as to reach out on special dates.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Send electronic surveys.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Participation in contests, and if applicable, prize delivery.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Use and management of loyalty cards.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Subscription to loyalty programs.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Carry out activities related to product and service advertising.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Customer service.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Completion of surveys.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Provide the services and products requested by our users.</p></li>
              <li class="__terms-purchase-item"><p class="__terms-purchase-text">Transfer of data to insurance companies with which these companies have or may have contracted one or more insurance policies or assistance services in favor of the user.</p></li>
          </ul>

        </article>
      </section>
      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">METHODS OF OBTAINING PERSONAL DATA.</h3>
          <p class="__terms-purchase-text">For the purposes stated in this privacy notice, we may collect your personal data in different ways: when you provide it to us directly; when you visit our website or use our online services; and when we obtain information through other sources permitted by law.</p>
          <p class="__terms-purchase-text">We collect your personal data directly when you provide it to us through various means, such as when you participate in our promotions or give us information in order to receive a service. The data we obtain through this method may include, among others:</p>
          <ol class="__order-list-row">
            <li class="__order-list-item"> <p class="__item-text-bold">1) Full name.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">2) Full home address.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">3) Home, work, or mobile phone number.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">4) Gender and age.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">5) Date of birth.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">6) Email address.</p></li>
          </ol>
          <p class="__terms-purchase-text">The personal data we collect when you visit our website or use our online services:</p>
          <ol class="__order-list-row">
            <li class="__order-list-item"> <p class="__item-text-bold">1) Banking information.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">2) Full name.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">3) Address.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">4) Email address.</p></li>
            <li class="__order-list-item"> <p class="__item-text-bold">5) Phone number.</p></li>
          </ol>
          <p class="__terms-purchase-text">Sensitive personal data will be handled under strict security measures that ensure its confidentiality.</p>
          <p class="__terms-purchase-text">This process is essential for us to provide the service you are requesting, so we ask that you indicate your acceptance of the processing of such data.</p>
          <p class="__terms-purchase-text">The security and confidentiality of the data provided when contracting a service or purchasing a product online will be protected by a server using the Secure Socket Layer (SSL) protocol, so that the data sent will be transmitted encrypted to ensure its protection.</p>

        </article>
      </section>
      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">LIMITATION ON THE USE OR DISCLOSURE OF YOUR PERSONAL DATA</h3>
          <p class="__terms-purchase-text">You have the right to access your personal data that we hold and to the details of its processing, as well as to rectify it if it is inaccurate or incomplete; to cancel it when you believe it is not required for any of the purposes stated in this privacy notice, is being used for non-consented purposes, or the contractual or service relationship has ended.</p>

        </article>
      </section>
      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">PROCESS FOR REVOCATION OF YOUR CONSENT FOR THE PROCESSING OF YOUR PERSONAL DATA</h3>
          <p class="__terms-purchase-text">At any time, you may revoke the consent you have granted us for the processing of your personal data, so that we stop using it. To do so, you must submit your request to the following email <a href="mailto:buzondeatencion@gho.mx" class="__link-text">buzondeatencion@gho.mx</a>, or via telephone: 800-622-22-22.</p>
        </article>
      </section>
      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">CHANGES TO THE PRIVACY NOTICE</h3>
          <p class="__terms-purchase-text">We reserve the right to make modifications or updates to this privacy notice at any time, to address legislative changes, internal policies, or new requirements for the provision or offering of our products or services.</p>
          <p class="__terms-purchase-text">These modifications will be visible at all times on the website under announcements or services (privacy notice section).</p>
        </article>
      </section>
      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">USE OF COOKIES AND WEB BEACONS</h3>
          <p class="__terms-purchase-text">Cookies are text files that are automatically downloaded and stored on the user's computer hard drive when browsing a website. They contain data about the user, including preferences for viewing pages on that server, username, and password.</p>
          <p class="__terms-purchase-text">Web beacons are images embedded in a website or email that can be used to monitor visitor behavior, such as storing information about the user's IP address and duration of interaction time.</p>
        </article>
      </section>
      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">COMPLAINTS REGARDING THE PROCESSING OF PERSONAL DATA</h3>
          <p class="__terms-purchase-text">If you believe that your right to personal data protection has been violated or affected by any conduct of our staff, actions, or responses from the company, or if there is any breach of the provisions set forth in the Federal Law on Protection of Personal Data Held by Private Parties, you may file the corresponding complaint with the IFAI. For more information, please visit <a href="http://www.ifai.org.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.ifai.org.mx</a>.</p>
        </article>
      </section>
    `;
	}
}
customElements.define(
	"page-aviso-de-privacidad-english",
	PageAvisoDePrivacidadEnglish
);
