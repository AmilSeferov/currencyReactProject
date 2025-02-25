import React, { useEffect } from "react";
import "../currencyTable/currencyTable.css";
import CurrencyTableElement from "../curencyTableElement/currencyTableElement";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrency } from "../../../redux/currencySlice";
function CurrencyTable() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <>
      <div className="ctMain">
        {data.currency.data.data?.conversion_rates
          ? Object.entries(data.currency.data.data?.conversion_rates).map(
              (item, index) => <CurrencyTableElement key={index} data={item} />
            )
          : console.log("a")}
      </div>
    </>
  );
}

export default CurrencyTable;
