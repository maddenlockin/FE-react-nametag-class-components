import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
  state = {
    // greeting: '',
    // name: '',
    // pronouns: '',
    submitGreet: '',
    submitName: '',
    submitPros: '',
  };

  handleGreetingChange = (e) => {
    this.setState({ submitGreet: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ submitName: e.target.value });
  };

  handlePronounChange = (e) => {
    this.setState({ submitPros: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      submitGreet: this.state.submitGreet,
      submitName: this.state.submitName,
      submitPros: this.state.submitPros,
    });
  };

  render() {
    const { submitName, submitGreet, submitPros } =
      this.state;
    return (
      <>
        <Controls
          submitGreet={submitGreet}
          onGreetingChange={this.handleGreetingChange}
          submitName={submitName}
          onNameChange={this.handleNameChange}
          submitPros={submitPros}
          onPronounChange={this.handlePronounChange}
          onSubmit={this.handleSubmit}
        />
        <Display
          submitGreet={submitGreet}
          submitName={submitName}
          submitPros={submitPros}
        />
      </>
    );
  }
}
