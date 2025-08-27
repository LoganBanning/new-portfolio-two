import './Projects.css'
import InfiniteScroll from './ProjectImages/infinite_scroll.jpg'
import MonsterRolodex from './ProjectImages/monsters_rolodex.jpg'
import PictureInPicture from './ProjectImages/picture_in_picture.jpg'
import StudentInfoPage from './ProjectImages/student_info_page.jpg'

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
        image: PictureInPicture,
        category: 'Project',
        title: 'Picture In Picture',
        url: 'https://loganbanning.github.io/picture-in-picture/' 
    },
    {
        image: InfiniteScroll,
        category: 'Project',
        title: 'Infinite Scroll',
        url: 'https://loganbanning.github.io/infinite-scroll-project/'
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