import TextInput from "../../components/input/TextInput";

export default function WorkspaceDetails({ formData, setFormData }) {
  const handleWorkspaceNameChange = (value) =>
    setFormData({ ...formData, workspaceName: value });
  const handleWorkspaceURLChange = (value) =>
    setFormData({ ...formData, workspaceURL: value });

  return (
    <>
      <h1 className="title">Let's set up a home for all your work</h1>
      <p className="body1">You can always create another workspace later.</p>
      <div className="form-group-wrapper">
        <TextInput
          label="Workspace Name"
          value={formData.workspaceName}
          setValue={handleWorkspaceNameChange}
        />
        <TextInput
          label="Workspace URL"
          value={formData.workspaceURL}
          setValue={handleWorkspaceURLChange}
          prefix="www.eden.com/"
          optional={true}
        />
      </div>
    </>
  );
}
