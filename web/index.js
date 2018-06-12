import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Dash from './dash'
import slidesData from './data/slides.data'

const App = () => <div className="appWrapper">
    <Dash appData={{slidesData}}/>
    <style>{`
        html, body, div {
            margin: 0;
            padding: 0;
        }
        html, body {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        h1 {
            color: #52527a;
            font-family: "lato-light";
            font-size: 2em;
            text-align: center;
        }
        h2 {
            font-family: "lato-medium";
            font-size: 2.5em;
            text-align: center;
        }
        p {
            font-family: "lato";
            font-size: 1.5em;
        }
        ul {
            font-family: "lato";
            font-size: 1.5em;
        }
        #app {
            height: 100%;
        }
        .appWrapper {
            height: 100%;
        }
        .type1 {
            color: #0099ff;
        }
        .type2 {
            color: #cc0066;
        }
    `}</style>
</div>

ReactDom.render(<App />,document.getElementById('app'));
