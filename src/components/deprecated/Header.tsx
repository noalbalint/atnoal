import React, { Fragment, ReactElement } from 'react'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from './Button'
import { Container } from './Container'
import { NavLink } from './NavLink'

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
}

function MobileNavLink({ href, children }: MobileNavLinkProps): ReactElement {
  return (
    <Popover.Button className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

interface MobileNavIconProps {
  open: boolean
}

function MobileNavIcon({ open }: MobileNavIconProps): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation(): ReactElement {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

// TODO: Add typescript

interface HeaderProps {
  showBackButton?: boolean
}

export function Header(props: HeaderProps): ReactElement {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          {/* Logo + Back Button */}
          <div className="flex items-center md:gap-x-12">
            <a href="#" aria-label="Home">
              go home
            </a>
            { props.showBackButton && <NavLink href="/"> {"<"} Back </NavLink> }
          </div>

          {/* Beta Disclaimer */}
          <span className="font-bold text-red-420"> Pre-Beta!!</span>

          {/* Sign in */}
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <Button href="/register" color="red">
              <span>
                Sign In
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
