import { useContext } from "react";
import { AppContext } from "../context/context.js";

function Step4({ onSubmit, handleClickBack }) {
  const {
    name,
    email,
    phone,
    dataType,
    monthAddOns,
    yearAddOns,
    selectedItem,
    setStep,
  } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan: dataType,
        name: name,
        email: email,
        phone: phone,
        selectedPlan: selectedItem,
        monthAddOns: monthAddOns.filter((item) => item.checked === true),
        yearAddOns: yearAddOns.filter((item) => item.checked === true),
        totalPrice: totalPrice(selectedItem, monthAddOns, yearAddOns, dataType),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function totalPrice(selectedItem, monthAddOns, yearAddOns, dataType) {
    let total = selectedItem.price;
    if (dataType === "month") {
      monthAddOns.forEach((item) => {
        if (item.checked) {
          total += item.price;
        }
      });
    } else {
      yearAddOns.forEach((item) => {
        if (item.checked) {
          total += item.price;
        }
      });
    }
    return total;
  }

  return (
    <div className="info">
      <h2 className="title">Finishing up</h2>
      <p className="subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <form onSubmit={handleSubmit} id="form">
        <div className="final-card">
          <div className="final-plan">
            <p>
              {selectedItem.title} ({dataType}ly)
            </p>
            <p>
              ${selectedItem.price}/{dataType === "month" ? "mo" : "yr"}
            </p>
          </div>
          <p className="change-plan" onClick={() => setStep(2)}>
            Change
          </p>
          {dataType === "month"
            ? monthAddOns.map((item) => {
                if (item.checked === true) {
                  return (
                    <div className="addons-final" key={item.id}>
                      <p>{item.title} </p>
                      <p className="addons-final__price">+${item.price}/mo</p>
                    </div>
                  );
                } else {
                  return null;
                }
              })
            : yearAddOns.map((item) => {
                if (item.checked === true) {
                  return (
                    <div className="addons-final" key={item.id}>
                      <p>{item.title} </p>
                      <p className="addons-final__price">+${item.price}/yr</p>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
        </div>
        <div className="total-final">
          <p>Total (per {dataType})</p>
          <p className="total-final__price">
            ${totalPrice(selectedItem, monthAddOns, yearAddOns, dataType)}/
            {dataType === "month" ? "mo" : "yr"}
          </p>
        </div>
      </form>
      <div className="btn">
        <button onClick={handleClickBack} className="btn-back" form="form">
          Go Back
        </button>
        <button type="submit" className="btn-forward_confirm" form="form">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Step4;
