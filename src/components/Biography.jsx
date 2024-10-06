const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt='about Img' />
      </div>

      <div className='banner'>
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          tempora explicabo in error pariatur dolores vero ratione qui,
          voluptatibus soluta? Possimus, provident. Iure aspernatur deleniti
          illo beatae vitae minima accusantium adipisci magnam, ipsum quae rerum
          in. Laudantium tempore expedita optio alias recusandae vel fuga
          accusamus ullam. Repellat voluptate doloribus voluptas?ś
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          perspiciatis sed fugiat. Totam sit odit, vel iusto ab eligendi, cumque
          nulla alias facere ducimus laboriosam rem deserunt, ex maxime dolorum.
          Perferendis dolorum fugit similique porro?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illo.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
