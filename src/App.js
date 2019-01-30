// import React, {useState, useEffect} from "react";
// import "./App.css";
// import AppInput from './AppInput';

// const AppInput = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState(""); 

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("submission successful", {name, email});
//   };

//   const loadData = () => {

//     console.log('props', props);
//     setName('Dhilip' );
//     setEmail('Kmr@sfe.ee');
//     return () => console.log('cleaned');
//   };
//   // const loadData1 = () => {
//     // useEffect(loadData);
//   // }
//   useEffect(loadData, [props]); // After component renders it runs (i.e) after return args (func, array) => empty array run once, no second arg run during didmount and didupdate
//   // console.log(name);
//   return (
//     <div className="App">
//       <h1> React Hooks Meetup</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value )}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={e => setEmail(e.target.value )}
//         />
//         <br />
//         <button type="submit"> Submit </button>
//         {/* <button type="submit" onClick={loadData1}> Change </button> */}
//       </form>
//     </div>
//   );
// }

// const urls = [
//   "AWS", 
//   "PRISMA"
// ];
// const App = () => {
//   const [index, setIndex] = useState(0);
//   const [show, setShow] = useState(true);
//   console.log(index);
//   return(
//     <div className="App">
//       {show && <AppInput url={urls[index]} />}
//       <button onClick={() => {setIndex((index) => index === 0 ? 1 : 0);setShow((index) => index === 0 ? 1 : 0);}}> Toggle Cloud Provider </button>
//     </div>
//   )
// }

// export default App;


import React, {useReducer } from "react";
import "./App.css";

const App = () => {
  const initialState = {name: '', email: ''}
  const reducer = (state, action) => {
    console.log(state, action);
    switch(action.type) {
      case 'name': 
        return Object.assign({}, state, {name: action.val});
        break;
      case 'email': 
      return Object.assign({}, state, {email: action.val});
      break;
      default:
      break;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);    // better than usestate why?
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submission successful", state.name, state.email);
  };

  return (
    <div className="App">
      <h1> React Hooks Meetup </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={e => dispatch({type: 'name', val: e.target.value })}
        />
        <br />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={e => dispatch({type: 'email', val: e.target.value })}
        />
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;