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
  padding: 0 1.5rem 0 1.5rem;
`;

const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 12px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;

export function TimelineItem({ title, subtexts }: { title: string, subtexts: string[] }): React.ReactElement {
  return (
    <>
      <HorizontalSection>
        <VerticalSectionLeft>
          <Circle />
        </VerticalSectionLeft>
        <VerticalSectionRight className='items-start'>
          <span className='font-medium'>{title}</span>
          {/* for each subtext, put it in a bullet-point list */}
          <ul>
            {subtexts.map((subtext) => (
              <li className='pl-2 text-left'>- {subtext}</li>
            ))}
          </ul>
        </VerticalSectionRight>
      </HorizontalSection>
    </>
  )
}

export default function Velofood(): React.ReactElement {
  return (
    <>
      <div className='flex flex-col items-center font-light'>
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
          <VerticalSectionRight className='items-center pt-0'>
            <span className='text-left text-2xl self-start'>Velofood application</span>
            <span className='text-left text-4xl self-start pb-4'>Noal Balint, Technologieverstärker</span>
            <Paragraph>I am a frontend designer-developer with over 4 years of professional professional experience in an enterprise-grade monolithic single-page dynamic web app.</Paragraph>
            <Paragraph>During this time, I gained proficiency in web technologies such as Vue.js, HTML/CSS + Less.js, Javascript + Typescript, Axois (AJAX libary), and Vuex (Frontent state management tool. I also had some exposure to PHP, Redis, and postgresSQL, but only small amounts.</Paragraph>
          </VerticalSectionRight>
        </HorizontalSection>
        {/* Professional Experience Timeline */}
        <TimelineItem
          title="Early Career"
          subtexts={[
            "Various public-facing roles in restaurants, surf shops, and film sets",
            "Developed soft-skills such as communication, time management and task prioritization, humility, empathy, attention to detail"
          ]}
        />
        <TimelineItem
          title="Early Career"
          subtexts={["asdf"]}
        />
        <TimelineItem
          title="Early Career"
          subtexts={["asdf"]}
        />
        <TimelineItem
          title="Early Career"
          subtexts={["asdf"]}
        />
        <TimelineItem
          title="Early Career"
          subtexts={["asdf"]}
        />
      </div>
    </>
  )
}
