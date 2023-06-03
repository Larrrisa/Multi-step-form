import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/context.js";

function Step2({ onSubmit, handleClickBack }) {
  const { dataType, setDataType, setSelectedItem, monthPlan, yearPlan } =
    useContext(AppContext);

  const [selectIndex, setSelectIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  function handleCardClick(item, index) {
    setSelectedItem(item);
    setSelectIndex(index);
  }

  function handleSwitch() {
    setDataType(dataType === "year" ? "month" : "year");
  }

  return (
    <div className="info">
      <h2 className="title">Select your plan</h2>
      <p className="subtitle">
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit} id="form" className="plan">
        {dataType === "year"
          ? yearPlan.map((item, index) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => handleCardClick(item, index)}
                  style={{
                    backgroundColor:
                      selectIndex === index ? "hsl(231, 100%, 99%)" : "",
                    border: `2px solid ${
                      selectIndex === index
                        ? "hsl(243, 100%, 62%)"
                        : "hsl(231, 11%, 63%)"
                    }`,
                  }}
                >
                  <input type="radio" name="card" value={item.price} />
                  <label>
                    <div className="card__image__block">
                      <img className="card__image" src={item.img} alt="plan" />
                    </div>
                    <div className="card__text__info">
                      <p className="card__title">{item.title}</p>
                      <p className="card__price">${item.price}/yr</p>
                      <p className="card__bonus">{item.bonus}</p>
                    </div>
                  </label>
                </div>
              );
            })
          : monthPlan.map((item, index) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  style={{
                    backgroundColor:
                      selectIndex === index ? "hsl(231, 100%, 99%)" : "",
                    border: `2px solid ${
                      selectIndex === index
                        ? "hsl(243, 100%, 62%)"
                        : "hsl(231, 11%, 63%)"
                    }`,
                  }}
                >
                  <input type="radio" name="card" value={item.price} />
                  <label onClick={() => handleCardClick(item, index)}>
                    <div className="card__image__block">
                      <img className="card__image" src={item.img} alt="plan" />
                    </div>
                    <div className="card__text__info">
                      <p className="card__title">{item.title}</p>
                      <p className="card__price">${item.price}/m</p>
                      <p className="card__offer">{item.bonus}</p>
                    </div>
                  </label>
                </div>
              );
            })}
      </form>
      <div className="switch-plan">
        {dataType === "month" ? (
          <p className="switch-plan__month active">Monthly</p>
        ) : (
          <p className="switch-plan__month">Monthly</p>
        )}

        <label className="switch-plan__box" onChange={handleSwitch}>
          <input
            type="checkbox"
            checked={dataType === "year"}
            onChange={handleSwitch}
          />
          <span className="switch-plan__slider"></span>
        </label>
        {dataType === "year" ? (
          <p className="switch-plan__year active">Yearly</p>
        ) : (
          <p className="switch-plan__year">Yearly</p>
        )}
      </div>
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

export default Step2;
