import CardRadioInput from "../../components/input/CardRadioInput";
import iconUser from "../../assets/images/user-fill.svg";
import iconUserActive from "../../assets/images/user-fill-primary.svg";
import iconGroup from "../../assets/images/group.png";
import iconGroupActive from "../../assets/images/group-primary.png";

export default function UseType({ formData, setFormData }) {
  const handleUseTypeChange = (value) =>
    setFormData({ ...formData, useType: value });

  return (
    <>
      <h1 className="title">How are you planning to use Eden?</h1>
      <p className="body1">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="form-group-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 36,
          }}
        >
          <CardRadioInput
            label="Use Type"
            fieldValue="individual"
            value={formData.useType}
            setValue={handleUseTypeChange}
            title={"For myself"}
            subtitle={"Write better. Think more clearly. Stay organized."}
            img={iconUser}
            imgActive={iconUserActive}
          />
          <CardRadioInput
            label="Use Type"
            fieldValue="team"
            value={formData.useType}
            setValue={handleUseTypeChange}
            title={"With my team"}
            subtitle={"Wikis, docs, tasks & projects, all in one place."}
            img={iconGroup}
            imgActive={iconGroupActive}
          />
        </div>
      </div>
    </>
  );
}
