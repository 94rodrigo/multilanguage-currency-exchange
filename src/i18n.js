import i18n from "i18next";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import textsAbout from "./pages/About/texts"

i18n
    .use(i18nextHttpBackend)
    .use(initReactI18next).init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    selectLanguage: 'Select language',
                    currencyConverter: 'Currency converter',
                    chooseCurrency: 'Choose a currency',
                    convertTo: 'Convert to',
                    select: 'Select',
                    usedIn: 'Used in',
                    value: 'Value',
                    homePage: 'Home',
                    about: 'About',
                    developedBy: 'Developed by',
                    textAboutPage: textsAbout.en.paragraph,
                }
            },
            de: {
                translation: {
                    selectLanguage: 'Sprache wählen',
                    currencyConverter: 'Währungsumrechner',
                    chooseCurrency: 'Währung auswählen',
                    convertTo: 'Konvertieren zu',
                    select: 'Auswählen',
                    usedIn: 'Verwendet in',
                    value: 'Wert',
                    homePage: 'Startseite',
                    about: 'Über',
                    developedBy: 'Entwickelt von',
                    textAboutPage: textsAbout.de.paragraph,
                }
            },
            es: {
                translation: {
                    selectLanguage: 'Elegir idioma',
                    currencyConverter: 'Conversor de divisas',
                    chooseCurrency: 'Escoja una divisa',
                    convertTo: 'Convertir a',
                    select: 'Seleccionar',
                    usedIn: 'Usado en',
                    value: 'Valor',
                    homePage: 'Inicio',
                    about: 'Acerca',
                    developedBy: 'Desarrollado por',
                    textAboutPage: textsAbout.es.paragraph,
                }
            },
            fr: {
                translation: {
                    selectLanguage: 'Choisir la langue',
                    currencyConverter: 'Convertisseur de devises',
                    chooseCurrency: 'Choisissez une devise',
                    convertTo: 'Convertir en',
                    select: 'Sélectionner',
                    usedIn: 'Utilisé au/en',
                    value: 'Valeur',
                    homePage: 'Accueil',
                    about: 'À propos',
                    developedBy: 'Développé par',
                    textAboutPage: textsAbout.fr.paragraph,
                }
            },
            pt: {
                translation: {
                    selectLanguage: 'Selecionar idioma',
                    currencyConverter: 'Conversor de moedas',
                    chooseCurrency: 'Escolha uma moeda',
                    convertTo: 'Converter para',
                    select: 'Selecionar',
                    usedIn: 'Utilizado em',
                    value: 'Valor',
                    homePage: 'Início',
                    about: 'Sobre',
                    developedBy: 'Desenvolvido por',
                    textAboutPage: textsAbout.pt.paragraph,
                }
            },
        },
    });

export default i18n;