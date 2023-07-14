import styled from "styled-components";

const InputComun = styled.textarea`
  outline: none;
  border: 1.2px solid rgba(7, 19, 58, 0.7);
  border-radius: 5px;
  padding: 0.5em;
  color: #3c3c3c;
  font-size: calc(0.35vw + 0.625rem);

  :invalid {
    border: 1.2px solid #fd1a1ae3;
  }

  :disabled {
    background-color: white;
  }

  @media (min-width: 550px) and (max-width: 700px),
    (min-height: 300px) and (max-height: 400px) {
    height: 8vw;
  }
`;

const TextArea = (props) => {
  return (
    <InputComun
      padding={props.padding}
      id={props.id}
      type={props.type}
      name={props.name}
      autoComplete={props.autoComplete}
      list={props.list}
      dato={props.dato}
      pattern={props.pattern}
      onChange={props.onChange}
      onBlur={props.onBlur}
      disabled={props.disabled}
      required={props.required}
      defaultValue={props.defaultValue}
      value={props.value}
    ></InputComun>
  );
};

export default TextArea;