import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import  CommentDetail from './ComponentDetail';
import Approve from './ApprovalCard';
import Disapprove from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
           <Approve>
           <CommentDetail author='Jane' time='1 PM'/>
         
           <CommentDetail author='Aish' time='2 PM'/>
           </Approve>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
