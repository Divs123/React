
// import React from 'react';

import { Header } from "./component/Header";
import { Home } from "./component/Home";
//Base component in react package - React.component
class App extends React.Component{
    render(){
        return (
            <div className="container">
               <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                         <Header/>
                    </div>
               </div>
               <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                         <Home/>
                    </div>
               </div>
            </div>  
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
// render(<App/>, window.document.getElementById('root'));

//  ReactDOM.render(
//         <h1>Hellooooooo, world!</h1>,
//         document.getElementById('root')
//     );