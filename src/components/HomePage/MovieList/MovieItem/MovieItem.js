import './MovieItem.scss';

const MovieItem = ({ img, name }) => {
  return (
    <div className='MovieItem col-4'>
      <div className='text-center mb-5'>
        <div className=''>
          <div className='ImgHover'>
            <img src={img} alt='cinema' />
            <div className='HoverText'>
              <h3>"{name}"</h3>
              <a href='/description'>ОПИСАНИЕ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;