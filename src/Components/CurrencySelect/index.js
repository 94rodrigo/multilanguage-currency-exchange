import Select from "react-select";
import { useTranslation } from "react-i18next";

export default function CurrencySelect({ labelSelect, currencyOptions, selectedOption, setSelectedOption }) {
    const { t } = useTranslation();

    return (
        <form>
            <label>
                {labelSelect}
            </label>

            <Select 
                defaultValue={selectedOption}
                onChange={setSelectedOption} 
                options={currencyOptions} 
                placeholder={t("select") + "..."}
            />
        </form>
    )
}