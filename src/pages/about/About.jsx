import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vero animi molestias aperiam, ad nobis beatae ut tenetur tempora odio.
      </Header>
      <section className="about_story">
        <div className="container about_story_container">
          <div className="about_section_image">
            <img src={StoryImage} alt="StoryImage" />
          </div>
          <div className="about_section_content">
            <h1>
              Our Story
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Eligendi, molestiae? Dolorem temporibus magnam velit explicabo distinctio nisi error eligendi soluta, corrupti perspiciatis ea asperiores iusto, incidunt, hic qui!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci doloribus modi error provident praesentium consequatur, vitae quod aut dolorum, facilis deserunt perferendis est illo. Ut odio fuga nihil dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas placeat voluptas vel ducimus nam illum aspernatur ipsa, officiis est quod molestias perspiciatis non repellat voluptatum ex ea a nemo.</p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision_container">
          <div className="about_section_content">
            <h1>
              Our Vision
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Eligendi, molestiae? Dolorem temporibus magnam velit explicabo distinctio nisi error eligendi soluta, corrupti perspiciatis ea asperiores iusto, incidunt, hic qui!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci doloribus modi error provident praesentium consequatur, vitae quod aut dolorum, facilis deserunt perferendis est illo. Ut odio fuga nihil dolorem.</p>
          </div>
          <div className="about_section_image">
            <img src={VisionImage} alt="visionImage" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission_container">
          <div className="about_section_image">
            <img src={MissionImage} alt="missionImage" />
          </div>
          <div className="about_section_content">
            <h1>
              Our Mission
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Eligendi, molestiae? Dolorem temporibus magnam velit explicabo distinctio nisi error eligendi soluta, corrupti perspiciatis ea asperiores iusto, incidunt, hic qui!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci doloribus modi error provident praesentium consequatur, vitae quod aut dolorum, facilis deserunt perferendis est illo. Ut odio fuga nihil dolorem.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About