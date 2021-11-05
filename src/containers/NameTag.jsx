import React, { Component } from "react";
import Controls from "../components/Controls";
import Display from "../components/Display";

export default class NameTag extends Component {
  state = {
    greeting: "",
    name: "",
    pronouns: "",
    submitGreet: "",
    submitName: "",
    submitPros: "",
  };

  handleGreetingChange = (e) => {
    this.setState({ greeting: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePronounChange = (e) => {
    this.setState({ pronouns: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      submitGreet: this.state.greeting,
      submitName: this.state.name,
      submitPros: this.state.pronouns,
    });
  };

  render() {
    const { name, pronouns, greeting, submitName, submitGreet, submitPros } =
      this.state;
    return (
      <>
        <Controls
          greeting={greeting}
          onGreetingChange={this.handleGreetingChange}
          name={name}
          onNameChange={this.handleNameChange}
          pronouns={pronouns}
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
