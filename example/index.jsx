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

            <section>
                <h3>Square images</h3>
                <Carousel itemsPerPage={3} className="square">
                    <div className="item">one</div>
                    <div className="item">two</div>
                    <div className="item">three</div>
                    <div className="item">four</div>
                    <div className="item">five</div>
                    <div className="item">six</div>
                    <div className="item">seven</div>
                    <div className="item">eight</div>
                    <div className="item">nine</div>
                    <div className="item">ten</div>
                </Carousel>
            </section>

            <section>
                <h3>images with text beneath</h3>
                <Carousel itemsPerPage={3} className="textBeneath">
                    <div className="item"><div className="image" />one</div>
                    <div className="item"><div className="image" />two</div>
                    <div className="item"><div className="image" />three</div>
                    <div className="item"><div className="image" />four</div>
                    <div className="item"><div className="image" />five</div>
                    <div className="item"><div className="image" />six</div>
                    <div className="item"><div className="image" />seven</div>
                    <div className="item"><div className="image" />eight</div>
                    <div className="item"><div className="image" />nine</div>
                    <div className="item"><div className="image" />ten</div>
                </Carousel>
            </section>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-root'));
