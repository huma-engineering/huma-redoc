import styled from '../styled-components';

export const CodeArea = styled.textarea`
      padding: 10px 20px;
      outline: none;
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      width: 100%;
      line-height: 1.6em;
      color: ${({ theme }) => theme.rightPanelInner.codeBlockText};
      background: ${({ theme }) => theme.rightPanelInner.codeBlock};
     
      &:focus, &:active {
          outline: 1px solid ${({ theme }) => theme.rightPanel.textColor};
        }
`;