import React from 'react';

const Approve = props => {
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic blue button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export const Disapprove=()=>{
    return <div>Hello world.......</div>;
}

export default Approve;
