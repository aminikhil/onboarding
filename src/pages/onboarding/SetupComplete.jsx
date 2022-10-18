import iconCheck from "../../assets/images/check-line.svg";

export default function SetupComplete({ formData }) {
  return (
    <div className="step-box">
      <img className="icon-check" src={iconCheck} alt="" />
      <h1 className="title">Congratulations, {formData.displayName.value}!</h1>
      <p className="body1" style={{ marginBottom: 36 }}>
        You have completed onboarding, you can start using the Eden!
      </p>
    </div>
  );
}
