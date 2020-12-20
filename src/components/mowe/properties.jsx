import AlignProperties from './alignProperties';
function Properties() {
    return (
        <div className="properties-box">
            <h1 className="properties-title" style={{top: '2%'}}>Align</h1>
            <AlignProperties/>
            <svg style={{position: 'relative', top: '5%'}} width={350} height={5} viewBox="0 0 372 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.991914" y1="3.50005" x2="371.992" y2="1.50005" stroke="#171719" strokeWidth={3} />
            </svg> 
            <h1 className="properties-title" style={{top: '15%'}}>Properties</h1>
        </div>
    );
  }

  export default Properties;