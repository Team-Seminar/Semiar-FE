import { useEffect, useId, useRef } from "react";
import "../../css/Dialog.css";
import Button from "./Button";

// 제목, 닫기 버튼과 내용을 제공하는 공용 팝업 틀이다.
function Dialog({
  onClose,
  eyebrow,
  title,
  children,
  isBusy = false,
}) {
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  // 처리 중에는 닫기를 막고 기본 팝업의 종료 이벤트와 화면 상태를 연결하는 처리이다.
  const requestClose = () => {
    if (isBusy) return;

    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
      return;
    }

    onClose?.();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    requestClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      requestClose();
    }
  };

  const handleNativeClose = () => {
    onClose?.();
  };

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-labelledby={titleId}
      aria-busy={isBusy || undefined}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      onClose={handleNativeClose}
    >
      <div className="dialog-panel">
        <div className="dialog-header">
          <div className="dialog-head">
            {eyebrow && <p className="dialog-label">{eyebrow}</p>}
            <h2 id={titleId} className="dialog-title">
              {title}
            </h2>
          </div>

          <Button
            type="button"
            className="dialog-close"
            aria-label="팝업 닫기"
            disabled={isBusy}
            onClick={requestClose}
          >
            <span aria-hidden="true">×</span>
          </Button>
        </div>

        <div className="dialog-content">{children}</div>
      </div>
    </dialog>
  );
}

export default Dialog;
