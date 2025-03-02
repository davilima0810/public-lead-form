import styled from "styled-components";

// Definição dos breakpoints para facilitar o uso
const breakpoints = {
  tablet: "768px",
  mobile: "480px",
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 60vh;
  padding: 0% 20%;
  display: flex;
  flex-direction: column;
  background-color: #e9efb1;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0% 10%;
    height: 50vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0% 5%;
    height: 40vh;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  margin: 1rem 0rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const Logo = styled.img`
  width: 10%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 20%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 30%;
  }
`;

export const ContainerForm = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 20%;
  gap: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2% 10%;
    width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2% 5%;
    width: 100%;
  }
`;

export const Form = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const InputComponent = styled.input`
  height: 45px;
  width: 50%;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  text-align: left;
  text-indent: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const TextareaComponent = styled.textarea`
  height: 100px;
  width: 50%;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  text-indent: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const TitleText = styled.h3`
  font-weight: 700;
  margin: 0.5rem 0rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const TitleSubText = styled.h4`
  font-weight: 600;
  margin: 0.5rem 0rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const ButtonSubmit = styled.button`
  width: 50%;
  height: 45px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const CheckboxContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2% 20%;
  gap: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2% 10%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2% 5%;
  }
`;

export const CheckboxComponent = styled.input`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  text-align: left;
  text-indent: 1.5rem;
  margin-right: 10px;
`;

export const CheckboxLabel = styled.label`
  font-weight: 600;
  font-size: smaller;
  margin: 0.5rem 0rem;
  text-align: center;
`;

export const FileInputContainer = styled.div`
  margin: 10px 0 16px 0;
`;

export const FileInputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

export const FileInputField = styled.input`
  display: none;
`;

export const FileInputCustom = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;