import React, { useState } from 'react';
//import { Counter } from './features/counter/Counter';

function App() {
  const [locGeo, setLocGeo] = useState('');
  const [loc, setLoc] = useState(`https://maps.google.com/maps?q=jimma+&t=&z=14&ie=UTF8&iwloc=&output=embed`);
  const [open, setOpen] = useState(false);
  
 

  const onOpen=()=>{
    setOpen(!open)
  }

  const onSearch=(e)=>{
    e.preventDefault();
    setLoc(`https://maps.google.com/maps?q=${locGeo}%20hotels+&t=&z=14&ie=UTF8&iwloc=&output=embed`)


  }

  const onHotel=(e)=>{
    e.preventDefault()
    setLoc(`https://maps.google.com/maps?q=jimma%20hotels+&t=&z=14&ie=UTF8&iwloc=&output=embed`)
  }
  const onPharmacy=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20pharmacy+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onBanck=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20bancks+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onClinic=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20clinic+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onGasStation=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20GasStation+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onSuperMarket=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20superMarket+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onCondomineum=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20Condomineum+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onGarage=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20garage+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  const onSchool=()=>{
    setLoc(`https://maps.google.com/maps?q=jimma%20school+&t=&z=14&ie=UTF8&iwloc=&output=embed`)

  }
  //<div ><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
  //          "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html"
  //var chy2=`https://maps.google.com/maps?q=${loc2?.latitude},${loc2?.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
//    <iframe className='iframeMap' width="100%" height="100%" id="gmap_canvas" src={''} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"  ></iframe>:<div className='iframeMapNoInternet'  style={{width:'100%',height:'90%',marginBottom:'5%'}}>No Connection</div>
/*
<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=hotels%20in%20jimma+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe></div>
*/
  return (
    <div className="App conAll">
    <div className='topBarCon'>
      <div className='top1'>My Map</div>

      <form className='top2' onSubmit={onSearch}>
        <div className='click' onClick={onOpen}>
          <div className='clickLine'></div>
          <div className='clickLine'></div>

        </div>
        <input type="text" onChange={(e)=>setLocGeo(e.target.value)} placeholder='Search'/>
        <button type='submit'>🔍 </button>
      </form>

    </div>
    <iframe className='mapCon' width="100%" height="88%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={loc}></iframe>
    {open?<ul className='ulCon'>
  <li onClick={onHotel}>Hotels</li>
  <li onClick={onPharmacy}>Pharmacy</li>
  <li onClick={onBanck}>Bancks</li>
  <li onClick={onClinic}>Clinic</li>
  <li onClick={onGasStation}>GasStation</li>
  <li onClick={onSuperMarket}>SuperMarket</li>
  <li onClick={onCondomineum}>Condomineum</li>
  <li onClick={onGarage}>Garage</li>
  <li onClick={onSchool}>Schools</li>
</ul>:'' }
    </div>
  );
}

export default App;







