import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Mikheil Abuladze </span>
            from <span className="purple"> Rustavi, Georgia.</span>
            <br />
            Beginner software Engineer
            
            <br />
            Developer with no experience but knowledge of creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3

          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
