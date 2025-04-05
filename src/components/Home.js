import React, {useState, useEffect} from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg'; // Ensure profile picture is in the correct path
import { Link,  } from 'react-router-dom';


function Home() {
  const [text, setText] = useState('');
    const fullText = "Hi, I'm DAVEED  ";
  
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }, []);


  return (
    <section id="home" className="home-section">
      {/* Interstellar Background */}
      <div className="interstellar-background"></div>

      {/* Profile and Intro */}
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="home-profile-pic" />
        <h1 className="home-title">{text}</h1>
        <p className="home-subtitle">Full Stack Developer | Tech Enthusiast | Dreamer</p>
        <Link to="/projects" className="explore-btn">Explore My Work</Link>


        {/* <a href="Projects" className="explore-btn">Explore My Work</a> */}
      </div>
    </section>
  );
}

export default Home;
