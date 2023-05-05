'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, User, Grid, Calendar } from 'react-feather';
import clsx from 'clsx';

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  // In order to send the component between the client and server,
  // the component shouldn't be a function (not-serializable).
  // Thus, instead of doing link.Icon, convert into string.
  const Icon = icons[link.icon];

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
          isActive && 'stroke-violet-600'
        )}
      />
    </Link>
  );
};

export default SidebarLink;
