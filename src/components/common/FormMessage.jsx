import "../../css/FormMessage.css";

// 폼의 성공·오류 메시지와 알림 방식을 표시하는 공용 컴포넌트이다.
function FormMessage({
  children,
  type = "success",
  className = "",
  role = type === "error" ? "alert" : "status",
  "aria-live": ariaLive = type === "error" ? "assertive" : "polite",
  ...props
}) {
  return (
    <p
      {...props}
      className={`form-message ${className}`.trim()}
      data-type={type}
      role={role}
      aria-live={ariaLive}
    >
      {children}
    </p>
  );
}

export default FormMessage;
