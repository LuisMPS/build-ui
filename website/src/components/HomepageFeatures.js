import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {ReactIcon, LaptopIcon, BooksIcon} from './HomePageFeaturesIcons';

const FeatureList = [
  {
    title: 'Intuitive API',
    Svg: LaptopIcon,
    description: (
      <>
        No need to learn complicated APIs. Build UI interface is essentially 
        React Components and Hooks. 
      </>
    ),
  },
  {
    title: 'Write Declarative Code',
    Svg: BooksIcon,
    description: (
      <>
        Build UI offers simple interfaces to make your code easier to write, 
        understand and maintain.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: ReactIcon,
    description: (
      <>
        Build UI lets you take advantage of all React features
        that make the library so popular. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg 
          fill='#9980c2'
          className = {styles.featureSvg}
          alt={title} 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className = {styles.features}>
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
