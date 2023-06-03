import { useContext } from "react";
import { AppContext } from "../context/context.js";

function Step3({ onSubmit, handleClickBack }) {
  const { dataType, monthAddOns, setMonthAddOns, yearAddOns, setYearAddOns } =
    useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  function handleCardClick(item) {
    if (dataType === "year") {
      setYearAddOns((add) =>
        add.map((el) =>
          el.id === item.id ? { ...el, checked: !el.checked } : el
        )
      );
    } else {
      setMonthAddOns((add) =>
        add.map((el) =>
          el.id === item.id ? { ...el, checked: !el.checked } : el
        )
      );
    }
  }

  return (
    <div className="info">
      <h2 className="title">Pick add-ons</h2>
      <p className="subtitle">Add-ons help enhance your gaming experience.</p>
      <form id="form" onSubmit={handleSubmit} className="card-addons">
        {dataType === "year"
          ? yearAddOns.map((item) => {
              return (
                <div
                  className="card-addons__container"
                  key={item.id}
                  style={{
                    backgroundColor: item.checked ? "hsl(231, 100%, 99%)" : "",
                    border: `2px solid ${
                      item.checked
                        ? "hsl(243, 100%, 62%)"
                        : "hsl(231, 11%, 63%)"
                    }`,
                  }}
                >
                  <label className="card-addons__item">
                    <input
                      checked={item.checked}
                      type="checkbox"
                      onChange={() => handleCardClick(item)}
                    />
                    <div className="card-addons__item__text-block">
                      <p className="card-addons__item__title">{item.title}</p>
                      <p className="card-addons__item__description">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="card-addons__item__price">
                      +${item.price}/yr
                    </p>
                  </label>
                </div>
              );
            })
          : monthAddOns.map((item) => {
              return (
                <div
                  className="card-addons__container"
                  key={item.id}
                  style={{
                    backgroundColor: item.checked ? "hsl(231, 100%, 99%)" : "",
                    border: `2px solid ${
                      item.checked
                        ? "hsl(243, 100%, 62%)"
                        : "hsl(231, 11%, 63%)"
                    }`,
                  }}
                >
                  <label
                    onChange={() => handleCardClick(item)}
                    className="card-addons__item"
                  >
                    <input type="checkbox" checked={item.checked} />
                    <div className="card-addons__item__text-block">
                      <p className="card-addons__item__title">{item.title}</p>
                      <p className="card-addons__item__description">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="card-addons__item__price">
                      +${item.price}/mo
                    </p>
                  </label>
                </div>
              );
            })}
      </form>
      <div className="btn">
        <button onClick={handleClickBack} className="btn-back" form="form">
          Go Back
        </button>
        <button type="submit" className="btn-forward" form="form">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Step3;
