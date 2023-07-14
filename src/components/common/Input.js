import styled from "styled-components";

const InputComun = styled.input`
  color: #3c3c3c;
  border: none;
  width: ${(props) => (props.noRequired ? "80%" : "96%")};
  outline: none;
  border: 1.2px solid rgba(7, 19, 58, 0.7);
  border-radius: 5px;
  height: 5vh;
  padding-left: 3%;
  font-size: calc(0.59vw + 0.625rem);
  :invalid {
    border: 1.2px solid #fd1a1ae3;
  }
  :disabled {
    background-color: white;
  }

  @media (min-width: 550px) and (max-width: 700px),
    (min-height: 300px) and (max-height: 400px) {
    height: 5.5vw;
  }
`;

const Input = (props) => {
  return (
    <InputComun
      id={props.id}
      noRequired={props.noRequired}
      primary={props.primary}
      type={props.type}
      name={props.name}
      autoComplete={props.autoComplete}
      onChange={props.onChange}
      onBlur={props.onBlur}
      disabled={props.disabled}
      required={props.required}
      defaultValue={props.defaultValue}
      value={props.value}
      min={props.min}
      max={props.max}
    ></InputComun>
  );
};

export default Input;