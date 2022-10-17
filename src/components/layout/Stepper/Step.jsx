import "./Step.css";

export default function Step({ index, children, status, setActiveStep }) {
  const handleOnClick = () => setActiveStep(index);
  return (
    <div
      className={`Step Step-${status}`}
      onClick={status === "completed" ? handleOnClick : null}
    >
      <span className="StepLabel">{children}</span>
    </div>
  );
}
