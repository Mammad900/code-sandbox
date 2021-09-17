import React from 'react';
import uniqueId from '../uniqueid';
import './checkbox.scss'
export default function CheckBox({checked, children, ...rest}) {
    const [id] = React.useState(uniqueId());
    return (
        <span className="checkbox">
            <input type="checkbox" checked={checked} id={id} {...rest}/>
            <label htmlFor={id}>{children}</label>
        </span>
  );
}