import React from 'react'
import noal from '@/assets/noal.jpg'
import styled from 'styled-components';

const HorizontalSection = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
`;

const VerticalSectionLeft = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const VerticalSectionRight = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 12px;
`;

export default function Velofood(): React.ReactElement {
  return (
    <>
      <div className='flex flex-col items-center'>
        {/* Contact and Motivation */}
        <HorizontalSection className='mt-8'>
          <VerticalSectionLeft>
            {/* Photo */}
            <img src={noal} className='mb-6 mx-5 rounded-lg w-56' alt="the applicant" />
            {/* Phone */}
            <div className="inline-flex w-full pb-2">
              <span className='w-full'>+43 699 819 483 46</span>
            </div>
            {/* Email */}
            <div className="inline-flex w-full pb-2">
              <span className='w-full'>noalbalint@gmail.com</span>
            </div>
          </VerticalSectionLeft>
          <VerticalSectionRight>
            <h1 className='pb-4 text-left'>Velofood Technologieverstärker application: Noal Balint</h1>
            <Paragraph>I am a frontend designer-developer with over 4 years of professional professional experience in an enterprise-grade monolithic single-page dynamic web app.</Paragraph>
            <Paragraph>During this time, I gained proficiency in web technologies such as Vue.js, HTML/CSS + Less.js, Javascript + Typescript, Axois (AJAX libary), and Vuex (Frontent state management tool. I also had some exposure to PHP, Redis, and postgresSQL, but only small amounts.</Paragraph>
          </VerticalSectionRight>
        </HorizontalSection>
        {/* Professional Experience Timeline */}
        <HorizontalSection className='mb-8'>
          <VerticalSectionLeft>
            asdf
          </VerticalSectionLeft>
          <VerticalSectionRight>
            asdf
          </VerticalSectionRight>
        </HorizontalSection>
      </div>
    </>
  )
}
