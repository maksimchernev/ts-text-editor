  export interface TextStyles {
    font?: string,
    fontWeight?: string,
    fontSize?: string,
    fontColor?: string,
    lineHeight?: string,
    spacing?: string,
    textAlign?: 'left' | 'center' | 'right' | 'justify' ,
  };
  export interface DataStyles {
    font: string[],
    fontWeight: string[],
    fontColor: string[],
    textAlign: ('left' | 'center' | 'right' | 'justify')[] ,
  };