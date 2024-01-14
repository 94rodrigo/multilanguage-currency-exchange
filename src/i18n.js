import i18n from "i18next";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

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
                }
            },
            de: {
                translation: {
                    selectLanguage: 'Sprache wählen',
                    currencyConverter: 'Währungsumrechner',
                    chooseCurrency: 'Währung auswählen',
                    convertTo: 'Konvertieren zu',
                    select: 'Auswählen',
                }
            },
            es: {
                translation: {
                    selectLanguage: 'Seleccionar idioma',
                    currencyConverter: 'Conversor de divisas',
                    chooseCurrency: 'Escoja una divisa',
                    convertTo: 'Convertir a',
                    select: 'Seleccionar',
                }
            },
            fr: {
                translation: {
                    selectLanguage: 'Sélectionner la langue',
                    currencyConverter: 'Convertisseur de devises',
                    chooseCurrency: 'Choisissez une devise',
                    convertTo: 'Convertir en',
                    select: 'Sélectionner',
                }
            },
            pt: {
                translation: {
                    selectLanguage: 'Selecionar idioma',
                    currencyConverter: 'Conversor de moedas',
                    chooseCurrency: 'Escolha uma moeda',
                    convertTo: 'Converter para',
                    select: 'Selecionar',
                }
            },
        },
    });

export default i18n;