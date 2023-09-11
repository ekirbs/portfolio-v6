import { useState, useEffect } from "react";
import classnames from "classnames";
import {
  FaDoorOpen,
  FaTabletAlt,
  FaTags,
  FaCheck,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import {
  NetflixLogo,
  TabContent_1,
  TabContent_2_1,
  TabContent_2_2,
  TabContent_2_3,
} from "./img";
import styles from "./Netflix.module.css";
import "./netflix.css";

export default function Netflix() {
  const [activeTab, setActiveTab] = useState("netflix-tab-1");

  const [nextMonthDate, setNextMonthDate] = useState("");

  useEffect(() => {
    const today = new Date();
    today.setMonth(today.getMonth() + 1);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    setNextMonthDate(formattedDate);
  }, []);

  const tabItems = [
    {
      id: "netflix-tab-1",
      text: "Cancel anytime",
      icon: FaDoorOpen,
    },
    {
      id: "netflix-tab-2",
      text: "Watch anywhere",
      icon: FaTabletAlt,
    },
    {
      id: "netflix-tab-3",
      text: "Pick your price",
      icon: FaTags,
    },
  ];

  const selectItem = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="netflix" className={styles.netflix}>
      <header className="netflix-showcase">
        <div className="netflix-showcase-top">
          <img src={NetflixLogo} alt="Netflix" />
          <a href="#" className="netflix-btn netflix-btn-rounded">
            Sign In
          </a>
        </div>
        <div className="netflix-showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <a href="#" className="netflix-btn netflix-btn-xl">
            Watch Free For 30 Days{" "}
            <FaChevronRight className="netflix-btn-icon" />
          </a>
        </div>
      </header>

      <section className="netflix-tabs">
        <div className="netflix-container">
          {tabItems.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={classnames("netflix-tab-item", {
                "netflix-tab-border": activeTab === tab.id,
              })}
              onClick={() => selectItem(tab.id)}
            >
              <tab.icon
                className={classnames("fa-3x", {
                  "fa-door-open": tab.id === "netflix-tab-1",
                  "fa-tablet-alt": tab.id === "netflix-tab-2",
                  "fa-tags": tab.id === "netflix-tab-3",
                })}
              />
              <p className="netflix-hide-sm">{tab.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="netflix-tab-content">
        <div className="netflix-container">
          {/* Tab 1 Content */}
          <div
            id="netflix-tab-1-content"
            className={classnames("netflix-tab-content-item", {
              "netflix-show": activeTab === "netflix-tab-1",
            })}
          >
            <div className="netflix-tab-1-content-inner">
              <div>
                <p className="netflix-text-lg">
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a href="#" className="netflix-btn netflix-btn-lg">
                  Watch Free For 30 Days
                </a>
              </div>
              <img src={TabContent_1} alt="Cancel button location" />
            </div>
          </div>

          {/* Tab 2 Content */}
          <div
            id="netflix-tab-2-content"
            className={classnames("netflix-tab-content-item", {
              "netflix-show": activeTab === "netflix-tab-2",
            })}
          >
            <div className="netflix-tab-2-content-top">
              <p className="netflix-text-lg">
                Watch TV shows and movies anytime, anywhere - personalized for
                you.
              </p>
              <a href="#" className="netflix-btn netflix-btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <div className="netflix-tab-2-content-bottom">
              <div>
                <img src={TabContent_2_1} alt="Netflix Daredevil page" />
                <p className="netflix-text-md">Watch on your TV</p>
                <p className="netflix-text-dark">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>

              <div>
                <img src={TabContent_2_2} alt="Netflix Daredevil page" />
                <p className="netflix-text-md">
                  Watch instantly or download for later
                </p>
                <p className="netflix-text-dark">
                  Available on phone and tablet, wherever you go.
                </p>
              </div>

              <div>
                <img src={TabContent_2_3} alt="Netflix Daredevil page" />
                <p className="netflix-text-md">Use any computer</p>
                <p className="netflix-text-dark">Watch right on Netflix.com.</p>
              </div>
            </div>
          </div>

          {/* Tab 3 Content */}
          <div
            id="netflix-tab-3-content"
            className={classnames("netflix-tab-content-item", {
              "netflix-show": activeTab === "netflix-tab-3",
            })}
          >
            <div className="netflix-text-center">
              <p className="netflix-text-lg">
                Choose one plan and watch everything on Netflix.
              </p>
              <a href="#" className="netflix-btn netflix-btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <table className="netflix-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Monthly price after free month ends on {nextMonthDate}
                  </td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td>
                    <FaTimes />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <FaTimes />
                  </td>
                  <td>
                    <FaTimes />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="netflix-footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div className="netflix-footer-cols">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Ways To Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
