import React from 'react';

export const Icon = (props) => {
    const { icon } = props;
    return (
        <span className="icon-indicator">
                <i className={ "icon-" + icon }/>
            </span>
    );
};