import React from 'react';
import { useGlobal, useEffect } from 'reactn';
import { fabric } from 'fabric';
const Tools = () => {
  const [canvas, setCanvas] = useGlobal('');  
  
  useEffect(() => {
      setCanvas(initCanvas());
    }, []);  
    
  const initCanvas = () => (
      new fabric.Canvas('canvas', {
        height: 500,
        width: 800,
        backgroundColor: 'white'
      })
  )

  function objectAddedListener(ev) {
    let target = ev.target;
    console.log('left', target.left, 'top', target.top, 'width', target.width, 'height', target.height);
  }

  function objectMovedListener(ev) {
    let target = ev.target;
    console.log('left', target.left, 'top', target.top, 'width', target.width * target.scaleX, 'height', target.height * target.scaleY);
  }

  function serializeCanvas(c) {
    // var canvasJson = JSON.stringify(c);
    var json = c.toJSON();
    console.log(json.objects[0]);
    // console.log(canvasJson);
  }
  
  const addRect = canvi => {
      const rect = new fabric.Rect({
        height: 280,
        width: 200,
        top: 100,
        left: 300,
        fill: 'yellow',
        id: 123
      });
      canvi.on('object:added', objectAddedListener);
      canvi.on('object:modified', objectMovedListener);
      canvi.add(rect);
      canvi.renderAll();
      serializeCanvas(canvas);
  }
    return (
        <div>
        <div className="logo" />
        <div className="canvas">
                <canvas id="canvas" />
        </div>
        <div className="tools">
          <svg id="arrow" width={51} height={50} viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3.05176e-05" width={51} height={50} fill="#201F24" />
            <path d="M35.836 28.9811L24.9762 18.2587L21.0652 14.5544L21.0322 14.5165C20.7571 14.2434 20.3986 14.0674 20.012 14.0158C19.6255 13.9642 19.2325 14.0398 18.8938 14.2309C18.5552 14.422 18.2897 14.718 18.1386 15.0731C17.9875 15.4281 17.959 15.8224 18.0577 16.195V36.4276C18.0595 36.5048 18.0767 36.5808 18.1084 36.6514C18.14 36.722 18.1855 36.7857 18.2421 36.8389C18.2988 36.892 18.3655 36.9336 18.4385 36.9612C18.5115 36.9889 18.5893 37.002 18.6675 36.9998H21.1091C21.1873 37.002 21.2651 36.9889 21.338 36.9612C21.411 36.9336 21.4778 36.892 21.5344 36.8389C21.5911 36.7857 21.6366 36.722 21.6682 36.6514C21.6999 36.5808 21.7171 36.5048 21.7188 36.4276V21.2634L21.6969 20.1353L33.246 31.5383C33.3028 31.5916 33.3696 31.6333 33.4428 31.661C33.5159 31.6888 33.5938 31.702 33.6722 31.7C33.7505 31.698 33.8276 31.6808 33.8992 31.6493C33.9707 31.6178 34.0353 31.5727 34.0892 31.5166L35.814 29.8136C35.8709 29.7604 35.9165 29.6966 35.9484 29.626C35.9803 29.5553 35.9978 29.4792 35.9998 29.4018C36.0018 29.3245 35.9884 29.2475 35.9603 29.1754C35.9322 29.1032 35.89 29.0371 35.836 28.9811Z" fill="#9C14F1" />
          </svg>
          <svg style={{position: 'absolute', top: '25%'}} width={80} height={3} viewBox="0 0 80 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.50003" x2={80} y2="1.50003" stroke="#171719" strokeWidth={3} />
          </svg> 
          <svg onClick={() => addRect(canvas)} id="shape" width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3.05176e-05" width={51} height={51} fill="#201F24" />
            <rect x={14} y={13} width={25} height={25} rx={4} stroke="#66676C" strokeWidth={4} />
          </svg>  
          <svg id="pen" width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3.05176e-05" width={51} height={51} fill="#201F24" />
            <path d="M35.0038 29.0892L29.0532 35.0398C28.911 35.1833 28.729 35.2808 28.5308 35.3198C28.3326 35.3589 28.1273 35.3376 27.9413 35.2589L19.1231 30.6325C18.8578 30.5171 18.6203 30.346 18.4267 30.131C18.2331 29.9159 18.088 29.6617 18.0011 29.3857C17.1048 26.5553 12.6637 17.7069 12.7884 17.5923L14.089 16.295C14.1204 16.2634 14.1576 16.2384 14.1987 16.2213C14.2397 16.2042 14.2838 16.1953 14.3283 16.1953C14.3728 16.1953 14.4168 16.2042 14.4579 16.2213C14.4989 16.2384 14.5362 16.2634 14.5675 16.295L20.8214 22.5388C20.5407 23.1706 20.4651 23.8745 20.6054 24.5515C20.7456 25.2284 21.0945 25.8444 21.6031 26.3127C22.2425 26.8821 23.0778 27.1816 23.9334 27.148C24.7889 27.1145 25.5982 26.7506 26.1911 26.1329C26.7839 25.5151 27.1143 24.6916 27.1127 23.8354C27.111 22.9792 26.7776 22.1569 26.1824 21.5414C25.7091 21.0702 25.1041 20.7535 24.4472 20.6332C23.7903 20.5129 23.1123 20.5946 22.5028 20.8675L16.2489 14.6035C16.2173 14.5722 16.1923 14.5349 16.1752 14.4939C16.1581 14.4528 16.1492 14.4087 16.1492 14.3643C16.1492 14.3198 16.1581 14.2757 16.1752 14.2347C16.1923 14.1936 16.2173 14.1564 16.2489 14.125L17.5462 12.8244C17.6709 12.6997 26.5193 17.1408 29.3396 18.0371C29.6162 18.1236 29.871 18.2685 30.0867 18.4621C30.3024 18.6557 30.474 18.8934 30.5897 19.1591L35.2262 27.9638C35.3076 28.1518 35.3299 28.3601 35.2901 28.5611C35.2504 28.7621 35.1506 28.9463 35.0038 29.0892Z" fill="#66676C" />
            <path d="M33.3521 39.5362L39.5469 33.3414C39.8101 33.0782 39.8101 32.6515 39.5469 32.3883L37.3763 30.2177C37.1132 29.9546 36.6865 29.9546 36.4233 30.2177L30.2284 36.4126C29.9653 36.6758 29.9653 37.1025 30.2284 37.3656L32.399 39.5362C32.6622 39.7994 33.0889 39.7994 33.3521 39.5362Z" fill="#66676C" />
          </svg>    
          <svg style={{position: 'absolute', top: '75%'}} width={80} height={3} viewBox="0 0 80 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.50003" x2={80} y2="1.50003" stroke="#171719" strokeWidth={3} />
          </svg> 
          <svg id="plus" width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3.05176e-05" width={51} height={51} fill="#201F24" />
            <rect x={24} y={12} width={4} height={28} fill="#66676C" />
            <rect x={12} y={28} width={4} height={28} transform="rotate(-90 12 28)" fill="#66676C" />
          </svg>            
        </div>
      </div>
    );
  }

export default Tools;