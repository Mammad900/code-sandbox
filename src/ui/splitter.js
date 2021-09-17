import React from 'react';
import './splitter.scss';
export default function Splitter({children, ...props}) {
    return <div className="splitter" {...props}>{children}</div>;
}

Splitter.Section= function SplitterSection({children, ...props}) {
    return <div className="splitter-section" {...props}>
        <div className="section-content">{children}</div>
    </div>;
}