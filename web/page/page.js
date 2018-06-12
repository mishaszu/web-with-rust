import React, { Component } from 'react';
import PTag from '../tags/pTag';
import LiTag from '../tags/liTag';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }
    contentCreator () {
        if(!this.props.slide.content) {
            return [];
        }
        return this.props.slide.content.map((e,k) => { 
            if(e.tag === 'h2') {
                return <h2 key={k}>{e.text}</h2>;
            }
            if(e.tag === 'p') {
                return <PTag key={k} content={e.text} />;
            }
            if(e.tag === 'big') {
                return <div key={k} className="center"><h2 className="big">{e.text}</h2></div>;
            }
            if(e.tag === 'li') {
                return <div key={k} className="center"><ul className="ulExtra">
                    {e.text.map((f,o)=> {
                        const color = o%2 === 0 ? '' : 'liExtra';
                        return <li className={color} key={o}>{f}</li>
                        })
                    } 
                </ul></div>
            }
            if(e.tag === 'img') {
                return <div key={k} className="center"><img src={e.src}></img></div>;
            }
            if(e.tag === 'pCenter') {
                return <div key={k} className="center"><PTag className="pSize" key={k} content={e.text} /></div>;
            }
        });
    }
    render() {
        return(
            <div className="page" style={{height: this.props.height, backgroundColor: this.props.slide.bg}}>
                <div className="wrapper">
                    <div className="textArea">
                        <h1>{this.props.slide.title}</h1>
                        {this.contentCreator()}
                    </div>
                </div>
                <style>{`
                    ul {
                        font-size: 1.5em;
                    }
                    .page {
                        display: flex;
                        width: 100%;
                    }
                    .wrapper {
                        height: 70%;
                        margin: auto auto;
                        width: 70%;
                    }
                    .textArea {
                        height: 90%;
                        margin: auto;
                        position: relative;
                        width: 90%;
                    }
                    h1 {
                        height: 10%;
                        text-align: center;
                    }
                    .test {
                        font-family: lato-italic;
                    }
                    .big {
                        font-size: 4em;
                        padding-bottom: 10%;
                    }
                    .center {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 90%;
                        width: 100%;
                    }
                    .center p {
                        font-size: 1.8em;
                    }
                    .ulExtra {
                        padding-bottom: 10%;
                    }
                    .ulExtra li {
                        line-height: 2em;
                    }
                    .liExtra {
                        color: #476b6b;
                    }
                `}</style>
            </div>
        )
    }
}
