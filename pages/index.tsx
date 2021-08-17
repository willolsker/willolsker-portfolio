import type { NextPage } from 'next'
import Head from 'next/head'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFileAlt, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import ExperienceItem from "./components/ExperienceItem";

interface HomeProps {
    isMobile: boolean
}

const Home: NextPage<HomeProps> = ({ isMobile }) => {
  return (
    <div>
      <Head>
          <title>Will Olsker</title>
        <meta name="description" content="Will Olsker's development and design portfolio" />
      </Head>

        <header id="header">
            <h1>Will Olsker</h1>
            <h3>Full-stack developer and UI designer based in San Diego</h3>
            <div className="button-container">
                <a href={"https://github.com/willolsker"} target="_blank" rel="noopener noreferrer" className="button">
                    <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    GitHub
                </a>
                <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer" className="button">
                    <FontAwesomeIcon icon={faFileAlt} size={"2x"}/>
                    Resume
                </a>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className={"scroll-down-arrow"} onClick={() => window.scrollTo(0, window.innerHeight)}/>
        </header>
        <article>
            Hi, I am Will Olsker! I am an innovative and passionate software developer. Since writing my first line of JavaScript in 2013, I have continued to build my development skills working on a range of full-stack projects. In addition to writing code, my ability to see the big picture and work with end-users has helped me to architect large-scale projects to solve big problems. And while I might not know everything yet, I am constantly working to improve my projects and expand both my technical and soft skill sets.
        </article>
        <section className="experience">
            <h1>
                My Experience
                {isMobile && <span style={{fontSize: 24}}> (tap for details)</span>}
            </h1>
            <div className="experience-items">
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" name="JavaScript" color="#f7df1e" experience={8}>
                    I have been learning JavaScript for 7 years in total with a variety of frameworks.
                </ExperienceItem>
                <ExperienceItem img="https://nodejs.org/static/images/logo.svg" name="NodeJS" color="#2e2e2e" textColor="white" experience={2}>
                    I've used NodeJS with Express and GraphQL for web servers for Ripple projects.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" name="TypeScript" experience={2} color="#3178C6" textColor="white">
                    I use TypeScript throughout Ripple projects.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" name="React" experience={2} color="#282c34" textColor="white">
                    I have used React for web and React Native development for Ripple, as well as with NextJS for this project.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" name="MongoDB" experience={1} >
                    I have used MongoDB in the backend of Ripple Meet through Mongoose.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" name="GraphQL" experience={1} >
                    I have used GraphQL in the backend of Ripple Meet.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" name="Java" experience={6}>
                    I learned some basic Java and have some exposure using it to modify videobridge components for Ripple Meet.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" name="Python" experience={6} color="#1e415e" textColor="white">
                    I learned some basic Python and have used it for developing some basic scripts.
                </ExperienceItem>
                <ExperienceItem img="https://codersera.com/blog/wp-content/uploads/2019/10/Sketch-Adobe-XD.png" name="Prototyping tools" experience={4} >
                    I have used prototyping tools for designing the Wave Mobility app concept and prototyping the UI Ripple Classroom and Ripple Meet.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/archive/a/af/20200226101009%21Adobe_Photoshop_CC_icon.svg" name="Photoshop" experience={6} color="#001d26" textColor="#00c8ff">
                    I can use Photoshop for a wide range of use cases including making UI mockups and image manipulation.
                </ExperienceItem>
                <ExperienceItem img="https://upload.wikimedia.org/wikipedia/commons/archive/f/fb/20200616073834%21Adobe_Illustrator_CC_icon.svg" name="Illustrator" experience={6} color="#261300" textColor="#ff7c00">
                    I have used Illustrator for building the brand identities for Ripple and Wave Mobility.
                </ExperienceItem>
            </div>
        </section>
        <div className="project-header">
            <h1>My Work</h1>
        </div>
        <section className="project">
            <h1>Ripple Meet</h1>
            <div className="text-image-block">
                <img src="/ripple-screenshot.png" alt="Screenshot of Ripple Meet"/>
                <div>
                    <h2>Project Info</h2>
                    <p>Ripple Meet was designed to solve issues with live video classes during the COVID-19 pandemic. For more information about Ripple Meet, visit <a href="https://ripplemeet.com">https://ripplemeet.com</a>.</p>
                    <h2>Development Skills</h2>
                    <ul>
                        <li>WebRTC</li>
                        <li>Jitsi Meet API</li>
                        <li>Java</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                        <li>TypeScript</li>
                    </ul>
                    <h2>Design Skills</h2>
                    <ul>
                        <li>Prototyping</li>
                        <li>Visual & Layout Design</li>
                        <li>User Testing & Feedback</li>
                        <li>Lean UX</li>
                        <li>Cohesive Branding</li>
                    </ul>
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Identifying problems and solutions</li>
                        <li>Working with clients to meet their needs</li>
                        <li>Setting and meeting deadlines</li>
                        <li>Leading and working on a team</li>
                        <li>The importance of clean, well-documented, and performant code in large projects</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="project grey">
            <h1>Ripple Class</h1>
            <div className="text-image-block">
                <div>
                    <h2>Project Info</h2>
                    <p>Ripple Class was created as a new learning platform for in-person learning. Development of Class was phased out in order to focus fully on Ripple Meet in light of the COVID-19 pandemic, but some of its backend lives on in Meet's current codebase.</p>
                    <h2>Development Skills</h2>
                    <ul>
                        <li>React Native</li>
                        <li>NodeJS</li>
                        <li>REST APIs</li>
                    </ul>
                    <h2>Design Skills</h2>
                    <ul>
                        <li>Prototyping</li>
                        <li>Visual & Layout Design</li>
                        <li>Lean UX</li>
                    </ul>
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Identifying problems and solutions</li>
                        <li>Setting and meeting deadlines</li>
                        <li>Leading and working on a team</li>
                    </ul>
                </div>
                <img src="/ripple-class-screenshot.png" alt="Screenshot of Ripple Class"/>
            </div>
        </section>
        <section className="project">
            <h1>Wave Mobility</h1>
            <div className="text-image-block">
                <img src="/wave-model.png" alt="Wave Electric Scooter Design"/>
                <div>
                    <h2>Project Info</h2>
                    <p>Wave Mobility was a middle school design project that aimed to be a better vision for electric scooter sharing. Wave's concept was meant to be more convenient for users through public transit integration, more accomodating for people with disabilities, and environmentally friendlier.</p>
                    <h2>Development Skills</h2>
                    <ul>
                        <li>React Native (made a basic version of the app)</li>
                    </ul>
                    <h2>Design Skills</h2>
                    <ul>
                        <li>Prototyping</li>
                        <li>Visual & Layout Design</li>
                        <li>3D Design with Autodesk Fusion 360</li>
                        <li>Cohesive Branding</li>
                    </ul>
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Identifying problems and solutions</li>
                        <li>Market analysis</li>
                        <li>Creating a green business plan</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="project grey">
            <h1>Portfolio Site</h1>
            <div>
                <h2>Project Info</h2>
                <p>This website right here!</p>
                <h2>Development Skills</h2>
                <ul>
                    <li>React</li>
                    <li>CSS</li>
                    <li>NextJS</li>
                </ul>
                <h2>Design Skills</h2>
                <ul>
                    <li>Visual & Layout Design</li>
                </ul>
                <h2>Soft Skills</h2>
                <ul>
                    <li>Self-reflection</li>
                    <li>Design and development on a tight schedule</li>
                </ul>
            </div>
        </section>
        <footer>
            Copyright 2021 Will Olsker
            <br/><br/>
            <a href="#header">Back to Top</a>
        </footer>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    let isMobile = Boolean(userAgent?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ));
    return { isMobile };
}

export default Home
