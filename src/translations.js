import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      intro: {
        title: "Fair kvartira calculator",
        description:
          "As most of us experienced, we get different salaries based on what we do or where we work - this calculator tries to justify that gap and encourages you to pay the rent based on the same percentage that is drawn from all of your salaries that you've typed down.",
      },
      language: {
        title: "Language",
      },
      form: {
        salary: {
          title: "Salary {{number}}",
        },
        rent: {
          title: "Rent to pay",
        },
        summary: {
          title: "Summary",
          description_exact:
            "You're all be paying {{salaryPercent}}% of your salary on rent",
          description_around:
            "It'll be around {{salaryPercent}}% of your salary spent on rent",
          salary: {
            title: "Salary {{number}} to pay: {{payment}}",
          },
          evaluation_note: {
            title: {
              error: "Looks like you overcalculated stuff, have you smoked? 🌿",
              half: "Jackpot! 🎰 You waste 50% of your salary on rent.",
              too_much: "Do you really want to rent this place? 🤔",
              cheap:
                "Do you want to tell us your secrets about the place you rent? Cause it seems you're paying almost none for it 🤔",
            },
          },
        },
        actions: {
          add: "Add another person",
        },
      },
      footer: {
        copyright: {
          title: "© No copyrights, just equal ones",
        },
      },
    },
  },
  lt: {
    translation: {
      intro: {
        title: "Sąžiningas xatos kalkuliatorius",
        description:
          "Jei jau pavyko čia užklįsti, reiškias žinom bendrą tiesą - gauname piniginį atlygį priklausomai nuo kur ir ką dirbame. Šis įrankis stengiasi surasti kompromisą tarp žmonių, su kuriais daliniesi nuoma, ir padrąsinti tave mokėti vienodą procentą atskaičiavus nuo algos, o ne vienodą nuomos mokestį.",
      },
      language: {
        title: "Kalba",
      },
      form: {
        salary: {
          title: "Alga {{number}}",
        },
        rent: {
          title: "Nuomos mokėstis",
        },
        summary: {
          title: "Išvada",
          description_exact:
            "Tu moki {{salaryPercent}}% savo algos nuomos mokesčiui",
          description_around:
            "Apie {{salaryPercent}}% savo algos atiduotum nuomos mokesčiui",
          salary: {
            title: "Algai {{number}} mokėti: {{payment}}",
          },
          evaluation_note: {
            title: {
              error: "Kažką jau čia pridirbai... gal parūkęs būsi? 🌿",
              half: "Jackpot! 🎰 50% tavo algos galėjo atsidurti sąnkaupose...",
              too_much:
                "Kokių lažybų prireikė, kad nuspręstum nuomotis dabartinę vietą? 🤔",
              cheap: "Gal išduotum paslapčių, visai gerai gyveni! 🤔",
            },
          },
        },
        actions: {
          add: "Pridėti papildomą žmogų",
        },
      },
      footer: {
        copyright: {
          title: "© Jokių autorinių teisių, tik lygios",
        },
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: "en",
  });

export default i18n;
