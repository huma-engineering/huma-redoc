import styled, { css, extensionsHook } from '../styled-components';

const headerFontSize = {
  1: '1.85714em',
  2: '1.875rem',
  3: '1.27em',
};

export const headerCommonMixin = level => css`
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-weight: ${({ theme }) => theme.typography.headings.fontWeight};
  font-size: ${headerFontSize[level]};
  line-height: ${({ theme }) => theme.typography.headings.lineHeight};
`;

export const H1 = styled.h1`
  ${headerCommonMixin(1)};

  ${extensionsHook('H1')};
`;

export const H2 = styled.h2`
  ${headerCommonMixin(2)};
  font-family: ${({ theme }) => theme.typography.fontFamilySecondary};
  color: black;

  ${extensionsHook('H2')};
`;

export const H3 = styled.h2`
  ${headerCommonMixin(3)};
  color: black;

  ${extensionsHook('H3')};
`;

export const RightPanelHeader = styled.h3`
  color: ${({ theme }) => theme.rightPanel.textColor};
  ${extensionsHook('RightPanelHeader')};
  font-weight: 400;
  font-size: 1.25rem;
`;

export const UnderlinedHeader = styled.h5`
  margin: 1.6rem 0;
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;
  font-weight: 600;

  > span {
    font-weight: 400;
  }

  ${extensionsHook('UnderlinedHeader')};
`;
