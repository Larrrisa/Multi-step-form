import Aside from "./components/Aside";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import FinalStep from "./components/FinalStep";
import { useState } from "react";
import { AppContext } from "./context/context.js";

function App() {
  const monthPlan = [
    {
      id: Math.random(),
      img: "./icon-arcade.svg",
      title: "Arcade",
      price: 9,
    },
    {
      id: Math.random(),
      img: "./icon-advanced.svg",
      title: "Advanced",
      price: 12,
    },
    {
      id: Math.random(),
      img: "./icon-pro.svg",
      title: "Pro",
      price: 15,
    },
  ];

  const yearPlan = [
    {
      id: Math.random(),
      title: "Arcade",
      img: "./icon-arcade.svg",
      price: 90,
      bonus: "2 months free",
    },
    {
      id: Math.random(),
      title: "Advanced",
      img: "./icon-advanced.svg",
      price: 120,
      bonus: "2 months free",
    },
    {
      id: Math.random(),
      title: "Pro",
      img: "./icon-pro.svg",
      price: 150,
      bonus: "2 months free",
    },
  ];

  const [monthAddOns, setMonthAddOns] = useState([
    {
      id: Math.random(),
      title: "Online service",
      subtitle: "Access to multiplayer games",
      price: 1,
      checked: false,
    },
    {
      id: Math.random(),
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
      checked: false,
    },
    {
      id: Math.random(),
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: 2,
      checked: false,
    },
  ]);

  const [yearAddOns, setYearAddOns] = useState([
    {
      id: Math.random(),
      title: "Online servise",
      subtitle: "Access to multiplayer games",
      price: 10,
      checked: false,
    },
    {
      id: Math.random(),
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: 20,
      checked: false,
    },
    {
      id: Math.random(),
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: 20,
      checked: false,
    },
  ]);  
  
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState(monthPlan[0]);
  const [dataType, setDataType] = useState("month");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");


  function handleClickBack() {
    setStep(step - 1);
  }

  function handleState() {
    setStep(step + 1);
  }

  return (
    <AppContext.Provider
      value={{
        name,
        email,
        phone,
        setName,
        setEmail,
        setPhone,
        nameError,
        setNameError,
        emailError,
        setEmailError,
        phoneError,
        setPhoneError,
        dataType,
        setDataType,
        monthAddOns,
        setMonthAddOns,
        yearAddOns,
        setYearAddOns,
        monthPlan,
        yearPlan,
        selectedItem,
        setSelectedItem,
        setStep,
      }}
    >
      <div className="form">
        <Aside step={step} />

        <>
          {step === 1 && <Step1 onSubmit={handleState} />}
          {step === 2 && (
            <Step2 handleClickBack={handleClickBack} onSubmit={handleState} />
          )}
          {step === 3 && (
            <Step3 handleClickBack={handleClickBack} onSubmit={handleState} />
          )}
          {step === 4 && (
            <Step4 handleClickBack={handleClickBack} onSubmit={handleState} />
          )}
          {step === 5 && <FinalStep />}
        </>
      </div>
    </AppContext.Provider>
  );
}

export default App;
