import css from './grid.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import HorizontalScroll from 'react-scroll-horizontal'

export default function Grid() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [overlayActive, setOverlayActive] = useState(false)

  const images = [
    {
      src: '/images/image-1.jpg',
      description: '',
    },
    {
      src: '/images/image-2.jpg',
      description: '',
    },
    {
      src: '/images/image-3.jpg',
      description: '',
    },
    {
      src: '/images/image-4.jpg',
      description: '',
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
  ]

  const enlarge = (index) => {
    setActiveImageIndex(index)
    setOverlayActive(true)
    console.log(activeImageIndex, images[activeImageIndex])
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (overlayActive) {
        if (event.keyCode === 39) {
          setActiveImageIndex(
            activeImageIndex < images.length - 1
              ? activeImageIndex + 1
              : activeImageIndex
          )
        } else if (event.keyCode === 37) {
          setActiveImageIndex(
            activeImageIndex > 0 ? activeImageIndex - 1 : activeImageIndex
          )
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const Images = () => (
    <div className={css.stage}>
      {images.map((image, index) => (
        <div key={index} className={css.imageContainer}>
          <div
            className={css.imageWrapper}
            onClick={() => enlarge(index)}
            onKeyPress={() => enlarge(index)}
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
  )

  return (
    <div className={css.root}>
      {typeof window !== 'undefined' && window.innerWidth > 500 && (
        <HorizontalScroll reverseScroll className={css.scrollContainer}>
          <Images />
        </HorizontalScroll>
      )}
      {typeof window !== 'undefined' && window.innerWidth <= 500 && <Images />}

      {overlayActive && (
        <div
          className={css.overlay}
          onClick={() => setOverlayActive(false)}
          onKeyPress={() => setOverlayActive(false)}
          role="button"
          tabIndex={0}
        >
          <Image
            src={images && images[activeImageIndex].src}
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
