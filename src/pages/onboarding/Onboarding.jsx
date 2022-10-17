import { useState } from "react";
import { Stepper, Step } from "../../components/layout/Stepper";
import logo from "../../assets/images/logo.JPG";
import BasicDetails from "./BasicDetails";
import WorkspaceDetails from "./WorkspaceDetails";
import UseType from "./UseType";
import SetupComplete from "./SetupComplete";
import "./Onboarding.css";

function HandleActiveStep({ activeStep, ...props }) {
  switch (activeStep) {
    case 0:
      return <BasicDetails {...props} />;
    case 1:
      return <WorkspaceDetails {...props} />;
    case 2:
      return <UseType {...props} />;
    case 3:
      return <SetupComplete {...props} />;
    default:
      <></>;
  }
}

export default function Onboarding() {
  const [formData, setFormData] = useState({
    fullName: "",
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleOnClick = () => {
    setActiveStep((oldStep) => (oldStep < 3 ? oldStep + 1 : oldStep));
  };

  return (
    <div className="Onboarding">
      <div className="header">
        <h2 className="title branding">
          <span>
            <img src={logo} alt="Logo" />
          </span>
          <span>Eden</span>
        </h2>
      </div>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep}>
        <Step>1</Step>
        <Step>2</Step>
        <Step>3</Step>
        <Step>4</Step>
      </Stepper>
      <HandleActiveStep
        activeStep={activeStep}
        formData={formData}
        setFormData={setFormData}
      />
      <div className="btn-wrapper">
        <button className="btn btn-primary" onClick={handleOnClick}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}
