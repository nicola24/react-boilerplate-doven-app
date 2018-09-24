/**
 *
 * Submit
 *
 */

import React from 'react';

import Form from 'components/Form/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class Submit extends React.Component {
  constructor() {
    super();
    this.state = {
      stateDescription: '',
    };
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDescription(e) {
    this.setState({ stateDescription: e.target.value });
  }

  handleSubmit(e) {
    const { stateDescription } = this.state;

    fetch('/insertstring', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: stateDescription,
      }),
    });

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form
          onChangeDescription={this.handleDescription}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Submit;
