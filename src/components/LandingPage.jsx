import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/landingpage.scss';

import { handleEndScroll, handleIsScrolling } from '../actions/appActions';
import Home from './Home';
import BottomPage from './BottomPage';
import PartnersPage from './pages/PartnersPage';
import BrandingPage from './pages/BrandingPage';
import BTLPage from './pages/BTLPage';
import DigitalPage from './pages/DigitalPage';

class LandingPage extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { handleEndScroll, handleIsScrolling } = this.props;
    if (window.pageYOffset === 0) {
      handleEndScroll();
    } else {
      handleIsScrolling();
    }
  };
  render() {
    return (
      <div className="landing-page-container">
        <section className="section-one" ref={element => (this.sectionOne = element)}>
          <Home />
        </section>
        <section className="section-two">
          <BrandingPage />
        </section>
        <section className="section-three">
          <BTLPage />
        </section>
        <section className="section-four">
          <DigitalPage />
        </section>
        <section className="section-five">
          <PartnersPage />
        </section>
        <section className="section-six">
          <BottomPage />
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleEndScroll: () => dispatch(handleEndScroll()),
  handleIsScrolling: () => dispatch(handleIsScrolling())
});

export default connect(null, mapDispatchToProps)(LandingPage);
