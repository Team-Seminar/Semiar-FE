import { Link, NavLink, useLocation } from "react-router-dom";
import { AUTH_ROLES } from "../../constants/seminar";
import "../../css/SiteHeader.css";
import Button from "./Button";

// 페이지 이동과 로그인·로그아웃 메뉴를 제공하는 공용 헤더이다.
function SiteHeader({
  eyebrow,
  title,
  onOpenAuth,
  onLogout,
  accountType,
  isAuthenticated = false,
  teacherMode = false,
}) {
  const isStudent = accountType === AUTH_ROLES.STUDENT;
  const isTeacher = accountType === AUTH_ROLES.TEACHER;
  const location = useLocation();

  return (
    <>
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>

      <header className="header">
        <div className="brand">
          <span className="brand-icon" aria-hidden="true">
            S
          </span>
          <div className="brand-text">
            <p className="brand-label">{eyebrow || "Seminar"}</p>
            <h1 className="brand-title">{title || "세미나실 예약"}</h1>
          </div>
        </div>

        <div className="header-menu">
          <nav className="nav" aria-label="주요 메뉴">
            {teacherMode ? (
              <>
                <NavLink
                  to="/teacher"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-active" : ""}`.trim()
                  }
                >
                  승인 관리
                </NavLink>
                <Link className="nav-link" to="/teacher#rooms">
                  공간 관리
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={`nav-link ${location.pathname === "/" ? "nav-active" : ""}`.trim()}
                  to="/"
                >
                  안내
                </Link>
                <NavLink
                  to="/floors/4"
                  className={`nav-link ${location.pathname.startsWith("/floors/") ? "nav-active" : ""}`.trim()}
                >
                  세미나실
                </NavLink>
                <Link
                  className={`nav-link ${location.pathname === "/reservations" ? "nav-active" : ""}`.trim()}
                  to="/reservations"
                >
                  내 예약
                </Link>
              </>
            )}
          </nav>

          <div
            className="header-actions"
            role="group"
            aria-label="사용자 메뉴"
          >
            {!isAuthenticated && (
              <>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => onOpenAuth("student-login")}
                >
                  학생 로그인
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => onOpenAuth("teacher-login")}
                >
                  교사 로그인
                </Button>
              </>
            )}

            {isAuthenticated && isTeacher && !teacherMode && (
              <Link className="header-link" to="/teacher">
                예약 승인 관리
              </Link>
            )}

            {isAuthenticated && isStudent && (
              <span className="user-badge">학생 로그인 중</span>
            )}

            {isAuthenticated && (
              <Button
                type="button"
                variant="secondary"
                onClick={onLogout}
              >
                로그아웃
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default SiteHeader;
