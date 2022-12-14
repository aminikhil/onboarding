import CardRadioInput from "../../components/input/CardRadioInput";
import iconUser from "../../assets/images/user-fill.svg";
import iconUserActive from "../../assets/images/user-fill-primary.svg";
import iconGroup from "../../assets/images/group.png";
import iconGroupActive from "../../assets/images/group-primary.png";

export default function UseType({ formData, setFormData }) {
  const handleUseTypeChange = (value) =>
    setFormData((oldData) => {
      const newData = { ...oldData };
      newData.useType.value = value;
      if (newData.useType.isValid(value)) newData.useType.errorMessage = "";
      return newData;
    });

  return (
    <div className="step-box">
      <h1 className="title">How are you planning to use Eden?</h1>
      <p className="body1">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="form-group-wrapper">
        <div className="select-card-options">
          <CardRadioInput
            label="Use Type"
            fieldValue="individual"
            value={formData.useType.value}
            setValue={handleUseTypeChange}
            title={"For myself"}
            subtitle={"Write better. Think more clearly. Stay organized."}
            img={iconUser}
            imgActive={iconUserActive}
          />
          <CardRadioInput
            label="Use Type"
            fieldValue="team"
            value={formData.useType.value}
            setValue={handleUseTypeChange}
            title={"With my team"}
            subtitle={"Wikis, docs, tasks & projects, all in one place."}
            img={iconGroup}
            imgActive={iconGroupActive}
          />
        </div>
        <span className="input-error-message">
          {formData.useType.errorMessage}
        </span>
      </div>
    </div>
  );
}
