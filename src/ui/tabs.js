import React from 'react';
import './tabs.scss'

export default function TabBar({ children, currentTab, onChange, ...rest }) {
    return (
        <div className="tabs" {...rest}>
            {children.map(child => {
                let {title, id, ...rest} = child.props;
                return <TabBar.Tab key={id} id={id} title={title} onSelect={onChange} selected={id===currentTab} {...rest}/>
            })} 
        </div>
    );
}

TabBar.Tab= function Tab({ id, onSelect, selected, title, ...rest }) {
    return (
        <div className="tab" data-selected={selected} onMouseDown={()=>onSelect(id)} {...rest}>{title}</div>
    );
};