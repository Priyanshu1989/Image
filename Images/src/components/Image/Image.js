import React from 'react';

import './Image.css';

const image = (props) => (
    <article className="Image">
        <img src={props.disp} width="100" height="50"/>
    </article>
);

export default image;