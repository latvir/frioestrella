export type Lang = "lv" | "es" | "ru" | "en" | "de";

export const translations: Record<Lang, Record<string, string>> = {
  lv: {
    // Navbar
    "nav.services": "Pakalpojumi",
    "nav.about": "Par mums",
    "nav.brands": "Zīmoli",
    "nav.testimonials": "Atsauksmes",
    "nav.contact": "Kontakti",
    "nav.cta": "Sazināties",

    // Hero
    "hero.badge": "Pieejami 24/7 — Ātrā apkalpošana",
    "hero.title1": "Jūsu komforta",
    "hero.title2": "klimata risinājumi",
    "hero.description":
      "Frioestrella SIA — profesionāla gaisa kondicionieru uzstādīšana, apkope un remonts visā Latvijā un Spānijā. Vairāk nekā 15 gadu pieredze, sertificēti speciālisti un labākie zīmoli jūsu mājai un birojam.",
    "hero.cta1": "Pieprasīt piedāvājumu",
    "hero.cta2": "Mūsu pakalpojumi",
    "hero.guarantee": "Garantija",
    "hero.guaranteeDesc": "Līdz 5 gadiem",
    "hero.fast": "Ātra apkalpošana",
    "hero.fastDesc": "24-48h",
    "hero.experience": "15+ gadi",
    "hero.experienceDesc": "Pieredze",
    "hero.imageAlt": "Moderna dzīvojamā istaba ar gaisa kondicionieri",

    // Services
    "services.label": "Pakalpojumi",
    "services.title": "Ko mēs piedāvājam",
    "services.subtitle":
      "Pilns gaisa kondicionēšanas pakalpojumu klāsts — no konsultācijas līdz uzstādīšanai un ilgtermiņa apkopei.",
    "services.installation": "Uzstādīšana",
    "services.installationDesc":
      "Profesionāla gaisa kondicionieru uzstādīšana mājās, birojos un komerciālās telpās. Precīza montāža ar garantiju.",
    "services.maintenance": "Apkope & Serviss",
    "services.maintenanceDesc":
      "Regulāra apkope un filtru tīrīšana nodrošina ilgu kalpošanas laiku un enerģijas efektivitāti.",
    "services.repair": "Remonts",
    "services.repairDesc":
      "Ātra un profesionāla visu veidu gaisa kondicionieru diagnostika un remonts. Oriģinālās rezerves daļas.",
    "services.consultation": "Konsultācijas",
    "services.consultationDesc":
      "Bezmaksas konsultācijas par piemērotāko sistēmu jūsu telpām, enerģijas patēriņu un izmaksām.",
    "services.ventilation": "Ventilācijas sistēmas",
    "services.ventilationDesc":
      "Ventilācijas sistēmu projektēšana, uzstādīšana un apkope komerciālām un rūpnieciskām telpām.",
    "services.warranty": "Garantijas serviss",
    "services.warrantyDesc":
      "Pilns garantijas serviss visiem uzstādītajiem kondicionieriem. Ātra reaģēšana un profesionāla apkalpošana.",

    // About
    "about.label": "Par mums",
    "about.title1": "Jūsu uzticamais klimata",
    "about.title2": " partneris",
    "about.description":
      "Frioestrella SIA ir vadošais gaisa kondicionēšanas pakalpojumu sniedzējs Latvijā un Spānijā ar vairāk nekā 15 gadu pieredzi. Mūsu komanda sastāv no sertificētiem speciālistiem, kas nodrošina augstākās kvalitātes pakalpojumus gan privātām, gan komerciālām telpām.",
    "about.feature1": "Sertificēti un apmācīti speciālisti",
    "about.feature2": "Oriģinālās rezerves daļas un materiāli",
    "about.feature3": "Garantija līdz 5 gadiem uz darbiem",
    "about.feature4": "Bezmaksas konsultācija un apsekošana",
    "about.feature5": "Ātra reaģēšana — 24-48 stundu laikā",
    "about.feature6": "Konkurētspējīgas cenas un elastīgi nosacījumi",
    "about.satisfaction": "Klientu apmierinātība",
    "about.clients": "Apmierināti klienti",
    "about.projects": "Projekti",
    "about.years": "Gadi pieredzē",
    "about.imageAlt": "Moderns birojs ar gaisa kondicionēšanas sistēmu",

    // Brands
    "brands.label": "Zīmoli",
    "brands.title": "Vadošie zīmoli",
    "brands.subtitle":
      "Mēs strādājam tikai ar pasaulē atzītiem gaisa kondicionieru ražotājiem, lai nodrošinātu jums labāko kvalitāti.",
    "brands.daikin": "Japānas premium zīmols ar inovatīvām tehnoloģijām",
    "brands.mitsubishi": "Augstākā klase enerģijas efektivitātē un klusā darbībā",
    "brands.samsung": "Moderns dizains un viedās mājas integrācija",
    "brands.lg": "Inovatīvas dzesēšanas un sildīšanas sistēmas",
    "brands.toshiba": "Uzticamība un ilgmūžība ar japāņu kvalitāti",
    "brands.gree": "Lieliska cenas un kvalitātes attiecība",
    "brands.nordis": "Mūsdienīgs Eiropas zīmols ar augstu energoefektivitāti un elegantu dizainu",
    "brands.daikinSpec": "Inverter tehnoloģija",
    "brands.mitsubishiSpec": "Klusā darbība",
    "brands.samsungSpec": "WindFree™ tehnoloģija",
    "brands.lgSpec": "Dual Inverter",
    "brands.toshibaSpec": "Enerģijas klase A+++",
    "brands.greeSpec": "Plašs modelis klāsts",
    "brands.nordisSpec": "Wi-Fi vadība & A+++",

    // Calculator
    "calc.label": "Cenu kalkulators",
    "calc.title": "Aprēķini savu cenu",
    "calc.subtitle":
      "Izvēlieties pakalpojumu un telpas lielumu, lai uzreiz saņemtu aptuvenu izmaksu aprēķinu.",
    "calc.noticeTitle": "Cena ir aptuvena",
    "calc.noticeText":
      "Šis kalkulators sniedz tikai orientējošu izmaksu aplēsi un nav saistošs piedāvājums. Galīgā cena var atšķirties atkarībā no objekta īpatnībām, telpu plānojuma, izvēlētā iekārtas modeļa un montāžas sarežģītības. Precīzu cenu piedāvājumu sagatavosim pēc bezmaksas objekta apsekošanas.",
    "calc.serviceType": "Pakalpojuma veids",
    "calc.roomSize": "Telpas platība",
    "calc.roomSizeUnit": "m²",
    "calc.equipmentClass": "Iekārtas klase",
    "calc.extras": "Papildu darbi",
    "calc.svcInstall": "Uzstādīšana",
    "calc.svcInstallDesc": "Jauna kondicioniera montāža",
    "calc.svcMaintenance": "Apkope",
    "calc.svcMaintenanceDesc": "Tīrīšana un pārbaude",
    "calc.svcRepair": "Remonts",
    "calc.svcRepairDesc": "Diagnostika un labošana",
    "calc.svcVentilation": "Ventilācija",
    "calc.svcVentilationDesc": "Ventilācijas sistēma",
    "calc.classEconomy": "Ekonomiskā",
    "calc.classEconomyDesc": "Gree, Nordis",
    "calc.classStandard": "Standarta",
    "calc.classStandardDesc": "Samsung, LG, Toshiba",
    "calc.classPremium": "Premium",
    "calc.classPremiumDesc": "Daikin, Mitsubishi",
    "calc.extraEquipment": "Iekļaut iekārtas cenu",
    "calc.extraLongPipe": "Garas komunikācijas (>5 m)",
    "calc.extraHighAltitude": "Darbs augstumā / no fasādes",
    "calc.extraUrgent": "Steidzama izpilde (24h)",
    "calc.estimate": "Aptuvenā cena",
    "calc.priceFrom": "no",
    "calc.priceTo": "līdz",
    "calc.breakdown": "Aprēķina detaļas",
    "calc.baseWork": "Pamata darbi",
    "calc.areaSurcharge": "Platības koeficients",
    "calc.equipmentCost": "Iekārta",
    "calc.extrasCost": "Papildu darbi",
    "calc.urgentCost": "Steidzamība",
    "calc.vatNote": "Cenās nav iekļauts PVN 21%. Aprēķins ir informatīvs.",
    "calc.disclaimer":
      "Galīgā cena tiek noteikta pēc bezmaksas objekta apsekošanas. Sazinieties ar mums precīzam piedāvājumam!",
    "calc.ctaButton": "Saņemt precīzu piedāvājumu",
    "calc.reset": "Atiestatīt",

    // Testimonials
    "testimonials.label": "Atsauksmes",
    "testimonials.title": "Ko saka mūsu klienti",
    "testimonials.subtitle":
      "Mūsu lielākais lepnums ir apmierināti klienti, kas iesaka mūs saviem draugiem un kolēģiem.",
    "testimonials.name1": "Jānis Bērziņš",
    "testimonials.role1": "Mājas īpašnieks",
    "testimonials.text1":
      "Lieliska apkalpošana! Kondicionieris tika uzstādīts ātri un profesionāli. Komanda bija ļoti pieklājīga un izskaidroja visu par sistēmas lietošanu. Iesaku visiem!",
    "testimonials.name2": "SIA TechOffice",
    "testimonials.role2": "Biroja vadītāja",
    "testimonials.text2":
      "Mēs izvēlējāmies Frioestrella biroja klimata sistēmai. Rezultāts ir izcils — darbinieki ir apmierināti, un enerģijas patēriņš ir samazinājies par 30%.",
    "testimonials.name3": "Anna Liepiņa",
    "testimonials.role3": "Dzīvokļa īpašniece",
    "testimonials.text3":
      "Pēc ilgas meklēšanas atradu Frioestrella. Konsultācija bija bezmaksas, cena godīga, un kvalitāte — augstākajā līmenī. Serviss arī pēc uzstādīšanas ir lielisks.",

    // Contact
    "contact.label": "Kontakti",
    "contact.title": "Sazināties ar mums",
    "contact.subtitle":
      "Saņemiet bezmaksas konsultāciju un piedāvājumu jau šodien. Atbildēsim 24 stundu laikā.",
    "contact.phone": "Telefons",
    "contact.email": "E-pasts",
    "contact.hours": "Darba laiks",
    "contact.hoursLV": "P-Pk: 8:00 - 18:00, S: 9:00 - 14:00",
    "contact.hoursES": "P-Pk: 9:00 - 19:00",
    "contact.regionLV": "Latvija",
    "contact.regionES": "Spānija",
    "contact.formTitle": "Nosūtiet pieprasījumu",
    "contact.name": "Vārds *",
    "contact.namePlaceholder": "Jūsu vārds",
    "contact.phonePlaceholder": "+371 ...",
    "contact.emailLabel": "E-pasts",
    "contact.emailPlaceholder": "jusu@epasts.lv",
    "contact.message": "Ziņojums *",
    "contact.messagePlaceholder":
      "Aprakstiet, kāds pakalpojums jums nepieciešams...",
    "contact.submit": "Nosūtīt pieprasījumu",
    "contact.toastTitle": "Ziņojums nosūtīts!",
    "contact.toastDesc": "Mēs sazināsimies ar jums tuvākajā laikā.",

    // Footer
    "footer.description":
      "Frioestrella SIA — profesionāli gaisa kondicionēšanas risinājumi jūsu komfortam. Uzstādīšana, apkope un remonts visā Latvijā un Spānijā.",
    "faq.label": "BUJ",
    "faq.title": "Biežāk uzdotie jautājumi",
    "faq.subtitle":
      "Atbildes uz jautājumiem, ko klienti uzdod visbiežāk pirms gaisa kondicioniera uzstādīšanas vai apkopes.",
    "faq.q1": "Cik maksā gaisa kondicioniera uzstādīšana?",
    "faq.a1":
      "Uzstādīšanas cena ir atkarīga no telpas platības, iekārtas klases un montāžas sarežģītības. Aptuvenu cenu varat aprēķināt mūsu cenu kalkulatorā, bet precīzu piedāvājumu sagatavojam pēc bezmaksas objekta apsekošanas.",
    "faq.q2": "Cik ilgi aizņem uzstādīšana?",
    "faq.a2":
      "Standarta sadalītā tipa kondicioniera uzstādīšana parasti aizņem 4-6 stundas un tiek pabeigta vienas dienas laikā. Sarežģītākiem risinājumiem vai vairāku bloku sistēmām var būt nepieciešamas 2 dienas.",
    "faq.q3": "Cik bieži jāveic kondicioniera apkope?",
    "faq.a3":
      "Mājas kondicionieriem apkopi iesakām veikt vismaz reizi gadā, vēlams pirms vasaras sezonas. Birojos un komerciālās telpās ar intensīvu lietojumu — divas reizes gadā. Regulāra apkope pagarina iekārtas kalpošanas laiku un samazina elektrības patēriņu.",
    "faq.q4": "Kāda garantija tiek nodrošināta?",
    "faq.a4":
      "Uzstādīšanas darbiem sniedzam garantiju līdz 5 gadiem, savukārt iekārtām ir spēkā ražotāja garantija. Garantijas laikā nodrošinām ātru servisu un oriģinālās rezerves daļas.",
    "faq.q5": "Kādos reģionos jūs strādājat?",
    "faq.a5":
      "Mēs strādājam visā Latvijā, ieskaitot Rīgu un reģionus, kā arī Spānijā. Sazinieties ar mums, un precizēsim izbraukuma iespējas jūsu adresē.",

    "agent.launcher": "Jautāt speciālistam",
    "agent.title": "Estrella — konsultants",
    "agent.subtitle": "Atbild uzreiz",
    "agent.greeting":
      "Sveiki! Esmu Estrella, Frioestrella konsultante. Pastāstiet, kādu telpu vēlaties atdzesēt vai kāds pakalpojums jums nepieciešams, un es sniegšu aptuvenu cenu.",
    "agent.placeholder": "Uzrakstiet savu jautājumu...",
    "agent.send": "Sūtīt",
    "agent.close": "Aizvērt sarunu",
    "agent.typing": "Raksta atbildi...",
    "agent.error": "Neizdevās saņemt atbildi. Lūdzu, mēģiniet vēlreiz.",
    "agent.leadSaved":
      "Paldies! Jūsu kontakts ir saglabāts — speciālists sazināsies tuvākajā laikā.",
    "agent.disclaimer":
      "AI konsultants. Cenas ir aptuvenas un nav saistošs piedāvājums.",
    "agent.quick1": "Cik maksās kondicionieris 30 m² istabai?",
    "agent.quick2": "Cik bieži jāveic apkope?",
    "agent.quick3": "Vai strādājat manā reģionā?",

    "footer.quickLinks": "Ātrās saites",
    "footer.followUs": "Sekojiet mums",
    "footer.copyright": "© 2026 Frioestrella SIA. Visas tiesības aizsargātas.",
  },
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",
    "nav.brands": "Marcas",
    "nav.testimonials": "Opiniones",
    "nav.contact": "Contacto",
    "nav.cta": "Contactar",

    // Hero
    "hero.badge": "Disponibles 24/7 — Servicio rápido",
    "hero.title1": "Sus soluciones",
    "hero.title2": "climáticas de confort",
    "hero.description":
      "Frioestrella SIA — instalación, mantenimiento y reparación profesional de aires acondicionados en toda Letonia y España. Más de 15 años de experiencia, especialistas certificados y las mejores marcas para su hogar y oficina.",
    "hero.cta1": "Solicitar presupuesto",
    "hero.cta2": "Nuestros servicios",
    "hero.guarantee": "Garantía",
    "hero.guaranteeDesc": "Hasta 5 años",
    "hero.fast": "Servicio rápido",
    "hero.fastDesc": "24-48h",
    "hero.experience": "15+ años",
    "hero.experienceDesc": "Experiencia",
    "hero.imageAlt": "Salón moderno con aire acondicionado",

    // Services
    "services.label": "Servicios",
    "services.title": "Lo que ofrecemos",
    "services.subtitle":
      "Gama completa de servicios de climatización — desde consultoría hasta instalación y mantenimiento a largo plazo.",
    "services.installation": "Instalación",
    "services.installationDesc":
      "Instalación profesional de aires acondicionados en hogares, oficinas y locales comerciales. Montaje preciso con garantía.",
    "services.maintenance": "Mantenimiento y Servicio",
    "services.maintenanceDesc":
      "El mantenimiento regular y la limpieza de filtros garantizan una larga vida útil y eficiencia energética.",
    "services.repair": "Reparación",
    "services.repairDesc":
      "Diagnóstico y reparación rápida y profesional de todo tipo de aires acondicionados. Repuestos originales.",
    "services.consultation": "Consultoría",
    "services.consultationDesc":
      "Consultas gratuitas sobre el sistema más adecuado para sus espacios, consumo energético y costes.",
    "services.ventilation": "Sistemas de ventilación",
    "services.ventilationDesc":
      "Diseño, instalación y mantenimiento de sistemas de ventilación para locales comerciales e industriales.",
    "services.warranty": "Servicio de garantía",
    "services.warrantyDesc":
      "Servicio de garantía completo para todos los equipos instalados. Respuesta rápida y atención profesional.",

    // About
    "about.label": "Sobre nosotros",
    "about.title1": "Su socio climático",
    "about.title2": " de confianza",
    "about.description":
      "Frioestrella SIA es el proveedor líder de servicios de climatización en Letonia y España con más de 15 años de experiencia. Nuestro equipo está formado por especialistas certificados que ofrecen servicios de la más alta calidad tanto para espacios privados como comerciales.",
    "about.feature1": "Especialistas certificados y formados",
    "about.feature2": "Repuestos y materiales originales",
    "about.feature3": "Garantía de hasta 5 años en trabajos",
    "about.feature4": "Consulta e inspección gratuitas",
    "about.feature5": "Respuesta rápida — en 24-48 horas",
    "about.feature6": "Precios competitivos y condiciones flexibles",
    "about.satisfaction": "Satisfacción del cliente",
    "about.clients": "Clientes satisfechos",
    "about.projects": "Proyectos",
    "about.years": "Años de experiencia",
    "about.imageAlt": "Oficina moderna con sistema de aire acondicionado",

    // Brands
    "brands.label": "Marcas",
    "brands.title": "Marcas líderes",
    "brands.subtitle":
      "Trabajamos solo con fabricantes de aires acondicionados reconocidos mundialmente para ofrecerle la mejor calidad.",
    "brands.daikin": "Marca premium japonesa con tecnologías innovadoras",
    "brands.mitsubishi":
      "La más alta clase en eficiencia energética y funcionamiento silencioso",
    "brands.samsung": "Diseño moderno e integración de hogar inteligente",
    "brands.lg": "Sistemas innovadores de refrigeración y calefacción",
    "brands.toshiba": "Fiabilidad y durabilidad con calidad japonesa",
    "brands.gree": "Excelente relación calidad-precio",
    "brands.nordis": "Marca europea moderna con alta eficiencia energética y diseño elegante",
    "brands.daikinSpec": "Tecnología Inverter",
    "brands.mitsubishiSpec": "Funcionamiento silencioso",
    "brands.samsungSpec": "Tecnología WindFree™",
    "brands.lgSpec": "Dual Inverter",
    "brands.toshibaSpec": "Clase energética A+++",
    "brands.greeSpec": "Amplia gama de modelos",
    "brands.nordisSpec": "Control Wi-Fi & A+++",

    // Calculator
    "calc.label": "Calculadora de precios",
    "calc.title": "Calcule su precio",
    "calc.subtitle":
      "Elija el servicio y el tamaño del espacio para obtener al instante un presupuesto aproximado.",
    "calc.noticeTitle": "El precio es aproximado",
    "calc.noticeText":
      "Esta calculadora ofrece solo una estimación orientativa de costes y no constituye una oferta vinculante. El precio final puede variar según las características del inmueble, la distribución de los espacios, el modelo de equipo elegido y la complejidad de la instalación. Prepararemos un presupuesto exacto tras una inspección gratuita del lugar.",
    "calc.serviceType": "Tipo de servicio",
    "calc.roomSize": "Superficie del espacio",
    "calc.roomSizeUnit": "m²",
    "calc.equipmentClass": "Clase de equipo",
    "calc.extras": "Trabajos adicionales",
    "calc.svcInstall": "Instalación",
    "calc.svcInstallDesc": "Montaje de equipo nuevo",
    "calc.svcMaintenance": "Mantenimiento",
    "calc.svcMaintenanceDesc": "Limpieza y revisión",
    "calc.svcRepair": "Reparación",
    "calc.svcRepairDesc": "Diagnóstico y arreglo",
    "calc.svcVentilation": "Ventilación",
    "calc.svcVentilationDesc": "Sistema de ventilación",
    "calc.classEconomy": "Económica",
    "calc.classEconomyDesc": "Gree, Nordis",
    "calc.classStandard": "Estándar",
    "calc.classStandardDesc": "Samsung, LG, Toshiba",
    "calc.classPremium": "Premium",
    "calc.classPremiumDesc": "Daikin, Mitsubishi",
    "calc.extraEquipment": "Incluir precio del equipo",
    "calc.extraLongPipe": "Tuberías largas (>5 m)",
    "calc.extraHighAltitude": "Trabajo en altura / fachada",
    "calc.extraUrgent": "Ejecución urgente (24h)",
    "calc.estimate": "Precio aproximado",
    "calc.priceFrom": "desde",
    "calc.priceTo": "hasta",
    "calc.breakdown": "Detalle del cálculo",
    "calc.baseWork": "Trabajos base",
    "calc.areaSurcharge": "Coeficiente de superficie",
    "calc.equipmentCost": "Equipo",
    "calc.extrasCost": "Trabajos adicionales",
    "calc.urgentCost": "Urgencia",
    "calc.vatNote": "Precios sin IVA del 21%. El cálculo es informativo.",
    "calc.disclaimer":
      "El precio final se determina tras una inspección gratuita del lugar. ¡Contáctenos para un presupuesto exacto!",
    "calc.ctaButton": "Obtener presupuesto exacto",
    "calc.reset": "Restablecer",

    // Testimonials
    "testimonials.label": "Opiniones",
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle":
      "Nuestro mayor orgullo son los clientes satisfechos que nos recomiendan a sus amigos y colegas.",
    "testimonials.name1": "Jānis Bērziņš",
    "testimonials.role1": "Propietario de vivienda",
    "testimonials.text1":
      "¡Excelente servicio! El aire acondicionado se instaló rápida y profesionalmente. El equipo fue muy amable y explicó todo sobre el uso del sistema. ¡Lo recomiendo a todos!",
    "testimonials.name2": "SIA TechOffice",
    "testimonials.role2": "Directora de oficina",
    "testimonials.text2":
      "Elegimos Frioestrella para el sistema climático de la oficina. El resultado es excelente — los empleados están satisfechos y el consumo energético se ha reducido un 30%.",
    "testimonials.name3": "Anna Liepiņa",
    "testimonials.role3": "Propietaria de apartamento",
    "testimonials.text3":
      "Después de una larga búsqueda encontré Frioestrella. La consulta fue gratuita, el precio justo y la calidad — al más alto nivel. El servicio después de la instalación también es excelente.",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Contáctenos",
    "contact.subtitle":
      "Reciba una consulta y presupuesto gratuitos hoy. Responderemos en 24 horas.",
    "contact.phone": "Teléfono",
    "contact.email": "Correo electrónico",
    "contact.hours": "Horario",
    "contact.hoursLV": "L-V: 8:00 - 18:00, S: 9:00 - 14:00",
    "contact.hoursES": "L-V: 9:00 - 19:00",
    "contact.regionLV": "Letonia",
    "contact.regionES": "España",
    "contact.formTitle": "Enviar solicitud",
    "contact.name": "Nombre *",
    "contact.namePlaceholder": "Su nombre",
    "contact.phonePlaceholder": "+34 ...",
    "contact.emailLabel": "Correo electrónico",
    "contact.emailPlaceholder": "su@correo.es",
    "contact.message": "Mensaje *",
    "contact.messagePlaceholder":
      "Describa qué servicio necesita...",
    "contact.submit": "Enviar solicitud",
    "contact.toastTitle": "¡Mensaje enviado!",
    "contact.toastDesc": "Nos pondremos en contacto con usted pronto.",

    // Footer
    "footer.description":
      "Frioestrella SIA — soluciones profesionales de climatización para su confort. Instalación, mantenimiento y reparación en toda Letonia y España.",
    "faq.label": "FAQ",
    "faq.title": "Preguntas frecuentes",
    "faq.subtitle":
      "Respuestas a las preguntas que los clientes hacen con más frecuencia antes de instalar o mantener un aire acondicionado.",
    "faq.q1": "¿Cuánto cuesta instalar un aire acondicionado?",
    "faq.a1":
      "El precio de la instalación depende de la superficie del espacio, la clase del equipo y la complejidad del montaje. Puede calcular un precio aproximado con nuestra calculadora, y prepararemos un presupuesto exacto tras una inspección gratuita del lugar.",
    "faq.q2": "¿Cuánto tiempo lleva la instalación?",
    "faq.a2":
      "La instalación de un equipo split estándar suele durar entre 4 y 6 horas y se completa en un solo día. Para soluciones más complejas o sistemas multi-split pueden ser necesarios 2 días.",
    "faq.q3": "¿Con qué frecuencia hay que hacer el mantenimiento?",
    "faq.a3":
      "Para equipos domésticos recomendamos el mantenimiento al menos una vez al año, preferiblemente antes del verano. En oficinas y locales comerciales de uso intensivo, dos veces al año. El mantenimiento regular alarga la vida útil y reduce el consumo eléctrico.",
    "faq.q4": "¿Qué garantía ofrecen?",
    "faq.a4":
      "Ofrecemos hasta 5 años de garantía en los trabajos de instalación, y los equipos cuentan con la garantía del fabricante. Durante la garantía aseguramos un servicio rápido y repuestos originales.",
    "faq.q5": "¿En qué zonas trabajan?",
    "faq.a5":
      "Trabajamos en toda España y en Letonia, incluida Riga y sus regiones. Contáctenos y confirmaremos la disponibilidad de desplazamiento a su dirección.",

    "agent.launcher": "Consultar",
    "agent.title": "Estrella — asesora",
    "agent.subtitle": "Responde al instante",
    "agent.greeting":
      "¡Hola! Soy Estrella, asesora de Frioestrella. Cuénteme qué espacio desea climatizar o qué servicio necesita, y le daré un precio aproximado.",
    "agent.placeholder": "Escriba su pregunta...",
    "agent.send": "Enviar",
    "agent.close": "Cerrar chat",
    "agent.typing": "Escribiendo...",
    "agent.error": "No se pudo obtener la respuesta. Inténtelo de nuevo.",
    "agent.leadSaved":
      "¡Gracias! Hemos guardado su contacto — un especialista se pondrá en contacto pronto.",
    "agent.disclaimer":
      "Asesor con IA. Los precios son aproximados y no constituyen una oferta vinculante.",
    "agent.quick1": "¿Cuánto cuesta un equipo para 30 m²?",
    "agent.quick2": "¿Con qué frecuencia hay que hacer el mantenimiento?",
    "agent.quick3": "¿Trabajan en mi zona?",

    "footer.quickLinks": "Enlaces rápidos",
    "footer.followUs": "Síguenos",
    "footer.copyright":
      "© 2026 Frioestrella SIA. Todos los derechos reservados.",
  },
  ru: {
    // Navbar
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.brands": "Бренды",
    "nav.testimonials": "Отзывы",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",

    // Hero
    "hero.badge": "Доступны 24/7 — Быстрое обслуживание",
    "hero.title1": "Ваши решения",
    "hero.title2": "климатического комфорта",
    "hero.description":
      "Frioestrella SIA — профессиональная установка, обслуживание и ремонт кондиционеров в Латвии и Испании. Более 15 лет опыта, сертифицированные специалисты и лучшие бренды для вашего дома и офиса.",
    "hero.cta1": "Запросить предложение",
    "hero.cta2": "Наши услуги",
    "hero.guarantee": "Гарантия",
    "hero.guaranteeDesc": "До 5 лет",
    "hero.fast": "Быстрый сервис",
    "hero.fastDesc": "24-48ч",
    "hero.experience": "15+ лет",
    "hero.experienceDesc": "Опыт",
    "hero.imageAlt": "Современная гостиная с кондиционером",

    // Services
    "services.label": "Услуги",
    "services.title": "Что мы предлагаем",
    "services.subtitle":
      "Полный спектр услуг по кондиционированию воздуха — от консультации до установки и долгосрочного обслуживания.",
    "services.installation": "Установка",
    "services.installationDesc":
      "Профессиональная установка кондиционеров в домах, офисах и коммерческих помещениях. Точный монтаж с гарантией.",
    "services.maintenance": "Обслуживание и сервис",
    "services.maintenanceDesc":
      "Регулярное обслуживание и чистка фильтров обеспечивают долгий срок службы и энергоэффективность.",
    "services.repair": "Ремонт",
    "services.repairDesc":
      "Быстрая и профессиональная диагностика и ремонт кондиционеров всех типов. Оригинальные запчасти.",
    "services.consultation": "Консультации",
    "services.consultationDesc":
      "Бесплатные консультации по подбору подходящей системы для ваших помещений, энергопотреблению и стоимости.",
    "services.ventilation": "Системы вентиляции",
    "services.ventilationDesc":
      "Проектирование, установка и обслуживание систем вентиляции для коммерческих и промышленных помещений.",
    "services.warranty": "Гарантийный сервис",
    "services.warrantyDesc":
      "Полный гарантийный сервис для всех установленных кондиционеров. Быстрое реагирование и профессиональное обслуживание.",

    // About
    "about.label": "О нас",
    "about.title1": "Ваш надёжный климатический",
    "about.title2": " партнёр",
    "about.description":
      "Frioestrella SIA — ведущий поставщик услуг по кондиционированию воздуха в Латвии и Испании с более чем 15-летним опытом. Наша команда состоит из сертифицированных специалистов, которые обеспечивают услуги высочайшего качества как для частных, так и для коммерческих помещений.",
    "about.feature1": "Сертифицированные и обученные специалисты",
    "about.feature2": "Оригинальные запчасти и материалы",
    "about.feature3": "Гарантия на работы до 5 лет",
    "about.feature4": "Бесплатная консультация и осмотр объекта",
    "about.feature5": "Быстрое реагирование — в течение 24-48 часов",
    "about.feature6": "Конкурентные цены и гибкие условия",
    "about.satisfaction": "Удовлетворённость клиентов",
    "about.clients": "Довольных клиентов",
    "about.projects": "Проектов",
    "about.years": "Лет опыта",
    "about.imageAlt": "Современный офис с системой кондиционирования",

    // Brands
    "brands.label": "Бренды",
    "brands.title": "Ведущие бренды",
    "brands.subtitle":
      "Мы работаем только с всемирно признанными производителями кондиционеров, чтобы обеспечить вам лучшее качество.",
    "brands.daikin": "Японский премиум-бренд с инновационными технологиями",
    "brands.mitsubishi":
      "Высший класс энергоэффективности и тихой работы",
    "brands.samsung": "Современный дизайн и интеграция с умным домом",
    "brands.lg": "Инновационные системы охлаждения и обогрева",
    "brands.toshiba": "Надёжность и долговечность с японским качеством",
    "brands.gree": "Отличное соотношение цены и качества",
    "brands.nordis":
      "Современный европейский бренд с высокой энергоэффективностью и элегантным дизайном",
    "brands.daikinSpec": "Инверторная технология",
    "brands.mitsubishiSpec": "Тихая работа",
    "brands.samsungSpec": "Технология WindFree™",
    "brands.lgSpec": "Dual Inverter",
    "brands.toshibaSpec": "Класс энергоэффективности A+++",
    "brands.greeSpec": "Широкий выбор моделей",
    "brands.nordisSpec": "Wi-Fi управление и A+++",

    // Calculator
    "calc.label": "Калькулятор цен",
    "calc.title": "Рассчитайте свою цену",
    "calc.subtitle":
      "Выберите услугу и площадь помещения, чтобы сразу получить приблизительный расчёт стоимости.",
    "calc.noticeTitle": "Цена является приблизительной",
    "calc.noticeText":
      "Этот калькулятор даёт только ориентировочную оценку стоимости и не является обязывающим предложением. Итоговая цена может отличаться в зависимости от особенностей объекта, планировки помещений, выбранной модели оборудования и сложности монтажа. Точное предложение мы подготовим после бесплатного осмотра объекта.",
    "calc.serviceType": "Тип услуги",
    "calc.roomSize": "Площадь помещения",
    "calc.roomSizeUnit": "м²",
    "calc.equipmentClass": "Класс оборудования",
    "calc.extras": "Дополнительные работы",
    "calc.svcInstall": "Установка",
    "calc.svcInstallDesc": "Монтаж нового кондиционера",
    "calc.svcMaintenance": "Обслуживание",
    "calc.svcMaintenanceDesc": "Чистка и проверка",
    "calc.svcRepair": "Ремонт",
    "calc.svcRepairDesc": "Диагностика и починка",
    "calc.svcVentilation": "Вентиляция",
    "calc.svcVentilationDesc": "Система вентиляции",
    "calc.classEconomy": "Эконом",
    "calc.classEconomyDesc": "Gree, Nordis",
    "calc.classStandard": "Стандарт",
    "calc.classStandardDesc": "Samsung, LG, Toshiba",
    "calc.classPremium": "Премиум",
    "calc.classPremiumDesc": "Daikin, Mitsubishi",
    "calc.extraEquipment": "Включить стоимость оборудования",
    "calc.extraLongPipe": "Длинные коммуникации (>5 м)",
    "calc.extraHighAltitude": "Работа на высоте / с фасада",
    "calc.extraUrgent": "Срочное выполнение (24ч)",
    "calc.estimate": "Приблизительная цена",
    "calc.priceFrom": "от",
    "calc.priceTo": "до",
    "calc.breakdown": "Детали расчёта",
    "calc.baseWork": "Базовые работы",
    "calc.areaSurcharge": "Коэффициент площади",
    "calc.equipmentCost": "Оборудование",
    "calc.extrasCost": "Дополнительные работы",
    "calc.urgentCost": "Срочность",
    "calc.vatNote": "Цены без НДС 21%. Расчёт носит информативный характер.",
    "calc.disclaimer":
      "Итоговая цена определяется после бесплатного осмотра объекта. Свяжитесь с нами для точного предложения!",
    "calc.ctaButton": "Получить точное предложение",
    "calc.reset": "Сбросить",

    // Testimonials
    "testimonials.label": "Отзывы",
    "testimonials.title": "Что говорят наши клиенты",
    "testimonials.subtitle":
      "Наша главная гордость — довольные клиенты, которые рекомендуют нас своим друзьям и коллегам.",
    "testimonials.name1": "Jānis Bērziņš",
    "testimonials.role1": "Владелец дома",
    "testimonials.text1":
      "Отличное обслуживание! Кондиционер был установлен быстро и профессионально. Команда была очень вежливой и объяснила всё об использовании системы. Рекомендую всем!",
    "testimonials.name2": "SIA TechOffice",
    "testimonials.role2": "Руководитель офиса",
    "testimonials.text2":
      "Мы выбрали Frioestrella для климатической системы офиса. Результат превосходный — сотрудники довольны, а энергопотребление снизилось на 30%.",
    "testimonials.name3": "Anna Liepiņa",
    "testimonials.role3": "Владелица квартиры",
    "testimonials.text3":
      "После долгих поисков я нашла Frioestrella. Консультация была бесплатной, цена справедливой, а качество — на высшем уровне. Сервис после установки тоже отличный.",

    // Contact
    "contact.label": "Контакты",
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle":
      "Получите бесплатную консультацию и предложение уже сегодня. Ответим в течение 24 часов.",
    "contact.phone": "Телефон",
    "contact.email": "Эл. почта",
    "contact.hours": "Время работы",
    "contact.hoursLV": "Пн-Пт: 8:00 - 18:00, Сб: 9:00 - 14:00",
    "contact.hoursES": "Пн-Пт: 9:00 - 19:00",
    "contact.regionLV": "Латвия",
    "contact.regionES": "Испания",
    "contact.formTitle": "Отправить запрос",
    "contact.name": "Имя *",
    "contact.namePlaceholder": "Ваше имя",
    "contact.phonePlaceholder": "+371 ...",
    "contact.emailLabel": "Эл. почта",
    "contact.emailPlaceholder": "vash@email.com",
    "contact.message": "Сообщение *",
    "contact.messagePlaceholder": "Опишите, какая услуга вам нужна...",
    "contact.submit": "Отправить запрос",
    "contact.toastTitle": "Сообщение отправлено!",
    "contact.toastDesc": "Мы свяжемся с вами в ближайшее время.",

    // Footer
    "footer.description":
      "Frioestrella SIA — профессиональные решения по кондиционированию воздуха для вашего комфорта. Установка, обслуживание и ремонт в Латвии и Испании.",
    "faq.label": "ЧАВО",
    "faq.title": "Часто задаваемые вопросы",
    "faq.subtitle":
      "Ответы на вопросы, которые клиенты задают чаще всего перед установкой или обслуживанием кондиционера.",
    "faq.q1": "Сколько стоит установка кондиционера?",
    "faq.a1":
      "Цена установки зависит от площади помещения, класса оборудования и сложности монтажа. Приблизительную цену можно рассчитать в нашем калькуляторе, а точное предложение мы подготовим после бесплатного осмотра объекта.",
    "faq.q2": "Сколько времени занимает установка?",
    "faq.a2":
      "Установка стандартной сплит-системы обычно занимает 4-6 часов и завершается за один день. Для более сложных решений или мульти-сплит систем может потребоваться 2 дня.",
    "faq.q3": "Как часто нужно обслуживать кондиционер?",
    "faq.a3":
      "Для домашних кондиционеров рекомендуем обслуживание минимум раз в год, желательно перед летним сезоном. В офисах и коммерческих помещениях с интенсивной нагрузкой — два раза в год. Регулярное обслуживание продлевает срок службы и снижает расход электроэнергии.",
    "faq.q4": "Какая гарантия предоставляется?",
    "faq.a4":
      "На монтажные работы мы даём гарантию до 5 лет, на оборудование действует гарантия производителя. В течение гарантийного срока обеспечиваем быстрый сервис и оригинальные запчасти.",
    "faq.q5": "В каких регионах вы работаете?",
    "faq.a5":
      "Мы работаем по всей Латвии, включая Ригу и регионы, а также в Испании. Свяжитесь с нами, и мы уточним возможность выезда по вашему адресу.",

    "agent.launcher": "Спросить специалиста",
    "agent.title": "Эстрелла — консультант",
    "agent.subtitle": "Отвечает сразу",
    "agent.greeting":
      "Здравствуйте! Я Эстрелла, консультант Frioestrella. Расскажите, какое помещение нужно охладить или какая услуга вам нужна, и я назову приблизительную цену.",
    "agent.placeholder": "Напишите свой вопрос...",
    "agent.send": "Отправить",
    "agent.close": "Закрыть чат",
    "agent.typing": "Печатает ответ...",
    "agent.error": "Не удалось получить ответ. Пожалуйста, попробуйте снова.",
    "agent.leadSaved":
      "Спасибо! Ваш контакт сохранён — специалист свяжется с вами в ближайшее время.",
    "agent.disclaimer":
      "ИИ-консультант. Цены приблизительные и не являются обязывающим предложением.",
    "agent.quick1": "Сколько стоит кондиционер для комнаты 30 м²?",
    "agent.quick2": "Как часто нужно обслуживание?",
    "agent.quick3": "Работаете ли вы в моём регионе?",

    "footer.quickLinks": "Быстрые ссылки",
    "footer.followUs": "Следите за нами",
    "footer.copyright": "© 2026 Frioestrella SIA. Все права защищены.",
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.about": "About us",
    "nav.brands": "Brands",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    // Hero
    "hero.badge": "Available 24/7 — Fast service",
    "hero.title1": "Your climate comfort",
    "hero.title2": "solutions",
    "hero.description":
      "Frioestrella SIA — professional air conditioning installation, maintenance and repair across Latvia and Spain. Over 15 years of experience, certified specialists and the best brands for your home and office.",
    "hero.cta1": "Request a quote",
    "hero.cta2": "Our services",
    "hero.guarantee": "Warranty",
    "hero.guaranteeDesc": "Up to 5 years",
    "hero.fast": "Fast service",
    "hero.fastDesc": "24-48h",
    "hero.experience": "15+ years",
    "hero.experienceDesc": "Experience",
    "hero.imageAlt": "Modern living room with an air conditioner",

    // Services
    "services.label": "Services",
    "services.title": "What we offer",
    "services.subtitle":
      "A full range of air conditioning services — from consultation to installation and long-term maintenance.",
    "services.installation": "Installation",
    "services.installationDesc":
      "Professional air conditioner installation in homes, offices and commercial premises. Precise mounting with warranty.",
    "services.maintenance": "Maintenance & Service",
    "services.maintenanceDesc":
      "Regular maintenance and filter cleaning ensure a long service life and energy efficiency.",
    "services.repair": "Repair",
    "services.repairDesc":
      "Fast and professional diagnostics and repair of all types of air conditioners. Original spare parts.",
    "services.consultation": "Consultation",
    "services.consultationDesc":
      "Free consultation on the most suitable system for your premises, energy consumption and costs.",
    "services.ventilation": "Ventilation systems",
    "services.ventilationDesc":
      "Design, installation and maintenance of ventilation systems for commercial and industrial premises.",
    "services.warranty": "Warranty service",
    "services.warrantyDesc":
      "Full warranty service for all installed air conditioners. Fast response and professional support.",

    // About
    "about.label": "About us",
    "about.title1": "Your trusted climate",
    "about.title2": " partner",
    "about.description":
      "Frioestrella SIA is a leading provider of air conditioning services in Latvia and Spain with more than 15 years of experience. Our team consists of certified specialists who deliver the highest quality services for both private and commercial premises.",
    "about.feature1": "Certified and trained specialists",
    "about.feature2": "Original spare parts and materials",
    "about.feature3": "Warranty on work up to 5 years",
    "about.feature4": "Free consultation and site inspection",
    "about.feature5": "Fast response — within 24-48 hours",
    "about.feature6": "Competitive prices and flexible terms",
    "about.satisfaction": "Customer satisfaction",
    "about.clients": "Happy clients",
    "about.projects": "Projects",
    "about.years": "Years of experience",
    "about.imageAlt": "Modern office with an air conditioning system",

    // Brands
    "brands.label": "Brands",
    "brands.title": "Leading brands",
    "brands.subtitle":
      "We work only with globally recognised air conditioner manufacturers to provide you with the best quality.",
    "brands.daikin": "Japanese premium brand with innovative technologies",
    "brands.mitsubishi":
      "Top class in energy efficiency and quiet operation",
    "brands.samsung": "Modern design and smart home integration",
    "brands.lg": "Innovative cooling and heating systems",
    "brands.toshiba": "Reliability and longevity with Japanese quality",
    "brands.gree": "Excellent price-quality ratio",
    "brands.nordis":
      "Modern European brand with high energy efficiency and elegant design",
    "brands.daikinSpec": "Inverter technology",
    "brands.mitsubishiSpec": "Quiet operation",
    "brands.samsungSpec": "WindFree™ technology",
    "brands.lgSpec": "Dual Inverter",
    "brands.toshibaSpec": "Energy class A+++",
    "brands.greeSpec": "Wide range of models",
    "brands.nordisSpec": "Wi-Fi control & A+++",

    // Calculator
    "calc.label": "Price calculator",
    "calc.title": "Calculate your price",
    "calc.subtitle":
      "Choose a service and the size of your space to instantly get an approximate cost estimate.",
    "calc.noticeTitle": "The price is approximate",
    "calc.noticeText":
      "This calculator provides only an indicative cost estimate and is not a binding offer. The final price may vary depending on the specifics of the property, the layout of the premises, the chosen equipment model and the complexity of the installation. We will prepare an exact quote after a free site inspection.",
    "calc.serviceType": "Service type",
    "calc.roomSize": "Room area",
    "calc.roomSizeUnit": "m²",
    "calc.equipmentClass": "Equipment class",
    "calc.extras": "Additional work",
    "calc.svcInstall": "Installation",
    "calc.svcInstallDesc": "Mounting a new air conditioner",
    "calc.svcMaintenance": "Maintenance",
    "calc.svcMaintenanceDesc": "Cleaning and inspection",
    "calc.svcRepair": "Repair",
    "calc.svcRepairDesc": "Diagnostics and fixing",
    "calc.svcVentilation": "Ventilation",
    "calc.svcVentilationDesc": "Ventilation system",
    "calc.classEconomy": "Economy",
    "calc.classEconomyDesc": "Gree, Nordis",
    "calc.classStandard": "Standard",
    "calc.classStandardDesc": "Samsung, LG, Toshiba",
    "calc.classPremium": "Premium",
    "calc.classPremiumDesc": "Daikin, Mitsubishi",
    "calc.extraEquipment": "Include equipment price",
    "calc.extraLongPipe": "Long piping (>5 m)",
    "calc.extraHighAltitude": "Work at height / from facade",
    "calc.extraUrgent": "Urgent completion (24h)",
    "calc.estimate": "Approximate price",
    "calc.priceFrom": "from",
    "calc.priceTo": "to",
    "calc.breakdown": "Calculation details",
    "calc.baseWork": "Base work",
    "calc.areaSurcharge": "Area coefficient",
    "calc.equipmentCost": "Equipment",
    "calc.extrasCost": "Additional work",
    "calc.urgentCost": "Urgency",
    "calc.vatNote": "Prices exclude 21% VAT. The calculation is informative.",
    "calc.disclaimer":
      "The final price is determined after a free site inspection. Contact us for an exact quote!",
    "calc.ctaButton": "Get an exact quote",
    "calc.reset": "Reset",

    // Testimonials
    "testimonials.label": "Testimonials",
    "testimonials.title": "What our clients say",
    "testimonials.subtitle":
      "Our greatest pride is satisfied clients who recommend us to their friends and colleagues.",
    "testimonials.name1": "Jānis Bērziņš",
    "testimonials.role1": "Homeowner",
    "testimonials.text1":
      "Excellent service! The air conditioner was installed quickly and professionally. The team was very polite and explained everything about using the system. I recommend them to everyone!",
    "testimonials.name2": "SIA TechOffice",
    "testimonials.role2": "Office manager",
    "testimonials.text2":
      "We chose Frioestrella for our office climate system. The result is outstanding — employees are happy and energy consumption has dropped by 30%.",
    "testimonials.name3": "Anna Liepiņa",
    "testimonials.role3": "Apartment owner",
    "testimonials.text3":
      "After a long search I found Frioestrella. The consultation was free, the price fair, and the quality — top level. The service after installation is great too.",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Contact us",
    "contact.subtitle":
      "Get a free consultation and quote today. We will reply within 24 hours.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Working hours",
    "contact.hoursLV": "Mon-Fri: 8:00 - 18:00, Sat: 9:00 - 14:00",
    "contact.hoursES": "Mon-Fri: 9:00 - 19:00",
    "contact.regionLV": "Latvia",
    "contact.regionES": "Spain",
    "contact.formTitle": "Send a request",
    "contact.name": "Name *",
    "contact.namePlaceholder": "Your name",
    "contact.phonePlaceholder": "+371 ...",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message *",
    "contact.messagePlaceholder": "Describe the service you need...",
    "contact.submit": "Send request",
    "contact.toastTitle": "Message sent!",
    "contact.toastDesc": "We will get in touch with you shortly.",

    // Footer
    "footer.description":
      "Frioestrella SIA — professional air conditioning solutions for your comfort. Installation, maintenance and repair across Latvia and Spain.",
    "faq.label": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.subtitle":
      "Answers to the questions clients ask most often before installing or servicing an air conditioner.",
    "faq.q1": "How much does air conditioner installation cost?",
    "faq.a1":
      "The installation price depends on the room area, the equipment class and the complexity of the mounting. You can estimate an approximate price with our calculator, and we will prepare an exact quote after a free site inspection.",
    "faq.q2": "How long does the installation take?",
    "faq.a2":
      "Installing a standard split system usually takes 4-6 hours and is completed within one day. More complex solutions or multi-split systems may require 2 days.",
    "faq.q3": "How often should an air conditioner be serviced?",
    "faq.a3":
      "For home units we recommend servicing at least once a year, preferably before the summer season. In offices and commercial premises with intensive use — twice a year. Regular maintenance extends the service life and reduces electricity consumption.",
    "faq.q4": "What warranty do you provide?",
    "faq.a4":
      "We provide a warranty of up to 5 years on installation work, while the equipment is covered by the manufacturer's warranty. During the warranty period we ensure fast service and original spare parts.",
    "faq.q5": "Which regions do you operate in?",
    "faq.a5":
      "We work across Latvia, including Riga and the regions, as well as in Spain. Contact us and we will confirm the call-out availability at your address.",

    "agent.launcher": "Ask a specialist",
    "agent.title": "Estrella — consultant",
    "agent.subtitle": "Replies instantly",
    "agent.greeting":
      "Hello! I'm Estrella, a consultant at Frioestrella. Tell me which space you want to cool or what service you need, and I'll give you an approximate price.",
    "agent.placeholder": "Type your question...",
    "agent.send": "Send",
    "agent.close": "Close chat",
    "agent.typing": "Typing a reply...",
    "agent.error": "Could not get a reply. Please try again.",
    "agent.leadSaved":
      "Thank you! Your contact has been saved — a specialist will reach out shortly.",
    "agent.disclaimer":
      "AI consultant. Prices are approximate and not a binding offer.",
    "agent.quick1": "How much is an air conditioner for a 30 m² room?",
    "agent.quick2": "How often is maintenance needed?",
    "agent.quick3": "Do you work in my region?",

    "footer.quickLinks": "Quick links",
    "footer.followUs": "Follow us",
    "footer.copyright": "© 2026 Frioestrella SIA. All rights reserved.",
  },
  de: {
    // Navbar
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.brands": "Marken",
    "nav.testimonials": "Bewertungen",
    "nav.contact": "Kontakt",
    "nav.cta": "Kontakt aufnehmen",

    // Hero
    "hero.badge": "24/7 verfügbar — Schneller Service",
    "hero.title1": "Ihre Klimakomfort-",
    "hero.title2": "lösungen",
    "hero.description":
      "Frioestrella SIA — professionelle Installation, Wartung und Reparatur von Klimaanlagen in ganz Lettland und Spanien. Über 15 Jahre Erfahrung, zertifizierte Fachleute und die besten Marken für Ihr Zuhause und Büro.",
    "hero.cta1": "Angebot anfordern",
    "hero.cta2": "Unsere Leistungen",
    "hero.guarantee": "Garantie",
    "hero.guaranteeDesc": "Bis zu 5 Jahre",
    "hero.fast": "Schneller Service",
    "hero.fastDesc": "24-48h",
    "hero.experience": "15+ Jahre",
    "hero.experienceDesc": "Erfahrung",
    "hero.imageAlt": "Modernes Wohnzimmer mit Klimaanlage",

    // Services
    "services.label": "Leistungen",
    "services.title": "Was wir anbieten",
    "services.subtitle":
      "Ein komplettes Angebot an Klimaanlagen-Services — von der Beratung bis zur Installation und langfristigen Wartung.",
    "services.installation": "Installation",
    "services.installationDesc":
      "Professionelle Installation von Klimaanlagen in Wohnungen, Büros und Gewerberäumen. Präziser Einbau mit Garantie.",
    "services.maintenance": "Wartung & Service",
    "services.maintenanceDesc":
      "Regelmäßige Wartung und Filterreinigung sorgen für eine lange Lebensdauer und Energieeffizienz.",
    "services.repair": "Reparatur",
    "services.repairDesc":
      "Schnelle und professionelle Diagnose und Reparatur aller Klimaanlagentypen. Originalersatzteile.",
    "services.consultation": "Beratung",
    "services.consultationDesc":
      "Kostenlose Beratung zum am besten geeigneten System für Ihre Räumlichkeiten, den Energieverbrauch und die Kosten.",
    "services.ventilation": "Lüftungssysteme",
    "services.ventilationDesc":
      "Planung, Installation und Wartung von Lüftungssystemen für Gewerbe- und Industriegebäude.",
    "services.warranty": "Garantieservice",
    "services.warrantyDesc":
      "Vollständiger Garantieservice für alle installierten Klimaanlagen. Schnelle Reaktion und professionelle Betreuung.",

    // About
    "about.label": "Über uns",
    "about.title1": "Ihr zuverlässiger",
    "about.title2": " Klimapartner",
    "about.description":
      "Frioestrella SIA ist ein führender Anbieter von Klimaanlagen-Dienstleistungen in Lettland und Spanien mit mehr als 15 Jahren Erfahrung. Unser Team besteht aus zertifizierten Fachleuten, die Dienstleistungen höchster Qualität sowohl für private als auch für gewerbliche Räumlichkeiten bieten.",
    "about.feature1": "Zertifizierte und geschulte Fachleute",
    "about.feature2": "Originalersatzteile und Materialien",
    "about.feature3": "Garantie auf Arbeiten bis zu 5 Jahre",
    "about.feature4": "Kostenlose Beratung und Vor-Ort-Begehung",
    "about.feature5": "Schnelle Reaktion — innerhalb von 24-48 Stunden",
    "about.feature6": "Wettbewerbsfähige Preise und flexible Konditionen",
    "about.satisfaction": "Kundenzufriedenheit",
    "about.clients": "Zufriedene Kunden",
    "about.projects": "Projekte",
    "about.years": "Jahre Erfahrung",
    "about.imageAlt": "Modernes Büro mit Klimaanlage",

    // Brands
    "brands.label": "Marken",
    "brands.title": "Führende Marken",
    "brands.subtitle":
      "Wir arbeiten ausschließlich mit weltweit anerkannten Klimaanlagenherstellern, um Ihnen die beste Qualität zu bieten.",
    "brands.daikin": "Japanische Premium-Marke mit innovativen Technologien",
    "brands.mitsubishi":
      "Höchste Klasse bei Energieeffizienz und leisem Betrieb",
    "brands.samsung": "Modernes Design und Smart-Home-Integration",
    "brands.lg": "Innovative Kühl- und Heizsysteme",
    "brands.toshiba": "Zuverlässigkeit und Langlebigkeit mit japanischer Qualität",
    "brands.gree": "Hervorragendes Preis-Leistungs-Verhältnis",
    "brands.nordis":
      "Moderne europäische Marke mit hoher Energieeffizienz und elegantem Design",
    "brands.daikinSpec": "Inverter-Technologie",
    "brands.mitsubishiSpec": "Leiser Betrieb",
    "brands.samsungSpec": "WindFree™-Technologie",
    "brands.lgSpec": "Dual Inverter",
    "brands.toshibaSpec": "Energieklasse A+++",
    "brands.greeSpec": "Breite Modellpalette",
    "brands.nordisSpec": "WLAN-Steuerung & A+++",

    // Calculator
    "calc.label": "Preisrechner",
    "calc.title": "Berechnen Sie Ihren Preis",
    "calc.subtitle":
      "Wählen Sie eine Leistung und die Größe Ihres Raums, um sofort eine ungefähre Kostenschätzung zu erhalten.",
    "calc.noticeTitle": "Der Preis ist ein Richtwert",
    "calc.noticeText":
      "Dieser Rechner liefert nur eine orientierende Kostenschätzung und ist kein verbindliches Angebot. Der Endpreis kann je nach Besonderheiten des Objekts, dem Grundriss der Räume, dem gewählten Gerätemodell und der Komplexität der Montage abweichen. Ein genaues Angebot erstellen wir nach einer kostenlosen Vor-Ort-Begehung.",
    "calc.serviceType": "Leistungsart",
    "calc.roomSize": "Raumfläche",
    "calc.roomSizeUnit": "m²",
    "calc.equipmentClass": "Geräteklasse",
    "calc.extras": "Zusatzarbeiten",
    "calc.svcInstall": "Installation",
    "calc.svcInstallDesc": "Montage einer neuen Klimaanlage",
    "calc.svcMaintenance": "Wartung",
    "calc.svcMaintenanceDesc": "Reinigung und Prüfung",
    "calc.svcRepair": "Reparatur",
    "calc.svcRepairDesc": "Diagnose und Instandsetzung",
    "calc.svcVentilation": "Lüftung",
    "calc.svcVentilationDesc": "Lüftungssystem",
    "calc.classEconomy": "Economy",
    "calc.classEconomyDesc": "Gree, Nordis",
    "calc.classStandard": "Standard",
    "calc.classStandardDesc": "Samsung, LG, Toshiba",
    "calc.classPremium": "Premium",
    "calc.classPremiumDesc": "Daikin, Mitsubishi",
    "calc.extraEquipment": "Gerätepreis einbeziehen",
    "calc.extraLongPipe": "Lange Leitungen (>5 m)",
    "calc.extraHighAltitude": "Arbeit in der Höhe / an der Fassade",
    "calc.extraUrgent": "Express-Ausführung (24h)",
    "calc.estimate": "Ungefährer Preis",
    "calc.priceFrom": "ab",
    "calc.priceTo": "bis",
    "calc.breakdown": "Details der Berechnung",
    "calc.baseWork": "Grundarbeiten",
    "calc.areaSurcharge": "Flächenfaktor",
    "calc.equipmentCost": "Gerät",
    "calc.extrasCost": "Zusatzarbeiten",
    "calc.urgentCost": "Dringlichkeit",
    "calc.vatNote": "Preise ohne 21% MwSt. Die Berechnung ist unverbindlich.",
    "calc.disclaimer":
      "Der Endpreis wird nach einer kostenlosen Vor-Ort-Begehung festgelegt. Kontaktieren Sie uns für ein genaues Angebot!",
    "calc.ctaButton": "Genaues Angebot erhalten",
    "calc.reset": "Zurücksetzen",

    // Testimonials
    "testimonials.label": "Bewertungen",
    "testimonials.title": "Das sagen unsere Kunden",
    "testimonials.subtitle":
      "Unser größter Stolz sind zufriedene Kunden, die uns ihren Freunden und Kollegen weiterempfehlen.",
    "testimonials.name1": "Jānis Bērziņš",
    "testimonials.role1": "Hausbesitzer",
    "testimonials.text1":
      "Hervorragender Service! Die Klimaanlage wurde schnell und professionell installiert. Das Team war sehr höflich und hat alles zur Nutzung des Systems erklärt. Ich empfehle sie allen!",
    "testimonials.name2": "SIA TechOffice",
    "testimonials.role2": "Büromanagerin",
    "testimonials.text2":
      "Wir haben Frioestrella für das Klimasystem unseres Büros gewählt. Das Ergebnis ist herausragend — die Mitarbeiter sind zufrieden und der Energieverbrauch ist um 30% gesunken.",
    "testimonials.name3": "Anna Liepiņa",
    "testimonials.role3": "Wohnungseigentümerin",
    "testimonials.text3":
      "Nach langer Suche habe ich Frioestrella gefunden. Die Beratung war kostenlos, der Preis fair und die Qualität — auf höchstem Niveau. Auch der Service nach der Installation ist großartig.",

    // Contact
    "contact.label": "Kontakt",
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle":
      "Erhalten Sie noch heute eine kostenlose Beratung und ein Angebot. Wir antworten innerhalb von 24 Stunden.",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.hours": "Öffnungszeiten",
    "contact.hoursLV": "Mo-Fr: 8:00 - 18:00, Sa: 9:00 - 14:00",
    "contact.hoursES": "Mo-Fr: 9:00 - 19:00",
    "contact.regionLV": "Lettland",
    "contact.regionES": "Spanien",
    "contact.formTitle": "Anfrage senden",
    "contact.name": "Name *",
    "contact.namePlaceholder": "Ihr Name",
    "contact.phonePlaceholder": "+371 ...",
    "contact.emailLabel": "E-Mail",
    "contact.emailPlaceholder": "ihre@email.de",
    "contact.message": "Nachricht *",
    "contact.messagePlaceholder": "Beschreiben Sie, welche Leistung Sie benötigen...",
    "contact.submit": "Anfrage senden",
    "contact.toastTitle": "Nachricht gesendet!",
    "contact.toastDesc": "Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",

    // Footer
    "footer.description":
      "Frioestrella SIA — professionelle Klimaanlagenlösungen für Ihren Komfort. Installation, Wartung und Reparatur in ganz Lettland und Spanien.",
    "faq.label": "FAQ",
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle":
      "Antworten auf die Fragen, die Kunden am häufigsten vor der Installation oder Wartung einer Klimaanlage stellen.",
    "faq.q1": "Was kostet die Installation einer Klimaanlage?",
    "faq.a1":
      "Der Installationspreis hängt von der Raumfläche, der Geräteklasse und der Komplexität der Montage ab. Einen ungefähren Preis können Sie mit unserem Rechner ermitteln; ein genaues Angebot erstellen wir nach einer kostenlosen Vor-Ort-Begehung.",
    "faq.q2": "Wie lange dauert die Installation?",
    "faq.a2":
      "Die Installation einer Standard-Split-Anlage dauert in der Regel 4-6 Stunden und wird an einem Tag abgeschlossen. Für komplexere Lösungen oder Multi-Split-Systeme können 2 Tage erforderlich sein.",
    "faq.q3": "Wie oft sollte eine Klimaanlage gewartet werden?",
    "faq.a3":
      "Für Haushaltsgeräte empfehlen wir eine Wartung mindestens einmal jährlich, vorzugsweise vor der Sommersaison. In Büros und Gewerberäumen mit intensiver Nutzung zweimal jährlich. Regelmäßige Wartung verlängert die Lebensdauer und senkt den Stromverbrauch.",
    "faq.q4": "Welche Garantie bieten Sie?",
    "faq.a4":
      "Auf Installationsarbeiten gewähren wir bis zu 5 Jahre Garantie, für die Geräte gilt die Herstellergarantie. Während der Garantiezeit sichern wir schnellen Service und Originalersatzteile zu.",
    "faq.q5": "In welchen Regionen sind Sie tätig?",
    "faq.a5":
      "Wir arbeiten in ganz Lettland, einschließlich Riga und den Regionen, sowie in Spanien. Kontaktieren Sie uns, und wir klären die Anfahrtsmöglichkeiten zu Ihrer Adresse.",

    "agent.launcher": "Fachberatung",
    "agent.title": "Estrella — Beraterin",
    "agent.subtitle": "Antwortet sofort",
    "agent.greeting":
      "Hallo! Ich bin Estrella, Beraterin bei Frioestrella. Sagen Sie mir, welchen Raum Sie kühlen möchten oder welche Leistung Sie benötigen, und ich nenne Ihnen einen ungefähren Preis.",
    "agent.placeholder": "Schreiben Sie Ihre Frage...",
    "agent.send": "Senden",
    "agent.close": "Chat schließen",
    "agent.typing": "Antwort wird geschrieben...",
    "agent.error": "Antwort konnte nicht geladen werden. Bitte erneut versuchen.",
    "agent.leadSaved":
      "Vielen Dank! Ihr Kontakt wurde gespeichert — ein Fachmann meldet sich in Kürze.",
    "agent.disclaimer":
      "KI-Berater. Preise sind Richtwerte und kein verbindliches Angebot.",
    "agent.quick1": "Was kostet eine Klimaanlage für 30 m²?",
    "agent.quick2": "Wie oft ist eine Wartung nötig?",
    "agent.quick3": "Arbeiten Sie in meiner Region?",

    "footer.quickLinks": "Schnelllinks",
    "footer.followUs": "Folgen Sie uns",
    "footer.copyright": "© 2026 Frioestrella SIA. Alle Rechte vorbehalten.",
  },
};