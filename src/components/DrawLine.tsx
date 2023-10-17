import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg<{ height: number; }>`
  position: absolute;
  height: ${props => props.height}px;
`;

// Adapted from https://codepen.io/dmistry485/pen/RqwJJE and heavily modified
export default function ScrollLine(
  {
    distanceToScroll,
    marginLeft,
  }: {
    distanceToScroll: number,
    marginLeft?: string,
  }
): React.ReactElement {
  useEffect(() => {
    // Get a reference to the <path>
    const path = document.querySelector('#line-path') as SVGPathElement;

    // Set the total length of the path
    path.style.strokeDasharray = `${distanceToScroll}`;
    path.style.strokeDashoffset = `${distanceToScroll}`;

    // Jake Archibald says so
    // https://jakearchibald.com/2013/animated-line-drawing-svg/
    path.getBoundingClientRect();

    // When the page scrolls...
    window.addEventListener("scroll", () => {
      // What % down have we scrolled?
      // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
      const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // strokeDashoffset controls the hide/show of the path, with 0 being fully shown and distanceToScroll being fully hidden.
      // so starting from distanceToScroll, we subtract the distance we've scrolled, multiplied by the scrollPercentage.
      path.style.strokeDashoffset = `${distanceToScroll - (distanceToScroll * scrollPercentage)}`;
    });
  }, []);

  return (
    <div style={{ marginLeft: `${marginLeft}` }}>
      <StyledSVG
        height={distanceToScroll}
        className='mt-3'
        id='line-svg'
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 8 ${distanceToScroll}`}
        xmlSpace="preserve"
      >
        <line
          id="line-path"
          stroke="#b9b9b9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="4"
          y1="4"
          x2="4"
          y2={distanceToScroll}
        />
      </StyledSVG>
    </div>
  )
}

