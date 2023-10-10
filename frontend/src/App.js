// import "./App.css";
// import Homepage from "./Pages/Homepage";
// import { Route } from "react-router-dom";
// import Chatpage from "./Pages/Chatpage";

// function App() {
//   return (
//     <div className="App">
//       <Route path="/" component={Homepage} exact />
//       <Route path="/chats" component={Chatpage} />
//     </div>
//   );
// }

// export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Homepage />} exact/>
      <Route path='/chats'  element={<Chatpage />}/>
      </Routes>
    </div>
  );
}

export default App;
