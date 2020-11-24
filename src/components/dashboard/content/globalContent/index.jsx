import React from 'react';
import MainContent from './Content';
import { useDispatch } from 'react-redux';

function GlobalContent() {

    let dispatch = useDispatch();

    React.useEffect(() => dispatch({type: 'SET_HEADER', data: false}), []);

    return (
        <div className="content-wrapper" style={{height: 'auto'}}>
            <section className="content">
                <MainContent />
            </section>
        </div>
    )
};

export default GlobalContent;