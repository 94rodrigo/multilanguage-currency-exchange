import { Container, Row } from "react-bootstrap";
import CurrencyColumn from "../../Components/CurrencyColumn";
import { useState } from "react";

export default function Home() {
    const [selectedCurrency1, setSelectedCurrency1] = useState();
    const [selectedCurrency2, setSelectedCurrency2] = useState();
    const [typedValue, setTypedValue] = useState('');

    const swapCurrency = () => {
        let selectedCurrency1Aux = selectedCurrency1;
        let selectedCurrency2Aux = selectedCurrency2;
        setSelectedCurrency1(selectedCurrency2Aux);
        setSelectedCurrency2(selectedCurrency1Aux);
    }

    return (
        <Container>
            <Row>
                <CurrencyColumn columnIndex={1} labelSelect={"chooseCurrency"} selectedCurrency={selectedCurrency1} setSelectedCurrency={setSelectedCurrency1} typedValue={typedValue} setTypedValue={setTypedValue} swapCurrencyFunction={swapCurrency} />
                <CurrencyColumn columnIndex={2} labelSelect={"convertTo"} selectedCurrency={selectedCurrency2} setSelectedCurrency={setSelectedCurrency2} otherSelectedCurrency={selectedCurrency1} typedValue={typedValue} />
            </Row>
        </Container>
    )
}
