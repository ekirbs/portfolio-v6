import { useState, useEffect } from "react";
import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaHtml5,
  FaJava,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaSass,
  FaVuejs,
  FaLinux,
  FaGitlab,
  FaJira,
  FaConfluence,
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
  SiSonarqube,
  SiHeroku,
  SiFirebase,
  SiGithub,
  SiSpring,
  SiMui,
  SiPostgresql,
  SiTypescript,
  SiApachemaven,
  SiMongoose,
  SiSwagger,
} from "react-icons/si";
import "./techs.css";

export default function Techs() {
  const techLogos = [
    {
      icon: <FaJava />,
      class: "java-logo",
      color: "var(--java)",
      title: "Java",
    },
    {
      icon: <DiJavascript1 />,
      class: "js-logo",
      color: "var(--js)",
      title: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      class: "ts-logo",
      color: "var(--ts)",
      title: "TypeScript",
    },
    {
      icon: <FaAngular />,
      class: "angular-logo",
      color: "var(--angular)",
      title: "Angular",
    },
    {
      icon: <FaReact />,
      class: "react-logo",
      color: "var(--react)",
      title: "React.js",
    },
    {
      icon: <FaVuejs />,
      class: "vue-logo",
      color: "var(--vue)",
      title: "Vue.js",
    },
    {
      icon: <SiHandlebarsdotjs />,
      class: "handlebars-logo",
      color: "var(--handlebars)",
      title: "Handlebars.js",
    },
    {
      icon: <FaNodeJs />,
      class: "node-logo",
      color: "var(--node)",
      title: "Node.js",
    },
    {
      icon: <SiApachemaven />,
      class: "maven-logo",
      color: "var(--maven)",
      title: "Apache Maven",
    },
    {
      icon: <FaHtml5 />,
      class: "html-logo",
      color: "var(--html)",
      title: "HTML5",
    },
    {
      icon: <SiJquery />,
      class: "jquery-logo",
      color: "var(--jquery)",
      title: "jQuery",
    },
    {
      icon: <DiCss3 />,
      class: "css-logo",
      color: "var(--css)",
      title: "CSS3"
    },
    {
      icon: <FaSass />,
      class: "sass-logo",
      color: "var(--sass)",
      title: "SASS",
    },
    {
      icon: <DiBootstrap />,
      class: "bootstrap-logo",
      color: "var(--bootstrap)",
      title: "Bootstrap",
    },
    {
      icon: <SiBulma />,
      class: "bulma-logo",
      color: "var(--bulma)",
      title: "Bulma",
    },

    {
      icon: <DiMysql />,
      class: "mysql-logo",
      color: "var(--mysql)",
      title: "MySQL",
    },
    {
      icon: <SiSequelize />,
      class: "sequelize-logo",
      color: "var(--sequelize)",
      title: "Sequelize",
    },
    {
      icon: <SiPostgresql />,
      class: "postgresql-logo",
      color: "var(--postgresql)",
      title: "PostgreSQL",
    },
    {
      icon: <DiMongodb />,
      class: "mongo-logo",
      color: "var(--mongo)",
      title: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      class: "mongoose-logo",
      color: "var(--mongoose)",
      title: "Mongoose",
    },
    {
      icon: <FaAws />,
      class: "aws-logo",
      color: "var(--aws)",
      title: "AWS",
    },
    {
      icon: <FaDocker />,
      class: "docker-logo",
      color: "var(--docker)",
      title: "Docker",
    },
    {
      icon: <FaJenkins />,
      class: "jenkins-logo",
      color: "var(--jenkins)",
      title: "Jenkins",
    },
    {
      icon: <SiSonarqube />,
      class: "sonarqube-logo",
      color: "var(--sonarqube)",
      title: "SonarQube",
    },
    {
      icon: <SiHeroku />,
      class: "heroku-logo",
      color: "var(--heroku)",
      title: "Heroku",
    },
    {
      icon: <SiFirebase />,
      class: "firebase-logo",
      color: "var(--firebase)",
      title: "Firebase",
    },

    {
      icon: <SiExpress />,
      class: "express-logo",
      color: "var(--express)",
      title: "Express.js",
    },
    {
      icon: <SiAxios />,
      class: "axios-logo",
      color: "var(--axios)",
      title: "Axios",
    },
    {
      icon: <SiApollographql />,
      class: "apollo-logo",
      color: "var(--apollo)",
      title: "Apollo Server",
    },
    {
      icon: <SiInsomnia />,
      class: "insomnia-logo",
      color: "var(--insomnia)",
      title: "Insomnia",
    },
    {
      icon: <SiGraphql />,
      class: "graphql-logo",
      color: "var(--graphql)",
      title: "GraphQL",
    },
    {
      icon: <SiGithub />,
      class: "github-logo",
      color: "var(--github)",
      title: "GitHub",
    },
    {
      icon: <FaGitlab />,
      class: "gitlab-logo",
      color: "var(--gitlab)",
      title: "GitLab",
    },
    {
      icon: <SiSpring />,
      class: "spring-logo",
      color: "var(--spring)",
      title: "Spring",
    },
    {
      icon: <SiMui />,
      class: "mui-logo",
      color: "var(--mui)",
      title: "MUI",
    },
    {
      icon: <SiSwagger />,
      class: "swagger-logo",
      color: "var(--swagger)",
      title: "Swagger",
    },
    {
      icon: <FaLinux />,
      class: "linux-logo",
      color: "var(--linux)",
      title: "Linux",
    },
    {
      icon: <FaJira />,
      class: "jira-logo",
      color: "var(--jira)",
      title: "Jira",
    },
    {
      icon: <FaConfluence />,
      class: "confluence-logo",
      color: "var(--confluence)",
      title: "Confluence",
    },
  ];

  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % techLogos.length);
    }, 500);

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
