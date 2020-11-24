import React from 'react';
//Components
import TopContent from './TopContent';
import RightContent from './RightContent';
import LeftContent from './LeftContent';
// import Chart from './Chart';
// import MiddleContent from './MiddleContent';
// import OverLay from '../../../modules/OverLay';
// import LeftContent from './LeftContent';
// import RightContent from './RightContent';

function MainContentComponents() {

    return (
        <div className="container-fluid">

            <TopContent />

            <div className="row">
                <section className="col-lg-7 connectedSortable">
                    <LeftContent />
                </section>
                <section className="col-lg-5 connectedSortable">
                    <RightContent />
                </section>
            </div>

        </div>
    )
};
export default MainContentComponents;