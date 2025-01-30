import styled from 'styled-components';


export const Wrapper = styled.button`

  gap: 1rem;

  margin: 1.8rem 0rem 0rem;

  width: 100%;

  border: none;

  cursor: pointer;

  width: 100%;

  height: 48px;

  display: flex;

  align-items: center;

  text-decoration: none;

  justify-content: center;

  padding: 1.4rem 4.4rem;

  font-size: 1.6rem;

  .button--text {
    font-size: 1.6rem;

    font-weight: 600;

    color: #FFF;
  }

  div.iconLeftBtn {
    margin-right: 1rem;

    margin-top: 4px;

    border: none;
    background: none;
    cursor: pointer;
  }

  div.iconRight {
    margin-left: 1.5rem;

    margin-top: 4px;
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }

`;