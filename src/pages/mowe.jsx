import UserNav from '../components/userNav';
import Tools from '../components/tools';
import Timeline from '../components/timeline';
import SpeedGraph from '../components/speedGraph';
import LayerBox from '../components/layerBox';
import Properties from '../components/properties';
import '../styles/mowe.css';
function Mowe() {
    return (
        <div>
            <h1 className="title">File Name*</h1>
            <UserNav />
            <canvas id="canvas" />
            <Tools/>
            <Properties />
            <SpeedGraph/>
            <Timeline/>
            <LayerBox/>
        </div>
    );
  }

  export default Mowe;