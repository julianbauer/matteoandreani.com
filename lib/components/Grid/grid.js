import css from './grid.module.css'
import Image from 'next/image'
import { useState } from 'react'

import HorizontalScroll from 'react-scroll-horizontal'

export default function Grid() {
  const [activeImage, setActiveImage] = useState()
  const [overlayActive, setOverlayActive] = useState(false)

  const images = [
    {
      src: '/images/image-1.jpg',
      description: 'Underworld',
    },
    {
      src: '/images/image-2.jpg',
      description: 'Dreamworld',
    },
    {
      src: '/images/image-3.jpg',
      description: 'Dreamworld',
    },
    {
      src: '/images/image-4.jpg',
      description: 'Dreamworld',
    },
    {
      src: '/images/image-5.jpg',
      description: '',
    },
    {
      src: '/images/image-6.jpg',
      description: '',
    },
    {
      src: '/images/image-7.jpg',
      description: '',
    },
    {
      src: '/images/image-8.jpg',
      description: '',
    },
    {
      src: '/images/image-9.jpg',
      description: '',
    },
    {
      src: '/images/image-10.jpg',
      description: '',
    },
    {
      src: '/images/image-11.jpg',
      description: '',
    },
    {
      src: '/images/image-12.jpg',
      description: '',
    },
    {
      src: '/images/image-13.jpg',
      description: '',
    },
    {
      src: '/images/image-14.jpg',
      description: '',
    },
    {
      src: '/images/image-15.jpg',
      description: '',
    },
    {
      src: '/images/image-16.jpg',
      description: '',
    },
    {
      src: '/images/image-17.jpg',
      description: '',
    },
    {
      src: '/images/image-18.jpg',
      description: '',
    },
    {
      src: '/images/image-19.jpg',
      description: '',
    },
    {
      src: '/images/image-20.jpg',
      description: '',
    },
    {
      src: '/images/image-21.jpg',
      description: '',
    },
    {
      src: '/images/image-22.jpg',
      description: '',
    },
    {
      src: '/images/image-23.jpg',
      description: '',
    },
    {
      src: '/images/image-24.jpg',
      description: '',
    },
    {
      src: '/images/image-25.jpg',
      description: '',
    },
    {
      src: '/images/image-26.jpg',
      description: '',
    },
    {
      src: '/images/image-27.jpg',
      description: '',
    },
    {
      src: '/images/image-28.jpg',
      description: '',
    },
    {
      src: '/images/image-29.jpg',
      description: '',
    },
    {
      src: '/images/image-30.jpg',
      description: '',
    },
    {
      src: '/images/image-31.jpg',
      description: '',
    },
    {
      src: '/images/image-32.jpg',
      description: '',
    },
    {
      src: '/images/image-33.jpg',
      description: '',
    },
    {
      src: '/images/image-34.jpg',
      description: '',
    },
    {
      src: '/images/image-35.jpg',
      description: '',
    },
    {
      src: '/images/image-36.jpg',
      description: '',
    },
    {
      src: '/images/image-37.jpg',
      description: '',
    },
    {
      src: '/images/image-38.jpg',
      description: '',
    },
    {
      src: '/images/image-39.jpg',
      description: '',
    },
    {
      src: '/images/image-40.jpg',
      description: '',
    },
    {
      src: '/images/image-41.jpg',
      description: '',
    },
    {
      src: '/images/image-42.jpg',
      description: '',
    },
    {
      src: '/images/image-43.jpg',
      description: '',
    },
    {
      src: '/images/image-44.jpg',
      description: '',
    },
    {
      src: '/images/image-45.jpg',
      description: '',
    },
    {
      src: '/images/image-46.jpg',
      description: '',
    },
    {
      src: '/images/image-47.jpg',
      description: '',
    },
    {
      src: '/images/image-48.jpg',
      description: '',
    },
    {
      src: '/images/image-49.jpg',
      description: '',
    },
    {
      src: '/images/image-50.jpg',
      description: '',
    },
    {
      src: '/images/image-51.jpg',
      description: '',
    },
    {
      src: '/images/image-52.jpg',
      description: '',
    },
    {
      src: '/images/image-53.jpg',
      description: '',
    },
    {
      src: '/images/image-54.jpg',
      description: '',
    },
    {
      src: '/images/image-55.jpg',
      description: '',
    },
    {
      src: '/images/image-56.jpg',
      description: '',
    },
    {
      src: '/images/image-57.jpg',
      description: '',
    },
    {
      src: '/images/image-58.jpg',
      description: '',
    },
  ]

  const enlarge = (imageSrc) => {
    setActiveImage(imageSrc)
    setOverlayActive(true)
  }

  return (
    <div className={css.root}>
      <HorizontalScroll>
        <div className={css.stage}>
          {images.map((image, index) => (
            <div key={index} className={css.imageContainer}>
              <div
                className={css.imageWrapper}
                onClick={() => enlarge(image.src)}
                onKeyPress={() => enlarge(image.src)}
                role="button"
                tabIndex={0}
              >
                <Image
                  className={css.image}
                  src={image.src}
                  alt={image.description}
                  layout="responsive"
                  width={1000}
                  height={800}
                />
              </div>
              <p className={css.description}>{image.description}</p>
            </div>
          ))}
        </div>
      </HorizontalScroll>

      {overlayActive && (
        <div
          className={css.overlay}
          onClick={() => setOverlayActive(false)}
          onKeyPress={() => setOverlayActive(false)}
          role="button"
          tabIndex={0}
        >
          <Image
            src={activeImage}
            layout="fill"
            objectFit="contain"
            className={css.enlargedImage}
            alt=""
          />
        </div>
      )}
    </div>
  )
}

// const ScrollContainer = ({ children }) => {
//   if (typeof window !== 'undefined') {
//     console.log('not undefined')
//     if (window.innerWidth > 500) {
//       console.log('window large')
//       return (
//         <HorizontalScroll reverseScroll className={css.scrollContainer}>
//           ABC
//           {children}
//         </HorizontalScroll>
//       )
//     }
//   } else {
//     return children
//   }
// }
