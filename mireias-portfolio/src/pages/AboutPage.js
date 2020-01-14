import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

                <Content>

                <p>Hello, my name is Mireia. I'm a full stack engineer with experience in React, Node JS, Ruby on Rails, JavaScript, Express JS CSS and HTML.</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with React and Node JS.</p>

                <p>My latest project, BoostIt, is a website made for AirBnb hosts and help them to boost their guest's experience. You can check it out <a href="https://boostit.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Rails and JavaScript. It needs some fixes in therms of responsiveness and I will be rebuilding it using React in the coming months</p>

                </Content>

        </div>

    );

}

export default AboutPage;