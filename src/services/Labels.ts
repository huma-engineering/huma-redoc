export interface LabelsConfig {
  enum: string;
  enumSingleValue: string;
  enumArray: string;
  default: string;
  deprecated: string;
  example: string;
  examples: string;
  recursive: string;
  arrayOf: string;
  webhook: string;
  const: string;
  noResultsFound: string;
  download: string;
  downloadSpecification: string;
  responses: string;
  callbackResponses: string;
  requestSamples: string;
  responseSamples: string;
  tryItOut: string;
  execute: string;
  backToSamples: string;
  responseServer: string;
  authorize: string;
  authorization: string;
  required: string;
  path: string;
  file: string;
}

export type LabelsConfigRaw = Partial<LabelsConfig>;

const labels: LabelsConfig = {
  enum: 'Enum',
  enumSingleValue: 'Value',
  enumArray: 'Items',
  default: 'Default',
  deprecated: 'Deprecated',
  example: 'Example',
  examples: 'Examples',
  recursive: 'Recursive',
  arrayOf: 'Array of ',
  webhook: 'Event',
  const: 'Value',
  noResultsFound: 'No results found',
  download: 'Download',
  downloadSpecification: 'Download OpenAPI specification',
  responses: 'Responses',
  callbackResponses: 'Callback responses',
  requestSamples: 'Request samples',
  responseSamples: 'Response samples',
  tryItOut: 'Try it out',
  execute: "Execute",
  backToSamples: "Back to samples",
  responseServer: "Server response",
  authorize: "Authorize",
  authorization: "Authorization",
  required: "required",
  path: "path",
  file: "file"
};

export function setRedocLabels(_labels?: LabelsConfigRaw) {
  Object.assign(labels, _labels);
}

export function l(key: keyof LabelsConfig, idx?: number): string {
  const label = labels[key];
  if (idx !== undefined) {
    return label[idx];
  }
  return label;
}