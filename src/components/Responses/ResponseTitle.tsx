import * as React from 'react';

import { Code } from './styled.elements';
import { ShelfIcon } from '../../common-elements';
import { Markdown } from '../Markdown/Markdown';
import {ResponseTitleArrow} from "./styled.elements"

export interface ResponseTitleProps {
  code: string;
  title: string;
  type: string;
  empty?: boolean;
  opened?: boolean;
  className?: string;
  onClick?: () => void;
}

export class ResponseTitle extends React.PureComponent<ResponseTitleProps> {
  render() {
    const { title, empty, code, opened, className, onClick } = this.props;

    return (
      <button
        className={className}
        onClick={(!empty && onClick) || undefined}
        aria-expanded={opened}
        disabled={empty}
      >
        {!empty && (
          <ResponseTitleArrow>
            <ShelfIcon
              size={'1em'}
              direction={opened ? 'down' : 'right'}
              float={'left'}
            />
          </ResponseTitleArrow>
        )}
        <Code>{code} </Code>
        <Markdown compact={true} inline={true} source={title} />
      </button>
    );
  }
}
