import tools from '../../yaml/tools.yml';

export type ITool = {
  name: string;
  url: string;
};

export type ToolProps = {
  javascript?: ITool[];
  css?: ITool[];
  api?: ITool[];
  ui?: ITool[];
};

export const getTools = (): ToolProps[] => tools;
