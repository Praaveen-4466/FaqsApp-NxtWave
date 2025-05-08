import Recat, { Component } from "react";
import FaqItems from "../FaqItem";

import "./index.css";

class Faqs extends Component {
  render() {
    const { faqsList } = this.props;
    return (
      <div className="bg-container">
        <div className="faq-white-container">
          <h1 className="heading">FAQs</h1>
          <div>
            <ul className="list-none">
              {faqsList.map((eachFaq) => (
                <FaqItems faqDetails={eachFaq} key={eachFaq.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
