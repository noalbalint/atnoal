import React from 'react'
import Resume from './Resume'
import ResumeMobile from './ResumeMobile';

export default function ResumeWrapper({
  companyName,
  coverLetter,
  accentColor,
}: {
  companyName: string,
  coverLetter: string[],
  accentColor: string,
}): React.ReactElement {
  if (window.innerWidth < 1000) {
    return ResumeMobile({ companyName, coverLetter, accentColor });
  }

  return Resume({ companyName, coverLetter, accentColor });
}
