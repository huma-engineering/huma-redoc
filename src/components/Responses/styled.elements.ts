import { UnderlinedHeader } from '../../common-elements';
import styled from '../../styled-components';
import { ResponseTitle } from './ResponseTitle';

export const StyledResponseTitle = styled(ResponseTitle)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  box-shadow: ${props => props.opened ? `box-shadow: 0px 1px 0px 0px #000000` : "none"};

  strong {
    display: inline-flex;
    border-radius: 20px;
    color: ${props => props.theme.colors.responses[props.type].color};
    padding: ${({ theme }) => theme.spacing.unit*1.5}px ${({ theme }) => theme.spacing.unit*3}px;
    background-color: ${props => props.theme.colors.responses[props.type].backgroundColor};
  }

  & > * {
    margin-right: 0.5rem;
  }

  ${props =>
    (props.empty &&
      `
cursor: default;
&::before {
  content: "—";
  font-weight: bold;
  width: 1.5em;
  text-align: center;
  display: inline-block;
  vertical-align: top;
}
&:focus {
  outline: 0;
}
`) ||
    ''};
`;

export const ResponseDetailsWrap = styled.div`
  padding: 10px;
`;

export const HeadersCaption = styled(UnderlinedHeader.withComponent('caption'))`
  text-align: left;
  margin-top: 1em;
  caption-side: top;
`;

export const Code = styled.strong`
  vertical-align: top;
`;
