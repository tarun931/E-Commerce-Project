import Icon from "@mdi/react";
import { mdiCurrencyInr } from "@mdi/js";
const currenyCodeIconMap = {
  INR: mdiCurrencyInr
};

const currencyCodeLocaleMap = {
  INR: "en-IN"
};

function CurrencyFormator({ value, currency }) {
  return (
    <div>
      <Icon size={1} path={currenyCodeIconMap[currency]} />
      <span>{value.toLocaleString(currencyCodeLocaleMap[currency])} </span>
    </div>
  );
}

export default CurrencyFormator;
