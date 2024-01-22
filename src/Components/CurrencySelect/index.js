import Select from "react-select";
import { useTranslation } from "react-i18next";
import styles from "./CurrencySelect.module.css"
import swapIcon from "./swap.svg"

export default function CurrencySelect({ labelSelect, currencyOptions, selectedOption, setSelectedOption, swapCurrencyFunction, columnIndex }) {
    const { t } = useTranslation();

    return (
        <form>
            <label className={styles.labelSelect}>
                {labelSelect}
            </label>

            <div style={{display: "flex"}}>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={currencyOptions}
                    placeholder={t("select") + "..."}
                    className={styles.currencyCombo}
                    value={selectedOption}
                />

                <SwapIcon colmnIndex={columnIndex} swapCurrencyFunction={swapCurrencyFunction} />
            </div>
        </form>
    )
}

function SwapIcon({ colmnIndex, swapCurrencyFunction }) {
    return colmnIndex === 1 
        ? (<img src={swapIcon} alt="swap icon" className={styles.icnSwapCurrency} onClick={swapCurrencyFunction} />) 
        : <></>;
}