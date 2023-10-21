import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Jingcheng Wang</h1>
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Education</p>
      </header>
      <main className="Main">
        <div id="About"> 
          <p>
            I started my career as a business support technician for Thales Australia while finishing off my Masters degree in Software Engineering. This role helped me build experience in business management using Microsoft SharePoint, and allowed me to familiarise with other departments as my department supported their work processes. After I finished my Masters and proceeded to PHD studies, I encountered an opportunity to join in a start-up, an Australian Chinese media company. It allowed me to make use of my fluency in English and Chinese, my knowledge in web design and social media, and gain insight on clients and partners from various industries that we work with.
          </p>
        </div>
        <div id="Experience">
          <p>
            Aug 2016 – May 2023
          </p>
          <p>
            Australia Southworld Media
          </p>
          <p>
            Marketing Manager / Senior Editor
          </p>
          <ul>
            <li>Plan and execution of social events</li>
            <li>Organise event promotion and liaise joint promotion with other media groups</li>
            <li>Assign daily editorial tasks for editor team and review publications</li>
            <li>Photography and videography</li>
            <li>Video post-editing</li>
            <li>Website design and graphic design</li>
          </ul>
        </div>
        <div>
          <p>
            Mar 2010 - Jul 2016
          </p>
          <p>
            Thales Australia, Maritime & Aerospace
          </p>
          <p>
            Business Support Technician
          </p>
          <ul>
            <li>Started as designing and building a data repository system from scratch using Microsoft SharePoint, the project grew quickly in scale and functionalities.</li>
            <li>Maintaining security settings to facilitate collaboration between teams and departments</li>
            <li>Create automated workflows for various work processes</li>
            <li>Design and maintain intranet and portal solutions for various departments and functionalities, involving Sharepoint Web Parts, Designer functionalities, Power Automate functionalities and the usage of HTML, Javascript and CSS</li>
          </ul>
        </div>
        <div id="Projects">
          <p>Projects</p>
        </div>
        <div id="Education">
          <p>Education</p>
        </div>
      </main>
      
    </div>
  );
}

export default App;
