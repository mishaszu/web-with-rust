import React from 'react';

export default props => {
    function parseContent() {
        let arr = [];
        const p1 = /!1!/;
        const p2 = /!2!/;
        const p0 = /!0!/;
        props.content.forEach((e,k) => {
            const c1 = e.match(p1);
            if (c1) {
                e = e.replace(p1,'');
                arr.push(<p key={k} className="extraP style1">{e}</p>);
                return;
            }
            const c2 = e.match(p2);
            if (c2) {
                e = e.replace(p2,'');
                arr.push(<p key={k} className="extraP style2">{e}</p>);
                return;
            }
            const c0 = e.match(p0);
            if (c0) {
                e = e.replace(p0,'');
                arr.push(<p key={k} className="extraP style0">{e}</p>);
                return;
            }
            arr.push(<p key={k} className="extraP">{e}</p>);
        });
        return arr;
    }
    return <div className="pWrapper">{ parseContent() }
        <style>{`
            .pWrapper {
                margin-bottom: 10px;
            }
            .extraP {
                display: inline;
            }
            .style0 {
                padding: 4px;
                color: #002133;
                background-color: #efeff5;
                margin-left: 20px;
                margin-right: 20px;
            }
            .style1 {
                color: #800080;
            }
            .style2 {
                color: #0077b3;
            }
        `}</style>
    </div>
}
