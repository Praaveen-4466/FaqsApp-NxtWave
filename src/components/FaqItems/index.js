import React, { Component } from "react";

import "./index.css";

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickStatus: false,
    };
  }

  onToggleStatus = () => {
    this.setState((prevState) => ({
      clickStatus: !prevState.clickStatus,
    }));
  };

  onGetIcon = () => {
    const { clickStatus } = this.state;
    return clickStatus
      ? {
          imgUrl:
            "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png",
          altText: "Plus",
        }
      : {
          imgUrl:
            "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png",
          altText: "Minus",
        };
  };

  render() {
    const { faqDetails } = this.props;
    const { questionText, answerText } = faqDetails;
    const { clickStatus } = this.state;
    const { imgUrl, altText } = this.onGetIcon();
    return (
      <li className="faqListContainer">
        <div className="faqContainer">
          <h1 className="question">{questionText}</h1>
          <button className="btn">
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {clickStatus && (
          <div>
            <hr />
            <p className="para">{answerText}</p>
          </div>
        )}
      </li>
    );
  }
}

export default FaqItem;
