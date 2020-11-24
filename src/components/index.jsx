import React from 'react';
//react-helmet
import { Helmet } from 'react-helmet';
//Components
import Layout from './Layout';

function CovidMonitoring() {
    return (
        <div className="main">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Covid 19 Monitoring</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Layout />
        </div>
    )
};

export default CovidMonitoring;