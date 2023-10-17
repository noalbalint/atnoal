import React, { useEffect, useState } from 'react'
import noal from '@/assets/noal.jpg'
import AnimatedCursor from "react-animated-cursor"
import styled from 'styled-components';
import DrawLine from '../components/DrawLine'
import LogoSection from '../components/LogoSection';
import BlockQuote from '../components/BlockQuote';

/**
 * TODO: Move all other components to their own files
 */
function TimelineItem(
  { title, subtexts, circleSlot }: { title: string, subtexts: string[], circleSlot: React.ReactNode }
): React.ReactElement {
  return (
    <div className='mb-4'>
      <div className='flex items-start'>
        {circleSlot}
        <div className='pl-16'>
          <p className='font-medium text-left pb-2'>{title}</p>
          <ul style={{ listStyleType: 'disc' }} className='pl-6'>
            {subtexts.map((subtext) => (
              <li className='pl-1 text-left pb-1'>{subtext}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function TimelineDate(
  { year, style, id }: { year: string, style?: React.CSSProperties, id?: string }
): React.ReactElement {
  return (
    <div className='flex items-center' style={style}>
      <span className='pr-4'> {year} </span>
      <Circle id={id} />
    </div>
  )
}

export function Resume({
  companyName,
  accentColor,
  coverLetter,
}: {
  companyName: string,
  accentColor: string,
  coverLetter: string[],
}): React.ReactElement {
  const [drawLineLength, setdrawLineLength] = useState<number | null>(null);

  useEffect(() => {
    const firstCircle = document.querySelector('#first-circle');
    if (!firstCircle) {
      return;
    }
    const lastCircle = document.querySelector('#last-circle');
    if (!lastCircle) {
      return;
    }

    setdrawLineLength(lastCircle?.getBoundingClientRect().top - firstCircle.getBoundingClientRect().top);
  }, []);

  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
    align-self: center;
    line-height: 1.9rem;

    ::selection {
        background-color: ${accentColor};
      color: #fff;
    }
  `;

  const Link = styled.a`
    color: ${accentColor};
    font-weight: 500;

    &:hover {
      color: ${accentColor};
    }
  `;

  // Remove the hash (#) if it's present
  const hex = accentColor.replace(/^#/, '');

  // Parse the hex values into separate R, G, and B values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);


  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color={`${r}, ${g}, ${b}`}
      />
      <MainContainer>
        <HorizontalSection className='mt-16 pt-8 px-8'>
          <VerticalSectionLeftThird>
            {/* Photo */}
            <img
              src={noal}
              className='mb-4 mx-5 rounded-lg w-56'
              alt="the applicant"
            />
            {/* Email */}
            <div className="inline-flex pt-1.5 w-full">
              <span className='w-full'>noalbalint@gmail.com</span>
            </div>
            {/* Phone */}
            <div className="inline-flex pt-1.5 w-full">
              <span className='w-full'>+43 699 819 483 46</span>
            </div>
            {/* Linkedin */}
            <div className="inline-flex pt-1.5">
              <Link
                href='https://www.linkedin.com/in/noal-balint-91083510b/'
                target='_blank'
              >
                linkedin.com/noalbalint
              </Link>
            </div>
            {/* Github */}
            <div className="inline-flex pt-1.5">
              <Link
                href='https://github.com/noalbalint/atnoal'
                target='_blank'
              >
                {'<'}  view source code {'>'}
              </Link>
            </div>
            {/* Languages */}
            <div className='flex flex-row justify-between items-center pt-2'>
              <span style={{ marginRight: '14px' }}>German</span>
              <div className='flex'>
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <OutlinedCircle className='mr-1' />
                <OutlinedCircle className='mr-1' />
                <OutlinedCircle className='mr-1' />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center pt-2'>
              <span style={{ marginRight: '21px' }}>English</span>
              <div className='flex'>
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <Circle className='mr-1' />
              </div>
            </div>
          </VerticalSectionLeftThird>

          {/* Cover Letter */}
          <VerticalSectionRightTwoThird className='items-center pt-0'>
            <span
              className='text-left text-4xl self-start pb-4'
            >
              Noal Balint - Frontend Developer
            </span>
            <i
              className='text-left text-2xl self-start pb-8'
            >
              Application to {companyName}
            </i>
            {/* Cover Letter */}
            {coverLetter.map((text: string, index: number) => (
              <Paragraph key={index}>{text}</Paragraph>
            ))}
          </VerticalSectionRightTwoThird>
        </HorizontalSection>

        {/* Technology logos */}
        <HorizontalSection className='justify-center pb-8 pt-6 px-32'>
          <div className='flex flex-col w-full'>
            <LogoSection />
          </div>
        </HorizontalSection>

        {/* Section Header */}
        <HorizontalSection className='justify-center pt-8 pb-16'>
          <Line className='w-72' />
          <span className='w-58 font-normal'> Summary of Professional Experience </span>
          <Line className='w-72' />
        </HorizontalSection>

        {/* Professional Experience Timeline */}
        <HorizontalSection className=' pl-32 pr-16 pb-10 justify-center'>
          <div className='flex flex-col'>
            {drawLineLength && (
              <DrawLine
                distanceToScroll={drawLineLength}
                marginLeft='62px'
              />
            )}
            <TimelineItem
              circleSlot={<Circle id='first-circle' className='ml-14' />}
              title="Early Career"
              subtexts={[
                "Various customer-facing roles in restaurants, surf shops, and film sets",
                "Develop soft skills such as communication, task prioritization, conflict resolution, and attention to detail"
              ]}
            />
            <TimelineItem
              circleSlot={<TimelineDate year='2019' />}
              title="Echosec Systems - Student Intern"
              subtexts={[
                "Pair-programming with seniors to build foundational knowledge of HTML, CSS, JavaScript, TypeScript, and Vue.js",
                "Participate scrum ceremonies: standups, retros, and sprint planning",
              ]}
            />
            <TimelineItem
              circleSlot={<TimelineDate year='2020' />}
              title="Echosec Systems - Junior Frontend Developer"
              subtexts={[
                "Ownership of small frontend bugs and features, completed with some guidance from mentors",
                "Improve load time by 200%+ through preloading, lazyloading, and code splitting",
                "Work asynchronously with global team across multiple timezones",
                "Top contributor in pull request reviews"
              ]}
            />
            <TimelineItem
              circleSlot={<TimelineDate year='2021' />}
              title="Echosec Systems - Intermediate Frontend Developer"
              subtexts={[
                "Lead multiple fullstack features: translate product requirements into Figma mockups and API schema, then implement alongside interdisciplenary team members, and communicate status updates to stakeholders",
                "Core contributor (#4 by code lines count) to world-class digital threat intelligence product, acquired for +$100M",
                "Participate in customer calls and demos as a technical expert",
              ]}
            />
            {/* TODO: it would be cool if when the line hit this point, it would turn another color and make a confetti or something */}
            <TimelineItem
              circleSlot={<TimelineDate id='last-circle' year='2023' />}
              title={`${companyName} - Intermediate Frontend Developer (?)`}
              subtexts={[
                "Apply skills from previous roles to a new codebase and problem domain",
                "Do a really good job and make everybody happy :)"
              ]}
            />
          </div>
        </HorizontalSection>

        {/* Reference from Joan */}
        <HorizontalSection className='flex flex-col'>
          <BlockQuote
            color={accentColor}
            className='w-full h-72'
          />
        </HorizontalSection>

        {/* Line */}
        <HorizontalSection className='py-6 flex flex-col'>
          <hr className='w-9/12' />
        </HorizontalSection>

        {/* Outro */}
        <HorizontalSection className='mb-24 pb-8 px-36 flex flex-col'>
          <p className='w-fit'>
            If you have any further questions or would like to discuss an employment opportunity,
            <a
              style={{ color: accentColor }}
              className='w-fit pl-1 font-normal'
              href={`mailto:noalbalint@gmail.com?subject=Re: ${companyName} Application`}
              target='_blank'
            >
              let's talk!
            </a>
          </p>
        </HorizontalSection>
      </MainContainer>
      <div className='pb-72' />
    </>
  )
}

const HorizontalSection = styled.div`
  width: 1300px;
  display: flex;
  align-items: center;
  background-color: #F8FAFC;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const VerticalSectionLeftThird = styled.div`
  width: 30%;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0 1.5rem 3rem;
`;

const VerticalSectionRightTwoThird = styled.div`
  width: 70%;
  align-self: start;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-right: 4rem;
`;

const Paragraph = styled.div`
  width: 100%;
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

const OutlinedCircle = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 3px;
`;

const Line = styled.hr`
  margin-left: 30px;
  margin-right: 30px;
`;

export default Resume;
