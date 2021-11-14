import css from './grid.module.css'
// import Image from 'next/image'

import HorizontalScroll from 'react-scroll-horizontal'

export default function Grid() {
  const images = [
    {
      src: '/images/underworld.jpg',
      description: 'Underworld',
    },
    {
      src: '/images/dreamworld.jpg',
      description: 'Dreamworld',
    },
    {
      src: '/images/underworld.jpg',
      description: 'Underworld',
    },
    {
      src: '/images/dreamworld.jpg',
      description: 'Dreamworld',
    },
  ]

  return (
    <div className={css.root}>
      <HorizontalScroll reverseScroll className={css.scrollContainer}>
        <div className={css.stage}>
          {images.map((image, index) => (
            <div key={index} className={css.imageContainer}>
              <img
                className={css.image}
                src={image.src}
                alt={image.description}
              />
              <p className={css.description}>{image.description}</p>
            </div>
          ))}
        </div>
      </HorizontalScroll>
    </div>
  )
}

{
  /* <img
  key={index}
  className={css.image}
  src={image.src}
  alt={image.description}
/> */
}
