import React from 'react'
import htmlLogo from '@/assets/htmlLogo.svg'
import ajaxLogo from '@/assets/ajaxLogo.png'
import cssLogo from '@/assets/cssLogo.png'
import vueLogo from '@/assets/vueLogo.png'
import cypressLogo from '@/assets/cypressLogo.svg'
import figmaLogo from '@/assets/figmaLogo.png'
import githubLogo from '@/assets/githubLogo.svg'
import javascriptLogo from '@/assets/javascriptLogo.png'
import jestLogo from '@/assets/jestLogo.png'
import lessLogo from '@/assets/lessLogo.png'
import reactLogo from '@/assets/reactLogo.png'
import phpLogo from '@/assets/phpLogo.png'
import typescriptLogo from '@/assets/typescriptLogo.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function LogoCarousel(): React.ReactElement {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={2000}
        naturalSlideHeight={200}
        totalSlides={4}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            <div className='flex justify-between'>
              <img src={javascriptLogo} className='h-20' />
              <img src={jestLogo} className='h-20' />
              <img src={lessLogo} className='h-20' />
              <img src={reactLogo} className='h-20' />
              <img src={phpLogo} className='h-20' />
              <img src={typescriptLogo} className='h-20' />
            </div>
          </Slide>
          <Slide index={1}>
            <div className='flex justify-between'>
              <img src={htmlLogo} className='h-20' />
              <img src={ajaxLogo} className='h-20' />
              <img src={vueLogo} className='h-20' />
              <img src={cssLogo} className='h-20' />
              <img src={cypressLogo} className='h-20' />
              <img src={figmaLogo} className='h-20' />
              <img src={githubLogo} className='h-20' />
            </div>
          </Slide>
          <Slide index={2}>
            <div className='flex justify-between'>
              <img src={javascriptLogo} className='h-20' />
              <img src={jestLogo} className='h-20' />
              <img src={lessLogo} className='h-20' />
              <img src={reactLogo} className='h-20' />
              <img src={phpLogo} className='h-20' />
              <img src={typescriptLogo} className='h-20' />
            </div>
          </Slide>
          <Slide index={3}>
            <div className='flex justify-between'>
              <img src={htmlLogo} className='h-20' />
              <img src={ajaxLogo} className='h-20' />
              <img src={vueLogo} className='h-20' />
              <img src={cssLogo} className='h-20' />
              <img src={cypressLogo} className='h-20' />
              <img src={figmaLogo} className='h-20' />
              <img src={githubLogo} className='h-20' />
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </>
  )
}
