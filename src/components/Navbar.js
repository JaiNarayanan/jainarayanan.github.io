import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  // { name: 'About', href: '#about', current: true },
  // { name: 'Experience', href: '#experience', current: false },
  // { name: 'Projects', href: '#projects', current: false },
  // { name: 'Blog', href: '#blog', current: false },
  // { name: 'Resume', props: {class: "bg-transparent font-semibold py-2 px-4 border border-primary-blue rounded"}, href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-primary-gray pt-2">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-14">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile Button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2
                 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> */}
                {/* <div className="flex flex-shrink-0 items-center">
                  <div className='text-primary-blue text-3xl font-sans'>JAI</div>
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div> */}
              {/* </div> */}
              <div className="hidden sm:ml-6 sm:block w-full">
                <div className="text-center space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'font-mono bg-primary-hover text-primary-blue' : 'text-white hover:bg-primary-hover hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-normal font-scp '
                      ) + item.props?.class}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'font-mono bg-gray-900 text-white' : 'text-gray-300 hover:bg-primary-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium font-mono '
                  ) + item.props?.class}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;