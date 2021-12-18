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
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 1;
  }
`;



