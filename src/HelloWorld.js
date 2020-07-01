import React from "react";
import {setTechnology} from './actions';
import {store} from './store';


const set_technology=(event)=>{
console.log(event.target.name);
  store.dispatch(setTechnology('arg'));
}


const HelloWorld=(props) =>{

  return (
    <div className="hello-world">
      Hello World <span className="hello-world__tech"></span>
      <div className='button'>
<button className="btn elm" name='Elm'  onClick={set_technology()}>Elm</button>
<button className="btn react" name='React' onClick={set_technology()}>React</button>
<button className="btn redux" name='Redux' onClick={set_technology()}>Redux</button>
      </div>
    </div>
  )
};



export default HelloWorld;
