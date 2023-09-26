import React from 'react'
import noal from '@/assets/noal.jpg'
import styled from 'styled-components';
import DrawLine from '../components/DrawLine'
import LogoSection from '../components/LogoSection';

const HorizontalSection = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
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

const VerticalSectionLeftQuarter = styled.div`
  width: 25%;
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const VerticalSectionRightThreeQuarter = styled.div`
  width: 75%;
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;

  ::selection {
    background-color: #01AD4C;
    color: #fff;
  }
`;

function TimelineItem(
  { title, subtexts }: { title: string, subtexts: string[] }
): React.ReactElement {
  return (
    <div className='mb-4'>
      <b className='font-medium text-left'>{title}</b>
      <ul>
        {subtexts.map((subtext) => (
          <li className='pl-2 text-left'>- {subtext}</li>
        ))}
      </ul>
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

export default function Velofood(): React.ReactElement {
  return (
    <>
      <MainContainer>
        <HorizontalSection className='mt-8 pt-8'>
          <VerticalSectionLeftThird>
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
            {/* Linkedin */}
            <div className="inline-flex w-full pb-2">
              <a href='https://www.linkedin.com/in/noal-balint-91083510b/' style={{ color: '#01AD4C' }} className='w-full'>linkedin.com/noalbalint</a>
            </div>
            {/* Languages */}
            <div className='flex items-center justify-between pt-2 w-48'>
              <span style={{ marginRight: '45px'}}>German</span>
              <div className='flex'>
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <OutlinedCircle className='mr-1' />
                <OutlinedCircle className='mr-1' />
                <OutlinedCircle className='mr-1' />
              </div>
            </div>
            <div className='flex items-center justify-between pt-2 w-48'>
              <span style={{ marginRight: '51px'}}>English</span>
              <div className='flex'>
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <Circle className='mr-1' />
                <Circle className='mr-1' />
              </div>
            </div>
          </VerticalSectionLeftThird>
          <VerticalSectionRightTwoThird className='items-center pt-0'>
            <span className='text-left text-4xl self-start pb-1'>NOAL BALINT</span>
            <span className='text-left text-4xl self-start pb-1'>Eure Verstärkung in der Technik</span>
            <i className='text-left text-2xl self-start pb-6'>Application to Velofood</i>
            <Paragraph>I am a frontend designer-developer with over 4 years of professional experience building enterprise-grade monolithic single-page dynamic web apps.</Paragraph>
            <Paragraph>
              The Velofood "Verstärkung in der Technik" job posting was forwarded to me through a friend,
              and believe it would be perfect fit for my background and interests.
            </Paragraph>
            <Paragraph>
              I love bikes, and most Wednesdays you can find me turning a wrench at Maghanoy. The opportunity to be part of a company that
              combines cycling with technology is very appealing to me. I also appreciate that you offer a flexible work schedule, as I would love
              to finally experience the 20-hour week.
            </Paragraph>
          </VerticalSectionRightTwoThird>
        </HorizontalSection>
        {/* Technologies logos */}
        <HorizontalSection className='justify-center'>
          <div className='flex flex-col w-full'>
            <div className='pb-8'>
              <LogoSection />
            </div>
          </div>
        </HorizontalSection>
        <HorizontalSection className='justify-center pb-8'>
          <Line className='w-72' />
          <span> Summary of Professional Experience </span>
          <Line className='w-72' />
        </HorizontalSection>
        {/* Professional Experience Timeline */}
        <HorizontalSection>
          <VerticalSectionLeftQuarter>
            {/*
              To recalculate the distanceToScroll after making changes, run this in the browser console:

              const firstCircle = document.querySelector('#first-circle');
              const lastCircle = document.querySelector('#last-circle');
              console.log(lastCircle.getBoundingClientRect().top - firstCircle.getBoundingClientRect().top);
             */}
            <DrawLine distanceToScroll={752} className='ml-12 mt-1' />
            <Circle id='first-circle' className='ml-14' />
            <TimelineDate year='2019' style={{ marginTop: '4.5rem' }} />
            <TimelineDate year='2021' style={{ marginTop: '11.25rem' }} />
            <TimelineDate year='2022' style={{ marginTop: '9.5rem' }} />
            <TimelineDate year='2023' style={{ marginTop: '4.5rem' }} />
            <TimelineDate year='2023' style={{ marginTop: '9rem' }} id='last-circle' />
          </VerticalSectionLeftQuarter>
          <VerticalSectionRightThreeQuarter className='items-start self-start'>
            <TimelineItem
              title="Early Career"
              subtexts={[
                "Various customer-facing roles in restaurants, surf shops, and film sets",
                "Develop communication, humility, task prioritization, and attention to detail"
              ]}
            />
            <TimelineItem
              title="Intern at Echosec Systems"
              subtexts={[
                "Shadow senior developers to learn the basic technologies of web development",
                "Complete small bugs tickets and features with considerable guidance",
                "Learn the 'gestalt' of good programming: pull request etiquette, avoiding bikeshedding, code documentation, naming, structure, etc.",
              ]}
            />
            {/*
              "TODO: use STAR method and add some kind of metrics",

              reframe to 'active voice'; 'complete small bug tickets' to 'managed a bug backlog of frontend bugs'

              everything should tell the reader about a skill that you have

              more specifics about the technologies you used

              'learn' -> 'adhere'

              check github for some imperical data

              'Work semi-independently on mentored projects' -> 'Use pair-programming to complete mid-size projects'

              shadow -> pair programming

              comfortbale in scaling organization

              talk about 'agile'

              people don't know what swe stands for -> do junior, intermediate, senior

              comfortable managing a large codebase

              resume is just like your 'grades' - cover letter and interview is where you get to show your personality

              talk about types of projects that you worked on; dates that you worked places

              try to figure out how much

              think about a project that went well that demostrates proficiency in the desired skills

              what did I specifically redesign?

              how many customers were convinced by the actor profile thing?

              velocity
            */}
            <TimelineItem
              title="SWE I at Echosec Systems"
              subtexts={[
                "Work semi-independently on mentored projects",
                "Make meaningful contributions in the code review process.",
                "Ownership of small bugs tickets and features with some guidance from mentors",
                "Developing high-level understanding of the company/codebase as a whole",
                "Increase time to first contentful paint by 200% through preloading and code splitting",
              ]}
            />
            <TimelineItem
              title="SWE II at Echosec Systems"
              subtexts={[
                "Take more responsibility and ownership of codebase and projects",
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
          </VerticalSectionRightThreeQuarter>
        </HorizontalSection>
      </MainContainer>
    </>
  )
}
