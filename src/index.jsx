import React, { PropTypes } from 'react';

class Carousel extends React.Component {
  static propTypes: {
    children: PropTypes.array.isRequired,
  }

  render() {
    const outerStyles = {
      overflowX: 'hidden',
      width: '100%',
    };

    const wrapperStyles = {
      whiteSpace: 'nowrap',
    };

    const itemWrapperStyles = {
      display: 'inline-block',
      width: '30%',
      padding: '0 5px',
      boxSizing: 'border-box',
    };

    return (
        <div style={outerStyles}>
            <div style={wrapperStyles}>
                {this.props.children.map((child, i) => <div key={i} style={itemWrapperStyles}>{child}</div>)}
            </div>
        </div>
    );
  }
}

export default Carousel;
