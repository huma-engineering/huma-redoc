import { transparentize } from 'polished';
import styled from '../../styled-components';
import { StyledDropdown } from '../../common-elements';

export const MimeLabel = styled.div`
  padding: 7px 14px;
  background-color: ${({ theme }) => theme.rightPanel.backgroundInner};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 10px 0;
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 1rem;
`;

export const DropdownLabel = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 1rem;
  z-index: 1;
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.rightPanel.textColor};
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const InvertedSimpleDropdown = styled(StyledDropdown)`
  && {
    margin-left: 10px;
    text-transform: none;
    font-size: 1rem;
    margin: 0 0 10px 0;
    display: block;
    background-color: ${({ theme }) => theme.rightPanel.backgroundInner};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.text.secondary};
    border-radius: 20px;
    padding: 7px 14px;
    box-shadow: none;

    &:hover,
    &:focus-within {
      border: 1px solid ${({ theme }) => theme.colors.text.secondary};;
      box-shadow: none;
    }
    &:focus-within {
      background-color: ${({ theme }) => transparentize(0.3, theme.rightPanel.backgroundColor)};
    }

    .dropdown-selector-value {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${({ theme }) => theme.rightPanel.textColor};
    }

    .dropdown-selector-content {
      margin: 0;
      margin-top: 2px;
      .dropdown-option {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;

export const NoSampleLabel = styled.div`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: 12px;
  color: #ee807f;
`;
