import './AboutVideo.scss';

const AboutVideo = () => {
  return (<div className='AboutVideo' >
    {/* <video width="50%">
      <source src={video} type="video/mp4" />
    </video> */}
    {/* <img src={video} alt='cinema'/> */}
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item videoAboutCinema" src="https://www.youtube.com/embed/FApaCgkVPow"  title='video about cinema' allowfullscreen></iframe>
    </div>
  </div>);
}

export default AboutVideo;