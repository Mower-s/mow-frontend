function SpeedGraph() {
    return (
        <div className="speed-graph">
        <svg style={{marginTop: '3.5%', marginLeft: '2%'}} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width={24} height={24} fill="#231F24" />
          <path d="M19.0984 16.6927H18.5131C16.6168 16.6927 14.6561 16.4001 13.1608 14.2609L12.3853 13.2308L11.5074 12.1481C10.913 11.3991 10.1565 10.7946 9.29487 10.38C8.43322 9.96536 7.4888 9.75145 6.5326 9.75433H6V8.61598H6.56771C7.6932 8.61405 8.8045 8.86713 9.81817 9.35623C10.8318 9.84532 11.7215 10.5577 12.4204 11.4399L13.2983 12.5344L14.0972 13.5937C15.101 15.0276 16.2978 15.5544 18.5277 15.5544H19.113L19.0984 16.6927Z" fill="#66676C" />
          <rect x={3} y={3} width={18} height={18} rx={1} stroke="#66676C" strokeWidth="1.3" />
        </svg>  
        <h1 className="speed-graph-title">speed graph</h1>  
        <svg style={{position: 'absolute', left: '33%'}} width={3} height={55} viewBox="0 0 3 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.5" y1="-6.55671e-08" x2="1.5" y2={52} stroke="#171719" strokeWidth={3} />
        </svg>
        <svg id="rewind" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width={24} height={24} fill="#201F24" />
          <path d="M6 12L18 5.0718L18 18.9282L6 12Z" fill="#66676C" />
          <rect x={4} y={5} width={2} height={14} fill="#66676C" />
        </svg>
        <svg id="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width={24} height={24} fill="#201F24" />
          <path d="M20 12L8 18.9282L8 5.0718L20 12Z" fill="#66676C" />
        </svg>
        <svg id="next" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width={24} height={24} fill="#201F24" />
          <path d="M18 12L6 18.9282L6 5.0718L18 12Z" fill="#66676C" />
          <rect x={18} y={5} width={2} height={14} fill="#66676C" />
        </svg>
        <h1 className="timer">00:00:00s</h1>                                        
      </div>
    );
  }

  export default SpeedGraph;