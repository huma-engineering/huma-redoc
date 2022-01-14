import * as React from 'react';

import { Code } from './styled.elements';
import { ShelfIcon } from '../../common-elements';
import { Markdown } from '../Markdown/Markdown';

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
    console.log(empty)
    return (
      <button
        className={className}
        onClick={(!empty && onClick) || undefined}
        aria-expanded={opened}
        disabled={empty}
      >
        {!empty && (
          <ShelfIcon
            size={'1em'}
            direction={opened ? 'down' : 'right'}
            float={'left'}
          />
        )}
        <Code>{code} </Code>
        <Markdown compact={true} inline={true} source={title} />
      </button>
    );
  }
}
