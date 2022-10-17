import TextInput from "../../components/input/TextInput";

export default function BasicDetails({ formData, setFormData }) {
  const handleFullNameChange = (value) =>
    setFormData({ ...formData, fullName: value });
  const handleDisplayNameChange = (value) =>
    setFormData({ ...formData, displayName: value });

  return (
    <>
      <h1 className="title">Welcome! First things first...</h1>
      <p className="body1">You can always change them later.</p>
      <div className="form-group-wrapper">
        <TextInput
          label="Full Name"
          value={formData.fullName}
          setValue={handleFullNameChange}
        />
        <TextInput
          label="Display Name"
          value={formData.displayName}
          setValue={handleDisplayNameChange}
        />
      </div>
    </>
  );
}
