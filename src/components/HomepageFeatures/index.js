import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Software Testing Fundamentals",
    Svg: require("@site/static/img/testing-fundamentals.svg").default,
    description: (
      <>
        Master the building blocks of software testing. Learn key concepts,
        methodologies, and best practices to ensure software quality.
      </>
    ),
    link: "./docs/testing-fundamentals/introduction",
  },
  {
    title: "Web Application Testing",
    Svg: require("@site/static/img/web.svg").default,
    description: (
      <>
        Uncover the secrets of web app testing. Explore techniques to guarantee
        flawless functionality, performance, and user experience.
      </>
    ),
    link: "./docs/web-application-testing/introduction",
  },
  {
    title: "Mobile Application Testing",
    Svg: require("@site/static/img/mobile.svg").default,
    description: (
      <>
        Demystify mobile app testing. Dive deep into strategies for testing
        across devices, platforms, and real-world scenarios.
      </>
    ),
    link: "./docs/mobile-app-testing/introduction",
  },
  {
    title: "The AI Tester's Kit",
    Svg: require("@site/static/img/ai.svg").default,
    description: (
      <>
        Explore how AI can enhance your testing process, improve efficiency, and
        achieve better coverage.
      </>
    ),
    link: "./docs/ai-tester-kit/introduction",
  },
  {
    title: "Testing Tools",
    Svg: require("@site/static/img/tools.svg").default,
    description: (
      <>
        Explore a comprehensive guide to popular testing tools, from manual to
        automation frameworks.
      </>
    ),
    link: "./docs/testing-tools/introduction",
  },
  {
    title: "Career Resources",
    Svg: require("@site/static/img/career.svg").default,
    description: (
      <>
        Find valuable resources for career advice, interview prep, and thriving
        in the software testing field.
      </>
    ),
    link: "./docs/career-resources/introduction",
  },
];

function Feature({ Svg, title, description, link }) {
  const svgContent = (
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
    </div>
  );

  const textContent = (
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={clsx("col col--4")}>
      {link ? (
        <a href={link} rel="noopener noreferrer">
          {svgContent}
        </a>
      ) : (
        svgContent
      )}
      {textContent}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
