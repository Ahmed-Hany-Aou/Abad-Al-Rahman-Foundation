import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    lng: 'ar', // Default language
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ar: {
        translation: {
          title: "مؤسسة عباد الرحمن الخيرية",
          subtitle: "أثر إنساني ممتد.. وبناء للمستقبل",
          nav: {
            home: "الرئيسية",
            impact: "إنجازاتنا",
            about: "عن المؤسسة",
            projects: "مشاريعنا الطبية",
            contact: "اتصل بنا",
            open: "فتح القائمة",
            close: "إغلاق القائمة"
          },
          hero: {
            title: "نحن نصنع الفرق في حياة الناس",
            description: "مؤسسة مشهرة برقم 1784 لسنة 2007، تعمل على تمكين المجتمع من خلال الدعم الطبي والغذائي والاجتماعي.",
            supportBtn: "ادعمنا الآن"
          },

          about: {
            title: "من نحن وماذا نريد؟",
            description: "مؤسسة خيرية غير ربحية تعمل منذ عام ٢٠٠٧ على دعم الفقراء والمساكين وتنمية المجتمعات الريفية من خلال برامج غذائية وطبية وتنموية مستدامة.",
            mission: "رؤيتنا",
            missionText: "الريادة: أن تكون النموذج الأول في تقديم الخدمة الطبية المجانية بجودة عالمية.\nالشمولية: مجتمع متعاف صحياً ومكتف غذائياً.\nالاستدامة: تحويل التبرعات إلى أصول خيرية دائمة (صدقة جارية تخدم الأجيال).\nالكرامة: تقديم العون لكل محتاج بأعلى معايير التعفف والتقدير.",
            history: "أهدافنا في سطور",
            historyText: "الرعاية الطبية: تقديم خدمات طبية مجانية وشاملة (عبر المجمع الطبي) لكل محتاج.\nالأمن الغذائي: استدامة إطعام الطعام وتطوير مطبخ النمروط ليصل لآلاف الأسر.\nكفالة الأيتام: رعاية الأسر المتعففة والأيتام مادياً ومعنوياً لضمان حياة كريمة.\nبناء الأثر: إنشاء المجمع الطبي الجديد (٦ طوابق) كصدقة جارية مستدامة.\nتنمية القرية: النهوض بالخدمات العامة في النمروط ودعم زواج غير القادرين.",
            altEvent: "فعالية المؤسسة"
          },
          activities: {
            title: "أنشطتنا ومجالات عملنا",
            kitchen: "مطبخ النمروط الخيري",
            kitchenDesc: "يتم طهي 25,000 وجبة طوال شهر رمضان وتوزيعها حتى باب المستحقين. (8 سنوات وما زال الخير يتدفق)",
            pharmacy: "صيدلية النمروط الخيرية",
            pharmacyDesc: "صرف علاج مجاني للفقراء طوال العام. الدواء حق لكل محتاج بمتوسط 50,000 جنيه شهرياً.",
            medical: "المجمع الطبي الخيري الحالي",
            medicalDesc: "10 سنوات من التميز. رعاية طبية متكاملة بلا مقابل تشمل حضانات، جراحة عامة، وأكثر من 13 عيادة.",
            aid: "مساعدات شهرية وعامة",
            aidDesc: "دعم أكثر من 250 أسرة بتكلفة شهرية 200,000 جنيه، وتوفير أجهزة طبية ودعم معيشي طارئ."
          },
          volunteer: {
            title: "فريق النمروط",
            description: "كن جزءاً من التغيير. انضم إلى متطوعينا وساهم في رسم البسمة على وجوه المحتاجين.",
            cta: "انضم إلينا الآن"
          },
          contact: {
            title: "اتصل بنا",
            getInTouch: "تواصل معنا",
            successMsg: "شكراً لرسالتك! سنتواصل معك قريباً.",
            form: {
              name: "الاسم",
              email: "البريد الإلكتروني",
              message: "الرسالة",
              send: "إرسال"
            },
            info: {
              address: "العنوان: القاهرة، مصر",
              phone: "الهاتف: 01000000000",
              email: "البريد: info@abad-rahman.org"
            }
          },
          donation: {
            title: "ادعمنا",
            description: "مساهمتك تصنع فرقاً حقيقياً. اختر طريقة التبرع المناسبة لك.",
            bankDetails: "تفاصيل الحساب البنكي",
            accountNumber: "رقم الحساب: 123456789",
            bankName: "البنك: البنك الأهلي المصري",
            close: "إغلاق"
          },
          trust: {
            title: "ثقة واعتماد",
            description: "مؤسسة رسمية مسجلة بوزارة التضامن الاجتماعي المصرية برقم 1784 لعام 2007. نحن نلتزم بأعلى معايير الشفافية.",
            certTitles: {
              ministry: "تقدير من الوزارة",
              reg1: "شهادة تسجيل 1",
              reg2: "شهادة تسجيل 2",
              appreciation: "شهادة تقدير"
            }
          },
          metrics: {
            categories: {
              medical: "الأثر الطبي",
              food: "الأمن الغذائي",
              social: "التكافل الاجتماعي",
              future: "مشروعنا القادم"
            },
            ramadanMeals: { label: "وجبة رمضان", value: 25000, suffix: "" },
            mealCost: { label: "تكلفة الوجبة", value: 65, suffix: " جنية" },
            villages: { label: "قرى ومناطق", value: 10, suffix: "+" },
            clinics: { label: "عيادة متخصصة", value: 13, suffix: "+" },
            medicalYears: { label: "سنوات التميز الطبي", value: 10, suffix: "" },
            foodYears: { label: "سنوات العطاء المستمر", value: 8, suffix: "" },
            pharmacyCost: { label: "تكلفة الصيدلية شهرياً", value: 50000, suffix: " جنية" },
            families: { label: "أسر مستفيدة شهرياً", value: 25, suffix: "+" },
            monthlyAid: { label: "مساعدات شهرية ثابتة", value: 20000, suffix: " جنية" },
            newArea: { label: "مساحة المجمع الجديد", value: 250, suffix: " متر²" },
            newFloors: { label: "أدوار المجمع الجديد", value: 6, suffix: "" },
            newUnits: { label: "وحدات طبية مستهدفة", value: 5, suffix: "" },
            totalAid: { label: "إجمالي المساعدات", value: 1600000, suffix: "+" }
          },
          volunteer: {
            title: "فريق النمروط",
            description: "كن جزءاً من التغيير. انضم إلى متطوعينا وساهم في رسم البسمة على وجوه المحتاجين.",
            cta: "انضم إلينا الآن",
            alt: "متطوعو فريق النمروط"
          },
          social: {
            fb: "فيسبوك",
            ig: "إنستجرام",
            tw: "تويتر"
          },
          footer: {
            copy: "© 2026",
            rights: "جميع الحقوق محفوظة."
          },
          projects: {
            title: "مشاريعنا الطبية القادمة",
            subtitle: "نعمل على إنشاء مراكز طبية متخصصة لخدمة المجتمع (قيد الإنشاء)",
            radiology: "مركز أشعة متكامل",
            radiologyDesc: "توفير أحدث أجهزة الأشعة التشخيصية لخدمة المرضى مجاناً أو بأسعار رمزية.",
            eye: "مركز جراحة عيون",
            eyeDesc: "عمليات المياه البيضاء والزرقاء وتصحيح الإبصار بأحدث التقنيات.",
            physical: "مركز علاج طبيعي كامل",
            physicalDesc: "تأهيل حركي وعلاج طبيعي بأجهزة حديثة لجميع الأعمار.",
            icu: "وحدة عناية مركزة",
            icuDesc: "غرف عناية مركزة مجهزة بالكامل لاستقبال الحالات الحرجة.",
            dialysis: "مركز غسيل كلوي",
            dialysisDesc: "وحدات غسيل كلوي متطورة لتقديم الخدمة بشكل مستمر للمرضى."
          }
        }
      },
      en: {
        translation: {
          title: "Abad Al-Rahman Foundation",
          subtitle: "Lasting Humanitarian Impact.. Building the Future",
          nav: {
            home: "Home",
            impact: "Impact",
            about: "About Us",
            projects: "Medical Projects",
            contact: "Contact",
            open: "Open Menu",
            close: "Close Menu"
          },
          hero: {
            title: "Making a Difference in People's Lives",
            description: "Registered NGO No. 1784 of 2007, working to empower the community through medical, food, and social support.",
            supportBtn: "Support Us Now"
          },
          metrics: {
            categories: {
              medical: "Medical Impact",
              food: "Food Security",
              social: "Social Solidarity",
              future: "Our Future Project"
            },
            ramadanMeals: { label: "Ramadan Meals", value: 25000, suffix: "" },
            mealCost: { label: "Meal Cost", value: 65, suffix: " EGP" },
            villages: { label: "Villages & Hamlets", value: 10, suffix: "+" },
            clinics: { label: "Specialized Clinics", value: 13, suffix: "+" },
            medicalYears: { label: "Medical Excellence Years", value: 10, suffix: "" },
            foodYears: { label: "Continuous Giving Years", value: 8, suffix: "" },
            pharmacyCost: { label: "Pharmacy Monthly Cost", value: 50000, suffix: " EGP" },
            families: { label: "Monthly Beneficiaries", value: 25, suffix: "+" },
            monthlyAid: { label: "Fixed Monthly Aid", value: 20000, suffix: " EGP" },
            newArea: { label: "New Complex Area", value: 250, suffix: " m²" },
            newFloors: { label: "New Complex Floors", value: 6, suffix: "" },
            newUnits: { label: "Targeted Medical Units", value: 5, suffix: "" },
            totalAid: { label: "Total Yearly Aid", value: 1600000, suffix: "+" }
          },
          trust: {
            title: "Trust & Credibility",
            description: "Official foundation registered with the Egyptian Ministry of Social Solidarity under No. 1784 of 2007. We adhere to the highest standards of transparency."
          },
          about: {
            title: "Who Are We and What Do We Want?",
            description: "A non-profit charitable foundation working since 2007 to support the poor and needy, and develop rural communities through sustainable food, medical, and development programs.",
            mission: "Our Vision",
            missionText: "Leadership: To be the premier model in providing free medical services with global quality.\nInclusivity: A healthy society and a self-sufficient food supply.\nSustainability: Transforming donations into permanent charitable assets (ongoing charity serving generations).\nDignity: Providing aid to everyone in need with the highest standards of modesty and appreciation.",
            history: "Our Goals",
            historyText: "Medical Care: Providing free and comprehensive medical services (via the Medical Complex) to everyone in need.\nFood Security: Sustaining food distribution and developing the \"Al-Namrouth Kitchen\" to reach thousands of families.\nOrphan Sponsorship: Caring for needy families and orphans financially and morally to ensure a decent life.\nBuilding Impact: Establishing the new Medical Complex (6 floors) as a sustainable ongoing charity.\nVillage Development: Advancing public services in Al-Namrouth and supporting the marriage of those in need.",
            altEvent: "Foundation Event"
          },
          activities: {
            title: "Our Activities & Impact",
            kitchen: "Al-Namrouth Charity Kitchen",
            kitchenDesc: "25,000 meals cooked throughout Ramadan and distributed directly to the needy. (8 years of continuous goodness)",
            pharmacy: "Charity Pharmacy",
            pharmacyDesc: "Dispensing free treatments year-round. Medicine is a right for every needy person (50,000 EGP monthly).",
            medical: "Existing Medical Complex",
            medicalDesc: "10 years of excellence. Comprehensive free healthcare including incubators, surgery, and 13+ clinics.",
            aid: "Monthly & General Aid",
            aidDesc: "Supporting over 250 families (200,000 EGP monthly), providing medical equipment, and urgent living support."
          },
          volunteer: {
            title: "Team Al-Namrouth",
            description: "Be part of the change. Join our volunteers and help bring a smile to those in need.",
            cta: "Join Us Now"
          },
          contact: {
            title: "Contact Us",
            getInTouch: "Get in Touch",
            successMsg: "Thank you for your message! We will get back to you soon.",
            form: {
              name: "Name",
              email: "Email",
              message: "Message",
              send: "Send"
            },
            info: {
              address: "Address: Cairo, Egypt",
              phone: "Phone: +20 100 000 0000",
              email: "Email: info@abad-rahman.org"
            }
          },
          donation: {
            title: "Support Us",
            description: "Your contribution makes a real difference. Choose the donation method that suits you.",
            bankDetails: "Bank Account Details",
            accountNumber: "Account Number: 123456789",
            bankName: "Bank: National Bank of Egypt",
            close: "Close"
          },
          trust: {
            title: "Trust & Credibility",
            description: "Official foundation registered with the Egyptian Ministry of Social Solidarity under No. 1784 of 2007. We adhere to the highest standards of transparency.",
            certTitles: {
              ministry: "Ministry Appreciation",
              reg1: "Registration Doc 1",
              reg2: "Registration Doc 2",
              appreciation: "Appreciation Certificate"
            }
          },

          volunteer: {
            title: "Team Al-Namrouth",
            description: "Be part of the change. Join our volunteers and help bring a smile to those in need.",
            cta: "Join Us Now",
            alt: "Team Al-Namrouth Volunteers"
          },
          social: {
            fb: "FB",
            ig: "IG",
            tw: "TW"
          },
          footer: {
            copy: "© 2026",
            rights: "All rights reserved."
          },
          projects: {
            title: "Upcoming Medical Projects",
            subtitle: "Working to establish specialized medical centers to serve the community (Under Construction)",
            radiology: "Integrated Radiology Center",
            radiologyDesc: "Providing the latest diagnostic radiology equipment to serve patients for free or at nominal prices.",
            eye: "Eye Surgery Center",
            eyeDesc: "Cataract and glaucoma surgeries, and vision correction using the latest technologies.",
            physical: "Complete Physical Therapy Center",
            physicalDesc: "Motor rehabilitation and physical therapy with modern equipment for all ages.",
            icu: "Intensive Care Unit",
            icuDesc: "Fully equipped intensive care rooms to receive critical cases.",
            dialysis: "Kidney Dialysis Center",
            dialysisDesc: "Advanced kidney dialysis units to provide continuous service to patients."
          }
        }
      },
      de: {
        translation: {
          title: "Abad Al-Rahman Stiftung",
          subtitle: "Nachhaltige humanitäre Wirkung.. Aufbau der Zukunft",
          nav: { home: "Startseite", impact: "Einfluss", about: "Über uns", projects: "Medizinische Projekte", contact: "Kontakt", open: "Menü öffnen", close: "Menü schließen" },
          hero: {
            title: "Wir verändern das Leben der Menschen",
            description: "Eingetragene NGO Nr. 1784 von 2007, die sich für die Stärkung der Gemeinschaft durch medizinische, Ernährungs- und soziale Unterstützung einsetzt.",
            supportBtn: "Jetzt unterstützen"
          },
          metrics: {
            categories: {
              medical: "Medizinische Wirkung",
              food: "Ernährungssicherheit",
              social: "Soziale Solidarität",
              future: "Unser Zukunftsprojekt"
            },
            ramadanMeals: { label: "Ramadan-Mahlzeiten", value: 25000, suffix: "" },
            mealCost: { label: "Kosten pro Mahlzeit", value: 65, suffix: " EGP" },
            villages: { label: "Dörfer & Weiler", value: 10, suffix: "+" },
            clinics: { label: "Spezialisierte Kliniken", value: 13, suffix: "+" },
            medicalYears: { label: "Jahre medizinische Exzellenz", value: 10, suffix: "" },
            foodYears: { label: "Jahre kontinuierliche Hilfe", value: 8, suffix: "" },
            pharmacyCost: { label: "Monatliche Kosten Apotheke", value: 50000, suffix: " EGP" },
            families: { label: "Monatliche Begünstigte", value: 25, suffix: "+" },
            monthlyAid: { label: "Feste monatliche Hilfe", value: 20000, suffix: " EGP" },
            newArea: { label: "Fläche des neuen Komplexes", value: 250, suffix: " m²" },
            newFloors: { label: "Stockwerke des neuen Komplexes", value: 6, suffix: "" },
            newUnits: { label: "Geplante medizinische Einheiten", value: 5, suffix: "" },
            totalAid: { label: "Gesamte jährliche Hilfe", value: 1600000, suffix: "+" }
          },
          trust: {
            title: "Vertrauen & Glaubwürdigkeit",
            description: "Offizielle Stiftung, registriert beim ägyptischen Ministerium für soziale Solidarität unter der Nr. 1784 von 2007. Wir verpflichten uns zu höchster Transparenz.",
            certTitles: {
              ministry: "Anerkennung des Ministeriums",
              reg1: "Registrierungsdokument 1",
              reg2: "Registrierungsdokument 2",
              appreciation: "Anerkennungsurkunde"
            }
          },
          about: {
            title: "Wer sind wir und was wollen wir?",
            description: "Eine gemeinnützige Wohltätigkeitsstiftung, die seit 2007 die Armen und Bedürftigen unterstützt und ländliche Gemeinschaften durch nachhaltige Ernährungs-, Medizin- und Entwicklungsprogramme entwickelt.",
            mission: "Unsere Vision",
            missionText: "Führung: Das führende Modell bei der Bereitstellung kostenloser medizinischer Dienstleistungen mit globaler Qualität zu sein.\nInklusivität: Eine gesunde Gesellschaft und eine autarke Lebensmittelversorgung.\nNachhaltigkeit: Spenden in dauerhafte wohltätige Vermögenswerte umwandeln (fortlaufende Wohltätigkeit für Generationen).\nWürde: Jedem Bedürftigen Hilfe mit höchsten Standards an Bescheidenheit und Wertschätzung bieten.",
            history: "Unsere Ziele",
            historyText: "Medizinische Versorgung: Bereitstellung kostenloser und umfassender medizinischer Dienstleistungen (über den medizinischen Komplex) für jeden Bedürftigen.\nErnährungssicherheit: Nachhaltige Lebensmittelverteilung und Entwicklung der „Al-Namrouth-Küche“, um Tausende von Familien zu erreichen.\nWaisenpatenschaft: Finanzielle und moralische Betreuung bedürftiger Familien und Waisen, um ein würdevolles Leben zu gewährleisten.\nWirkung erzielen: Aufbau des neuen medizinischen Komplexes (6 Stockwerke) als nachhaltige, fortlaufende Wohltätigkeit.\nDorfentwicklung: Förderung öffentlicher Dienstleistungen in Al-Namrouth und Unterstützung der Eheschließung von Bedürftigen.",
            altEvent: "Stiftungsveranstaltung"
          },
          activities: {
            title: "Unsere Aktivitäten & Auswirkungen",
            kitchen: "Al-Namrouth Wohltätigkeitsküche",
            kitchenDesc: "25.000 Mahlzeiten, die während des Ramadan gekocht und direkt an Bedürftige verteilt werden. (8 Jahre kontinuierliche Güte)",
            pharmacy: "Wohltätigkeitsapotheke",
            pharmacyDesc: "Ganzjährige Ausgabe kostenloser Behandlungen. Medizin ist ein Recht für jeden Bedürftigen (50.000 EGP monatlich).",
            medical: "Bestehender Medizinischer Komplex",
            medicalDesc: "10 Jahre Exzellenz. Umfassende kostenlose Gesundheitsversorgung, einschließlich Inkubatoren, Chirurgie und über 13 Kliniken.",
            aid: "Monatliche & Allgemeine Hilfe",
            aidDesc: "Unterstützung von über 250 Familien (200.000 EGP monatlich), Bereitstellung medizinischer Geräte und dringender Lebenshilfe."
          },
          volunteer: {
            title: "Team Al-Namrouth",
            description: "Seien Sie Teil des Wandels. Schließen Sie sich unseren Freiwilligen an und helfen Sie dabei, den Bedürftigen ein Lächeln ins Gesicht zu zaubern.",
            cta: "Jetzt beitreten",
            alt: "Freiwillige des Teams Al-Namrouth"
          },
          contact: {
            title: "Kontakt",
            getInTouch: "Kontaktieren Sie uns",
            successMsg: "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
            form: {
              name: "Name",
              email: "E-Mail",
              message: "Nachricht",
              send: "Senden"
            },
            info: {
              address: "Adresse: Kairo, Ägypten",
              phone: "Telefon: +20 100 000 0000",
              email: "E-Mail: info@abad-rahman.org"
            }
          },
          donation: {
            title: "Unterstützen Sie uns",
            description: "Ihr Beitrag macht einen echten Unterschied. Wählen Sie die für Sie passende Spendenmethode.",
            bankDetails: "Bankverbindung",
            accountNumber: "Kontonummer: 123456789",
            bankName: "Bank: National Bank of Egypt",
            close: "Schließen"
          },
          social: {
            fb: "FB",
            ig: "IG",
            tw: "TW"
          },
          footer: {
            copy: "© 2026",
            rights: "Alle Rechte vorbehalten."
          },
          projects: {
            title: "Zukünftige Medizinische Projekte",
            subtitle: "Arbeit an der Einrichtung spezialisierter medizinischer Zentren (Im Bau)",
            radiology: "Integriertes Radiologiezentrum",
            radiologyDesc: "Bereitstellung modernster diagnostischer Radiologiegeräte für Patienten.",
            eye: "Augenchirurgiezentrum",
            eyeDesc: "Katarakt- und Glaukomoperationen sowie Sehkorrekturen.",
            physical: "Zentrum für Physiotherapie",
            physicalDesc: "Motorische Rehabilitation und Physiotherapie mit modernen Geräten.",
            icu: "Intensivstation",
            icuDesc: "Voll ausgestattete Intensivstationen für kritische Fälle.",
            dialysis: "Dialysezentrum",
            dialysisDesc: "Moderne Dialyseeinheiten für die kontinuierliche Versorgung von Patienten."
          }
        }
      },
      fr: {
        translation: {
          title: "Fondation Abad Al-Rahman",
          subtitle: "Impact humanitaire durable.. Construire l'avenir",
          nav: { home: "Accueil", impact: "Impact", about: "À propos", projects: "Projets Médicaux", contact: "Contact", open: "Ouvrir le menu", close: "Fermer le menu" },
          hero: {
            title: "Faire une différence dans la vie des gens",
            description: "ONG enregistrée n° 1784 de 2007, travaillant à l'autonomisation de la communauté par un soutien médical, alimentaire et social.",
            supportBtn: "Soutenez-nous maintenant"
          },
          metrics: {
            categories: {
              medical: "Impact Médical",
              food: "Sécurité Alimentaire",
              social: "Solidarité Sociale",
              future: "Notre Projet Futur"
            },
            ramadanMeals: { label: "Repas du Ramadan", value: 25000, suffix: "" },
            mealCost: { label: "Coût par repas", value: 65, suffix: " EGP" },
            villages: { label: "Villages et Hameaux", value: 10, suffix: "+" },
            clinics: { label: "Cliniques Spécialisées", value: 13, suffix: "+" },
            medicalYears: { label: "Années d'Excellence Médicale", value: 10, suffix: "" },
            foodYears: { label: "Années de Don Continu", value: 8, suffix: "" },
            pharmacyCost: { label: "Coût mensuel pharmacie", value: 50000, suffix: " EGP" },
            families: { label: "Bénéficiaires Mensuels", value: 25, suffix: "+" },
            monthlyAid: { label: "Aide mensuelle fixe", value: 20000, suffix: " EGP" },
            newArea: { label: "Surface du nouveau complexe", value: 250, suffix: " m²" },
            newFloors: { label: "Étages du nouveau complexe", value: 6, suffix: "" },
            newUnits: { label: "Unités médicales ciblées", value: 5, suffix: "" },
            totalAid: { label: "Aide annuelle totale", value: 1600000, suffix: "+" }
          },
          trust: {
            title: "Confiance et Crédibilité",
            description: "Fondation officielle enregistrée auprès du ministère égyptien de la Solidarité sociale sous le n° 1784 de 2007. Nous adhérons aux normes de transparence les plus élevées.",
            certTitles: {
              ministry: "Appréciation du ministère",
              reg1: "Document d'enregistrement 1",
              reg2: "Document d'enregistrement 2",
              appreciation: "Certificat d'appréciation"
            }
          },
          about: {
            title: "Qui sommes-nous et que voulons-nous ?",
            description: "Une fondation caritative à but non lucratif œuvrant depuis 2007 pour soutenir les pauvres et les nécessiteux, et développer les communautés rurales à travers des programmes alimentaires, médicaux et de développement durables.",
            mission: "Notre vision",
            missionText: "Leadership: Être le premier modèle de prestation de services médicaux gratuits de qualité mondiale.\nInclusivité: Une société saine et un approvisionnement alimentaire autosuffisant.\nDurabilité: Transformer les dons en actifs caritatifs permanents (charité continue au service des générations).\nDignité: Apporter une aide à toute personne dans le besoin avec les plus hauts standards de modestie et de reconnaissance.",
            history: "Nos objectifs",
            historyText: "Soins médicaux: Fournir des services médicaux gratuits et complets (via le complexe médical) à toute personne dans le besoin.\nSécurité alimentaire: Soutenir la distribution alimentaire et développer la « Cuisine Al-Namrouth » pour atteindre des milliers de familles.\nParrainage d'orphelins: Soutenir financièrement et moralement les familles nécessiteuses et les orphelins pour garantir une vie décente.\nConstruire l'impact: Établir le nouveau complexe médical (6 étages) comme une œuvre de charité durable.\nDéveloppement du village: Faire progresser les services publics à Al-Namrouth et soutenir le mariage des personnes démunies.",
            altEvent: "Événement de la fondation"
          },
          activities: {
            title: "Nos Activités et Impact",
            kitchen: "Cuisine Caritative Al-Namrouth",
            kitchenDesc: "25 000 repas cuisinés tout au long du Ramadan et distribués directement aux nécessiteux. (8 ans de bonté continue)",
            pharmacy: "Pharmacie Caritative",
            pharmacyDesc: "Distribution de traitements gratuits toute l'année. La médecine est un droit pour chaque personne dans le besoin (50 000 EGP par mois).",
            medical: "Complexe Médical Existant",
            medicalDesc: "10 ans d'excellence. Soins de santé gratuits complets, y compris couveuses, chirurgie et plus de 13 cliniques.",
            aid: "Aide Mensuelle et Générale",
            aidDesc: "Soutien à plus de 250 familles (200 000 EGP par mois), fourniture d'équipements médicaux et aide d'urgence à la vie."
          },
          volunteer: {
            title: "Équipe Al-Namrouth",
            description: "Faites partie du changement. Rejoignez nos bénévoles et aidez à redonner le sourire à ceux qui en ont besoin.",
            cta: "Rejoignez-nous maintenant",
            alt: "Bénévoles de l'équipe Al-Namrouth"
          },
          contact: {
            title: "Contactez-nous",
            getInTouch: "Entrer en contact",
            successMsg: "Merci pour votre message ! Nous vous répondrons bientôt.",
            form: {
              name: "Nom",
              email: "Email",
              message: "Message",
              send: "Envoyer"
            },
            info: {
              address: "Adresse : Le Caire, Égypte",
              phone: "Téléphone : +20 100 000 0000",
              email: "Email : info@abad-rahman.org"
            }
          },
          donation: {
            title: "Soutenez-nous",
            description: "Votre contribution fait une réelle différence. Choisissez la méthode de don qui vous convient.",
            bankDetails: "Coordonnées bancaires",
            accountNumber: "Numéro de compte : 123456789",
            bankName: "Banque : National Bank of Egypt",
            close: "Fermer"
          },
          social: {
            fb: "FB",
            ig: "IG",
            tw: "TW"
          },
          footer: {
            copy: "© 2026",
            rights: "Tous droits réservés."
          },
          projects: {
            title: "Projets Médicaux à Venir",
            subtitle: "Travailler à l'établissement de centres médicaux spécialisés (En construction)",
            radiology: "Centre de Radiologie Intégré",
            radiologyDesc: "Fournir les derniers équipements de radiologie diagnostique.",
            eye: "Centre de Chirurgie Oculaire",
            eyeDesc: "Chirurgie de la cataracte et du glaucome, et correction de la vision.",
            physical: "Centre de Physiothérapie Complet",
            physicalDesc: "Rééducation motrice et physiothérapie avec des équipements modernes.",
            icu: "Unité de Soins Intensifs",
            icuDesc: "Chambres de soins intensifs entièrement équipées pour les cas critiques.",
            dialysis: "Centre de Dialyse",
            dialysisDesc: "Unités de dialyse avancées pour fournir un service continu."
          }
        }
      },
      es: {
        translation: {
          title: "Fundación Abad Al-Rahman",
          subtitle: "Impacto humanitario duradero.. Construyendo el futuro",
          nav: { home: "Inicio", impact: "Impacto", about: "Nosotros", projects: "Proyectos Médicos", contact: "Contacto", open: "Abrir menú", close: "Cerrar menú" },
          hero: {
            title: "Marcando la diferencia en la vida de las personas",
            description: "ONG registrada nº 1784 de 2007, que trabaja para empoderar a la comunidad mediante apoyo médico, alimentario y social.",
            supportBtn: "Apóyanos ahora"
          },
          metrics: {
            categories: {
              medical: "Impacto Médico",
              food: "Seguridad Alimentaria",
              social: "Solidaridad Social",
              future: "Nuestro Proyecto Futuro"
            },
            ramadanMeals: { label: "Comidas de Ramadán", value: 25000, suffix: "" },
            mealCost: { label: "Costo por comida", value: 65, suffix: " EGP" },
            villages: { label: "Pueblos y Caseríos", value: 10, suffix: "+" },
            clinics: { label: "Clínicas Especializadas", value: 13, suffix: "+" },
            medicalYears: { label: "Años de Excelencia Médica", value: 10, suffix: "" },
            foodYears: { label: "Años de Donación Continua", value: 8, suffix: "" },
            pharmacyCost: { label: "Costo mensual farmacia", value: 50000, suffix: " EGP" },
            families: { label: "Beneficiarios Mensuales", value: 25, suffix: "+" },
            monthlyAid: { label: "Ayuda mensual fija", value: 20000, suffix: " EGP" },
            newArea: { label: "Superficie del nuevo complejo", value: 250, suffix: " m²" },
            newFloors: { label: "Pisos del nuevo complejo", value: 6, suffix: "" },
            newUnits: { label: "Unidades médicas previstas", value: 5, suffix: "" },
            totalAid: { label: "Ayuda anual total", value: 1600000, suffix: "+" }
          },
          trust: {
            title: "Confianza y Credibilidad",
            description: "Fundación oficial registrada en el Ministerio de Solidaridad Social de Egipto bajo el No. 1784 de 2007. Nos adherimos a los más altos estándares de transparencia.",
            certTitles: {
              ministry: "Agradecimiento del Ministerio",
              reg1: "Documento de registro 1",
              reg2: "Documento de registro 2",
              appreciation: "Certificado de apreciación"
            }
          },
          about: {
            title: "¿Quiénes somos y qué queremos?",
            description: "Una fundación benéfica sin fines de lucro que trabaja desde 2007 para apoyar a los pobres y necesitados, y desarrollar comunidades rurales a través de programas alimentarios, médicos y de desarrollo sostenibles.",
            mission: "Nuestra visión",
            missionText: "Liderazgo: Ser el modelo principal en la prestación de servicios médicos gratuitos con calidad global.\nInclusividad: Una sociedad sana y un suministro de alimentos autosuficiente.\nSostenibilidad: Transformar las donaciones en activos caritativos permanentes (caridad continua al servicio de las generaciones).\nDignidad: Brindar ayuda a todos los necesitados con los más altos estándares de modestia y aprecio.",
            history: "Nuestros objetivos",
            historyText: "Atención Médica: Brindar servicios médicos gratuitos e integrales (a través del Complejo Médico) a todos los necesitados.\nSeguridad Alimentaria: Mantener la distribución de alimentos y desarrollar la \"Cocina Al-Namrouth\" para llegar a miles de familias.\nPatrocinio de Huérfanos: Cuidar a familias necesitadas y huérfanos financiera y moralmente para asegurar una vida digna.\nCrear Impacto: Establecer el nuevo Complejo Médico (6 pisos) como una caridad continua y sostenible.\nDesarrollo del Pueblo: Impulsar los servicios públicos en Al-Namrouth y apoyar el matrimonio de personas necesitadas.",
            altEvent: "Evento de la fundación"
          },
          activities: {
            title: "Nuestras Actividades e Impacto",
            kitchen: "Cocina Benéfica Al-Namrouth",
            kitchenDesc: "25.000 comidas cocinadas durante el Ramadán y distribuidas directamente a los necesitados. (8 años de bondad continua)",
            pharmacy: "Farmacia Benéfica",
            pharmacyDesc: "Dispensación de tratamientos gratuitos durante todo el año. La medicina es un derecho para cada persona necesitada (50.000 EGP mensuales).",
            medical: "Complejo Médico Existente",
            medicalDesc: "10 años de excelencia. Atención médica gratuita integral que incluye incubadoras, cirugía y más de 13 clínicas.",
            aid: "Ayuda Mensual y General",
            aidDesc: "Apoyo a más de 250 familias (200.000 EGP mensuales), suministro de equipos médicos y apoyo urgente para la vida."
          },
          volunteer: {
            title: "Equipo Al-Namrouth",
            description: "Sé parte del cambio. Únete a nuestros voluntarios y ayuda a llevar una sonrisa a quienes más lo necesitan.",
            cta: "Únete ahora",
            alt: "Voluntarios del equipo Al-Namrouth"
          },
          contact: {
            title: "Contáctenos",
            getInTouch: "Ponerse en contacto",
            successMsg: "¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.",
            form: {
              name: "Nombre",
              email: "Correo electrónico",
              message: "Mensaje",
              send: "Enviar"
            },
            info: {
              address: "Dirección: El Cairo, Egipto",
              phone: "Teléfono: +20 100 000 0000",
              email: "Email: info@abad-rahman.org"
            }
          },
          donation: {
            title: "Apóyanos",
            description: "Tu contribución hace una diferencia real. Elige el método de donación que más te convenga.",
            bankDetails: "Detalles de la cuenta bancaria",
            accountNumber: "Número de cuenta: 123456789",
            bankName: "Banco: National Bank of Egypt",
            close: "Cerrar"
          },
          social: {
            fb: "FB",
            ig: "IG",
            tw: "TW"
          },
          footer: {
            copy: "© 2026",
            rights: "Todos los derechos reservados."
          },
          projects: {
            title: "Próximos Proyectos Médicos",
            subtitle: "Trabajando para establecer centros médicos especializados (En construcción)",
            radiology: "Centro de Radiología Integrado",
            radiologyDesc: "Proporcionar los últimos equipos de radiología de diagnóstico.",
            eye: "Centro de Cirugía Ocular",
            eyeDesc: "Cirugías de cataratas y glaucoma, y corrección de la visión.",
            physical: "Centro Integral de Fisioterapia",
            physicalDesc: "Rehabilitación motora y fisioterapia con equipamiento moderno.",
            icu: "Unidad de Cuidados Intensivos",
            icuDesc: "Salas de cuidados intensivos totalmente equipadas para casos críticos.",
            dialysis: "Centro de Diálisis",
            dialysisDesc: "Unidades avanzadas de diálisis para brindar servicio continuo."
          }
        }
      },
      id: {
        translation: {
          title: "Yayasan Abad Al-Rahman",
          subtitle: "Dampak Kemanusiaan Berkelanjutan.. Membangun Masa Depan",
          nav: { home: "Beranda", impact: "Dampak", about: "Tentang Kami", projects: "Proyek Medis", contact: "Kontak", open: "Buka Menu", close: "Tutup Menu" },
          hero: {
            title: "Membuat Perbedaan dalam Hidup Orang Lain",
            description: "LSM Terdaftar No. 1784 tahun 2007, bekerja untuk memberdayakan masyarakat melalui dukungan medis, pangan, dan sosial.",
            supportBtn: "Dukung Kami Sekarang"
          },
          metrics: {
            categories: {
              medical: "Dampak Medis",
              food: "Ketahanan Pangan",
              social: "Solidaritas Sosial",
              future: "Proyek Masa Depan Kami"
            },
            ramadanMeals: { label: "Makanan Ramadhan", value: 25000, suffix: "" },
            mealCost: { label: "Biaya per Makanan", value: 65, suffix: " EGP" },
            villages: { label: "Desa & Dusun", value: 10, suffix: "+" },
            clinics: { label: "Klinik Spesialis", value: 13, suffix: "+" },
            medicalYears: { label: "Tahun Keunggulan Medis", value: 10, suffix: "" },
            foodYears: { label: "Tahun Pemberian Berkelanjutan", value: 8, suffix: "" },
            pharmacyCost: { label: "Biaya Bulanan Apotek", value: 50000, suffix: " EGP" },
            families: { label: "Penerima Manfaat Bulanan", value: 25, suffix: "+" },
            monthlyAid: { label: "Bantuan Bulanan Tetap", value: 20000, suffix: " EGP" },
            newArea: { label: "Luas Kompleks Baru", value: 250, suffix: " m²" },
            newFloors: { label: "Lantai Kompleks Baru", value: 6, suffix: "" },
            newUnits: { label: "Unit Medis Target", value: 5, suffix: "" },
            totalAid: { label: "Total Bantuan Tahunan", value: 1600000, suffix: "+" }
          },
          trust: {
            title: "Kepercayaan & Kredibilitas",
            description: "Yayasan resmi terdaftar di Kementerian Solidaritas Sosial Mesir di bawah No. 1784 tahun 2007. Kami menjunjung tinggi standar transparansi tertinggi.",
            certTitles: {
              ministry: "Penghargaan Kementerian",
              reg1: "Dokumen Pendaftaran 1",
              reg2: "Dokumen Pendaftaran 2",
              appreciation: "Sertifikat Penghargaan"
            }
          },
          about: {
            title: "Siapa Kami dan Apa yang Kami Inginkan?",
            description: "Yayasan amal nirlaba yang bekerja sejak 2007 untuk mendukung kaum miskin dan membutuhkan, serta membangun komunitas pedesaan melalui program pangan, medis, dan pembangunan yang berkelanjutan.",
            mission: "Visi Kami",
            missionText: "Kepemimpinan: Menjadi model utama dalam menyediakan layanan medis gratis dengan kualitas global.\nInklusivitas: Masyarakat yang sehat dan pasokan pangan yang mandiri.\nKeberlanjutan: Mengubah donasi menjadi aset amal permanen (sedekah jariyah yang melayani generasi).\nMartabat: Memberikan bantuan kepada setiap orang yang membutuhkan dengan standar kesederhanaan dan apresiasi tertinggi.",
            history: "Tujuan Kami",
            historyText: "Perawatan Medis: Menyediakan layanan medis gratis dan komprehensif (melalui Kompleks Medis) kepada setiap orang yang membutuhkan.\nKetahanan Pangan: Menjaga distribusi pangan dan mengembangkan \"Dapur Al-Namrouth\" untuk menjangkau ribuan keluarga.\nSantunan Anak Yatim: Memperhatikan keluarga kurang mampu dan anak yatim secara finansial dan moral untuk menjamin kehidupan yang layak.\nMembangun Dampak: Mendirikan Kompleks Medis baru (6 lantai) sebagai sedekah jariyah yang berkelanjutan.\nPembangunan Desa: Memajukan layanan publik di Al-Namrouth dan mendukung pernikahan bagi mereka yang kurang mampu.",
            altEvent: "Acara Yayasan"
          },
          activities: {
            title: "Aktivitas & Dampak Kami",
            kitchen: "Dapur Amal Al-Namrouth",
            kitchenDesc: "25.000 makanan dimasak selama Ramadhan dan dibagikan langsung kepada yang membutuhkan. (8 tahun kebaikan yang berkelanjutan)",
            pharmacy: "Apotek Amal",
            pharmacyDesc: "Membagikan perawatan gratis sepanjang tahun. Obat adalah hak bagi setiap orang yang membutuhkan (50.000 EGP per bulan).",
            medical: "Kompleks Medis Saat Ini",
            medicalDesc: "10 tahun keunggulan. Perawatan kesehatan gratis yang komprehensif termasuk inkubator, operasi, dan 13+ klinik.",
            aid: "Bantuan Bulanan & Umum",
            aidDesc: "Mendukung lebih dari 250 keluarga (200.000 EGP per bulan), menyediakan peralatan medis, dan dukungan hidup yang mendesak."
          },
          volunteer: {
            title: "Tim Al-Namrouth",
            description: "Jadilah bagian dari perubahan. Bergabunglah dengan relawan kami dan bantu berikan senyuman kepada mereka yang membutuhkan.",
            cta: "Bergabung Sekarang",
            alt: "Relawan Tim Al-Namrouth"
          },
          contact: {
            title: "Hubungi Kami",
            getInTouch: "Hubungi Kami",
            successMsg: "Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.",
            form: {
              name: "Nama",
              email: "Email",
              message: "Pesan",
              send: "Kirim"
            },
            info: {
              address: "Alamat: Kairo, Mesir",
              phone: "Telepon: +20 100 000 0000",
              email: "Email: info@abad-rahman.org"
            }
          },
          donation: {
            title: "Dukung Kami",
            description: "Kontribusi Anda membuat perbedaan nyata. Pilih metode donasi yang sesuai untuk Anda.",
            bankDetails: "Detail Rekening Bank",
            accountNumber: "Nomor Rekening: 123456789",
            bankName: "Bank: National Bank of Egypt",
            close: "Tutup"
          },
          social: {
            fb: "FB",
            ig: "IG",
            tw: "TW"
          },
          footer: {
            copy: "© 2026",
            rights: "Hak cipta dilindungi undang-undang."
          },
          projects: {
            title: "Proyek Medis Mendatang",
            subtitle: "Bekerja untuk membangun pusat medis khusus (Sedang Dibangun)",
            radiology: "Pusat Radiologi Terpadu",
            radiologyDesc: "Menyediakan peralatan radiologi diagnostik terbaru.",
            eye: "Pusat Bedah Mata",
            eyeDesc: "Operasi katarak dan glaukoma, serta koreksi penglihatan.",
            physical: "Pusat Terapi Fisik Lengkap",
            physicalDesc: "Rehabilitasi motorik dan terapi fisik dengan peralatan modern.",
            icu: "Unit Perawatan Intensif",
            icuDesc: "Ruang perawatan intensif yang dilengkapi sepenuhnya untuk kasus kritis.",
            dialysis: "Pusat Dialisis",
            dialysisDesc: "Unit dialisis tingkat lanjut untuk memberikan layanan berkelanjutan."
          }
        }
      }
    }
  });

export default i18n;
