import styled from '../../styled-components';
import { transparentize } from 'polished';

export const SelectContainer = styled.div`
  position: relative;
  z-index: 99;
`;

export const SelectInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid ${({theme}) => theme.colors.border.dark};
  padding: 0 1.4rem;
  padding-right: 3rem;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;

  &::placeholder{
    color: ${({ theme }) => `rgba(${theme.colors.text.primary}, 0.5)`}
  }
`;

export const OptionContainer = styled.li`
  padding: 0.5rem 1rem;
  transition: color 300ms ease;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.light.main};
  border-bottom: 1px solid ${({theme}) => theme.colors.border.dark};

  &:hover {
    color: ${({theme})=> theme.colors.primary.main};
    background-color: ${({theme})=> theme.colors.gray[50]};
  }

  &.active {
    background-color: ${({theme})=> theme.colors.gray[50]};
  }
`;

export const SelectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  border-radius: 25px;
  overflow: hidden;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  z-index: 2;
  box-shadow: 0px 0px 28px 1px rgba(107, 107, 107, 0.180698);
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const SelectIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  transition: all 300ms ease;

  path {
    fill: ${({theme}) => transparentize(0.4, theme.colors.text.primary)}
  }

  &.active {
    transform: translateY(-50%) rotate(-180deg);
  }
`;
