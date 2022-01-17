import styled from '../../styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: opacity 300ms ease;
  opacity: 0;
  z-index: 999;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const ModalInner = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 14px;
  width: 600px;
  max-width: calc(100vw - 30px);
  background-color: ${({ theme }) => theme.modal.backgroundColor};
  box-shadow: 0px 0px 28px 1px rgba(107, 107, 107, 0.180698);
`;

export const ModalOverlay = styled.div`
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0,0,0, 0.1);
`;

export const ModalTitle = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.dark};
`;

export const ModelContent = styled.div`
  padding: 1.6rem;
`;

export const ModalClose = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.text.primary};

  svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: ${({ theme }) => theme.colors.text.primary};
  }

  &:hover {
    opacity: 0.5;
  }
`;

