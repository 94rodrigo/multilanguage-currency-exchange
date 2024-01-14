import { Col } from "react-bootstrap";
import currencyNames from "../../Countries/currency-names.json";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CurrencySelect from "../CurrencySelect";
import countryCurrency from "../../Countries/country-currency.json";
import CountriesFlagsList from "../CountriesFlagsList";

const currencyOptions = Object.entries(currencyNames).map(c => (
    { value: c[0], label: c[1].name }
));

export default function CurrencyColumn({ columnIndex, labelSelect }) {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState();
    
    return (
        <Col id={`currency-column-index-${columnIndex}`}>
            <CurrencySelect 
                labelSelect={t(labelSelect)} 
                currencyOptions={currencyOptions} 
                selectedOption={selectedOption} 
                setSelectedOption={setSelectedOption}
            />

            <CountriesFlagsList countriesObjects={getCountriesUseSelectedCurrency(selectedOption)} />
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