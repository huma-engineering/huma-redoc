import styled from '../../styled-components';
import { transparentize } from 'polished';

export const InputContainer = styled.div`
  position: relative;
  border-bottom: 1px solid ${({theme}) => theme.colors.text.primary};
`;

export const InputElement = styled.input`
  border: none;
  outline: none;
  padding-right: 2rem;
  width: 100%;
  font-size: 1rem;
  line-height: 40px;
  background-color: transparent;

  &[disabled]{
    background-color: inherit;
    opacity: 0.5;
  }

  &::placeholder{
    color:  ${({theme}) => transparentize(0.5, theme.colors.text.primary)};
  }
  
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const InputClear = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: ${({theme}) => theme.colors.text.primary};
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 300ms ease;

  svg {
    path {
      fill: ${({theme}) => theme.colors.text.primary};
    }
  }

  &.disabled {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
`;



