import React from "react";
import { withRouter } from "react-router-dom";
import { Spinner1 } from "./WeatherSpinner";
import { connect } from "react-redux";

class LogoHeader extends React.Component {
  render() {
    return (
      <div
        className={`LogoHeader ${
          (this.props.history.location.pathname !== "/" &&
            (this.props.forecastReady || this.props.weatherHistoryReady)) ||
          this.props.weatherSpinnerOpen ||
          this.props.callerError
            ? "step-aside"
            : ""
        }`}
      >
        <Spinner1 />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherSpinnerOpen: state.show.weatherSpinner,
    forecastReady: state.data.forecast.ready,
    weatherHistoryReady: state.data.history.ready,
    callerError: state.data.callerError,
  };
};

export default connect(mapStateToProps)(withRouter(LogoHeader));
