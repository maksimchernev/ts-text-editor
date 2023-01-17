import React from 'react';
import styled from 'styled-components';
import { TextStyles } from '../Interfaces';

const TextArea = styled.textarea<{fontFamily?: string, textAlign?:string, fontWeight?:number, fontSize?:string, color?:string, lineHeight?:string, letterSpacing?:string}>`
    font-family:  ${props => props.fontFamily || `'Fira Sans', sans-serif`};
    text-align: ${props => props.textAlign || 'left' as const };
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || '14px'};
    color: ${props => props.color || '#292929'};
    line-height: ${props => props.lineHeight || '100%'};
    letter-spacing: ${props => props.letterSpacing || '0.6px'};
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    resize: none;
    height: 720px;
    width: 600px;
    border: none;
    padding: 30px;
    ::placeholder {
      color: #292929;
    }
`;

interface PropsTextEditor  {
  appState: {
    styles: TextStyles;
    text: string;
  }
  handleEditorChange: Function
}

export default class TextEditor extends React.Component<PropsTextEditor, {}> {
    constructor(props: PropsTextEditor) {
      super(props)
      this.getFontWeight = this.getFontWeight.bind(this)
    }
    getFontWeight = (fontWeight: string | number) : number => {
      let fontWeightCode
      if (typeof fontWeight === 'number') return fontWeight
      switch (fontWeight) {
      case 'Regular':
        fontWeightCode = 400
        break
      case 'Bold':
        fontWeightCode = 700
        break
      case 'Medium': 
        fontWeightCode = 500
        break
      default:
        fontWeightCode = 400
        break
      }
      return fontWeightCode

    }
    render () {
      return (
        <>
          <TextArea 
            rows={40} 
            placeholder={'Type Here...'} 
            defaultValue={this.props.appState.text} 
            onChange={(e) => this.props.handleEditorChange(e.target.value)}
            fontFamily={this.props.appState.styles.font}
            textAlign={this.props.appState.styles.textAlign}
            fontWeight={this.getFontWeight(this.props.appState.styles.fontWeight || 400)}
            fontSize={this.props.appState.styles.fontSize}
            color={this.props.appState.styles.fontColor}
            lineHeight={this.props.appState.styles.lineHeight}
            letterSpacing={this.props.appState.styles.spacing}
            />
        </>
      )
    };
}