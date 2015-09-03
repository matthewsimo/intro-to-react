import React from 'react';

class ContentBlock extends React.Component {

  render() {

    let { item,  ...other } = this.props;

    return (
      <div>
        <h4>{ item.number } - { item.title } - { item.number }</h4>
        <p>{item.content}</p>
      </div>
    )
  }

}

ContentBlock.propTypes = {
  item: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    number: React.PropTypes.number.isRequired
  })
};


export default ContentBlock;
