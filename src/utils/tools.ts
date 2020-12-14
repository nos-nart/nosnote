import tools from '../../yaml/tools.yml';

export type ToolProps = {
  readonly name: string;
  readonly url: string;
  readonly image: string;
};

export const getTools = (): ToolProps[] => tools;
