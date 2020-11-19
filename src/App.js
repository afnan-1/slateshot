import logo from './logo.svg';
import './App.css';
import Slateshot from './slateshot/Slateshot';
import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function App() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
 
  return (
    <div className="Slateshot__main">
         <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
 <Slateshot username='afnan nadeem' 
    height="180" 
    width="160" 
    srcImg="/assets/jadu.PNG" 
    viewType='edit'
    srcVideo="/assets/jadu.mp4" />

    </animated.div>
   
    </div>
  );
}

export default App;
