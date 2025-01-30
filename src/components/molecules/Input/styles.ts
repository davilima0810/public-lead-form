import styled from 'styled-components';
import InputChildren from 'react-input-children';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const InputMaterial = styled(InputChildren)`
  height: 45px;
  width: 100%;
  border: 1px solid #E1E1E1;
  border-radius: 0px;
  text-align: left;
  text-indent: 1.5rem;

  svg{
    /* margin-left: 1.5rem; */

    margin-right: 5rem;

    /* margin-top: 4px; */
    /* position: relative; */
  }

  ::-webkit-input-placeholder {
    margin-left: 1rem;
    text-align: left;
  }

  :-moz-placeholder {
    margin-left: 1rem;
    text-align: left;
  }

  &:hover {
    border: 1px solid #838383;
  }

`