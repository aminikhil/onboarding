import TextInput from "../../components/input/TextInput";

export default function WorkspaceDetails({ formData, setFormData }) {
  const handleWorkspaceNameChange = (value) =>
    setFormData((oldData) => {
      const newData = { ...oldData };
      newData.workspaceName.value = value;
      if (newData.workspaceName.isValid(value))
        newData.workspaceName.errorMessage = "";
      return newData;
    });
  const handleWorkspaceURLChange = (value) =>
    setFormData((oldData) => {
      const newData = { ...oldData };
      newData.workspaceURL.value = value;
      return newData;
    });

  return (
    <>
      <h1 className="title">Let's set up a home for all your work</h1>
      <p className="body1">You can always create another workspace later.</p>
      <div className="form-group-wrapper">
        <TextInput
          label="Workspace Name"
          value={formData.workspaceName.value}
          setValue={handleWorkspaceNameChange}
          validation={formData.workspaceName.isValid}
          errorMessage={formData.workspaceName.errorMessage}
          placeholder="Enter workspace name"
        />
        <TextInput
          label="Workspace URL"
          value={formData.workspaceURL.value}
          setValue={handleWorkspaceURLChange}
          prefix="www.eden.com/"
          optional={true}
          placeholder="Example"
        />
      </div>
    </>
  );
}
