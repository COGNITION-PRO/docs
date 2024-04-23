import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to use ChatGPT-inspired GUI',
    Svg: require('@site/static/img/icon-2.svg').default,
    description: (
      <>
        Use our ChatGPT-style GUI interface with the pre-installed models, or download models from Meta, X, Huggingface, Ollama, and others
      </>
    ),
  },
  {
    title: 'Private conversations with local AI',
    Svg: require('@site/static/img/icon-2.svg').default,
    description: (
      <>
        Converse with your personal AI assistants with ultra-low latency. Your personal data stays private because it never leaves your COGNITION computer
      </>
    ),
  },
  {
    title: 'Train or Fine-Tune Any Model',
    Svg: require('@site/static/img/icon-2.svg').default,
    description: (
      <>
        Train models from scratch or download any open-source model and fine-tune it for your specific application
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
