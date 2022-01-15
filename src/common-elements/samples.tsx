import styled from '../styled-components';
import { PrismDiv } from './PrismDiv';

export const SampleControls = styled.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.rightPanel.textColor};
    padding: 2px 10px;
    margin-left: 1rem;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 0.875rem;
    text-decoration: underline;
    line-height: ${({ theme }) => theme.typography.lineHeight};
    cursor: pointer;
    outline: 0;
    transition: opacity 300ms ease;

    :hover,
    :focus {
      background: transparent;
      text-decoration: none;
      opacity: 0.8;
    }
  }
`;

export const SampleControlsWrap = styled.div`
  &:hover ${SampleControls} {
    opacity: 1;
  }
`;

export const StyledPre = styled(PrismDiv.withComponent('pre'))`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: ${props => props.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({ theme }) => (theme.typography.code.wrap ? 'pre-wrap' : 'pre')};
`;
