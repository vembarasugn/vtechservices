import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Check from '/public/check.svg';

const Services = () => {
  return (
    <div className="container bg-white-300 py-22 sm:py-32">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">OUR SERVICES</h2>      
      </div> 
     <div className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-bold leading-6 text-teal-500 group-hover:text-teal-400">
              <span className="absolute inset-0 no-underline hover:underline decoration-4">ELECTRICAL PROJECTS</span>  
            </h3><br/>
            <Image src="/Electricals1.jpg" alt="Electricalimg" className="rounded"/>
            <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base line-clamp-6">At V-TECH Renewables, we pride ourselves on our in-depth knowledge and experience in electrical projects. From initial design and planning to installation and maintenance, we provide end-to-end consulting services, ensuring that our clients electrical systems meet their specific requirements. Our team of highly skilled electrical engineers and technicians has a proven track record of delivering successful projects for various industries, including residential, commercial, and industrial sectors. We work closely with our clients, understanding their needs and delivering innovative solutions that optimize energy efficiency enhance safety, and ensure reliable power distribution.</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-6 ">
            <Link className="mx-4 px-4 py-3 bg-gray-300 text-gray-800 text-xs font-semibold rounded hover:bg-gray-400" href="/services/ourservices/electrical">
            Learn More
            </Link>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-bold leading-6 text-teal-500 group-hover:text-teal-400">
              <span className="absolute inset-0 no-underline hover:underline decoration-4">SOLARPOWER PROJECTS</span>    
            </h3><br/>
            <Image src="/Solarenergy1.jpg" alt="Solarenergyimg"  width={500} height={50}  className="rounded"/>
            <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base line-clamp-6">As advocates of renewable energy, we offer consultancy and implementation services for solar power projects. Our dedicated team of solar energy experts assists clients in designing, installing, and maintaining efficient solar power solutions. Whether it's a small residential installation or a large-scale commercial project, we tailor our services to each client's unique needs and location. With a focus on maximizing solar energy generation, we utilize the latest technologies, such as photovoltaic (PV) panels, energy storage systems,and smart grid integration, to deliver cost-effective and sustainable solar power projects.Our team also provides ongoing monitoring and maintenance services to ensure optimal system performance and longevity.</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-6 ">
              <Link className="mx-4 px-4 py-3 bg-gray-300 text-gray-800 text-xs font-semibold rounded hover:bg-gray-400" href="/services/ourservices/solar">
              Learn More
              </Link>
            </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-bold leading-6 text-teal-500 group-hover:text-teal-400">
              <span className="absolute inset-0 no-underline hover:underline decoration-4">PROJECT MANAGEMENT</span> 
            </h3><br/>
            <Image src="/projectmanagement1.jpg" alt="projectmanagementimg" className="rounded"/>
            <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base line-clamp-6">At V-TECH Renewables, effective project management is at the core of what we do. We understand the complexities involved in electrical and solar power projects and strive to deliver exceptional results within budget and timeline constraints. Our experienced project managers take a proactive approach, ensuring thorough planning, efficient resource allocation, and seamless coordination among various stakeholders. We keep our clients updated throughout the project's lifecycle, providing regular progress reports,and addressing any challenges that may arise. Our commitment to meticulous project management ensures successful project completion and client satisfaction.</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-5">
            <Link className="mx-4 px-4 py-3 bg-gray-300 text-gray-800 text-xs font-semibold rounded hover:bg-gray-400" href="/services/ourservices/projectmanage">
            Learn More
            </Link>
          </div>
        </article>
      </div>
    </div>
    <div className="pb-10 pt-8">
      <dh-component>
        <section className="max-w-8xl mx-auto bg-gray pt-16">
              <div>
                <div className="mt-10 px-8">
                  <h1 className="text-teal-500 text-4xl font-semibold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-4xl">
                   FEATURES<br></br>
                  </h1>
                </div>
                {/* <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                  <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-15">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-teal-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-teal-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                      </div>
                    </div>
                    <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-teal-500 no-underline hover:underline decoration-4">Quality Assurance</h2>
                      <p tabIndex={0} className="focus:outline-none text-base text-gray-400 leading-normal pt-2 text-justify">At V-TECH Renewables, we prioritize quality in every aspect of our work. We adhere to industry standards and best practices, ensuring that our services are delivered to the highest level of quality. Our team conducts thorough inspections, performs rigorous testing, and implements strict quality control measures throughout the project lifecycle. We source equipment and components from reputable manufacturers and suppliers to ensure reliability and performance. By employing robust quality assurance processes, we guarantee the reliability and longevity of the systems we design and implement, providing peace of mind to our clients.</p>
                    </div>
                  </div>
                  <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-15">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-teal-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-teal-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check"/>
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-teal-500 no-underline hover:underline decoration-4">Customized Solutions</h2>
                      <p tabIndex={0} className="focus:outline-none text-base text-gray-400 leading-normal pt-2 text-justify">We understand that each client has unique requirements, and we tailor our solutions accordingly. Our team collaborates closely with clients to understand their goals and objectives, site conditions, and budget constraints. This collaborative approach allows us to develop customized strategies and recommendations that meet their specific needs, ensuring optimal system performance, energy savings, and return on investment. We consider factors such as shading analysis, energy consumption patterns, available roof space, and local regulations to design solar power systems that are tailored to each client's location and objectives.</p>
                    </div>
                  </div>
                  <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-15">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-teal-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-teal-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight    text-teal-500 no-underline hover:underline decoration-4">Customer Satisfaction</h2>
                      <p tabIndex={0} className="focus:outline-none text-base text-gray-400 leading-normal pt-2 text-justify">Client satisfaction is our ultimate goal. We strive to exceed our clients' expectations by providing exceptional customer service and support throughout the project lifecycle. Our dedicated team of professionals is committed to open communication, transparency, and responsiveness. We listen to our clients' concerns, address their inquiries promptly, and keep them informed at every stage of the project. We also provide comprehensive post-installation support, including maintenance, troubleshooting, and system optimization. Our commitment to superior customer service enables us to build long-lasting relationships with our clients, based on trust and mutual success.</p>
                    </div>
                  </div>
                  <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-15">
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-teal-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-teal-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-teal-500 no-underline hover:underline decoration-4">Expertise</h2>
                      <p tabIndex={0} className="focus:outline-none text-base text-gray-400 leading-normal pt-2 text-justify">With over a decade of experience, our team comprises highly-skilled professionals with extensive knowledge in electrical engineering, solar power projects, and project management. Continuous learning and development are key to our success, and we stay abreast of the latest technologies, regulations, and industry trends. This expertise allows us to provide the best-in-class services to our clients, ensuring that their projects are executed to the highest standards.We strive to deliver the best results for every project and are continually improving our processes and technology to ensure that our customers get the most value for their money.</p>
                    </div>
                  </div>
                </div> */}
          <div className="flex flex-wrap my-12">
           <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-teal-500" />
              <div className="ml-4 text-xl">Expertise</div>
            </div>
            <p className="leading-loose text-gray-500">
            With over a decade of experience, our team comprises highly-skilled professionals with extensive knowledge in electrical engineering, solar power projects, and project management. Continuous learning and development are key to our success, and we stay abreast of the latest technologies, regulations, and industry trends. This expertise allows us to provide the best-in-class services to our clients, ensuring that their projects are executed to the highest standards.We strive to deliver the best results for every project and are continually improving our processes and technology to ensure that our customers get the most value for their money.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-teal-500"/>
              <div className="ml-4 text-xl">Quality Assurance</div>
            </div>
            <p className="leading-loose text-gray-500">
            At V-TECH Renewables, we prioritize quality in every aspect of our work. We adhere to industry standards and best practices, ensuring that our services are delivered to the highest level of quality. Our team conducts thorough inspections, performs rigorous testing, and implements strict quality control measures throughout the project lifecycle. We source equipment and components from reputable manufacturers and suppliers to ensure reliability and performance. By employing robust quality assurance processes, we guarantee the reliability and longevity of the systems we design and implement, providing peace of mind to our clients
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-teal-500"/>
              <div className="ml-4 text-xl">Customized Solutions</div>
            </div>
            <p className="leading-loose text-gray-500">
            We understand that each client has unique requirements, and we tailor our solutions accordingly. Our team collaborates closely with clients to understand their goals and objectives, site conditions, and budget constraints. This collaborative approach allows us to develop customized strategies and recommendations that meet their specific needs, ensuring optimal system performance, energy savings, and return on investment. We consider factors such as shading analysis, energy consumption patterns, available roof space, and local regulations to design solar power systems that are tailored to each client's location and objectives.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-teal-500"/>
              <div className="ml-4 text-xl">Customer Satisfaction</div>
            </div>
            <p className="leading-loose text-gray-500">
            Client satisfaction is our ultimate goal. We strive to exceed our clients' expectations by providing exceptional customer service and support throughout the project lifecycle. Our dedicated team of professionals is committed to open communication, transparency, and responsiveness. We listen to our clients' concerns, address their inquiries promptly, and keep them informed at every stage of the project. We also provide comprehensive post-installation support, including maintenance, troubleshooting, and system optimization. Our commitment to superior customer service enables us to build long-lasting relationships with our clients, based on trust and mutual success.
            </p>
          </div>
          </div>
        </div>
        </section>
        </dh-component> 
      </div>
  </div>
 )
};

export default Services;
