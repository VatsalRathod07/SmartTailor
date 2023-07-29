import React from 'react';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const Breadcrumbs = ({ routes } :any) => {
  const router = useRouter();

  const handleBreadcrumbClick = (path: string) => {
    // Use Next.js router to navigate to the specified URL
    router.push(path);
  };

  return (
    <ul className="flex items-center space-x-2">
      {routes.map((route, index) => (
        <React.Fragment key={index}>
          {index > 0 && <li><IoIosArrowForward /></li>}
          <li
            className="text-Charcoal cursor-pointer"
            onClick={() => handleBreadcrumbClick(route.path)}
          >
            {route.label}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
