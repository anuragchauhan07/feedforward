import { footerLinks, siteData } from '@/lib/constants';
import Link from 'next/link';

const HomeFooter = () => {
  return (
    <div className="flex  flex-wrap justify-center sm:justify-between gap-4 px-4 md:px-20 py-4">
    <div className="text-sm uppercase text-center font-semibold">
      ©2024 | <span className="text-rose-600">{siteData.name}</span> | All
      rights reserved
    </div>
    <div className="flex items-center gap-4">
      <div className="border border-dotted border-black px-4 py-1 rounded-sm flex items-center flex-row gap-2">
        <p>
          Made By <span className="text-rose-600">Me</span>
        </p>
        <div className="h-6 w-6 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 125"
            x="0px"
            y="0px"
          >
            <g data-name="Layer 32">
              <path
                fill="#000000"
                d="M21.8,84.93C17.17,73.18,18.3,57.49,31,51.23c5.9-2.92,13.64-2.24,18.55,2.32,3.81,3.54,4,9.65-1.5,11.39a12.56,12.56,0,0,1-11.27-2.37C24.87,53,35.34,37.29,45.69,32c12-6.15,26.47-5.58,38.32.5,1.72.88,3.24-1.71,1.52-2.59-12.85-6.59-28.39-7.17-41.36-.5C33.6,34.83,24.86,47,30.31,59.07a15.82,15.82,0,0,0,13.12,9.25c4.56.38,10.38-1.4,12-6.18,1.89-5.46-2.94-10.83-7.38-13.28a20,20,0,0,0-16.28-1.22C16.2,53.3,13.49,72,18.91,85.73c.7,1.77,3.6,1,2.89-.8Z"
              />
              <path
                fill="#000000"
                d="M74.83,20.92A134.38,134.38,0,0,1,86,32l.31-2.35a105.47,105.47,0,0,0-15.66,9.91c-1.51,1.16,0,3.77,1.52,2.59a104.86,104.86,0,0,1,15.65-9.91,1.52,1.52,0,0,0,.31-2.36A134.48,134.48,0,0,0,77,18.8c-1.44-1.27-3.58.85-2.12,2.12Z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        {footerLinks.map((item) => {
          return (
            <Link
              href={item.link}
              className={`${item.bgColor} hover:opacity-75 text-white transition p-2 rounded-sm text-xl`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  </div>  )
}

export default HomeFooter