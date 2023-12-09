import React from 'react'
import ResumeDesktop from '../components/ResumeDesktop'
import ResumeMobile from '../components/ResumeMobile';

const DEFAULT_ACCENT_COLOR = '#307cc4';

export default function ResumeWrapper({
  companyName,
  coverLetter,
  accentColor = DEFAULT_ACCENT_COLOR,
}: {
  companyName?: string,
  coverLetter: string[],
  accentColor?: string,
}): React.ReactElement {
  if (window.innerWidth < 1000) {
    return ResumeMobile({ companyName, coverLetter, accentColor });
  }

  return ResumeDesktop({ companyName, coverLetter, accentColor });
}
