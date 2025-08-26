/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-modal-doters.js";
import "../../../components/app-modal-travelpass.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../js/slick.js?v=1.0.0";

class PageTerminosCondiciones extends HTMLElement {
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
                <app-section-title section-title="Términos y Condiciones"></app-section-title>
                <h3 class="__subtitle">I. TÉRMINOS Y CONDICIONES</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">1. POLITICAS GENERALES DE VENTA.</h3>
                    
                    <h4 class="__subtitle-subsection">1.1 CANCELACIONES, CAMBIOS Y DEVOLUCIONES.</h4>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Los cambios de fecha, hora y destino se regirán conforme lo establecido en el apartado 3 INTERCAMBIOS de estas políticas comerciales.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">No hay cancelaciones ni devoluciones de boletos por ningún canal de venta realizados con cualquier forma de pago.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Se recomienda al Cliente verificar sus datos, así como leer cuidadosamente los términos y condiciones de venta, si no está de acuerdo con algún punto de las políticas, no deberá concluir la transacción.</p>
                        </li>
                    </ul>

                    <h4 class="__subtitle-subsection">1.2 DESCUENTOS.</h4>
                    <p class="__terms-purchase-text">Conforme a la normatividad vigente, GHO otorga descuentos a los Clientes que cumplen con los lineamientos establecidos para cada caso conforme a los siguientes lineamientos:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">a) La oferta de descuentos por cada autobús es limitada, cumpliendo con el mínimo indicado por la Secretaria de Comunicaciones y Transportes.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">b) Son beneficiarios de descuento o exentos de cobro los siguientes:</p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Niños entre O y 2 años 11 meses no pagan boleto, debiendo viajar acompañado de un adulto en el mismo asiento que este pagó.</p>
                                    <ul class="__terms-purchase-list __nested-list-bullet">
                                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">«Sólo se permitirá un niño de 2 años 11 meses de edad, por adulto, en caso de rebasar este límite, deberá adquirir un asiento adicional al 50% (de uno a dos niños menores de 3 años por asiento adicional).</p></li>
                                    </ul>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">- Niños entre 3 y 11 años 11 meses de edad, se les aplicará el descuento del 50%, sobre el precio del boleto al 100%. En caso de que el niño no represente su edad, deberá presentar una identificación la cual acredite la edad, puede ser: acta de nacimiento, CURP, pasaporte, credencial vigente de la escuela con fotografía reciente.</p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">- Los menores de 18 años, sólo podrán viajar con la compañía de un adulto.</p>
                                    <ul class="__terms-purchase-list __nested-list-bullet">
                                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">» Aplican CUATRO descuentos por autobús.</p></li>
                                    </ul>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">» Adolescentes entre 12 y 18 años de edad deberán pagar boleto al 100%. El cliente queda sujeto a disponibilidad de asientos por autobús.</p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>INSEN O INAPAM.</b> Se oferta un descuento permanentemente del 50% a Clientes que se acrediten mediante la credencial original y vigente de INSEN o INAPAM de la persona que va a viajar. Quedando sujeto a cuatro asientos por unidad. Aplican las siguientes condiciones:</p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Si el Cliente no presenta la credencial original correspondiente pero la acreditación del descuento es evidente, se permitirá el descuento sólo previa autorización del Gerente Regional.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">« Si el Cliente no presenta la credencial original correspondiente y no es evidente la acreditación se negará el descuento.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">« Si el Cliente presenta copia de la credencial de INAPAM o INSEN debe además presentar original de la identificación oficial (INE, IFE).</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>Estudiantes.</b> Se ofertan pases de abordar con un 50% de descuento en temporada vacacional conforme al calendario oficial de la SEP, para Clientes que se acrediten como Estudiantes mediante la credencial original y vigente de la institución del sistema nacional de educación, incorporadas a la SEP. Aplican las siguientes condiciones:</p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El descuento será del 50% para estudiantes (6 descuentos por autobús) y se aplicará conforme al periodo vacacional indicado en el Calendario Escolar emitido por la Secretaría de Educación Pública (SEP).</p></li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">- Para adquirir el descuento de estudiante deberás presentar la credencial correspondiente en vigor o en su defecto una constancia expedida por la escuela, misma que deberá contener:</p>
                                    <ul class="__terms-purchase-list __nested-list-bullet">
                                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Nombre, sello de la escuela, fotografía del titular y número de cuenta o matrícula.</p></li>
                                    </ul>
                                </li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">+ En caso de no presentar la credencial o documento correspondiente en cualquiera de los puntos de revisión, la empresa estará en su derecho de cobrar la diferencia correspondiente entre el descuento y el 100% del precio del boleto.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- La credencial debe estar, legible, sin tachaduras o enmendaduras que pongan en duda su autenticidad.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Estudiantes extranjeros que estén incorporados en una institución escolar mexicana SEP, recibirán los descuentos en las mismas condiciones que los nacionales.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Estudiantes extranjeros con credenciales de instituciones extranjeras no serán acreedoras al descuento debiendo pagar el boleto al 100%.</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                             <p class="__terms-purchase-text">El cliente queda sujeto a disponibilidad de asientos por autobús</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>Maestro.</b> Se ofertan hasta (4 boletos por autobús) con un 25% de descuento en temporada vacacional conforme al calendario oficial de la SEP, para Clientes que se acrediten como Profesores o maestros mediante la credencial original y vigente de la institución del sistema nacional de educación, incorporadas a la SEP. El soporte documental que debe presentar el Cliente es: Credencial de la institución, Credencial del sindicato y/o talón de pagos.</p>
                             <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Los descuentos se otorgarán a las Instituciones que estén afiliadas a la SEP, así como a las escuelas incorporadas a las mismas.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Los maestros para adquirir su boleto, deberán presentar la credencial correspondiente en vigor o en su defecto, la constancia que expida la escuela a la que pertenezcan, misma que deberá contener nombre y sello de la escuela, nombre y fotografía del titular debiendo mostrarlos nuevamente al abordar el autobús y en cualquier punto de revisión.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En caso de no presentar los documentos, en cualquiera de las revisiones señaladas, la empresa estará en su derecho de cobrar la diferencia correspondiente entre el descuento y el 100% del precio del boleto.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- La credencial debe estar, legible, sin tachaduras o enmendaduras que pongan en duda su autenticidad.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Maestros extranjeros que estén incorporados en una institución escolar mexicana SEP, sí recibirán los descuentos en las mismas condiciones que los nacionales.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Aplican DOS descuentos por autobús.</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>Capacidades diferentes.</b> Se ofertan hasta dos asientos por autobús con un descuento permanente del 50% a Clientes que acrediten dicha discapacidad mediante una identificación original expedida por cualquier institución pública y/o privada que tenga facultades bastantes y suficientes para expedir las mismas.</p>
                        </li>
                         <li class="__terms-purchase-item">
                             <p class="__terms-purchase-text">El cliente queda sujeto a disponibilidad de asientos por autobús.</p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">2. CANALES DE VENTA.</h3>
                    <h4 class="__subtitle-subsection">2.1 CONTACT CENTER.</h4>
                    <p class="__terms-purchase-text">Número telefónico de atención al cliente 800 622 2222, donde el Cliente puede adquirir boletos de Autobús con cargo a su tarjeta bancaria de crédito o débito (Excepto American Express) sin costo adicional, a través del Centro Telefónico, siempre y cuando sea el titular de la tarjeta quien se comunique. De lo contrario el Ejecutivo de Ventas Telefónicas brindará la información, pero tendrá que invitar al Cliente a que sea el titular quien llame o adquirir los boletos en taquillas.</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">No hay cargo adicional por servicio de compra de boleto</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Estar 30 minutos antes de su viaje.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">La compra solo podrá realizarse con:</p>
                            <ul class="__terms-purchase-list __nested-list-bullet">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Tarjeta de crédito y débito (excepto American Express).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Solo podrá pagar el viaje el titular de la cuenta y/o tarjeta</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Debiendo mostrar identificación oficial y tarjeta con la que se realizó la compra, al momento del canje del pase y firmar los vouchers correspondientes. El pasajero no podrá viajar si no presenta la documentación completa.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Si el pasajero pierde la corrida no habrá cambios ni devoluciones.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Limitándose a un monto máximo de $3,500.00 en dos transacciones por día.</p></li>
                    </ul>

                    <h4 class="__subtitle-subsection">2.2 TAQUILLA</h4>
                    <p class="__terms-purchase-text">En taquilla se aceptan las siguientes formas de pago:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Efectivo:</b> Solo se acepta moneda nacional.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Tarjeta de crédito y débito:</b> La compra solo podrá realizarse con tarjetas de crédito o débito (excepto American Express) debiendo presentar identificación oficial vigente: INE, Pasaporte, Cédula profesional y tarjeta con la que se realiza la compra.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Boleto Abierto:</b></p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Es necesario entregar el boleto abierto para obtener un boleto con fecha y hora.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">El Boleto Abierto tiene una vigencia de 6 meses a partir de la fecha que se adquirió.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Sólo es posible canjear el Boleto Abierto por medio del canal de venta donde se adquirió; es decir; si el cliente adquirió su boleto abierto en taquilla, ÚNICAMENTE podrá confirmarlo en taquilla.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Una vez canjeado el Boleto Abierto por un boleto confirmado, éste no podrá ser susceptible a otro cambio o transferible a otra persona.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">El Boleto Abierto puede ser CONFIRMADO solo UNA vez</p></li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>- Puntos Doters:</b></p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Es necesario otorgar el número de membresía y clave para poder hacer válidos los puntos.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Solo podrá pagar el viaje correspondiente al titular de la cuenta.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Si pierde la corrida no habrá cambios ni devoluciones,</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">En casos imputables a la empresa, el boleto será susceptible de cambio.</p></li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>- Pago mixto</b></p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">La compra se podrá realizar con puntos Viaja Más y tarjetas de crédito o débito. (excep- to American Express)</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">La compra se podrá realizar con puntos Viaja Más y pago en efectivo.</p></li>
                            </ol>
                        </li>
                    </ul>

                    <h4 class="__subtitle-subsection">2.3 SITIOS WEB.</h4>
                    <p class="__terms-purchase-text">El Cliente ingresa a las páginas web <a href="http://www.autovias.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">http://www.autovias.com.mx</a> y <a href="http://www.lalinea.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">http://www.lalinea.com.mx</a> en las que puede realizar consultas y contratar su viaje para el servicio Plus con cargo a su tarjeta bancaria de crédito o débito (Excepto American Express), esto le permite obtener su pase con el que aborda directamente en andenes sin hacer fila en taquilla. El cliente podrá realizar compras a través del portal web, bajo los siguientes términos y condiciones:</p>
                    
                    <h5 class="__subtitle-subsubsection">2.3.1 CONDICIONES DE COMPRA Y FACTURACIÓN.</h5>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) Podrá adquirir boletos de Autobús, con fecha y hora establecida, para el titular y/u otras personas.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) No aplican bonificaciones ni intercambios, si el Cliente no ocupa su boleto para viajar por causas ajenas a la empresa, deberá adquirir un nuevo boleto para viajar.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Puede comprar sus boletos hasta una hora treinta minutos antes de la salida deseada.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) Los boletos adquiridos son únicos, personales e intransferibles.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) Si durante el procedimiento el sistema presentara alguna falla, el cliente deberá comunicarse de inmediato al 800 622 22 22,</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">f) En el caso de no abordar el Autobús en tiempo y forma, será la pérdida del viaje y no se realizará el reembolso ni el canje para otro boleto.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">g) Para abordar su autobús solo requiere presentar su boleto impreso o en su dispositivo móvil y una identificación oficial.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">h) La venta podrá realizarse hasta una hora y media previas al inicio del viaje deseado.</p></li>
                    </ul>
                    <p class="__terms-purchase-text">Se aceptan las siguientes formas de pago:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Tarjeta de Crédito/Débito nacionales:</b> La compra solo podrá realizarse con tarjetas de crédito (excepto American Express) y con débito solo se aceptan City Banamex, HSBC, Banco Azteca, Bancomer, Banorte / IXE y Santander. Limitándose a los montos máximos establecidos en estas políticas.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Boleto Abierto:</b></p>
                            <ul class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El Boleto Abierto tiene una vigencia de 6 meses a partir de la fecha que se adquirió.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Sólo podrá ser confirmado a través del sitio web y el cliente tendrá hasta máximo 2 horas previas al viaje deseado para confirmarlo (sujeto a disponibilidad).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Una vez canjeado el Boleto Abierto por un boleto confirmado, con el cual viajará, éste no podrá ser cancelable ni transferible por ningún motivo o canal de venta.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Podrá facturar su boleto una vez concluido el viaje entrando a nuestros sitios web: <a href="http://www.autovias.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.autovias.com.mx</a> <a href="http://www.lalinea.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.lalinea.com.mx</a></p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Posteriormente Ingresar a la opción FACTURA EN LÍNEA y colocar RFC y Correo Electrónico dentro de las casillas. [Dar clic en Solicitar o Emitir factura]</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">En la nueva pestaña que se abrirá deberá corroborar que sus datos fiscales sean correctos, si están incorrectos deberá seleccionar [Modificar Datos]. De estar correctos sus datos deberá ingresar el FOLIO A FACTURAR, FOLIO Y PRECIO TOTAL mismos que encontrará en su boleto de autobús.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Solo se facturan las compras realizadas en efectivo o con tarjeta bancaria (excepto American Express)</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En caso de compra mixta (tarjeta + puntos Viaja Más o efectivo + puntos Viaja Más) solo se facturara el monto pagado en efectivo o tarjeta.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En caso que dicha facturación no pueda realizarse por el proceso antes mencionado, el cliente deberá comunicarse al 800 622 2222 para solicitar su factura, o en su caso vía correo electrónico enviando sus datos fiscales y el pase con el que realizó el viaje a los siguientes correos: <a href="mailto:buzondeatencion@gho.mx" class="__link-text">buzondeatencion@gho.mx</a> y/o <a href="mailto:atencionaclientes@gho.mx" class="__link-text">atencionaclientes@gho.mx</a></p></li>
                            </ul>
                        </li>
                    </ul>
                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">3. INTERCAMBIOS</h3>
                    <p class="__terms-purchase-text">El Cliente tiene derecho a efectuar un solo intercambio bajo las siguientes condiciones:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) Se puede intercambiar el boleto presentándose en la taquilla con al menos una hora de anticipación previo a la salida contratada originalmente.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) El boleto no haya sido impreso anteriormente.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Los datos que se pueden modificar son: Fecha, Hora, Origen, Destino, Tipo de servicio. Si el boleto ya fue impreso se realiza el intercambio directamente en taquilla.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) Esta operación sólo la puede realizar el titular del boleto y es intransferible.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) El intercambio puede realizarse en la misma ruta o para una distinta, en el último caso deberá pagar la diferencia en el supuesto de que el boleto sea de mayor costo y deberá entender que perderá la diferencia cuando el precio sea menor al boleto original.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">f) Los cambios para personas con descuentos (INSEN, menor, estudiantes y maestros, capacidades diferentes) estarán sujetos a disponibilidad de los mismos, de lo contrario habrá que pagar la diferencia del boleto y sólo son sujetos de cambio la fecha y hora del mismo.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">g) Si un Cliente adquiere un NE, al momento de transformarlo en CE, en automático consume su intercambio, por lo cual debe hacerse hincapié en que ya no podrá realizar cambio alguno en lo sucesivo</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">h) Si por cuestiones imputables a la empresa, no se realiza el viaje en tiempo y forma, puede otorgársele al Cliente un intercambio adicional a través del Jefe De Taquilla, previa autorización del Gerente Regional. O bien, puede solicitar la devolución de su dinero a través de la Institución Bancaria que aplique.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">i) Sólo podrá realizarse un intercambio por operación</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">j) El intercambio se realizará previa autorización del Gerente Regional, mediante el Jefe de Taquilla.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">4. REPOSICIÓN DE BOLETO EXTRAVIADO</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- No hay reposición de boletos extraviados, en virtud de lo cual el cliente perderá su viaje. El cliente podrá gozar de un 50% de descuento en la siguiente corrida disponible (Sujeto a disponibilidad).</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">5. TRANSPORTE DE EQUIPAJE</h3>
                     <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El pasajero tendrá que documentar su equipaje en el andén, antes de abordar la unidad, y recibirá el comprobante (boleto de contraseña) que ampare su equipaje, conservando dicho boleto para que al término de su viaje lo presente y le sean entregadas sus pertenencias.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">-Para el caso de que el pasajero olvide recoger su equipaje al término de su viaje, la empresa sin responsabilidad alguna a su cargo, podrá haberlo recuperado y en caso de haberlo hecho el equipaje quedará en resguardo de la empresa por las siguientes 72 (setenta y dos) horas hábiles y solo podrá entregarlo al pasajero contra entrega del boleto de contraseña y boleto que ampare el viaje.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">-Cada pasajero podrá llevar en el portaequipaje del autobús una maleta de hasta 10 kg o su equivalente a 115 cm lineales con rueditas.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Cada pasajero podrá llevar sin costo una maleta adicional en la cajuela de hasta 25 kg o su equivalente a 158 cm lineales con rueditas.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En caso de exceder los 25 kg o 158 cm lineales el pasajero estará obligado a pagar una cuota indicada en Taquilla.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Se emitirá ticket por cargo de equipaje extra.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En caso de pérdida de equipaje no declarado y registrado a bordo del autobús, la empresa no se hará responsable, inclusive el equipaje de mano.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Entiéndase por equipaje objetos de uso personal y ropa.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Sólo se permite llevar abordo equipaje de mano (ejemplo: lap top, bolsos pequeños, y todo artículo que no exceda el tamaño 115 cm lineales.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Queda prohibida la transportación de equipaje en cajuela y/o de mano de los siguientes artículos:</p>
                            <ul class="__terms-purchase-list __nested-list-bullet">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">* Explosivos</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">* Sustancias tóxicas, peligrosas o nocivas para la salud.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">* Cerillos, fósforos o encendedores y/o cualquier otro artículo inflamable o material que ponga en riesgo a los pasajeros.</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Queda prohibido transportar bebidas alcohólicas en el equipaje de mano.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En el caso de que el equipajero observe malas condiciones en el equipaje (roturas, manchas, entre otras), deberá reportarlo al dueño, recopilando su firma de conformidad en la relación del equipaje.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">6. PAGO DE PÉRDIDA DE EQUIPAJE</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En caso de extravío o pérdida de equipaje por la marca que lo transportó (Empresa), ésta tendrá un máximo de 72 horas para la búsqueda minuciosa en terminales de origen, intermedias o destino final.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Declarado el extravío del equipaje luego de su búsqueda, se pagará al pasajero afectado la cantidad máxima de 15 días de salario mínimo general vigente, de acuerdo al artículo 66, fracción V, de la Ley de Caminos, Puentes y Autotransporte Federal vigente, dicho importe se cubre por pasajero y contra entrega de la o las contraseñas del equipaje, sin responsabilidad alguna por el contenido del equipaje</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El pago en caso de extravío o pérdida de equipaje se harán en un plazo máximo de 30 (treinta) días hábiles posteriores a que se haya declarado el robo.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Cuando el pasajero no presente las contraseñas del equipaje la Empresa no se hará responsable de la pérdida de dichos objetos.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Si el cliente cuenta con la asistencia Bus Protect o BAS Protegido, deberá notificar el incidente dentro de los primeros 30 minutos posteriores al final de su viaje al 800 622 2222, opción 8, opción 1.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Términos y condiciones:</p>
                            <ol type="1" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Bus Protect: <a href="http://www.autovias.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.autovias.com.mx</a></p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">BAS Protegido: <a href="http://www.basprotegido.com.mx" target="_blank" rel="noopener noreferrer" class="__link-text">www.basprotegido.com.mx</a></p></li>
                            </ol>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">7. EQUIPAJE FRÁGIL</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- La empresa no se hará responsable por el deterioro o daño sufrido durante el viaje a objetos de cristalería, electrónicos, y otros de naturaleza frágil así como perecederos ya que viajarán bajo la responsabilidad del pasajero.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">La transportación de este tipo de equipaje es bajo estricta responsabilidad del pasajero.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">8. TRANSPORTE DE MASCOTAS</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Siempre debe informarse del transporte de mascotas antes de abordar.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Es indispensable que el pasajero viaje en la misma unidad que su mascota.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El traslado no tendrá costo extra si la mascota no sobrepasa los 25 Kg. El cobro se manejará conforme a las tarifas de cobro de exceso de equipaje.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- No se podrán transportar serpientes, arañas, aves, ratones (de diferentes especies), ni cualquier otro animal de los restringidos por la normatividad ecológica vigente.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Pueden transportarse mascotas de tipo doméstico, que no se encuentren en peligro de extinción (conforme lo marca SEMARNAT o PROFEPA).</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En las cajuelas de las unidades que brindan el servicio Directo se puede transportar otro tipo de animales de granja, debidamente amarrados y empacados y bajo riesgo del pasajero que los transporta.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Únicamente puede registrarse UNA mascota por pasajero. Asimismo, sólo pueden viajar DOS mascotas por autobús, las cuales serán aceptadas por orden de llegada.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Las mascotas domésticas permitidas (perros y gatos) deben viajar en la sección de equipaje del autobús, sin importar raza o tamaño, a excepción de los perros guía o de compañía los cuales podrán viajar acompañando al pasajero.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- En el caso de viajar con un perro de compañía el pasajero deberá mostrar la indicación médica a la hora de abordar la unidad.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Todas las mascotas, a excepción de las citadas en la política anterior, deberán transportarse a lo largo de todo el trayecto al interior de una jaula transportadora (kennel) acorde a las características físicas y emocionales de la especie.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Únicamente UNA mascota por jaula.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El contenedor (kennel) deberá ser proporcionada por el pasajero.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Mascota, caja transportadora y contenido no deben exceder los 32 Kg. De lo contrario, se le negará el servicio de transportación.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Requisitos del contenedor para mascotas:</p>
                            <ol type="A" class="__terms-purchase-list __nested-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Tener espacio suficiente para que el animal pueda pararse, girar, sentarse y recostarse de manera natural.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Estar fabricada con madera, metal, plástico rígido o algún otro material similar. PROHIBIDO cartón (no cajas).</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Contar con una rejilla de acceso hecha de metal soldado o fundido.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Ser a prueba de escape. La rejilla debe estar bien asegurada.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Ser a prueba de derrames.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Tener ventilación en dos de sus lados, aparte de la rejilla.</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Estar limpia, sin olores penetrantes y desagradables. Debe contener arena absorbente o algún material que retenga las heces (NO se permite paja, heno o virutas de madera).</p></li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El pasajero es responsable de la presentación de todos los documentos relacionados con el animal, como certificado de vacunas, de salud o certificados de importación si es necesario y cualquier otro documento que la autoridad correspondiente pueda solicitar en alguna revisión en cualquier punto del viaje.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- No se aceptarán mascotas cuando la temperatura existente o prevista en cualquier punto del itinerario supere los 29.2 C. Por ejemplo, en viajes a la playa o aquellos que superen las CUATRO horas de viaje. Asimismo, no se aceptarán mascotas cuando la temperatura en tierra sea inferior a 7.2C en cualquier punto del viaje. De esta forma, se pretende la máxima seguridad en caso de que se produzcan retrasos, cancelaciones u otras situaciones no programadas. Se han establecido restricciones por temperatura a fin de garantizar que los animales no estén expuestos a temperaturas extremas (altas o bajas), ya sea al interior de las instalaciones de la terminal/taquilla, en la sala de espera o dentro del autobús.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- No aceptamos razas de mascotas con características braquicéfalas o de nariz chata debido a la dificultad que estas presentan para respirar. Por ejemplo:</p>
                            <ul class="__terms-purchase-list __nested-list-bullet">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">. Affenpinscher</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">. Bulldog (todas las razas)</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">. Boxer (todas las razas)</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">- Pit Bull</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">. El cliente debe firmar carta responsiva en la taquilla de origen.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">La mascota, de preferencia, deberá permanecer sedada durante el viaje, y bajo la responsabilidad del pasajero.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">9. POLÍTICAS DE VENTA MULTIEMPRESA.</h3>
                    <p class="__terms-purchase-text">GHO se deslinda de cualquier responsabilidad respecto a la prestación del servicio de transportación por parte de empresas ajenas a esta y que participan en el convenio de venta multiempresa, los Ejecutivos de Venta y Jefes de Taquilla sólo realizan la función de venta de boletos, por lo que su autoridad y responsabilidad se limita a esta actividad regulada por las políticas convenidas entre GHO y las empresas participantes. Cualquier inconformidad de Clientes debe ser canalizada al área de atención al cliente de la empresa respectiva a la cual se le haya vendido.</p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">10. POLÍTICAS DE ABORDAJE</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El servicio podrá ser negado si el pasajero tiene aliento alcohólico o se encuentra en estado de ebriedad.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">- El servicio podrá ser negado si el pasajero se encuentra bajo efectos de estupefacientes</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">11. POLITICAS DE VIAJE.</h3>
                    <p class="__terms-purchase-text">Viajar en un horario contratado. Al contratar el servicio para viajar en alguna de las corridas que ofertan las marcas de GHO, el Cliente reconoce y acepta las siguientes condiciones:</p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) Presentarse 30 minutos antes de la hora contratada en el andén de la terminal de origen que corresponda para abordar el Autobús asignado al destino.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) Entregar el equipaje para su documentación a pie de Autobús, considerando que el equipaje que no cuente con la contraseña respectiva no podrá ser reclamado.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Presentar y conservar durante todo su viaje el boleto respectivo.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) El boleto sólo será válido para la fecha y hora señalada en el mismo.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) Queda bajo la más estricta responsabilidad del pasajero aceptar alimentos o bebidas de algún otro pasajero durante el trayecto, deslindando de toda responsabilidad a esta empresa.</p></li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">12. MOTIVOS POR LOS CUALES SE PUEDE NEGAR EL SERVICIO:</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">a) Pasajero en estado inconveniente o que se encuentren bajo la influencia de cualquier tipo de sustancias enervantes.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">b) Pasajero que durante el viaje se encuentre consumiendo cualquier tipo de bebida alcohólica o enervante, caso en el cual se le hará la advertencia y de no acatar la instrucción se procederá a realizar el reporte ante la instancia correspondiente en la primera oportunidad.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">c) Pasajero que porte armas aun con permiso expedido por SEDENA, señalando expresamente que bajo ninguna circunstancia podrá viajar dicha arma junto con su cargador ni municiones.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">d) Queda expresamente señalado que se negará el servicio al pasajero que porte explosivos, sustancias peligrosas y/o drogas o cualquier otro elemento que constituya un riesgo.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">e) Pasajero que muestre algún tipo de agresión física o intento de ello a colaboradores de la empresa u otros pasajeros.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">f) Pasajero que se encuentre realizando actos de vandalismo en instalaciones o equipos de la empresa.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">g) Pasajero que se encuentre cometiendo faltas a la moral en las instalaciones y/o autobuses de GHO.</p></li>
                    </ul>
                </article>
            </section>
        `;
	}
}
customElements.define("page-terminos-condiciones", PageTerminosCondiciones);
