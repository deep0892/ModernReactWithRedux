import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

// Button.contextType = LanguageContext;

export default Button;
