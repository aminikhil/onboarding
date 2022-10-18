export default function TextInput({
  label,
  value,
  setValue,
  prefix,
  optional = false,
  validation = (value) => true,
  errorMessage = "",
  placeholder = "",
}) {
  const inputId = `input_${label}`;

  return (
    <div className="form-group">
      <label htmlFor={inputId}>
        {label} {optional && <span className="optional">(optional)</span>}
      </label>
      <div
        className={`input-group ${errorMessage !== "" ? "invalid-input" : ""}`}
      >
        {prefix && <span className="input-prefix">{prefix}</span>}
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => {
            if (typeof setValue === "function") {
              setValue(e.target.value);
            }
          }}
          placeholder={placeholder}
        />
      </div>
      <span className="input-error-message">{errorMessage}</span>
    </div>
  );
}
