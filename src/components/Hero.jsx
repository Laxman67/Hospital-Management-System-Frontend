const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          delectus adipisci ipsum explicabo dolorum voluptatem, sapiente totam
          ex sequi incidunt alias quod natus, nostrum eligendi dicta mollitia
          repudiandae suscipit illo odit accusamus nam nisi eos sed. Quia
          provident fuga sapiente ea, dignissimos, aperiam omnis blanditiis
          voluptatibus consequatur dolor architecto vero! ś
        </p>
      </div>

      <div className='banner'>
        <img src={imageUrl} alt='Hero' className='animated-image' />
        <span>
          <img src='./Vector.png' alt='vector' />
        </span>
      </div>
    </div>
  );
};

export default Hero;
