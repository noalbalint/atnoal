import React from 'react'
import Resume from './Resume'
import ResumeMobile from './ResumeMobile';

export default function ResumeWrapper({
  companyName = '',
  coverLetter = '',
}: {
  companyName: string,
  coverLetter: string,
}): React.ReactElement {
  if (window.innerWidth < 1000) {
    return ResumeMobile({ companyName, coverLetter });
  }

  return Resume({ companyName, coverLetter });
}
