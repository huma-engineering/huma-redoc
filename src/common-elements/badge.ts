import styled from '../styled-components';

export const OperationBadge = styled.span.attrs((props: { type: string }) => ({
  className: `operation-type ${props.type}`,
})) <{ type: string }>`
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #333;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 0.75rem;
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.colors.badge.primary};
  margin-right: 10px;
  text-transform: capitalize;

  &.get {
    background-color: ${props => props.theme.colors.http.get};
  }

  &.post {
    background-color: ${props => props.theme.colors.http.post};
  }

  &.put {
    background-color: ${props => props.theme.colors.http.put};
  }

  &.options {
    background-color: ${props => props.theme.colors.http.options};
  }

  &.patch {
    background-color: ${props => props.theme.colors.http.patch};
  }

  &.delete {
    background-color: ${props => props.theme.colors.http.delete};
  }

  &.basic {
    background-color: ${props => props.theme.colors.http.basic};
  }

  &.link {
    background-color: ${props => props.theme.colors.http.link};
  }

  &.head {
    background-color: ${props => props.theme.colors.http.head};
  }

  &.hook {
    background-color: ${props => props.theme.colors.primary.main};
  }
`;