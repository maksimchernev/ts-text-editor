import React from 'react';
import './App.css';
import styled from 'styled-components';
import TextEditor from './components/TextEditor';
import { TextStyles } from './components/Interfaces';
import ActionSideBar from './components/ActionSideBar';
import { initialDataString } from './data';

const Wrapper = styled.div`
  background-color: #F4F4F4;
  height: 100vh;
  display: flex;
  
  align-items: center;
  width: 100%;
`
type AppState = {
  styles: TextStyles
  text: string
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this)
    this.state = JSON.parse(window.localStorage.getItem('state') || initialDataString)
  }
  setState(state: AppState) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
  handleApply = (newStyles: TextStyles) => {
    this.setState({...this.state, styles: newStyles})
  }
  handleEditorChange = (newText: string) => {
    this.setState({...this.state, text: newText})
  }
  render(): React.ReactNode {
    return (
      <Wrapper>
        <TextEditor appState={this.state} handleEditorChange={this.handleEditorChange}></TextEditor>
        <ActionSideBar styles={this.state.styles} handleApply={this.handleApply}/>
      </Wrapper>
    );
  }
}

export default App;
