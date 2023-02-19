import { Title, SectionEl } from './Section_css';

import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <Title>{title}</Title>}
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};
