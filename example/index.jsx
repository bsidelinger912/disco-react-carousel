import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from '../src/index';

class App extends React.Component {
  render() {
    return (
        <div className="page">
            <h1>Disco React Carousel</h1>
            <p>
                This is a carousel that powers our sites, it focuses around performance over configuration options in order
                to power our user experience most effectively.
            </p>

            <Carousel>
                <div className="item">one</div>
                <div className="item">two</div>
                <div className="item">three</div>
                <div className="item">four</div>
                <div className="item">five</div>
            </Carousel>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-root'));
