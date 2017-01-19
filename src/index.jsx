import React, { PropTypes } from 'react';

class Carousel extends React.Component {
  static propTypes: {
    children: PropTypes.array.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    className: PropTypes.string,
    peek: PropTypes.boolean,
    arrowLeftElem: PropTypes.node,
    arrowRightElem: PropTypes.node,
  }

  static defaultProps = {
    className: '',
    peek: false,
    arrowLeftElem: '&lt;',
    arrowRightElem: '&gt',
  }

  constructor() {
    super();

    this.state = { page: 0 };

    this.pageRight = this.pageRight.bind(this);
    this.pageLeft = this.pageLeft.bind(this);
  }

  /* componentWillReceiveProps(nextProps) {
    if (this.props.children.length !== nextProps.children.lenght) {
      this.checkPageBlank();
    }
  }*/

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
    const { children, itemsPerPage, peek, className, arrowLeftElem, arrowRightElem } = this.props;

    const maxPages = Math.ceil(children.length / itemsPerPage);

    const maskStyles = { overflowX: 'hidden', width: '100%' };
    const contentStyles = {
      whiteSpace: 'nowrap',
      transform: (page > 0) ? `translate3d(-${100 * page}%, 0px, 0px)` : '',
    };

    const itemWrapperStyles = {
      display: 'inline-block',
      width: `${100 / itemsPerPage}%`,
      padding: '0 5px',
      boxSizing: 'border-box',
    };

    // @TODO: figure out what's here and what's in css
    const arrowRightStyles = {
      position: 'absolute',
      right: '0px',
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
      left: '0px',
      height: 'calc(100% - 3px)',
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
            {arrowLeftElem}
        </div>
    ) : null;

    const rightPager = (page < maxPages - 1) ? (
        <div style={arrowRightStyles} onClick={this.pageRight}>
            {arrowRightElem}
        </div>
    ) : null;

    return (
        <div className={`carousel ${className} ${peek ? 'peek' : ''}`} style={{ position: 'relative' }}>
            <div className="carouselMask" style={maskStyles}>
                {leftPager}
                <div style={contentStyles} className="carouselContent">
                    {this.props.children.map((child, i) => <div key={i} className="carouselItem" style={itemWrapperStyles}>{child}</div>)}
                </div>
                {rightPager}
            </div>
        </div>
    );
  }
}

export default Carousel;
