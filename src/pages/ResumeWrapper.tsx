import React from 'react'
import Resume from './Resume'
import ResumeMobile from './ResumeMobile';

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

  return Resume({ companyName, coverLetter, accentColor });
}
