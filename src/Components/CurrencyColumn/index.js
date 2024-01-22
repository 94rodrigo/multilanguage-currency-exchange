import { Col } from "react-bootstrap";
import currencyNames from "../../Json/currency-names.json";
import { useTranslation } from "react-i18next";
import CurrencySelect from "../CurrencySelect";
import countryCurrency from "../../Json/country-currency.json";
import CountriesFlagsList from "../CountriesFlagsList";
import CurrencyInput from "../CurrencyInput";
import styles from './CurrencyColumn.module.css';
import currencyDetailsJson from '../../Json/currency-details.json';

const currencyOptions = Object.entries(currencyNames).map(c => (
    { value: c[0], label: c[1].name + " (" + getCurrencySymbol(c) + ")" }
));

export default function CurrencyColumn({ columnIndex, labelSelect, selectedCurrency, setSelectedCurrency, otherSelectedCurrency, typedValue, setTypedValue, swapCurrencyFunction }) {
    const { t } = useTranslation();

    return (
        <Col id={`currency-column-index-${columnIndex}`} className={columnIndex === 1 ? styles.columnIndex1 : styles.columnIndex2}>
            <CurrencySelect
                labelSelect={t(labelSelect)}
                currencyOptions={currencyOptions}
                selectedOption={selectedCurrency}
                setSelectedOption={setSelectedCurrency}
                swapCurrencyFunction={swapCurrencyFunction}
                columnIndex={columnIndex}
            />

            <CurrencyInput
                columnNumber={columnIndex}
                selectedOption1={selectedCurrency}
                selectedOption2={otherSelectedCurrency}
                typedValue={typedValue}
                setTypedValue={setTypedValue}
            />

            <CountriesFlagsList countriesObjects={getCountriesUseSelectedCurrency(selectedCurrency)} />
        </Col>
    );
}

function getCountriesUseSelectedCurrency(selectedOption) {
    if (selectedOption === undefined || selectedOption === null) {
        return null;
    }
    return Object.entries(countryCurrency)
        .filter(c => c[1] === selectedOption.value)
        .map(c => c[0]);
}

function getCurrencySymbol(selectedCurrencyJson) {
    let isSymbolFound = Object.entries(currencyDetailsJson).map(c => c[0]).includes(selectedCurrencyJson[0]);
    return isSymbolFound
        ? Object.entries(currencyDetailsJson).find(c => c[0] === selectedCurrencyJson[0])[1].symbol
        : selectedCurrencyJson[0];
}