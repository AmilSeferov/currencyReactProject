import React, { useState } from "react";
import "./currencyConverter.css";
import { useSelector } from "react-redux";
function CurrencyConverter() {
  const [[money1, money2], setMoney] = useState([0, 0]);
  const [[currency1, currency2], setCurrency] = useState(["USD", "AZN"]);
  const data = useSelector(
    (state) => state?.currency.data.data?.conversion_rates
  );
  const calcs = (data1, data2, amount) => {
    if (data1.length === 3 && data2.length === 3) {
      // return [amount,data[data1],data[data2]]
      return (Number(amount) / Number(data[data1])) * Number(data[data2]);
    }
  };
  return (
    <div className="ccMain">
      <h1>Currency Converter</h1>
      <div className="ccmInputs">
        <div className="ccmiselect">
          <input
            onChange={(e) => {
              setMoney([
                e.target.value,
                Math.round(
                  calcs(currency1, currency2, e.target.value) * 10000
                ) / 10000,
              ]);
            }}
            value={money1}
            className="ccmInput"
            type="number"
          />
          <input
            onChange={(e) => {
              setCurrency([e.target.value.toUpperCase(), currency2]);
              if (e.target.value.trim().length === 3) {
                setMoney([
                  money1,
                  Math.round(
                    calcs(
                      e.target.value.toUpperCase(),
                      currency2,
                      Number(money1)
                    ) * 10000
                  ) / 10000,
                ]);
              }
            }}
            value={currency1}
            className="ccmSellect"
            type="text"
          />
        </div>
        <div className="ccmiselect">
          <input
            onChange={(e) => {
              setMoney(
                [
                  Math.round(
                    calcs(currency2, currency1, e.target.value) * 10000
                  ) / 10000,
                ],
                e.target.value
              );
            }}
            value={money2}
            className="ccmInput"
            type="number"
          />
          <input
            onChange={(e) => {
              setCurrency([currency1, e.target.value.toUpperCase()]);
              if (e.target.value.trim().length === 3) {
                setMoney([
                  money1,
                  Math.round(
                    calcs(
                      currency1,
                      e.target.value.toUpperCase(),
                      Number(money1)
                    ) * 10000
                  ) / 10000,
                ]);
              }
            }}
            value={currency2}
            className="ccmSellect"
            type="text"
          />
        </div>
      </div>
      <button
        onClick={() => {
          setCurrency([currency2, currency1]);
          if (money1 === 0) {
            setMoney([0, 0]);
          } else {
            setMoney([
              money1,
              Math.round(calcs(currency2, currency1, Number(money1)) * 10000) /
                10000,
            ]);
          }
        }}
      >
        Convert
      </button>
    </div>
  );
}

export default CurrencyConverter;
