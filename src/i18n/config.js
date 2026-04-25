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
            contact: "اتصل بنا",
            open: "فتح القائمة",
            close: "إغلاق القائمة"
          },
          hero: {
            title: "نحن نصنع الفرق في حياة الناس",
            description: "مؤسسة مشهرة برقم 1784 لسنة 2007، تعمل على تمكين المجتمع من خلال الدعم الطبي والغذائي والاجتماعي.",
            supportBtn: "دعمنا الآن"
          },
          metrics: {
            ramadanMeals: "وجبة رمضان",
            weeklyMeals: "وجبة أسبوعية",
            foodBoxes: "كرتونة مواد غذائية",
            totalAid: "إجمالي المساعدات (جنية)",
            beneficiaries: "حالة مستفيدة",
            prescriptions: "روشتة مجانية"
          },
          about: {
            title: "عن المؤسسة",
            mission: "رسالتنا",
            missionText: "نسعى لتقديم دعم شامل للفئات الأكثر احتياجاً من خلال برامج غذائية وطبية واجتماعية مستدامة.",
            history: "تاريخنا",
            historyText: "تأسست مؤسسة عباد الرحمن في عام 2007 ككيان رسمي مشهر برقم 1784، ومنذ ذلك الحين ونحن نخدم المجتمع بصدق وشفافية.",
            altEvent: "حدث مؤسسي"
          },
          volunteer: {
            title: "فريق النمروث",
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
            ramadanMeals: "وجبة رمضان",
            ramadanValue: "26,525",
            weeklyMeals: "وجبة أسبوعية",
            weeklyValue: "3,250",
            foodBoxes: "كرتونة مواد غذائية",
            boxesValue: "300",
            totalAid: "إجمالي المساعدات (جنية)",
            totalAidValue: "1.6 مليون+",
            beneficiaries: "حالة مستفيدة",
            beneficiariesValue: "874",
            prescriptions: "روشتة مجانية",
            medicalValue: "1,396"
          },
          volunteer: {
            title: "فريق النمروث",
            description: "كن جزءاً من التغيير. انضم إلى متطوعينا وساهم في رسم البسمة على وجوه المحتاجين.",
            cta: "انضم إلينا الآن",
            alt: "متطوعو فريق النمروث"
          },
          social: {
            fb: "فيسبوك",
            ig: "إنستجرام",
            tw: "تويتر"
          },
          footer: {
            copy: "© 2026",
            rights: "جميع الحقوق محفوظة."
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
            ramadanMeals: "Ramadan Meals",
            weeklyMeals: "Weekly Meals",
            foodBoxes: "Food Boxes",
            totalAid: "Total Aid (EGP)",
            beneficiaries: "Beneficiaries",
            prescriptions: "Free Prescriptions"
          },
          trust: {
            title: "Trust & Credibility",
            description: "Official foundation registered with the Egyptian Ministry of Social Solidarity under No. 1784 of 2007. We adhere to the highest standards of transparency."
          },
          about: {
            title: "About Us",
            mission: "Our Mission",
            missionText: "We strive to provide comprehensive support to the most needy groups through sustainable food, medical, and social programs.",
            history: "Our History",
            historyText: "Abad Al-Rahman Foundation was established in 2007 as an official entity registered under No. 1784, and since then we have been serving the community with sincerity and transparency.",
            altEvent: "Foundation Event"
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
          metrics: {
            ramadanMeals: "Ramadan Meals",
            ramadanValue: "26,525",
            weeklyMeals: "Weekly Meals",
            weeklyValue: "3,250",
            foodBoxes: "Food Boxes",
            boxesValue: "300",
            totalAid: "Total Aid (EGP)",
            totalAidValue: "1.6M+",
            beneficiaries: "Beneficiaries",
            beneficiariesValue: "874",
            prescriptions: "Free Prescriptions",
            medicalValue: "1,396"
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
          }
        }
      },
      de: {
        translation: {
          title: "Abad Al-Rahman Stiftung",
          subtitle: "Nachhaltige humanitäre Wirkung.. Aufbau der Zukunft",
          nav: { home: "Startseite", impact: "Einfluss", about: "Über uns", contact: "Kontakt", open: "Menü öffnen", close: "Menü schließen" },
          hero: { 
            title: "Wir verändern das Leben der Menschen", 
            description: "Eingetragene NGO Nr. 1784 von 2007, die sich für die Stärkung der Gemeinschaft durch medizinische, Ernährungs- und soziale Unterstützung einsetzt.",
            supportBtn: "Jetzt unterstützen"
          },
          metrics: {
            ramadanMeals: "Ramadan-Mahlzeiten",
            ramadanValue: "26.525",
            weeklyMeals: "Wöchentliche Mahlzeiten",
            weeklyValue: "3.250",
            foodBoxes: "Lebensmittelboxen",
            boxesValue: "300",
            totalAid: "Gesamthilfe (EGP)",
            totalAidValue: "1,6 Mio.+",
            beneficiaries: "Begünstigte",
            beneficiariesValue: "874",
            prescriptions: "Kostenlose Rezepte",
            medicalValue: "1.396"
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
            title: "Über uns",
            mission: "Unsere Mission",
            missionText: "Wir streben danach, den bedürftigsten Gruppen umfassende Unterstützung durch nachhaltige Ernährungs-, medizinische und soziale Programme zu bieten.",
            history: "Unsere Geschichte",
            historyText: "Die Abad Al-Rahman Stiftung wurde 2007 als offizielle Einheit unter der Nr. 1784 gegründet und dient seitdem der Gemeinschaft mit Aufrichtigkeit und Transparenz.",
            altEvent: "Stiftungsveranstaltung"
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
          }
        }
      },
      fr: {
        translation: {
          title: "Fondation Abad Al-Rahman",
          subtitle: "Impact humanitaire durable.. Construire l'avenir",
          nav: { home: "Accueil", impact: "Impact", about: "À propos", contact: "Contact", open: "Ouvrir le menu", close: "Fermer le menu" },
          hero: { 
            title: "Faire une différence dans la vie des gens", 
            description: "ONG enregistrée n° 1784 de 2007, travaillant à l'autonomisation de la communauté par un soutien médical, alimentaire et social.",
            supportBtn: "Soutenez-nous maintenant"
          },
          metrics: {
            ramadanMeals: "Repas du Ramadan",
            ramadanValue: "26 525",
            weeklyMeals: "Repas hebdomadaires",
            weeklyValue: "3 250",
            foodBoxes: "Boîtes de nourriture",
            boxesValue: "300",
            totalAid: "Aide totale (EGP)",
            totalAidValue: "1,6M+",
            beneficiaries: "Bénéficiaires",
            beneficiariesValue: "874",
            prescriptions: "Prescriptions gratuites",
            medicalValue: "1 396"
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
            title: "À propos de nous",
            mission: "Notre mission",
            missionText: "Nous nous efforçons de fournir un soutien complet aux groupes les plus démunis grâce à des programmes alimentaires, médicaux et sociaux durables.",
            history: "Notre histoire",
            historyText: "La Fondation Abad Al-Rahman a été créée en 2007 en tant qu'entité officielle enregistrée sous le n° 1784, et depuis lors, nous servons la communauté avec sincérité et transparence.",
            altEvent: "Événement de la fondation"
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
          }
        }
      },
      es: {
        translation: {
          title: "Fundación Abad Al-Rahman",
          subtitle: "Impacto humanitario duradero.. Construyendo el futuro",
          nav: { home: "Inicio", impact: "Impacto", about: "Nosotros", contact: "Contacto", open: "Abrir menú", close: "Cerrar menú" },
          hero: { 
            title: "Marcando la diferencia en la vida de las personas", 
            description: "ONG registrada nº 1784 de 2007, que trabaja para empoderar a la comunidad mediante apoyo médico, alimentario y social.",
            supportBtn: "Apóyanos ahora"
          },
          metrics: {
            ramadanMeals: "Comidas de Ramadán",
            ramadanValue: "26.525",
            weeklyMeals: "Comidas semanales",
            weeklyValue: "3.250",
            foodBoxes: "Cajas de comida",
            boxesValue: "300",
            totalAid: "Ayuda total (EGP)",
            totalAidValue: "1.6M+",
            beneficiaries: "Beneficiarios",
            beneficiariesValue: "874",
            prescriptions: "Recetas gratuitas",
            medicalValue: "1.396"
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
            title: "Sobre nosotros",
            mission: "Nuestra misión",
            missionText: "Nos esforzamos por brindar un apoyo integral a los grupos más necesitados a través de programas alimentarios, médicos y sociales sostenibles.",
            history: "Nuestra historia",
            historyText: "La Fundación Abad Al-Rahman se estableció en 2007 como una entidad oficial registrada bajo el No. 1784, y desde entonces hemos estado sirviendo a la comunidad con sinceridad y transparencia.",
            altEvent: "Evento de la fundación"
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
          }
        }
      },
      id: {
        translation: {
          title: "Yayasan Abad Al-Rahman",
          subtitle: "Dampak Kemanusiaan Berkelanjutan.. Membangun Masa Depan",
          nav: { home: "Beranda", impact: "Dampak", about: "Tentang Kami", contact: "Kontak", open: "Buka Menu", close: "Tutup Menu" },
          hero: { 
            title: "Membuat Perbedaan dalam Hidup Orang Lain", 
            description: "LSM Terdaftar No. 1784 tahun 2007, bekerja untuk memberdayakan masyarakat melalui dukungan medis, pangan, dan sosial.",
            supportBtn: "Dukung Kami Sekarang"
          },
          metrics: {
            ramadanMeals: "Makanan Ramadhan",
            ramadanValue: "26.525",
            weeklyMeals: "Makanan Mingguan",
            weeklyValue: "3.250",
            foodBoxes: "Kotak Makanan",
            boxesValue: "300",
            totalAid: "Total Bantuan (EGP)",
            totalAidValue: "1.6jt+",
            beneficiaries: "Penerima Manfaat",
            beneficiariesValue: "874",
            prescriptions: "Resep Gratis",
            medicalValue: "1.396"
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
            title: "Tentang Kami",
            mission: "Misi Kami",
            missionText: "Kami berupaya memberikan dukungan komprehensif kepada kelompok yang paling membutuhkan melalui program pangan, medis, dan sosial yang berkelanjutan.",
            history: "Sejarah Kami",
            historyText: "Yayasan Abad Al-Rahman didirikan pada tahun 2007 sebagai entitas resmi yang terdaftar dengan No. 1784, dan sejak saat itu kami telah melayani masyarakat dengan tulus dan transparan.",
            altEvent: "Acara Yayasan"
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
          }
        }
      }
    }
  });

export default i18n;
