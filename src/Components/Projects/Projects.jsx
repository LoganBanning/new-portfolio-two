import './Projects.css';
import React from 'react'

const Projects = () => {

    const PortfolioListContent = [
    {
        image: 'image-3',
        category: 'Project',
        title: 'Monster Rolodex',
        url: 'https://delightful-palmier-b62036.netlify.app/'
    },
    {
        image: 'image-2',
        category: 'Project',
        title: 'Student info page',
        url: 'https://cerulean-chimera-c6adbf.netlify.app/'
    },
    {
        image: 'image-4',
        category: 'Project',
        title: 'Picture In Picture',
        url: 'https://loganbanning.github.io/picture-in-picture/'
    },
    {
        image: 'image-5',
        category: 'Project',
        title: 'Infinite Scroll',
        url: 'https://loganbanning.github.io/infinite-scroll-project/'
    }]
    // const {column , stylevariation } = this.props;
    // const list = PortfolioListContent.slice(0 , this.props.item);
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