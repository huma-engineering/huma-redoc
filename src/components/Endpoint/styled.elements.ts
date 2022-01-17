import styled from '../../styled-components';

export const OperationEndpointWrap = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`;

export const ServerRelativeURL = styled.span`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const EndpointInfo = styled.button<{ expanded?: boolean; inverted?: boolean }>`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 7px 30px 7px 7px;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${({theme}) => `1px solid ${theme.colors.text.secondary}`};
  transition: border-color 0.25s ease;

  .${ServerRelativeURL} {
    color: ${props => (props.inverted ? props.theme.colors.text.primary : '#ffffff')};
  }
`;

export const HttpVerb = styled.span.attrs((props: { type: string; compact?: boolean }) => ({
  className: `http-verb ${props.type}`,
}))<{ type: string; compact?: boolean }>`
  font-size: 0.75rem;
  background-color: ${props => props.theme.colors.http[props.type] || '#999999'};
  color: ${({theme}) => theme.colors.text.fixed};
  height: 24px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  padding: 0 14px;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: 0;
`;

export const ServersOverlay = styled.div<{ expanded: boolean }>`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${({theme}) => theme.colors.light.main};
  color: #263238;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 14px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${props => (props.expanded ? 'visibility: visible;' : 'transform: translateY(-50%) scaleY(0);')}
`;

export const ServerItem = styled.div`
  padding: 10px;
`;

export const ServerUrl = styled.div`
  padding: 5px;
  word-break: break-all;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary.main};
  
  > span {
    color: ${props => props.theme.colors.text.primary};
  }
`;
