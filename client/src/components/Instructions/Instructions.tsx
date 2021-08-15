import React, { memo } from 'react';
import { howToUseAppRules } from '../../constants';
import './Instrustions.scss';

const Instructions: React.FC = () => (
  <div className="instructions">
    <p className="instructions__main-title">
      Don&apos;t know which book to read? Don&apos;t worry!
      Book Helper will find the book in a few moments.
    </p>
    <p className="instructions__list-title">
      How Book Helper actually work:
    </p>
    <ol className="instructions__list">
      {howToUseAppRules.map((rule, index) => <li className="instructions__list-item" key={index} dangerouslySetInnerHTML={{ __html: rule }} />)}
    </ol>
    <p className="instructions__note">
      *If Book Helper found the book, which you had read before, just rerun the app.
    </p>
    <p className="instructions__note">
      **If yow weren&apos;t redirected to the checkout page, please, follow amazon suggestions
    </p>
  </div>
);

export default memo(Instructions);
