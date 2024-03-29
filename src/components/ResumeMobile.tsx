import React from 'react'
import noal from '@/assets/noal.jpg'
import styled from 'styled-components';
import BlockQuoteMobile from './BlockQuoteMobile';

function TimelineItem(
  { title, subtexts }: { title: string, subtexts: string[] }
): React.ReactElement {
  return (
    <div className='mb-4'>
      <div className='flex items-start'>
        <div>
          <p className='font-medium text-left pb-2'>{title}</p>
          <ul style={{ listStyleType: 'disc' }} className='pl-6'>
            {subtexts.map((subtext, index) => (
              <li key={index} className='pl-1 text-left pb-1'>{subtext}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/**
 * TODO: DRY up the copy so it doesn't need to be maintained in two places
 */
export default function ResumeMobile({
  companyName,
  coverLetter,
  accentColor,
}: {
  companyName?: string,
  coverLetter: string[],
  accentColor: string,
}
): React.ReactElement {
  return (
    <>
      <div className='flex flex-col w-full mt-8 max-w-md'>
        {/* Header */}
        <MobileSection>
          <span className='text-left text-4xl self-start pb-1'>
            Noal Balint - Frontend Developer
          </span>
          {
            companyName &&
            <i className='text-left text-2xl self-start pb-2'>
              Application to {companyName}
            </i>
          }
        </MobileSection>

        {/* About */}
        <MobileSection>
          <div className='flex w-full'>
            {/* Photo */}
            <img
              src={noal}
              className='rounded-3xl w-32'
              alt="the applicant"
            />
            <div className='flex flex-col w-full pl-4 justify-start'>
              {/* Phone */}
              <span className='w-fit'>+43 699 819 483 46</span>
              {/* Email */}
              <span className='w-fit pt-1'>noalbalint@gmail.com</span>
              {/* Languages */}
              <div className='w-44'>
                <div className='flex flex-row justify-between items-center pt-2'>
                  <span>German</span>
                  <div className='flex'>
                    <Circle className='mr-1' />
                    <Circle className='mr-1' />
                    <OutlinedCircle className='mr-1' />
                    <OutlinedCircle className='mr-1' />
                    <OutlinedCircle className='mr-1' />
                  </div>
                </div>
                <div className='flex flex-row justify-between items-center pt-2'>
                  <span>English</span>
                  <div className='flex'>
                    <Circle className='mr-1' />
                    <Circle className='mr-1' />
                    <Circle className='mr-1' />
                    <Circle className='mr-1' />
                    <Circle className='mr-1' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MobileSection>

        {/* Cover Letter */}
        <MobileSection>
          {/* Cover Letter */}
          {coverLetter.map((text: string, index: number) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
        </MobileSection>

        {/* Section Header */}
        <MobileSection>
          <hr className='w-1/2 pb-2' />
          <span className='w-58 font-normal'> Summary of Professional Experience </span>
          <hr className='w-1/2 mt-2' />
        </MobileSection>

        {/* Experience Summary */}
        <MobileSection>
          <TimelineItem
            title="Early Career"
            subtexts={[
              "Various customer-facing roles in restaurants, surf shops, and film sets",
              "Develop soft skills such as communication, task prioritization, conflict resolution, and attention to detail"
            ]}
          />
          <TimelineItem
            title="Echosec Systems - Student Intern"
            subtexts={[
              "Pair-programming with seniors to build foundational knowledge of HTML, CSS, Javascript, TypeScript, and Vue",
              "Participate in scrum ceremonies: standups, retros, and sprint planning",
            ]}
          />
          <TimelineItem
            title="Echosec Systems - Junior Frontend Developer"
            subtexts={[
              "Ownership of small frontend bugs and features, completed with some guidance from mentors",
              "Improve load time by 200%+ through preloading, lazyloading, and code splitting",
              "Work asynchronously with global team across multiple timezones",
              "Top contributor in pull request reviews"
            ]}
          />
          <TimelineItem
            title="Echosec Systems - Intermediate Frontend Developer"
            subtexts={[
              "Lead multiple fullstack features: translate product requirements into Figma mockups and API schema, then implement alongside interdisciplenary team members, and communicate status updates to stakeholders",
              "Core contributor (#4 by code lines count) to world-class digital threat intelligence product, acquired for +$100M",
              "Participate in customer calls and demos as a technical expert",
            ]}
          />
          {/* TODO: it would be cool if when the line hit this point, it would turn another color and make a confetti or something */}
          <TimelineItem
            title={`${companyName ?? 'Your Company'} - Intermediate Frontend Developer (?)`}
            subtexts={[
              "Apply skills from previous roles to a new codebase and problem domain",
              "Do a really good job and make everybody happy :)"
            ]}
          />
        </MobileSection>

        {/* Section Header */}
        <MobileSection>
          <hr className='w-1/2 pb-2' />
          <span className='w-full font-normal'> Professional Reference </span>
          <hr className='w-1/2 mt-2' />
        </MobileSection>

        {/* Reference from Joan */}
        <BlockQuoteMobile
          color={accentColor}
        />

        {/* Section Header */}
        <MobileSection>
          <hr className='w-1/2 mt-6' />
        </MobileSection>

        {/* Outro */}
        <MobileSection className='mb-8 flex flex-col'>
          <div className='flex font-normal'>
            <p className='w-fit'>
            If you have an employment opportunity to discuss or would like to know more about me,
              <a
                style={{ color: accentColor }}
                className='w-fit pl-1 font-normal'
                href="sms:+4369981948346"
              >
                let's talk!
              </a>
            </p>
          </div>
        </MobileSection>
      </div>
    </>
  )
}

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;

const OutlinedCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 3px;
`;

const MobileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
`;

const Paragraph = styled.p`
  width: 100%;
  text-align: left;
  margin-bottom: 12px;
`;