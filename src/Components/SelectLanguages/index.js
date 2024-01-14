import countries from "../../Countries/contries.json";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from './SelectLanguages.module.css';

export default function SelectLanguages() {
    //const countriesOptions = countries.map(c => getSelectPbject(c));
    console.log(countries);
    //{countries.map(c => <DropdownItem href="#" id={c.country} key={c.country}>{c.language}</DropdownItem>)}
    //<img src={c.flag} alt={c.name} />
    return (
        <DropdownButton id="dropdown-languages" title="Select language">
            {countries.map(c => <Dropdown.Item href="#" id={c.country}><img src={c.flag} alt={c.name} className={styles.icnFlag} /> {c.language}</Dropdown.Item>)}
        </DropdownButton>
    );
}

//function getSelectPbject(country) {
//    return {
//        value: country.country,
//        label: country.language
//    }
//}