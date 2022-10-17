export default function TextInput({
  label,
  value,
  setValue,
  prefix,
  optional = false,
}) {
  const inputId = `input_${label}`;

  return (
    <div className="form-group">
      <label htmlFor={inputId}>
        {label} {optional && <span className="optional">(optional)</span>}
      </label>
      <div className="input-group">
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
        />
      </div>
    </div>
  );
}
