import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./assets/theme/styles.css";
import Section from "./components/shared/section";
import Sidebar from "./components/sidebar";
import Experiences from "./components/experiences";
import Tags from "./components/tags";
import Interests from "./components/interests";

export default class CV extends Component {
  renderExperiencesSection() {
    if (this.props.experiences) {
      return <Experiences {...this.props.experiences} />;
    }
    return null;
  }

  renderTags() {
    if (this.props.tags) {
      return <Tags {...this.props.tags} />;
    }
    return null;
  }
  renderInterests() {
    if (this.props.profile.interests) {
      return <Interests {...this.props.profile.interests} />;
    }
    return null;
  }

  renderCareerProfile() {
    const { icon, sectionTitle, description } = this.props.careerProfile;
    const innerContent = (
      <div
        className="summary"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );
    return (
      <Section
        className="summary-section"
        icon={icon || "user"}
        title={sectionTitle || "Career Profile"}
      >
        {innerContent}
      </Section>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props.profile} />
        <div className="main-wrapper">
          {this.renderCareerProfile()}
          {this.renderExperiencesSection()}
          {this.renderTags()}
          {this.renderInterests()}
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
  careerProfile: PropTypes.shape().isRequired,
  experiences: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  tags: PropTypes.shape().isRequired
};
