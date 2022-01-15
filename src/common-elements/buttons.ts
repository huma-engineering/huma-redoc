import styled from '../styled-components';
import { darken } from 'polished';

export const RightPanelButton = styled.button`
      padding: 0 20px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      border: 1px solid ${({ theme }) => darken(0.05, theme.codeBlock.backgroundColor)};
      border-radius: 20px;
      min-width: 60px;
      font-size: 1rem;
      font-weight: 400;
      width: 100%;
      color: ${props => props.theme.colors.text.primary};
      background: ${({ theme }) => theme.rightPanel.textColor};
      transition: color 300ms ease;

      &[disabled] {
        pointer-events: none;
        opacity: 0.7;
      }

      &:hover {
        color: ${props => props.theme.colors.primary.main};;
      }

      &.primary {
        background: ${({ theme }) => theme.typography.code.backgroundColor};

        &:hover {
          color: ${props => props.theme.colors.success.main};;
        }
      }
     
      &:focus, &:active {
          outline: auto;
        }
`;

export const Button = styled.button`
      padding: 20px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;
      outline: none !important;
      border: 1px solid ${({ theme }) => theme.colors.secondary.main};
      border-radius: 25px;
      min-width: 60px;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary.contrastText};
      background: ${({ theme }) => theme.colors.secondary.main};
      transition: all 300ms ease;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.secondary.main};
      }

      &[disabled] {
        pointer-events: none;
        opacity: 0.6;
      }

      &.primary {
        background: ${({ theme }) => theme.typography.code.backgroundColor};
        border-color: ${({ theme }) => theme.typography.code.backgroundColor};
      }

      &.secondary {
        background: ${({ theme }) => theme.colors.secondary.main};
        border-color: ${({ theme }) => theme.colors.secondary.main};
        color: ${({ theme }) => theme.colors.light.main};
      }

      &.outline {
        background-color: transparent;

        &.secondary {
          border-color: ${({ theme }) => theme.colors.secondary.main};
          color: ${({ theme }) => theme.colors.secondary.main};
        }

        &:hover {
          &.secondary {
            background-color: ${({ theme }) => theme.colors.secondary.main};
            color: ${({ theme }) => theme.colors.light.main};
          }
        }
      }
     
      &:focus, &:active {
          outline: auto;
        }
`;