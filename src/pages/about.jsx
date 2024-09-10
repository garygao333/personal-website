import React from 'react';
import { Link } from 'react-router-dom';
import '../chatbot.css'; 

function About() {
  
  return (
    <div className="app-container-1">
      <div className="text-content">
          <h1>Gary Z. Gao</h1>
          <p className="details">Incoming Freshman @ UPenn | Benjamin Franklin Scholar | Student pilot</p>
          <p className="details-2">Hello! I am Gary, an incoming freshman to UPenn interested in the application of AI technologies to professional industries.
          On top of AI research, I also launch startups, study Economics, and fly airplanes for a hobby. 
          </p>
          <h2>Education:</h2>
          <p className="details">
            University of Pennsylvania <br/>
            Bachelors of Science (BS), Benjamin Franklin Scholar, Economics and CS
          </p>
          <p className="details">
            Montclair Kimberely Academy <br/>
            Activities and societies: Cum Laude, Elected Representative, Student Government; Captain, Varsity Fencing; Captain, Math Team; Student Leader, Linguistics Club; Student Leader, Philosophy Club
          </p>
          <h2>Experience:</h2>
          <p className="details">
            Experimental Aircraft Association | Project lead <br/>
            Organized the EAA Young Eagles Speaker Series - a monthly aviation-themed speaker event for 100 attendees, launched and currently manage three new social media platforms. Created platforms for event awaiting approval: <a href="https://eaass-a5ed02cafb67.herokuapp.com/home/">Event Website</a> & <a href="ta-web-alphav0.vercel.app/signup">All Things Airplanes</a>.
          </p>
          <p className="details">
            NIJE | Director of Product and Strategy <br/>
            NIJE (pronounced NEE-JAY) is an educational application focused on preservation and teaching of both indigenous language and culture.
          </p>
          <p className="details">
            Quickmeets | SWE Interny <br/>
            Quickmeets connects students with others in their class in a user-friendly way. As SWE Intern, I help develop the application with React Native and Firebase and help with strategy and product. 
          </p>
          <h2>Projects & Startups:</h2>
          <p className="details">
            AI Etruscan Translation Project | Co-author <br/>
            Constructed an Etruscan encoder-decoder mamba-former translator that outscores other AI Etruscan translators through a novel combination of leading technology and strategies. Associated with MKA.
          </p>
          <p className="details">
            Bilingual Wikipedia Polarity Analysis Project | Co-author <br/>
            Designed and implemented novel architecture to calculate relative polarity scores for Wikipedia articles in two different languages using contrastive learning. An MKA May Term Creative Inquiry Project.
          </p>
          <p className="details">
            Socrates AI | Co-founder <br/>
            Socrates AI is a chatbot that gives users full control over both the query and the dataset in a non-technical user-friendly way. This is especially useful in industries such as legal, academic, or research that require transparency and reliability. Submitted application to Y Combinator. Currently have 2 members.
          </p>
          <p className="details">
            FastDraft | Founder <br/>
            FastDraft is a notepad that lets users create quick-notes that automatically delete after a set-time interval. Paired with an easy one-click export to Google Docs, FastDraft allows users to efficiently manage notes and documents to reduce digital cluttering. 
          </p>
          <p className="details">
            All Things Airplanes | Founder <br/>
            All Things Airplanes is a social media platform for the aviation community that incorporates a club system, project sharing, friends, and events, all displayed on a central dashboard. 
          </p>
          <p className="details">
            WakeWin | Founder <br/>
            Wakewin is an alarm clock that not only wakes you up but inspires you to seize the day by reminding you of your goals and tasks.
          </p>
          <h2>Skills:</h2>
          <p className="contact-info">
              React JS, MERN stack <br/>
              AI development, pandas, etc <br/>
              Django & Rest <br/>
              Plotly Dash <br/>
              Flutter Dart <br/>
              Figma & Penpot <br/>
              Swift & Swift UI<br/>
          </p>
          <h2>Awards:</h2>
          <p className="contact-info">
              AMC 12 AIME Qualifier & Distinction <br/>
              National Merit Commended Scholar <br/>
              Cum Laude Inductee <br/>
              TEDx Leander Youth Speaker<br/>
              HiMCM Meritorious Recognition  <br/>
              Essex County Math League Team Award <br/>
              Junior Thesis High Research Distinction<br/>
              National Latin Exam 2x Gold Medal Winner <br/>
              Mary K. Warring Scholars <br />
              Silver Presidential Service Award <br/>
          </p>
          <p className="contact-info">
              Email: <a href="mailto:garygao@sas.upenn.edu">garygao@sas.upenn.edu</a><br/>
              Github: <a href="https://github.com/garygao333">https://github.com/garygao333</a><br/>
              LinkedIn: <a href="https://linkedin.com/in/garygao">https://linkedin.com/in/garygao</a>
          </p>
      </div>
    </div>
  );
}

export default About;
