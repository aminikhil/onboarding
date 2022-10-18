import TextInput from "../../components/input/TextInput";

export default function BasicDetails({ formData, setFormData }) {
  const handleFullNameChange = (value) =>
    setFormData((oldData) => {
      const newData = { ...oldData };
      newData.fullName.value = value;
      if (newData.fullName.isValid(value)) newData.fullName.errorMessage = "";
      return newData;
    });
  const handleDisplayNameChange = (value) =>
    setFormData((oldData) => {
      const newData = { ...oldData };
      newData.displayName.value = value;
      if (newData.displayName.isValid(value))
        newData.displayName.errorMessage = "";
      return newData;
    });

  return (
    <>
      <h1 className="title">Welcome! First things first...</h1>
      <p className="body1">You can always change them later.</p>
      <div className="form-group-wrapper">
        <TextInput
          label="Full Name"
          value={formData.fullName.value}
          setValue={handleFullNameChange}
          validation={formData.fullName.isValid}
          errorMessage={formData.fullName.errorMessage}
          placeholder="Enter your full name"
        />
        <TextInput
          label="Display Name"
          value={formData.displayName.value}
          setValue={handleDisplayNameChange}
          validation={formData.displayName.isValid}
          errorMessage={formData.displayName.errorMessage}
          placeholder="Enter display name"
        />
      </div>
    </>
  );
}
