import FormField from "./FormField";

// 라벨과 안내 문구를 포함한 선택 입력 컴포넌트이다.
function Select(props) {
  return <FormField {...props} as="select" />;
}

export default Select;
