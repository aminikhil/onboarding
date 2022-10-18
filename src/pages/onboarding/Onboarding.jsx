import { useState } from "react";
import { Stepper, Step } from "../../components/layout/Stepper";
import logo from "../../assets/images/logo.png";
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
  const [formData, setFormData] = useState({ ...initialData });
  const [activeStep, setActiveStep] = useState(0);

  const handleOnClick = () => {
    var isValid = true;
    if (activeStep === 0) {
      const fullName = formData.fullName;
      if (!fullName.isValid(fullName.value)) {
        setFormData((oldData) => {
          const newData = { ...oldData };
          newData.fullName.errorMessage = "Please enter a valid full name";
          return newData;
        });
        isValid = false;
      }
      const displayName = formData.displayName;
      if (!displayName.isValid(displayName.value)) {
        setFormData((oldData) => {
          const newData = { ...oldData };
          newData.displayName.errorMessage =
            "Please enter a valid display name";
          return newData;
        });
        isValid = false;
      }
    } else if (activeStep === 1) {
      const workspaceName = formData.workspaceName;
      if (!workspaceName.isValid(workspaceName.value)) {
        setFormData((oldData) => {
          const newData = { ...oldData };
          newData.workspaceName.errorMessage =
            "Please enter a valid workspace name";
          return newData;
        });
        isValid = false;
      }
    } else if (activeStep === 2) {
      const useType = formData.useType;
      if (!useType.isValid(useType.value)) {
        setFormData((oldData) => {
          const newData = { ...oldData };
          newData.useType.errorMessage = "Please select an option";
          return newData;
        });
        isValid = false;
      }
    }
    if (isValid === true)
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
          {activeStep === 3 ? "Launch Eden" : "Create Workspace"}
        </button>
      </div>
    </div>
  );
}

const isNotEmpty = (value) => value.length > 0;
const isNotNull = (value) => value !== null;

var initialData = {
  fullName: {
    isValid: isNotEmpty,
    errorMessage: "",
    value: "",
  },
  displayName: {
    isValid: isNotEmpty,
    errorMessage: "",
    value: "",
  },
  workspaceName: {
    isValid: isNotEmpty,
    errorMessage: "",
    value: "",
  },
  workspaceURL: {
    isValid: isNotEmpty,
    errorMessage: "",
    value: "",
  },
  useType: {
    isValid: isNotNull,
    errorMessage: "",
    value: null,
  },
};
