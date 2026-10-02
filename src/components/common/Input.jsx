import FormField from "./FormField";

// 라벨과 안내 문구를 포함한 한 줄 입력 컴포넌트이다.
function Input({ type = "text", ...props }) {
  return <FormField {...props} as="input" type={type} />;
}

export default Input;
