import PropTypes from 'prop-types';

import { Title, SectionEl } from './Section_css';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <Title>{title}</Title>}
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
