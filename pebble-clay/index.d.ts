declare module "pebble-clay" {
  export type Config = ConfigSection | ConfigHeading | ConfigInput | ConfigSubmit;

  interface ConfigSection {
    type: 'section';
    items: Config[];
  }

  interface ConfigHeading {
    type: 'heading';
    defaultValue: string;
  }

  interface ConfigInput {
    type: 'input';
    messageKey: string;
    defaultValue: string;
    attributes?: any;
    label?: string;
  }

  interface ConfigSubmit {
    type: 'submit';
    defaultValue: string;
  }

  interface CuscomFunc {
    (this: Config, minified: boolean): void;
  }

  interface Option {
    autoHandleEvents?: boolean;
    userData?: any;
  }

  class Clay {
    constructor(config: Config[], customFn?: CuscomFunc, options?: Option);
    generateUrl(): string;
    getSettings(response: any): { [key: number]: any };
  }

  export default Clay;
}
