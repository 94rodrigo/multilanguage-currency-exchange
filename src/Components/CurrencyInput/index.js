import { Form, InputGroup, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import currencyDetailsJson from "../../Json/currency-details.json"
import { useEffect, useState } from "react";
import styles from './CurrencyInput.module.css';

export default function CurrencyInput({ columnNumber, selectedOption1, selectedOption2, typedValue, setTypedValue }) {
    const { t } = useTranslation();
    const [conversionValue, setConversionValue] = useState(null);

    if (columnNumber === 1 && selectedOption1 !== undefined) {
        return (
            <InputGroup size="lg">
                <InputGroup.Text id="input-group-1">{`${t("value")} (${getCurrencySymbol(selectedOption1)})`}</InputGroup.Text>

                <Form.Control
                    aria-label="Large"
                    aria-describedby="form-control-1"
                    value={typedValue}
                    onChange={e => setTypedValue(getValueFormat(typedValue, e.target.value))}
                />
            </InputGroup>
        )
    }

    if (selectedOption1 && selectedOption2 && columnNumber === 2) {
        const FetchConvertCurrency = () => {
            useEffect(() => {
                const fetchData = async () => {
                    try {
                        const result = await convertCurrency(selectedOption2, selectedOption1, columnNumber);
                        setConversionValue(result);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                };

                fetchData();
            }, []);
            
            if (conversionValue) {
                return (<h1 className={styles.currencyConvertedValue}>{getCurrencySymbol(selectedOption1)} {conversionValue * typedValue}</h1>);
            } else {
                return (<Spinner animation="border" />);
            };
        };

        return (<FetchConvertCurrency />);
    }
}

function getValueFormat(oldValue, newValue) {
    return /^(?:\d+(?:[.,]\d*)?|[.,]\d+)?$/.test(newValue) ? newValue.replace(",", ".") : oldValue;
}

function getCurrencySymbol(selectedCurrencyJson) {
    let isSymbolFound = Object.entries(currencyDetailsJson).find(c => c[0] === selectedCurrencyJson.value) !== undefined;
    return isSymbolFound
        ? Object.entries(currencyDetailsJson).find(c => c[0] === selectedCurrencyJson.value)[1].symbol
        : selectedCurrencyJson.value;
}

async function convertCurrency(selectedCurrency1, selectedCurrency2, columnIndex) {
    let currencyValue = 0;
    let selectedCurrency1LowerCase = selectedCurrency1.value.toLowerCase();
    let selectedCurrency2LowerCase = selectedCurrency2.value.toLowerCase();
    if (selectedCurrency1 && selectedCurrency2 && columnIndex === 2) {
        await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${selectedCurrency1.value.toLowerCase()}.json`)
            .then(resp => resp.json())
            .then(json => json[selectedCurrency1LowerCase])
            .then(json => json[selectedCurrency2LowerCase])
            .then(val => currencyValue = val)
            .catch(() => currencyValue = 0);
    }
    return currencyValue;
}