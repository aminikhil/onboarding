import { Stepper, Step } from "../../components/layout/Stepper";
export default function Onboarding() {
  return (
    <>
      <div className="header">
        <h4>
          <span></span>
          <span>Eden</span>
        </h4>
      </div>
      <Stepper>
        <Step>1</Step>
        <Step>2</Step>
        <Step>3</Step>
        <Step>4</Step>
      </Stepper>
    </>
  );
}
