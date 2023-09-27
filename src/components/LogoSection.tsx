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
    emphasizeLogoTimeout('javascript', 3600);
    emphasizeLogoTimeout('html', 3800);
    emphasizeLogoTimeout('typescript', 4000);
    emphasizeLogoTimeout('css', 4200);
    emphasizeLogoTimeout('ajax', 4400);
  });

  const emphasizeLogoTimeout = async (logoName: string, timeoutMs: number) => {
    await new Promise(r => setTimeout(r, timeoutMs));
    emphasizeLogo(logoName);
  }

  const emphasizeLogo = async (logoName: string) => {
    const logo = document.querySelector(`img[src*="${logoName}"]`);

    if (!logo) {
      return;
    }

    // Make logo 'pop' for 1s
    logo.classList.add('hover');
    await new Promise(r => setTimeout(r, 2000));
    logo.classList.remove('hover');
  };

  return (
    <>
      <div className='flex justify-between'>
        <StyledImg src={githubLogo} style={{ width: '3.5rem' }} />
        <StyledImg src={javascriptLogo} />
        <StyledImg src={jestLogo} />
        <StyledImg src={htmlLogo} style={{ width: '3.25rem' }} />
        <StyledImg src={reactLogo} />
        <StyledImg src={lessLogo} style={{ width: '5.5rem' }} />
        <StyledImg src={phpLogo} style={{ width: '4rem' }} />
        <StyledImg src={typescriptLogo} />
        <StyledImg src={vueLogo} />
        <StyledImg src={cssLogo} style={{ width: '2.25rem' }} />
        <StyledImg src={cypressLogo} />
        <StyledImg src={ajaxLogo} style={{ width: '5.5rem' }} />
        <StyledImg src={figmaLogo} style={{ width: '2.5rem' }} />
      </div>
    </>
  )
}