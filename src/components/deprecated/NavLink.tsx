import { ReactElement } from 'react'

interface NavLinkProps {
  href: string
  children: ReactElement | string
}

export function NavLink({ href, children }: NavLinkProps): ReactElement {
  return (
    <a
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </a>
  )
}
