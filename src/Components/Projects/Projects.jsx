import './Projects.css'
import InfiniteScroll from './ProjectImages/infinite_scroll.jpg'
import MonsterRolodex from './ProjectImages/monsters_rolodex.jpg'
import StudentInfoPage from './ProjectImages/student_info_page.jpg'
import VivintSmartHome from './ProjectImages/vivint_smart_home.jpg'
import CrownClothing from './ProjectImages/crown_clothing.png'
import QuoteGenerator from './ProjectImages/quote_generator.png'

const Projects = () => {

    const PortfolioListContent = [
    {
        image: MonsterRolodex,
        category: 'Project',
        title: 'Monster Rolodex',
        url: 'https://delightful-palmier-b62036.netlify.app/'
    },
    {
        image: StudentInfoPage,
        category: 'Project',
        title: 'Student info page',
        url: 'https://cerulean-chimera-c6adbf.netlify.app/'
    },
    {
        image: CrownClothing,
        category: 'Project',
        title: 'Crown Clothing',
        url: 'https://dancing-sunshine-604740.netlify.app/' 
    },
    {
        image: InfiniteScroll,
        category: 'Project',
        title: 'Infinite Scroll',
        url: 'https://loganbanning.github.io/infinite-scroll-project/'
    },
    {
        image: VivintSmartHome,
        category: 'Project',
        title: 'Vivint Smart Home Clone',
        url: 'https://vivintclone.netlify.app/'
    },
    {
        image: QuoteGenerator,
        category: 'Project',
        title: 'Quote Generator',
        url: 'https://astonishing-concha-8499bb.netlify.app/'
    }]

    return (
        <>
            <h2 className="projects_text">Projects</h2>
            <div className="projects_container">
                {PortfolioListContent.map((value , index) => (
                    <div className="content" key={index}>
                        <div className="inner">
                            <img className="project_picture" src={value.image} alt={`Picture of my project ${value.title}`} />
                            <h4><a className="project_links" href={value.url} target="_blank">{value.title}</a></h4>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;