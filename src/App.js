import {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.body.classList.add(
      'bg-slate-900',
      'leading-relaxed', 
      'text-slate-400',
      'antialiased', 
      'selection:bg-teal-300', 
      'selection:text-teal-900',
    );
  }, []);
  return (
    <div className="__variable_20b187 group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Jingcheng Wang</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Marketing Manager at Australia Southworld Media
              </h2>
              <p class="mt-4 max-w-xs leading-normal">A software engineer at heart, got the opportunity to explore the world of media and marketing. Always looking to utilize the latest technology to automate and deliver high quality services</p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul class="mt16 w-max">
                  <li>
                    <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 active" href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 active" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 active" href="#education">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Education</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://github.com/jingcheng-wang-2010" target="_blank" rel="noreferrer">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/jingcheng-wang-63415a173/" target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4">
                  I started my career as a Business Support Technician for <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.thalesgroup.com/en/countries/asia-pacific/australia" target="_blank" rel="noreferrer">Thales Australia</a> while finishing off my Masters degree in Software Engineering. This role helped me build experience in business management using Microsoft SharePoint, and allowed me to familiarise with other departments as my department supported their work processes. After I finished my Masters and proceeded to PHD studies, I encountered an opportunity to join in a start-up, an Australian Chinese media company called <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://southworldmedia.com/" target="_blank" rel="noreferrer">Australia Southworld Media</a>. It allowed me to make use of my fluency in English and Chinese, my knowledge in web design and social media, and gain insight on clients and partners from various industries that we work with.
                </p>
              </div>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol class="group/list">
                  <li class="mb-12">
                    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2016 to Present">
                        2016 — Present
                      </header>
                      <div class="z-10 sm:col-span-6">
                        <h3 class="font-medium leading-snug text-slate-200">
                          <div>
                            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.southworldmedia.com" target="_blank" rel="noreferrer" aria-label="Marketing Manager at Australia Southworld Media">
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                              </span>
                              <span>
                                Marketing Manager · <span class="inline-block">Australia Southworld Media <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                          <div>
                            <div class="text-slate-500" aria-hidden="true">Consultant</div>
                          </div>
                          <div>
                            <div class="text-slate-500" aria-hidden="true">Senior Editor</div>
                          </div>
                          <div>
                            <div class="text-slate-500" aria-hidden="true">Editor</div>
                          </div>
                        </h3>
                        <p class="mt-2 text-sm leading-normal">
                          <ul>
                            <li>Plan and execution of social events</li>
                            <li>Organise event promotion and liaise joint promotion with other media partners</li>
                            <li>Assign daily editorial tasks for editor team and review publications</li>
                            <li>Photography and videography</li>
                            <li>Video post-editing</li>
                            <li>Website design and graphic design</li>
                          </ul>
                        </p>
                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Google Analytics
                          </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Wordpress
                          </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Adobe Premiere
                            </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Adobe Photoshop
                            </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              JavaScript
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="mb-12">
                    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2010 to 2016">
                        2010 — 2016
                      </header>
                      <div class="z-10 sm:col-span-6">
                        <h3 class="font-medium leading-snug text-slate-200">
                          <div>
                            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.thalesgroup.com/en/countries/asia-pacific/australia" target="_blank" rel="noreferrer" aria-label="Business Support Technician at Thales Australia">
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                              </span>
                              <span>
                                Business Support Technician · <span class="inline-block">Thales Australia <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p class="mt-2 text-sm leading-normal">
                          <ul>
                            <li>Started as designing and building a data repository system from scratch using Microsoft SharePoint, the project grew quickly in scale and functionalities.</li>
                            <li>Maintaining security settings to facilitate collaboration between teams and departments</li>
                            <li>Create automated workflows for various work processes</li>
                            <li>Design and maintain intranet and portal solutions for various departments and functionalities, involving SharepointWeb Parts, Designer functionalities, Power Automate functionalities and the usage of HTML, Javascript and CSS</li>
                          </ul>
                        </p>
                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            SharePoint
                          </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Javascript
                          </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              CSS
                            </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              HTML
                            </div>
                          </li>
                          <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              VisualBasic
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Past Projects">
              <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
            </section>
            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
              <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
              </div>
              <ol class="group/list">
                  <li class="mb-12">
                    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2013 to 2015">
                        2013 — 2015
                      </header>
                      <div class="z-10 sm:col-span-6">
                        <h3 class="font-medium leading-snug text-slate-200">
                          <div>
                            <div class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" aria-label="University of Sydney">
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                              </span>
                              <span>
                                University of Sydney
                              </span>
                            </div>
                          </div>
                          <div>
                            <div class="text-slate-500" aria-hidden="true">Masters (via Research) of Information and Technology</div>
                          </div>
                        </h3>
                        <p class="mt-2 text-sm leading-normal">
                        Research topic: A Rule-based Methodology and Feature-based Methodology for Effect Relation Extraction in Chinese Unstructured Text
                        </p>
                        <div>
                            <div class="text-slate-500" aria-hidden="true">Bachelor of Engineering (Software) /Bachelor of Arts (Chinese)</div>
                          </div>
                        <p class="mt-2 text-sm leading-normal">
                        Honours Class II, Division 1
                        </p>

                      
                      </div>
                    </div>
                  </li>
                </ol>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
