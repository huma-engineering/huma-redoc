import * as React from 'react';
import styled from '../styled-components';
import { FunctionComponent } from 'react';

interface componentInterface {
  style: object;
  isLocked?: boolean;
}

export const IconLock: FunctionComponent<componentInterface> = ({ style, isLocked }) => {

  return <IconStyled style={{ ...style }}>
    {isLocked ?
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M18,9h-8V5c0-2.8-2.2-5-5-5S0,2.2,0,5v2c0,0.6,0.4,1,1,1s1-0.4,1-1V5c0-1.7,1.3-3,3-3s3,1.3,3,3v4c-1.1,0-2,0.9-2,2v7c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-7C20,9.9,19.1,9,18,9z M13.3,13.9L13.3,13.9L13,14.1l-0.3-0.1C12.3,13.8,12,13.4,12,13c0-0.6,0.4-1,1-1s1,0.4,1,1C14,13.4,13.7,13.8,13.3,13.9z" />
      </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="20px" viewBox="0 0 14 20">
        <path d="M12,9V5c0-2.8-2.2-5-5-5S2,2.2,2,5v4c-1.1,0-2,0.9-2,2v7c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-7C14,9.9,13.1,9,12,9z M7.3,13.9L7,14.1l-0.3-0.1C6.3,13.8,6,13.4,6,13c0-0.6,0.4-1,1-1s1,0.4,1,1C8,13.4,7.7,13.8,7.3,13.9z M4,9V5c0-1.7,1.3-3,3-3s3,1.3,3,3v4H4z" />
      </svg>
    }
  </IconStyled>
}

const IconStyled = styled.div`

  display: flex;
  align-items: center;

  svg {
    height: 24px;
    width: auto;
  }

  path {
    fill: ${({ theme }) => theme.colors.text.primary};
  }
`;