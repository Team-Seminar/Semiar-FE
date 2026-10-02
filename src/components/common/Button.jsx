import "../../css/Button.css";

// 버튼 종류와 전체 너비를 선택할 수 있는 공용 버튼이다.
function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) {
  const buttonClassName = [
    "button",
    variant === "secondary" && "button--secondary",
    variant === "danger" && "button--danger",
    fullWidth && "button--full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
