import React, { Component } from 'react';
import Page from './page/page';

export default class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: 0,
            height: this.props.appData.slidesData.length * window.innerHeight,
            active: 0
        };
    }
    componentDidMount(props) {
        document.addEventListener("keypress", this._key.bind(this), false);
    }
    componentWillUnmount() {
        document.removeEventListener("keypress", this._key.bind(this), true);
    }
    _key(e) {
        if (e.key === "w") {
            const active = this.state.active === 0 ? 0 : this.state.active - 1;
            this.setState({move: active * window.innerHeight, active: active});
        } else if (e.key === "s") {
            const active = this.state.active === this.props.appData.slidesData.length - 1 ? this.props.appData.slidesData.length - 1 : this.state.active + 1;
            this.setState({move: active * window.innerHeight, active: active});
        }
    }
    render () {
        return (
            <div className="dash" style={{top: `-${this.state.move}px`, height: this.state.height}}>
                { this.props.appData.slidesData.map( (i,k) => <Page key={k} id={k} slide={i} height={window.innerHeight} active={this.state.active} />)}
                <style>{`
                    .dash {
                        height: 200%;
                        position: relative;
                        transition: all 1s ease 0s;
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}
