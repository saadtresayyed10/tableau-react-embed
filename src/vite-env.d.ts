/// <reference types="vite/client" />

interface TableauVizOptions {
  width?: string;
  height?: string;
  [key: string]: unknown;
}

interface Tableau {
  Viz: new (
    container: HTMLElement,
    url: string,
    options?: TableauVizOptions
  ) => void;
}
