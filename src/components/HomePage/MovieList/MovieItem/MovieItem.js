import './MovieItem.scss';

const MovieItem = ({ img1, img2, img3, movieName1, movieName2, movieName3 }) => {
  return (
    <div className='MovieItem'>
      <div className='row text-center mb-5'>
        <div className='col-4'>
          <div className='ImgHover'>
            <img src={img1} />
            <div className='HoverText'>
              <h3>"{movieName1}"</h3>
              <a href='#'>ОПИСАНИЕ</a>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='ImgHover'>
            <img src={img2} />
            <div className='HoverText'>
              <h3>"{movieName2}"</h3>
              <a href='#'>ОПИСАНИЕ</a>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='ImgHover'>
            <img src={img3} />
            <div className='HoverText'>
              <h3>"{movieName3}"</h3>
              <a href='#'>ОПИСАНИЕ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;