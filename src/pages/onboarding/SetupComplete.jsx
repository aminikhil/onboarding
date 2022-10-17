import iconCheck from "../../assets/images/check-line.svg";

export default function SetupComplete({ formData }) {
  return (
    <>
      <img className="icon-check" src={iconCheck} alt="" />
      <h1 className="title">
        Congratulations, {formData.displayName.split(" ")[0]}!
      </h1>
      <p className="body1" style={{ marginBottom: 36 }}>
        You have completed onboarding, you can start using the Eden!
      </p>
    </>
  );
}
