import UserNav from '../components/mowe/userNav';
import Tools from '../components/mowe/tools';
import Timeline from '../components/mowe/timeline';
import SpeedGraph from '../components/mowe/speedGraph';
import LayerBox from '../components/mowe/layerBox';
import Properties from '../components/mowe/properties';

import '../styles/mowe.css';
const Mowe = () => {
    
    return (
        <div>
            <h1 className="title">File Name*</h1>
            <UserNav />
            <Tools  />
            <Properties />
            <SpeedGraph/>
            <Timeline/>
            <LayerBox/>
        </div>
    );
  
}
export default Mowe;