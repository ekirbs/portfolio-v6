import { useState } from "react";
import classnames from "classnames";
import { FaDoorOpen, FaTabletAlt, FaTags, FaCheck, FaTimes } from "react-icons/fa";
import {
  NetflixLogo,
  TabContent_1,
  TabContent_2_1,
  TabContent_2_2,
  TabContent_2_3,
} from "./img";
import styles from "./Netflix.module.css";

export default function Netflix() {
  const [activeTab, setActiveTab] = useState("tab-1");

  const tabItems = [
    {
      id: "tab-1",
      text: "Cancel anytime",
      icon: FaDoorOpen,
    },
    {
      id: "tab-2",
      text: "Watch anywhere",
      icon: FaTabletAlt,
    },
    {
      id: "tab-3",
      text: "Pick your price",
      icon: FaTags,
    },
  ];

  const selectItem = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="netflix" className={styles.netflix}>
      <header className={styles.showcase}>
        <div className={`${styles["showcase-top"]}`}>
          <img src={NetflixLogo} alt="Netflix" />
          <a href="#" className={`${styles.btn} ${styles["btn-rounded"]}`}>
            Sign In
          </a>
        </div>
        <div className={`${styles["showcase-content"]}`}>
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <a href="#" className={`${styles.btn} ${styles["btn-xl"]}`}>
            Watch Free For 30 Days{" "}
            <i
              className={`${styles.fas} ${styles["fa-chevron-right"]} ${styles["btn-icon"]}`}
            ></i>
          </a>
        </div>
      </header>

      <section className={styles.tabs}>
        <div className={styles.container}>
          {tabItems.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={classnames(styles["tab-item"], {
                [styles["tab-border"]]: activeTab === tab.id,
              })}
              onClick={() => selectItem(tab.id)}
            >
              <tab.icon
                className={classnames(styles.fas, styles["fa-3x"], {
                  [styles["fa-door-open"]]: tab.id === "tab-1",
                  [styles["fa-tablet-alt"]]: tab.id === "tab-2",
                  [styles["fa-tags"]]: tab.id === "tab-3",
                })}
              />
              <p className={styles["hide-sm"]}>{tab.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles["tab-content"]}`}>
        <div className={styles.container}>
          {/* Tab 1 Content */}
          <div
            id="tab-1-content"
            className={classnames(styles["tab-content-item"], {
              [styles.show]: activeTab === "tab-1",
            })}
          >
            <div className={`${styles["tab-1-content-inner"]}`}>
              <div>
                <p className={`${styles["text-lg"]}`}>
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a href="#" className={`${styles.btn} ${styles["btn-lg"]}`}>
                  Watch Free For 30 Days
                </a>
              </div>
              <img src={TabContent_1} alt="Cancel button location" />
            </div>
          </div>

          {/* Tab 2 Content */}
          <div
            id="tab-2-content"
            className={classnames(styles["tab-content-item"], {
              [styles.show]: activeTab === "tab-2",
            })}
          >
            <div className={`${styles["tab-2-content-top"]}`}>
              <p className={`${styles["text-lg"]}`}>
                Watch TV shows and movies anytime, anywhere - personalized for
                you.
              </p>
              <a href="#" className={`${styles.btn} ${styles["btn-lg"]}`}>
                Watch Free For 30 Days
              </a>
            </div>
            <div className={`${styles["tab-2-content-bottom"]}`}>
              <div>
                <img src={TabContent_2_1} alt="Netflix Daredevil page" />
                <p className={`${styles["text-md"]}`}>Watch on your TV</p>
                <p className={`${styles["text-dark"]}`}>
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>

              <div>
                <img src={TabContent_2_2} alt="Netflix Daredevil page" />
                <p className={`${styles["text-md"]}`}>
                  Watch instantly or download for later
                </p>
                <p className={`${styles["text-dark"]}`}>
                  Available on phone and tablet, wherever you go.
                </p>
              </div>

              <div>
                <img src={TabContent_2_3} alt="Netflix Daredevil page" />
                <p className={`${styles["text-md"]}`}>Use any computer</p>
                <p className={`${styles["text-dark"]}`}>
                  Watch right on Netflix.com.
                </p>
              </div>
            </div>
          </div>

          {/* Tab 3 Content */}
          <div
            id="tab-3-content"
            className={classnames(styles["tab-content-item"], {
              [styles.show]: activeTab === "tab-3",
            })}
          >
            <div className={`${styles["text-center"]}`}>
              <p className={`${styles["text-lg"]}`}>
                Choose one plan and watch everything on Netflix.
              </p>
              <a href="#" className={`${styles.btn} ${styles["btn-lg"]}`}>
                Watch Free For 30 Days
              </a>
            </div>
            <table className={`${styles.table}`}>
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
                    Monthly price after free month ends on
                    {/* month from today's date */}
                  </td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td>
                    <FaTimes className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <FaTimes className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaTimes className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
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
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                  <td>
                    <FaCheck className={`${styles.fas}`} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className={`${styles.footer}`}>
        <p>Questions? Call 1-866-579-7172</p>
        <div className={`${styles["footer-cols"]}`}>
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
