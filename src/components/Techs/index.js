import { useState, useEffect } from "react";
import { 
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaSass,
  FaVuejs
} from "react-icons/fa";
import {
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";
import {
  SiBulma,
  SiSequelize,
  SiGraphql,
  SiApollographql,
  SiHandlebarsdotjs,
  SiJquery,
  SiAxios,
  SiExpress,
  SiInsomnia,
  SiHeroku,
  SiFirebase,
  SiGithub,
} from "react-icons/si";
import "./techs.css";

export default function Techs() {

  const techLogos = [
    { icon: <DiJavascript1 />, class: "js-logo", color: "var(--js)", title: "JavaScript" },
    { icon: <FaReact />, class: "react-logo", color: "var(--react)", title: "React.js" },
    { icon: <FaVuejs />, class: "vue-logo", color: "var(--vue)", title: "Vue.js" },
    { icon: <SiHandlebarsdotjs />, class: "handlebars-logo", color: "var(--handlebars)", title: "Handlebars.js" },
    { icon: <FaNodeJs />, class: "node-logo", color: "var(--node)", title: "Node.js" },

    
    { icon: <FaHtml5 />, class: "html-logo", color: "var(--html)", title: "HTML5" },
    { icon: <SiJquery />, class: "jquery-logo", color: "var(--jquery)", title: "jQuery" },
    { icon: <DiCss3 />, class: "css-logo", color: "var(--css)", title: "CSS3" },
    { icon: <FaSass />, class: "sass-logo", color: "var(--sass)", title: "SASS" },
    { icon: <DiBootstrap />, class: "bootstrap-logo", color: "var(--bootstrap)", title: "Bootstrap" },
    { icon: <SiBulma />, class: "bulma-logo", color: "var(--bulma)", title: "Bulma" },
    
    { icon: <DiMysql />, class: "mysql-logo", color: "var(--mysql)", title: "MySQL" },
    { icon: <SiSequelize />, class: "sequelize-logo", color: "var(--sequelize)", title: "Sequelize" },
    { icon: <DiMongodb />, class: "mongo-logo", color: "var(--mongo)", title: "MongoDB" },
    { icon: <SiHeroku />, class: "heroku-logo", color: "var(--heroku)", title: "Heroku" },
    { icon: <SiFirebase />, class: "firebase-logo", color: "var(--firebase)", title: "Firebase" },

    
    { icon: <SiExpress />, class: "express-logo", color: "var(--express)", title: "Express.js" },
    { icon: <SiAxios />, class: "axios-logo", color: "var(--axios)", title: "Axios" },
    { icon: <SiApollographql />, class: "apollo-logo", color: "var(--apollo)", title: "Apollo Server" },
    { icon: <SiInsomnia />, class: "insomnia-logo", color: "var(--insomnia)", title: "Insomnia" },
    { icon: <SiGraphql />, class: "graphql-logo", color: "var(--graphql)", title: "GraphQL" },
    { icon: <SiGithub />, class: "github-logo", color: "var(--github)", title: "GitHub" },
  ];

  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % techLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="techs-card">
        {techLogos.map((logo, index) => (
          <div
            key={index}
            className={`tech-logo ${logo.class}`}
            style={{
              color: logoIndex === index ? logo.color : "var(--black)",
              transition: "color 0.3s ease-in-out",
            }}
            title={logo.title}
          >
            {logo.icon}
          </div>
        ))}
      </div>
    </>
  );
}