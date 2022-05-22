import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '@/components/layout';
// import Hero from '@/components/sections/hero';
// import About from '@/components/sections/about';
// import Jobs from '@/components/sections/jobs';
import Featured from '@/components/sections/featured';
// import Projects from '@/components/sections/projects';
// import Contact from '@/components/sections/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Jobs /> */}
      <Featured />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

