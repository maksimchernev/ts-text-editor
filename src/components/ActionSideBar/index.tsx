import React from 'react';
import styled from 'styled-components';
import { TextStyles } from '../Interfaces';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, FontSize, LetterSpacing, LineHeight } from '../Icons';
import {data} from '../../data';

const SideBarWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px ;
    gap: 10px;
    width: 240px;
    height: 100vh;
    right: 0;
    top: 0px;
    background: #FFFFFF;
`
const Title = styled.h1`
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13.2px;
    color: #788994;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin: 0;
`
const SectionWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 1px solid #E8ECF0;
    border-radius: 4px;
    display: flex;
    justify-items: center; 
    align-items: center;
    text-align: center;
`

const TextInputWrapper = styled.div<{oneSecond?: boolean, oneThird?: boolean, border?: boolean}>`
    box-sizing: border-box;
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: ${(props) => (props.oneSecond && '50%') || (props.oneThird && '35%') ||'100%'};
    border-right: ${(props) => props.border ? '1px #E8ECF0 solid' : 'none'};
`

const DropDownSelect = styled.select<{isSelectColor?: boolean, twoThird?: boolean, border?: boolean, fontRoboto?: boolean}>`
    -moz-appearance: none; 
    -webkit-appearance: none; 
    appearance: none;
    height: 100%;
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 0 14px;
    padding-bottom: 2px;
    color: #2D3A41;
    font-size: 12px;
    width: ${(props) => (props.twoThird && '65%') ||'100%'};
    background-image: url('/ArrowDropDown.svg');
    background-position: bottom 17px right 10px;
    background-repeat: no-repeat;
    cursor: pointer;
    border-right: ${(props) => props.border ? '1px #E8ECF0 solid' : 'none'};
    padding-left: ${(props) => props.isSelectColor ? '10px' : 'none'};
    font-family: ${(props) => props.fontRoboto ? 'Roboto' : 'Fira Sans'}
`

const ColorThumbnail = styled.div<{background?: string}>`
    background-color: ${props => props.background  || 'transparent'};
    margin: 0 0 0 10px;
    min-width: 18px;
    min-height: 18px;
    border-radius: 3px;
`
const DropDownOption = styled.option`
    border: none;
    width: 100%;
    padding: 0 5px;
    color: #2D3A41;
`

const TextInput = styled.input<{small?: boolean, fontRoboto?: boolean}>`
    font-family: ${(props) => props.fontRoboto ? 'Roboto' : 'Fira Sans'};
    box-sizing: border-box;
    width: ${(props) => props.small ? 'calc(100% - 25px)' : 'calc(100% - 40px)'};
    border: none;
    color: #2D3A41;
    font-size: 12px;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }   
`
const Measure = styled.span`
    font-family: 'Roboto';
    font-size: 12px;
    display: flex;
    justify-items: center;
    align-items: center;
    color: #AAB2BB;
`

const AlignOption = styled.a<{border?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(1 / 4 * 100%);
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    border-right: ${(props) => props.border ? '1px #E8ECF0 solid' : 'none'}

`
const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    background-color: #27AE60;
    border-radius: 4px;
    font-weight: 600;
    color: #fff;
    border: none;
    cursor: pointer;
    letter-spacing: -0.4px;
`

interface ActionProps {
  styles: TextStyles;
  handleApply: Function;
}
export default class ActionSideBar extends React.Component<ActionProps, TextStyles> {
    constructor (props: ActionProps){
      super(props);
      this.state = this.props.styles
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (name: string, value: string | number) => {
      this.setState({...this.state, [name]: value})
    }
    handleSubmit = () => {
      this.props.handleApply(this.state)
    }
    getIconColor = (option: string) => {
      return option === this.state.textAlign ? 'rgba(33, 152, 237, 1)' : 'rgba(170, 178, 187, 0.5)'
    }
    render() {
        return(
            <SideBarWrapper>
              <Title>Text</Title>
              <SectionWrapper >
                <DropDownSelect name="font" value={this.state.font} onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
                  {data.font.length ? data.font.map((fontItem, index) => {
                    return (
                      <DropDownOption value={fontItem} key={index}>{fontItem} </DropDownOption>
                    )
                  }) : null }
                </DropDownSelect>
              </SectionWrapper>
              <SectionWrapper >
                <DropDownSelect twoThird border name="fontWeight" value={this.state.fontWeight} onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
                  {data.fontWeight.length ? data.fontWeight.map((fontWeightItem, index) => {
                    return (
                      <DropDownOption value={fontWeightItem} key={index}>{fontWeightItem} </DropDownOption>
                      )
                  }) : null }
                </DropDownSelect>
                <TextInputWrapper oneThird>
                  <FontSize />
                  <TextInput small type='number' min='0' name='fontSize' defaultValue={this.state.fontSize ? parseInt(this.state.fontSize) : 16} onChange={(e) => this.handleChange(e.target.name, e.target.value.toString()+'px')}></TextInput>
                </TextInputWrapper>
              </SectionWrapper>
              <SectionWrapper >
                <ColorThumbnail background={this.state.fontColor}></ColorThumbnail>
                <DropDownSelect isSelectColor fontRoboto name="fontColor" value={this.state.fontColor} onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
                  {data.fontColor.length ? data.fontColor.map((fontColorItem, index) => {
                      return (
                      <DropDownOption value={fontColorItem} key={index}>{fontColorItem} </DropDownOption>
                      )
                  }) : null}
                </DropDownSelect>
              </SectionWrapper>
              <SectionWrapper >
                <TextInputWrapper oneSecond border>
                  <LineHeight />
                  <TextInput fontRoboto type='number' min='0' name='lineHeight' step={25} defaultValue={this.state.lineHeight ? parseInt(this.state.lineHeight) : 100 } onChange={(e) => this.handleChange(e.target.name, e.target.value.toString()+'%')} />
                  <Measure>%</Measure>
                </TextInputWrapper>
                <TextInputWrapper oneSecond>
                  <LetterSpacing/>
                  <TextInput fontRoboto type='number' min='0' name='spacing' step={0.1} defaultValue={this.state.spacing ? parseFloat(this.state.spacing) : 0.6 } onChange={(e) => this.handleChange(e.target.name, e.target.value.toString()+'px')} />
                  <Measure>px</Measure>
                </TextInputWrapper>
              </SectionWrapper>
              <SectionWrapper >
                <AlignOption border onClick={() => this.handleChange('textAlign', 'left')}>
                  <AlignLeft fill={this.getIconColor('left')}></AlignLeft>
                </AlignOption>
                <AlignOption border onClick={() => this.handleChange('textAlign', 'center')}>
                  <AlignCenter fill={this.getIconColor('center')} ></AlignCenter>
                </AlignOption>
                <AlignOption border onClick={() => this.handleChange('textAlign', 'right')}>
                  <AlignRight fill={this.getIconColor('right')} ></AlignRight>
                </AlignOption>
                <AlignOption onClick={() => this.handleChange('textAlign', 'justify')}> 
                  <AlignJustify fill={this.getIconColor('justify')}></AlignJustify>
                </AlignOption>
              </SectionWrapper>
              <SubmitButton onClick={()=>this.handleSubmit()} >Apply Changes</SubmitButton>
            </SideBarWrapper>
        )
    }
}