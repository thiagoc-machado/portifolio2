import React from 'react';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Developer</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class="uil uil-check"></i>
            <div>
              <h3 className='skills__name'>Django</h3>
              {/* <span className='skills__level'>6</span> */}
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check"></i>
            <div>
              <h3 className='skills__name'>Python</h3>
              {/* <span className='skills__level'>9</span> */}
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check"></i>
            <div>
              <h3 className='skills__name'>Node</h3>
              {/* <span className='skills__level'>8</span> */}
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i class="uil uil-check"></i>
            <div>
              <h3 className='skills__name'>Flask</h3>
              {/* <span className='skills__level'>7</span> */}
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check"></i>
            <div>
              <h3 className='skills__name'>MongoDb</h3>
              {/* <span className='skills__level'>5</span> */}
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check"></i>
            <div>
              <h3 className='skills__name'>MySql</h3>
              {/* <span className='skills__level'>5</span> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Backend;
