import { cloneElement, Fragment, useEffect } from "react";
import Divider from "./Divider";
import "./Stepper.css";

export default function Stepper({
  children,
  activeStep = 2,
  setActiveStep = () => {},
}) {
  return (
    <div>
      <div className="Stepper">
        {children.map((child, index) => {
          const cloneChild = cloneElement(child, {
            status: getStatus(index, activeStep),
            index,
            setActiveStep,
          });
          return (
            <Fragment key={`step-${index}`}>
              {cloneChild}
              {index !== children.length - 1 && (
                <Divider status={getStatus(index, activeStep)} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function getStatus(index, activeStep) {
  return activeStep === index
    ? "active"
    : activeStep > index
    ? "completed"
    : "in-active";
}
