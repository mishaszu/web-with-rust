import React, { Component } from 'react'

export default class Page extends Component {
    constructor(props) {
        super(props);
    }
    doThis () {
        if(!this.props.slide.content) {
            return;
        }
        return this.props.slide.content.map((e,k) => { 
            if(e.tag === "h2") {
                return <h2>{e.text}</h2>
            }
            if(e.tag === "p") {
                return <p>{e.text.join("")}</p>
            }
        });
    }
    render() {
        return(
            <div className="page" style={{height: this.props.height, backgroundColor: this.props.slide.bg}}>
                <div className="wrapper">
                    <h1>{this.props.slide.title}</h1>
                    {this.doThis()}
                </div>
                <style>{`
                    .page {
                        display: flex;
                        width: 100%;
                    }
                    .wrapper {
                        height: 70%;
                        margin: auto auto;
                        width: 70%;
                        border: 1px black solid;
                    }
                    h1 {
                        text-align: center;
                    }
                    .test {
                        font-family: lato-italic;
                    }
                `}</style>
            </div>
        )
    }
}
