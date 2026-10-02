import FormField from "./FormField";

// 라벨과 안내 문구를 포함한 여러 줄 입력 컴포넌트이다.
function Textarea(props) {
  return <FormField {...props} as="textarea" />;
}

export default Textarea;
