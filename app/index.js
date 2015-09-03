import React from 'react';

import Header from './components/header';
import ContentBlock from './components/content-block';

export default class App extends React.Component {

  renderContentBlocks() {

    let someData = [ {
      title: "Uno",
      content: "Text stuff for Uno",
      number: 1
    }, {
      title: "Hai",
      content: "Text stuff for Hai",
      number: 2
    }, {
      title: "San",
      content: "Text stuff for San",
      number: 3
    }];

    return someData.map( ( item, i ) => {
      return <ContentBlock key={ i + "content-block" } item={ item } />
    });
  }

  render() {
    return (
      <div>
        <Header />

        { this.renderContentBlocks() }

      </div>
    )
  }

}

