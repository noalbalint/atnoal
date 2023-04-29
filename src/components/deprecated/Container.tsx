import clsx from 'clsx'
import { ReactElement } from 'react'

interface ContainerProps {
  className?: string
}

export function Container({ className, ...props }: ContainerProps): ReactElement {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
