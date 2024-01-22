import Flag from "react-world-flags";
import countriesNames from "../../Json/country-names.json";
import styles from './CountriesFlagsList.module.css';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function CountriesFlagsList({ countriesObjects }) {
    const { t } = useTranslation();
    if (countriesObjects) {
        return (
            <>
                <h1 className={styles.lblUsedIn}>{t("usedIn")}:</h1>
                <div className={styles.flagsDiv}>
                    {countriesObjects && countriesObjects
                        .map(c => <OverlayTrigger overlay={<Tooltip>{c}</Tooltip>} key={c}>
                            <a href={getLinkWithCountryName(c)} target="_blank" rel="noopener noreferrer" className={styles.imgLink} >
                                <Flag code={c}
                                    alt={c}
                                    className={styles.flagSelectedCurrency}
                                />
                            </a>
                        </OverlayTrigger>
                        )
                    }
                </div>
            </>
        )
    }
}

function getLinkWithCountryName(countryCode) {
    let name = Object.entries(countriesNames).filter(c => c[0] === countryCode).map(c => c[1])[0];
    return `https://www.google.com/search?q=${name.replaceAll(" ", "+")}`;
}
