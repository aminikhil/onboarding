import "./CardRadioInput.css";

export default function CardRadioInput({
  value,
  setValue,
  fieldValue,
  title,
  subtitle,
  img,
  imgActive,
}) {
  const handleOnClick = () => setValue(fieldValue);

  return (
    <div
      className={`form-group card-radio-input ${
        value === fieldValue ? "card-radio-input-selected" : ""
      }`}
      onClick={handleOnClick}
    >
      <div className="icon">
        <img src={value === fieldValue ? imgActive : img} alt="" />
      </div>
      <h4 className="title">{title}</h4>
      <p className="body1">{subtitle}</p>
    </div>
  );
}
