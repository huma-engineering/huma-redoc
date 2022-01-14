import { default as classnames } from 'classnames';
import { darken } from 'polished';

import { deprecatedCss, ShelfIcon } from '../../common-elements';
import styled, { css, ResolvedThemeInterface } from '../../styled-components';

function menuItemActiveBg(depth, { theme }: { theme: ResolvedThemeInterface }): string {
  if (depth > 1) {
    return darken(0.1, theme.sidebar.backgroundColor);
  } else if (depth === 1) {
    return darken(0.05, theme.sidebar.backgroundColor);
  } else {
    return '';
  }
}

export const MenuItemUl = styled.ul<{ expanded: boolean }>`
  margin: 0;
  padding: 0;

  & & {
    font-size: 0.929em;
  }

  ${props => (props.expanded ? '' : 'display: none;')};
`;

export const MenuItemLi = styled.li<{ depth: number }>`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${props => (props.depth === 0 ? 'margin-top: 15px' : '')};
`;

export const menuItemDepth = {
  0: css`
    opacity: 0.7;
    text-transform: ${({ theme }) => theme.sidebar.groupItems.textTransform};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
    color: ${props => props.theme.sidebar.textColor};
  `,
  1: css`
    font-size: 0.929em;
    text-transform: ${({ theme }) => theme.sidebar.level1Items.textTransform};
    &:hover {
      color: ${props => props.theme.sidebar.activeTextColor};
    }
  `,
  2: css`
    color: ${props => props.theme.sidebar.textColor};
  `,
};

export interface MenuItemLabelType {
  depth: number;
  active: boolean;
  deprecated?: boolean;
  type?: string;
}

export const MenuItemLabel = styled.label.attrs((props: MenuItemLabelType) => ({
  role: 'menuitem',
  className: classnames('-depth' + props.depth, {
    active: props.active,
  }),
})) <MenuItemLabelType>`
  cursor: pointer;
  color: ${props =>
    props.active ? props.theme.sidebar.textColor : props.theme.sidebar.textColor};
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
  padding: 12.5px ${props => props.theme.spacing.unit * 4}px;
  padding-right: ${props => props.theme.spacing.unit * 2}px;
  ${({ depth, type, theme }) =>
    (type === 'section' && depth > 1 && 'padding-left: ' + theme.spacing.unit * 8 + 'px;') || ''}
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  font-size: 1rem;
  ${props => menuItemDepth[props.depth]};
  background-color: ${props => (props.active ? menuItemActiveBg(props.depth, props) : '')};

  &::after{
    content: '';
    position: absolute;
    right:0;
    top:0;
    width: 2px;
    height: 100%;
    transform: scaleX(0);
    transform-origin: center right;
    background-color: ${props => props.theme.colors.text.primary};
    transition: transform 300ms ease;
    display: ${props => props.type == "tag" ? "none" : "block"};
  }

  &.active {
    &::after{
      transform: scaleX(1);
    }
  }

  ${props => (props.deprecated && deprecatedCss) || ''};

  &:hover {
    background-color: ${props => menuItemActiveBg(props.depth, props)};
    color: ${props => props.theme.colors.text.primary};
  }

  ${ShelfIcon} {
    height: ${({ theme }) => theme.sidebar.arrow.size};
    width: ${({ theme }) => theme.sidebar.arrow.size};
    polygon {
      fill: ${({ theme }) => theme.sidebar.arrow.color};
    }
  }
`;

export const MenuItemTitle = styled.span<{ width?: string, active?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  width: ${props => (props.width ? props.width : 'auto')};
  overflow: hidden;
  font-size: 0.9375rem;
  font-weight: ${props => (props.active ? 600 : 400)};
  text-overflow: ellipsis;
  transition: all 300ms ease;
`;

export const RedocAttribution = styled.div`
  ${({ theme }) => `
  font-size: 0.8em;
  margin-top: ${theme.spacing.unit * 2}px;
  padding: 0 ${theme.spacing.unit * 4}px;
  text-align: left;

  opacity: 0.7;

  a,
  a:visited,
  a:hover {
    color: ${theme.sidebar.textColor} !important;
    border-top: 1px solid ${darken(0.1, theme.sidebar.backgroundColor)};
    padding: ${theme.spacing.unit}px 0;
    display: block;
  }
`};
`;
