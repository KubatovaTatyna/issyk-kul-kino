import './OurHistory.scss';
import history1 from '../../../images/history1.jpg';
import history2 from '../../../images/history2.jpg';
import history3 from '../../../images/history3.jpg';
import history4 from '../../../images/history4.jpg';

const OurHistory = () => {
  return ( <div className="OurHistory container">
    <h1 className='text-white'>НАША ИСТОРИЯ</h1>
    <div className='row'>
      <div className='col-md-6 mt-5'><img src={history1} alt='cinema'/></div>
      <div className='col-md-5 mt-5'><img src={history2} alt='cinema'/></div>
    </div>
    <div className='row'>
      <div className='col-md-6 mt-5'><img src={history4} alt='cinema'/></div>
      <div className='col-md-5 mt-5'><img src={history3} alt='cinema'/></div>
    </div>
  </div> );
}

export default OurHistory;