// import Image from 'next/image';
// import clsx from 'clsx';
import Card from './Card';
import SidebarLink from './SidebarLink';

const links = [
  { label: 'Home', icon: 'Grid', link: '/home' },
  { label: 'Calendar', icon: 'Calendar', link: '/calendar' },
  { label: 'Profile', icon: 'User', link: '/profile' },
  { label: 'Settings', icon: 'Settings', link: '/settings' }
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {/* <div className="w-full flex justify-center items-center"></div> */}
      {links &&
        links.length > 0 &&
        links.map((link) => <SidebarLink link={link} />)}
    </Card>
  );
};

export default Sidebar;
