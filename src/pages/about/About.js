import React from 'react';
import './about.css';

export default function About() {
    return (
        <div>
            <div className="containerDiv">
                <div className="graphicDiv">
                    <div className="row pictureDiv">
                        <img className="img img-thumbnail" src="../img/ProfilePic.jpg" alt="Mary W. Ervin"/>
                    </div>
                    <div className=" row buttonDiv">
                        <button className="buttonStyle"><a href="../docs/Mary Ervin Resume_October 2020.pdf">résumé</a></button>
                        <button className="buttonStyle"><a href="https://github.com/mwoodervin">github</a></button>
                        <button className="buttonStyle"><a href="https://www.linkedin.com/in/mary-w-dempsey-ervin-b8a3b231/">LinkedIn</a></button>
                    </div>
                </div>
                <div className="summaryDiv">
                    <p>I am an independent consultant specializing in small business development, management and systems improvement.</p>

                    <p>I have a background in finance and am completing a 6-month coding bootcamp, working toward a certificate in full-stack web development.
                            I am passionate about creating strong, healthy, and collaborative communities that function at a high level and focus around a set of values, product offerings, and/or innovative programs. </p>

                    <p>Areas of professional experience include: Strategic Planning and Organizational Analysis ▪ Project Management and Process Development ▪ Collaborative Problem Solving ▪ Leadership, Coaching, Team Building & Training ▪ Conflict Resolution & Consensus Building ▪ Performance Management ▪ Business Culture Development ▪ Innovative Program Development ▪ Presentations / Public Speaking  ▪  Budget Development   </p>

                    <p>I have served on several school and community boards and was a founding board member of Catamount Womenaid, a community-based organization dedicated to providing short-term grant funding for families in need.</p>

                    <p>I graduated from Hamilton College and hold an MBA with a concentration in Finance from the University at Albany.  Currently living in Stratham, NH with my two sons.
                            My spare time is spent outdoors as much as possible!</p>
                </div>
            </div>
        </div>
    )
}
