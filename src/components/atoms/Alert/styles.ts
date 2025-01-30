import styled, {css} from 'styled-components';
import theme from '@/styles/theme';


export const Wrapper = styled.div`

  gap: 1rem;

  width: 100%;

  border: none;

  height: 60px;

  display: flex;

  align-items: center;

  text-decoration: none;

  justify-content: space-between;

  background-color: red;

  padding: 0rem 2rem;

  margin: 2rem 0rem;

  .Alert--text {
    font-size: 1.6rem;

    font-weight: 500;

    color: #FFF;
  }

  div.iconRight {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }

`;