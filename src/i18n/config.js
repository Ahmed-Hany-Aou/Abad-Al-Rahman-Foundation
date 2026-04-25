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
            contact: "اتصل بنا"
          },
          hero: {
            title: "نحن نصنع الفرق في حياة الناس",
            description: "مؤسسة مشهرة برقم 1784 لسنة 2007، تعمل على تمكين المجتمع من خلال الدعم الطبي والغذائي والاجتماعي."
          },
          metrics: {
            ramadanMeals: "وجبة رمضان",
            weeklyMeals: "وجبة أسبوعية",
            foodBoxes: "كرتونة مواد غذائية",
            totalAid: "إجمالي المساعدات (جنية)",
            beneficiaries: "حالة مستفيدة",
            prescriptions: "روشتة مجانية"
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
            contact: "Contact"
          },
          hero: {
            title: "Making a Difference in People's Lives",
            description: "Registered NGO No. 1784 of 2007, working to empower the community through medical, food, and social support."
          },
          metrics: {
            ramadanMeals: "Ramadan Meals",
            weeklyMeals: "Weekly Meals",
            foodBoxes: "Food Boxes",
            totalAid: "Total Aid (EGP)",
            beneficiaries: "Beneficiaries",
            prescriptions: "Free Prescriptions"
          }
        }
      },
      de: {
        translation: {
          title: "Abad Al-Rahman Stiftung",
          nav: { home: "Startseite", impact: "Einfluss", about: "Über uns", contact: "Kontakt" },
          hero: { title: "Wir verändern das Leben der Menschen", description: "Eingetragene NGO Nr. 1784 von 2007." },
          metrics: {
            ramadanMeals: "Ramadan-Mahlzeiten",
            weeklyMeals: "Wöchentliche Mahlzeiten",
            foodBoxes: "Lebensmittelboxen",
            totalAid: "Gesamthilfe (EGP)",
            beneficiaries: "Begünstigte",
            prescriptions: "Kostenlose Rezepte"
          }
        }
      },
      fr: {
        translation: {
          title: "Fondation Abad Al-Rahman",
          nav: { home: "Accueil", impact: "Impact", about: "À propos", contact: "Contact" },
          hero: { title: "Faire une différence dans la vie des gens", description: "ONG enregistrée n° 1784 de 2007." },
          metrics: {
            ramadanMeals: "Repas du Ramadan",
            weeklyMeals: "Repas hebdomadaires",
            foodBoxes: "Boîtes de nourriture",
            totalAid: "Aide totale (EGP)",
            beneficiaries: "Bénéficiaires",
            prescriptions: "Prescriptions gratuites"
          }
        }
      },
      es: {
        translation: {
          title: "Fundación Abad Al-Rahman",
          nav: { home: "Inicio", impact: "Impacto", about: "Nosotros", contact: "Contacto" },
          hero: { title: "Marcando la diferencia en la vida de las personas", description: "ONG registrada nº 1784 de 2007." },
          metrics: {
            ramadanMeals: "Comidas de Ramadán",
            weeklyMeals: "Comidas semanales",
            foodBoxes: "Cajas de comida",
            totalAid: "Ayuda total (EGP)",
            beneficiaries: "Beneficiarios",
            prescriptions: "Recetas gratuitas"
          }
        }
      },
      id: {
        translation: {
          title: "Yayasan Abad Al-Rahman",
          nav: { home: "Beranda", impact: "Dampak", about: "Tentang Kami", contact: "Kontak" },
          hero: { title: "Membuat Perbedaan dalam Hidup Orang Lain", description: "LSM Terdaftar No. 1784 tahun 2007." },
          metrics: {
            ramadanMeals: "Makanan Ramadhan",
            weeklyMeals: "Makanan Mingguan",
            foodBoxes: "Kotak Makanan",
            totalAid: "Total Bantuan (EGP)",
            beneficiaries: "Penerima Manfaat",
            prescriptions: "Resep Gratis"
          }
        }
      }
    }
  });

export default i18n;
