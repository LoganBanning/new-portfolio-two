import './Projects.css';
import InfiniteScroll from '../../assets/Images/infinite_scroll.jpg'
import MonsterRolodex from '../../assets/Images/monsters_rolodex.jpg'
import PictureInPicture from '../../assets/Images/picture_in_picture.jpg'
import StudentInfoPage from '../../assets/Images/student_info_page.jpg'

const Projects = () => {

    const PortfolioListContent = [
    {
        image: <img src={MonsterRolodex} />,
        category: 'Project',
        title: 'Monster Rolodex',
        url: 'https://delightful-palmier-b62036.netlify.app/'
    },
    {
        image: <img src={StudentInfoPage} />,
        category: 'Project',
        title: 'Student info page',
        url: 'https://cerulean-chimera-c6adbf.netlify.app/'
    },
    {
        image: <img src={PictureInPicture} />,
        category: 'Project',
        title: 'Picture In Picture',
        url: 'https://loganbanning.github.io/picture-in-picture/'
    },
    {
        image: <img src={InfiniteScroll} />,
        category: 'Project',
        title: 'Infinite Scroll',
        url: 'https://loganbanning.github.io/infinite-scroll-project/'
    }]

    return (
        <>
            <h2>Projects</h2>
            {PortfolioListContent.map((value , index) => (
                <div className="" key={index}>
                    <div className="">
                        <div className="">
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h4><a href={value.url} target="_blank">{value.title}</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Projects;