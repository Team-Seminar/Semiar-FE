import "../../css/StateMessage.css";

// 로딩, 오류와 빈 목록 안내를 표시하는 공용 컴포넌트이다.
function StateMessage({ children, type = "default", action = null }) {
  const messageType = [
    "default",
    "loading",
    "empty",
    "success",
    "error",
  ].includes(type)
    ? type
    : "default";
  const isError = type === "error";

  return (
    <div
      className={`message message--${messageType}`}
      role={isError ? "alert" : "status"}
    >
      <div className="message-text">{children}</div>
      {action && <div className="message-action">{action}</div>}
    </div>
  );
}

export default StateMessage;
