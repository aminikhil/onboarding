import "./Step.css";

export default function Step({ index, children, status, setActiveChild }) {
  const handleOnClick = () => setActiveChild(index);
  return (
    <div
      className={`Step Step-${status}`}
      onClick={status === "completed" ? handleOnClick : null}
    >
      <span className="StepLabel">{children}</span>
    </div>
  );
}
