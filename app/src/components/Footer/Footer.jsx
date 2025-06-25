import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <p className="mb-4 text-gray-400 text-center md:text-left md:mb-0">
          © CherryOnTech Venus Voyagers | All Rights Reserved.
        </p>
        
        <div className="flex space-x-4">
          {[
            {
              href: "https://www.linkedin.com/company/cherry-on-tech/posts/?feedView=all",
              icon: "/LinkedIn-Icon-PH.svg",
              alt: "LinkedIn"
            },
            {
              href: "https://cherryon.tech/",
              icon: "Cherry-Icon-PH.svg",
              alt: "Cherry on Tech"
            },
            {
              href: "https://www.youtube.com/@cherryontech",
              icon: "Youtube-Icon-PH.svg",
              alt: "YouTube"
            }
          ].map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-primary hover:bg-opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={link.icon} 
                alt={link.alt} 
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer