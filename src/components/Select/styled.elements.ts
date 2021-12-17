import styled from '../../styled-components';

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

  &:hover {
    color: ${({theme})=> theme.colors.primary.main};
  }

  &.active {
    background-color: ${({theme}) => `rgba(${theme.colors.text.primary, 0.1})`};
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




