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
import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  height: 50px;
  width: 3rem;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }

  &.hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;

export default function LogoSection(): React.ReactElement {
  useEffect(() => {

    const logos = document.querySelectorAll('img');

    const randomLogo = async () => {
      console.log('calling random logo');
      // Get a random logo
      const randomIndex = Math.floor(Math.random() * logos.length);
      console.log(randomIndex);
      // Make it 'pop' for 1s
      logos[randomIndex].classList.add('hover');
      await new Promise(r => setTimeout(r, 1000));
      logos[randomIndex].classList.remove('hover');
    };

    setInterval(randomLogo, 10000)
  });

return (
  <>
    <div className='flex justify-between'>
      <StyledImg src={javascriptLogo} />
      <StyledImg src={jestLogo} />
      <StyledImg src={reactLogo} />
      <StyledImg src={lessLogo} style={{ width: '5.5rem' }} />
      <StyledImg src={htmlLogo} style={{ width: '3.25rem' }} />
      <StyledImg src={phpLogo} style={{ width: '4rem' }} />
      <StyledImg src={typescriptLogo} />
      <StyledImg src={cssLogo} style={{ width: '2.25rem' }} />
      <StyledImg src={ajaxLogo} style={{ width: '5.5rem' }} />
      <StyledImg src={vueLogo} />
      <StyledImg src={cypressLogo} />
      <StyledImg src={figmaLogo} style={{ width: '2.5rem' }} />
      <StyledImg src={githubLogo} style={{ width: '3.5rem' }} />
    </div>
  </>
)
}
