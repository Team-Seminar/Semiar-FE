import { useId } from "react";
import "../../css/FormField.css";

// 입력 요소와 라벨·안내 문구를 연결하는 공용 입력 틀이다.
function FormField({
  as: Control = "input",
  label,
  hint,
  id,
  className = "",
  "aria-describedby": describedBy,
  ...props
}) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const descriptionIds = [describedBy, hintId].filter(Boolean).join(" ");

  return (
    <div className="field">
      {label && <label htmlFor={controlId}>{label}</label>}
      <Control
        {...props}
        id={controlId}
        className={`input ${className}`.trim()}
        aria-describedby={descriptionIds || undefined}
      />
      {hint && (
        <span className="input-help" id={hintId}>
          {hint}
        </span>
      )}
    </div>
  );
}

export default FormField;
