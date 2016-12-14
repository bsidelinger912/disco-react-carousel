import React, { PropTypes } from 'react';

class Carousel extends React.Component {
  static propTypes: {
    children: PropTypes.array.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
  }

  constructor() {
    super();

    this.state = { page: 0 };

    this.pageRight = this.pageRight.bind(this);
    this.pageLeft = this.pageLeft.bind(this);
  }

  pageRight() {
    const page = this.state.page + 1;

    this.setState({ page });
  }

  pageLeft() {
    const page = Math.max(0, this.state.page - 1);

    this.setState({ page });
  }

  render() {
    const { page } = this.state;
    const { children, itemsPerPage } = this.props;

    const maxPages = Math.ceil(children.length / itemsPerPage);

    const outerMostStyles = {
      width: 'calc(100% + 20px)',
      position: 'relative',
      left: '-10px',
    };

    const outerStyles = {
      overflowX: 'hidden',
      width: '100%',
      position: 'relative',
      padding: '0 40px',
      boxSizing: 'border-box',
    };

    const wrapperStyles = {
      whiteSpace: 'nowrap',
      transition: 'transform ease .5s',
      transform: (page > 0) ? `translate3d(-${100 * page}%, 0px, 0px)` : '',
    };

    const itemWrapperStyles = {
      display: 'inline-block',
      width: `${100 / itemsPerPage}%`,
      padding: '0 5px',
      boxSizing: 'border-box',
    };

    const arrowRightStyles = {
      position: 'absolute',
      right: '0',
      height: 'calc(100% - 4px)',
      width: '35px',
      display: 'flex',
      alignItems: 'center',
      top: '0',
      cursor: 'pointer',
      background: 'rgba(114, 114, 114, 0.5)',
      justifyContent: 'center',
      zIndex: 10,
    };

    const arrowLeftStyles = {
      position: 'absolute',
      left: '0',
      height: 'calc(100% - 4px)',
      width: '35px',
      display: 'flex',
      alignItems: 'center',
      top: '0',
      cursor: 'pointer',
      background: 'rgba(114, 114, 114, 0.5)',
      justifyContent: 'center',
      zIndex: 10,
    };

    const leftPager = (page > 0) ? (
        <div style={arrowLeftStyles} onClick={this.pageLeft}>
            &lt;
        </div>
    ) : null;

    const rightPager = (page < maxPages - 1) ? (
        <div style={arrowRightStyles} onClick={this.pageRight}>
            &gt;
        </div>
    ) : null;

    return (
        <div style={outerMostStyles}>
            <div style={outerStyles}>
                {leftPager}
                <div style={wrapperStyles}>
                    {this.props.children.map((child, i) => <div key={i} style={itemWrapperStyles}>{child}</div>)}
                </div>
                {rightPager}
            </div>
        </div>
    );
  }
}

export default Carousel;
