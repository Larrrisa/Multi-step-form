function Aside({ step }) {
  return (
    <div className="aside">
      <div className="aside__step">
        <p className={`aside__step__number${step === 1 ? "-active" : ""}`}>1</p>
        <p className="aside__step__title">
          Step 1<br /> <span>Your Info</span>
        </p>
      </div>
      <div className="aside__step">
        <p className={`aside__step__number${step === 2 ? "-active" : ""}`}>2</p>
        <p className="aside__step__title">
          Step 2<br /> <span>Select Plan</span>
        </p>
      </div>

      <div className="aside__step">
        <p className={`aside__step__number${step === 3 ? "-active" : ""}`}>3</p>
        <p className="aside__step__title">
          Step 3<br /> <span>Add-ONS</span>
        </p>
      </div>
      <div className="aside__step">
        <p className={`aside__step__number${step === 4 ? "-active" : ""}`}>4</p>
        <p className="aside__step__title">
          Step 4<br /> <span>Summary</span>
        </p>
      </div>
    </div>
  );
}

export default Aside;
