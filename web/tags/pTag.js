import React from 'react';

export default props => {
    function parseContent() {
        let arr = [];
        const p1 = /!1!/;
        const p2 = /!2!/;
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
            arr.push(<p key={k} className="extraP">{e}</p>);
        });
        return arr;
    }
    return <div>{ parseContent() }
        <style>{`
            .extraP {
                display: inline;
            }
            .style1 {
                color: #800080;
            }
            .style2 {
                color: blue;
            }
        `}</style>
    </div>
}
