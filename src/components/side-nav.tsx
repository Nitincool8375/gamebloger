'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-[#171816] h-screen flex-1 fixed border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="pt-4 flex flex-row space-x-3 items-center justify-center md:justify-center md:px-6 border-zinc-200 h-12 w-full"
        >
          {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
          <span className="font-bold text-[32px] leading-[32px] hidden md:flex text-[#45f882]">Logo</span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:text-[#45f882] ${pathname.includes(item.path) ? 'text-[#45f882]' : ''
              }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className={`text-xl flex text-[#ffffffb3] text-shahow-[0 2.1px black] hover:text-[#45f882] ${item.path === pathname ? 'text-[#45f882]' : ''
                }`}>{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${subItem.path === pathname ? 'font-bold' : ''
                      }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`group flex flex-row space-x-4 items-center p-2 py-5 rounded-lg ${item.path === pathname ? 'text-[#45f882]' : 'text-[#ffffffb3] hover:text-[#45f882]'}`}
        >
          {item.icon}
          <span className={`text-xl flex group-hover:text-[#45f882] ${item.path === pathname ? 'text-[#45f882]' : 'text-[#ffffffb3]'}`}>{item.title}</span>
        </Link>
      )}
    </div>
  );
};
