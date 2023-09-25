import React from 'react'
import noal from '@/assets/noal.jpg'
import styled from 'styled-components';
import DrawLine from '../components/DrawLine'

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
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const VerticalSectionRight = styled.div`
  width: 66%;
  align-self: start;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
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

export function TimelineItem(
  { title, subtexts }: { title: string, subtexts: string[]}
): React.ReactElement {
  return (
    <div className='mt-4'>
      <p className='font-medium text-left'>{title}</p>
      <ul>
        {subtexts.map((subtext) => (
          <li className='pl-2 text-left'>- {subtext}</li>
        ))}
      </ul>
    </div>
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
            <Paragraph>I am a frontend designer-developer with over 4 years of professional professional experience building an enterprise-grade monolithic single-page dynamic web app.</Paragraph>
          </VerticalSectionRight>
        </HorizontalSection>
        {/* Professional Experience Timeline */}
        <HorizontalSection>
          <VerticalSectionLeft>
            {/*
              To recalculate the distanceToScroll after making changes, run this in the browser console:

              const firstCircle = document.querySelector('#first-circle');
              const lastCircle = document.querySelector('#last-circle');
              console.log(lastCircle.getBoundingClientRect().top - firstCircle.getBoundingClientRect().top);
             */}
            <DrawLine distanceToScroll={804} className='mr-2 mt-1' />
            <Circle id='first-circle' />
            <Circle style={{ marginTop: '1.75rem' }} />
            <Circle style={{ marginTop: '4.75rem' }} />
            <Circle style={{ marginTop: '11.75rem' }} />
            <Circle style={{ marginTop: '10rem' }} />
            <Circle style={{ marginTop: '4.5rem' }} />
            <Circle style={{ marginTop: '10rem' }} id='last-circle' />
          </VerticalSectionLeft>
          <VerticalSectionRight className='items-start self-start'>
            <span className='font-medium'>Born in Vancouver, Canada</span>
            <TimelineItem
              title="Early Career"
              subtexts={[
                "Develop soft-skill through various roles in restaurants, surf shops, and film sets",
                "Communication, humility, task prioritization, and attention to detail"
              ]}
            />
            <TimelineItem
              title="Intern at Echosec Systems"
              subtexts={[
                "Why is nobody asking me to implement a linked-list in C++ or convert an RGB to a hex code by hand? University didn't prepare me for this at all!",
                "Shadow senior developers to learn the basic technologies of web development",
                "Complete small bugs tickets and features with considerable guidance",
                "Learn the 'gestalt' of good programming: pull request etiquette, avoiding bikeshedding, code documentation, naming, and structure, etcetera",
              ]}
            />
            <TimelineItem
              title="SWE I at Echosec Systems"
              subtexts={[
                "Work semi-independently on mentored projects",
                "Make meaningful contributions in the code review process.",
                "Ownership of small bugs tickets and features with some guidance from mentors",
                "Developing high-level understanding of the company/codebase as a whole",
                "Transition to fully-remote work due to COVID-19",
              ]}
            />
            <TimelineItem
              title="Acquired by New York-based conglomerate 'Flashpoint.io'"
              subtexts={[
                "Transition from 40-person to 400-person organization",
                "More heirachy, more meetings, less 'personal touch'",
              ]}
            />
            <TimelineItem
              title="SWE II at Echosec Systems"
              subtexts={[
                "Core member of the team. Major contributor for large product initiatives",
                "Ownership of many mid-sized features with minimal or no guidance",
                "Translate business requirements into Figma mockups and JIRA tickets",
                "Participate in customer calls and demos as a technical expert",
                "Mastery of core frontend stack; beginning to dabble in PHP and Cypress",
              ]}
            />
            <TimelineItem
              title="SWE II at Velofood (?!)"
              subtexts={[
                "Apply skills from previous roles to a new codebase and new problem domain",
                "Do a really good job and make everybody happy :)"
              ]}
            />
          </VerticalSectionRight>
        </HorizontalSection>
      </div>
    </>
  )
}
