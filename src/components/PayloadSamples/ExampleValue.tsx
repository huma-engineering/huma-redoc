import * as React from 'react';

import { isJsonLike, langFromMime } from '../../utils/openapi';
import { JsonViewer } from '../JsonViewer/JsonViewer';
import { SourceCodeWithCopy } from '../SourceCode/SourceCode';

export interface ExampleValueProps {
  value: any;
  mimeType: string;
  variant?: string;
  onChange?: (e:string) => void
}

export function ExampleValue({ value, mimeType, variant, onChange }: ExampleValueProps) {
  if (isJsonLike(mimeType)) {
    return <JsonViewer data={value} variant={variant} onChange={onChange}/>;
  } else {
    if (typeof value === 'object') {
      // just in case example was cached as json but used as non-json
      value = JSON.stringify(value, null, 2);
    }
    return <SourceCodeWithCopy lang={langFromMime(mimeType)} source={value} />;
  }
}
