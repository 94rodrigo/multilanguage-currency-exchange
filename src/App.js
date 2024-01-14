import './App.css';
import CollapsibleNavbar from './Components/CollapsibleNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import CurrencyColumn from './Components/CurrencyColumn';

function App() {
  let currencyJson;
 
  if (isEmptyCurrencyJson(currencyJson)) {
    //fetch('http://data.fixer.io/api/latest?access_key=10bbaf5b9f80e347768388e744cef3c4')
    //  .then(resp => resp.json())
    //  .then(json => currencyJson = json.rates)
    //  .then(() => console.log(currencyJson));
  }

  return (
    <>
      <CollapsibleNavbar />
      <Container>
        <Row>
          <CurrencyColumn columnIndex={1} labelSelect={"chooseCurrency"} />
          <CurrencyColumn columnIndex={2} labelSelect={"convertTo"} />
        </Row>
      </Container>
    </>
  );
}

function isEmptyCurrencyJson(currencyJson) {
  return currencyJson === null || currencyJson === "" || currencyJson === undefined;
}

export default App;
