import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
