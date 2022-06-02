// import ReactCardFlip from "react-card-flip";
// import YOUR_FRONT_COMPONENT from "../src/components/YOUR_FRONT_COMPONENT";
// import YOUR_BACK_COMPONENT from "../src/components/YOUR_BACK_COMPONENT";

import React from 'react'
import { SingleView } from './views/SingleView'

const App = () => {
  return (
    <SingleView />
  )
}

export default App


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isFlipped: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
//   }

//   render() {
//     return (
//       <div>
//         <ReactCardFlip
//           isFlipped={this.state.isFlipped}
//           flipDirection="vertical"
//         >
//           <YOUR_FRONT_COMPONENT className='border-2 border-black'>
//             This is the front of the card.
//             <button onClick={this.handleClick}>Click to flip</button>
//           </YOUR_FRONT_COMPONENT>

//           <YOUR_BACK_COMPONENT className='border-2 border-black'>
//             This is the back of the card.
//             <button onClick={this.handleClick}>Click to flip</button>
//           </YOUR_BACK_COMPONENT>
//         </ReactCardFlip>
//       </div>
//     );
//   }
// }

