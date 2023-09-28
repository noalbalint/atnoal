import React, { useEffect, useState } from 'react'
import noal from '@/assets/noal.jpg'
import styled from 'styled-components';
import DrawLine from '../components/DrawLine'
import LogoSection from '../components/LogoSection';
import BlockQuote from '../components/BlockQuote';

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

export function Velofood(): React.ReactElement {
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

  return (
    <>
      <MainContainer>
        <HorizontalSection className='mt-16 pt-8 px-8'>
          <VerticalSectionLeftThird>
            {/* Photo */}
            <img
              src={noal}
              className='mb-4 mx-5 rounded-lg w-56'
              alt="the applicant"
            />
            {/* Phone */}
            <div className="inline-flex w-full pb-2 pt-1">
              <span className='w-full'>+43 699 819 483 46</span>
            </div>
            {/* Email */}
            <div className="inline-flex w-full pb-2">
              <span className='w-full'>noalbalint@gmail.com</span>
            </div>
            {/* Linkedin */}
            <div className="inline-flex pb-2">
              <Link
                href='https://www.linkedin.com/in/noal-balint-91083510b/'
                target='_blank'
              >
                linkedin.com/noalbalint
              </Link>
            </div>
            {/* Github */}
            <div className="inline-flex pb-2">
              <Link
                href='https://github.com/noalbalint/atnoal'
                target='_blank'
              >
                {'<'}  view source code {'>'}
              </Link>
            </div>
            {/* Languages */}
            <div className='flex flex-row w-full justify-between px-20 items-center pt-2'>
              <span style={{ marginRight: '45px' }}>German</span>
              <div className='flex'>
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <OutlinedCircle className='mr-1' />
                <OutlinedCircle className='mr-1' />
                <OutlinedCircle className='mr-1' />
              </div>
            </div>
            <div className='flex flex-row w-full justify-between px-20 items-center pt-2'>
              <span style={{ marginRight: '51px' }}>English</span>
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
              Eure Verstärkung in der Technik
            </span>
            <i
              className='text-left text-2xl self-start pb-6'
            >
              Application to Velofood - Noal Balint
            </i>
            <Paragraph>
              I am a frontend designer-developer with over 4 years of professional experience building enterprise-grade dynamic web apps using HTML, CSS, PHP,
              Ajax, and JavaScript. I believe that my background would be an excellent fit for your open "Verstärkung in der Technik" position.
            </Paragraph>
            <Paragraph>
              Outside of work I love to bikes, both to ride and to repair. Most Wednesdays you can find me working on my restoration/upcycling project at Maghanoy.
            </Paragraph>
            <Paragraph>
              I am originally from Victoria, BC (Canada), but have permanently relocated to Graz and would like to come to the office for work as much as possible.
            </Paragraph>
            <Paragraph>
              Velofood seems like a company with a heart, genuinely trying to make the world a better place. The combination of cycling, technology,
              social welfare and sustainability is a perfect nexus for me, and I am extremely motivated to join your team!
            </Paragraph>
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
              <DrawLine distanceToScroll={drawLineLength} marginLeft='62px' />
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
                "Pair-programming with seniors to build foundational knowledge of HTML, CSS, and TypeScript",
                "Participate in agile scrum ceremonies: standups, retros, and sprint planning",
              ]}
            />
            <TimelineItem
              circleSlot={<TimelineDate year='2020' />}
              title="Echosec Systems - Junior Frontend Developer"
              subtexts={[
                "Ownership of small frontend bugs and features, completed with some guidance from mentors",
                "Improve load time by 200%+ through preloading, lazyloading, code splitting",
                "Top contributor in pull request reviews"
              ]}
            />
            <TimelineItem
              circleSlot={<TimelineDate year='2021' />}
              title="Echosec Systems - Intermediate Frontend Developer"
              subtexts={[
                "Lead multiple fullstack features: translate product requirements into Figma mockups and API schema, then implement alongside interdisciplenary team members, and communicate status updates to stakeholders",
                "Core contributor of world-class digital threat intelligence product, acquired for +$100M",
                "Become #3 overall code contributor, after CTO and principle engineer",
                "Participate in customer calls and demos as a technical expert",
              ]}
            />
            {/* TODO: it would be cool if when the line hit this point, it would turn another color and make a confetti or something */}
            <TimelineItem
              circleSlot={<TimelineDate id='last-circle' year='2023' />}
              title="Velofood - Intermediate Frontend Developer (?)"
              subtexts={[
                "Apply skills from previous roles to a new codebase and problem domain",
                "Do a really good job and make users happy :)"
              ]}
            />
          </div>
        </HorizontalSection>

        {/* Reference from Joan */}
        <HorizontalSection className='flex flex-col'>
          <BlockQuote className='w-full h-72' />
        </HorizontalSection>

        {/* Line */}
        <HorizontalSection className='py-6 flex flex-col'>
          <hr className='w-9/12' />
        </HorizontalSection>

        {/* Outro */}
        <HorizontalSection className='mb-24 pb-8 px-36 flex flex-col'>
          <div className='flex py-8 font-normal text-xl'>
            <p className='w-fit'>
              If you have any questions or would like to chat,
            </p>
            <Link
              className='w-fit pl-1'
              href="mailto:noalbalint@gmail.com?subject=Re: Velofood Application"
              target='_blank'
            >
              say hello!
            </Link>
          </div>
        </HorizontalSection>
      </MainContainer>
      <div className='pb-72' />
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
  align-self: center;
  line-height: 1.9rem;

  ::selection {
    background-color: #01AD4C;
    color: #fff;
  }
`;

const HorizontalSection = styled.div`
  width: 1300px;
  display: flex;
  align-items: center;
  background-color: #F8FAFC;
`;

const VerticalSectionLeftThird = styled.div`
  width: 33%;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const VerticalSectionRightTwoThird = styled.div`
  width: 66%;
  align-self: start;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-right: 4rem;
`;

const Paragraph = styled.p`
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  margin-right: 2px;
`;

const Line = styled.hr`
  margin-left: 30px;
  margin-right: 30px;
`;

const Link = styled.a`
  color: #01AD4C;
  font-weight: 500;

  &:hover {
    color: #01AD4C;
  }
`

export default Velofood;
