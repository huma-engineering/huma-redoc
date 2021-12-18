import styled from '../../styled-components';

export const AuthorizationButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > * {
    margin-left: 1rem;
  }
`;

export const AuthorizationRow = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:first-child{
      width: 160px;
    }
    &:last-child{
      width: calc(100% - 160px);
      padding-left: 2rem;
    }
  }
`;


export const AuthorizationLabel = styled.div`
  font-size: 1rem;
`;