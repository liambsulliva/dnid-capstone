import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./attribution.module.css";

// Adds an IEEE-style [n] marker to a bibliography line
function ieeeEntry(num: number, children: ReactNode): ReactNode {
  return (
    <>
      <strong className={styles.ieeeRefMark}>[{num}]</strong> {children}
    </>
  );
}

// Creates a hyperlink with target="_blank" and rel="noopener noreferrer" for each link in the object
function citeUrl(href: string, label?: ReactNode) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label ?? href}
    </a>
  );
}

export const IEEE_BIBLIOGRAPHY_ITEMS: readonly ReactNode[] = [
  ieeeEntry(
    1,
    <>
      Google LLC, &quot;Google,&quot; Google Search. [Online]. Available:{" "}
      {citeUrl("https://www.google.com")}
    </>,
  ),
  ieeeEntry(
    2,
    <>
      Apple Inc., &quot;Apple,&quot; Apple Inc. [Online]. Available:{" "}
      {citeUrl("https://www.apple.com")}
    </>,
  ),
  ieeeEntry(
    3,
    <>
      The New York Times Company, &quot;The New York Times—Breaking News, US
      News, World News and Videos,&quot; The New York Times. [Online].
      Available: {citeUrl("https://www.nytimes.com/")}
    </>,
  ),
  ieeeEntry(
    4,
    <>
      Dow Jones &amp; Company, &quot;The Wall Street Journal,&quot; The Wall
      Street Journal. [Online]. Available: {citeUrl("https://www.wsj.com/")}
    </>,
  ),
  ieeeEntry(
    5,
    <>
      Meta Platforms, Inc., &quot;Facebook,&quot; Facebook. [Online]. Available:{" "}
      {citeUrl("https://www.facebook.com/")}
    </>,
  ),
  ieeeEntry(
    6,
    <>
      Meta Platforms, Inc., &quot;Instagram,&quot; Instagram. [Online].
      Available: {citeUrl("https://www.instagram.com/")}
    </>,
  ),
  ieeeEntry(
    7,
    <>
      Wikimedia Foundation, &quot;HTTP cookie,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://wikipedia.org/wiki/HTTP_cookie")}
    </>,
  ),
  ieeeEntry(
    8,
    <>
      Wikimedia Foundation, &quot;Affordance,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://en.wikipedia.org/wiki/Affordance")}
    </>,
  ),
  ieeeEntry(
    9,
    <>
      Exploding Topics, &quot;Internet Traffic from Mobile Devices (July
      2025),&quot; Exploding Topics Blog. [Online]. Available:{" "}
      {citeUrl("https://explodingtopics.com/blog/mobile-internet-traffic")}
    </>,
  ),
  ieeeEntry(
    10,
    <>
      Wikimedia Foundation, &quot;Universal design,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://en.wikipedia.org/wiki/Universal_Design")}
    </>,
  ),
  ieeeEntry(
    11,
    <>
      Starbucks Corp., &quot;Starbucks Coffee Company,&quot; Starbucks.
      [Online]. Available: {citeUrl("https://www.starbucks.com")}
    </>,
  ),
  ieeeEntry(
    12,
    <>
      Yaguara, &quot;Browser Market Share 2026 (Users &amp; Growth
      Statistics),&quot; Yaguara. [Online]. Available:{" "}
      {citeUrl("https://www.yaguara.co/browser-market-share/")}
    </>,
  ),
  ieeeEntry(
    13,
    <>
      Wikimedia Foundation, &quot;Windows Recall,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://en.wikipedia.org/wiki/Windows_Recall")}
    </>,
  ),
  ieeeEntry(
    14,
    <>
      Federal Trade Commission, &quot;Full Disclosure,&quot; FTC Business
      Guidance Blog, Sep. 25, 2014. [Online]. Available:{" "}
      {citeUrl(
        "https://www.ftc.gov/business-guidance/blog/2014/09/full-disclosure",
      )}
    </>,
  ),
  ieeeEntry(
    15,
    <>
      Federal Trade Commission, &quot;CAN-SPAM Act: A Compliance Guide for
      Business,&quot; FTC Business Guidance. [Online]. Available:{" "}
      {citeUrl(
        "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business",
      )}
    </>,
  ),
  ieeeEntry(
    16,
    <>
      Wikimedia Foundation, &quot;Candy Crush Saga,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://en.wikipedia.org/wiki/Candy_Crush_Saga")}
    </>,
  ),
  ieeeEntry(
    17,
    <>
      Fandom, Inc., &quot;Mass Effect 3—Board thread,&quot; GameFAQs. [Online].
      Available:{" "}
      {citeUrl(
        "http://gamefaqs.gamespot.com/boards/995452-mass-effect-3/61979760",
      )}{" "}
    </>,
  ),
  ieeeEntry(
    18,
    <>
      Wikimedia Foundation, &quot;List price,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl(
        "https://en.wikipedia.org/wiki/Manufacturer%27s_suggested_retail_price",
      )}
    </>,
  ),
  ieeeEntry(
    19,
    <>
      Wikimedia Foundation, &quot;Large language model,&quot; Wikipedia, The
      Free Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://wikipedia.org/wiki/Large_language_model")}
    </>,
  ),
  ieeeEntry(
    20,
    <>
      Tesla, Inc., &quot;Cybertruck,&quot; Tesla. [Online]. Available:{" "}
      {citeUrl("https://www.tesla.com/cybertruck")}
    </>,
  ),
  ieeeEntry(
    21,
    <>
      Wikimedia Foundation, &quot;Feature toggle,&quot; Wikipedia, The Free
      Encyclopedia. [Online]. Available:{" "}
      {citeUrl("https://en.wikipedia.org/wiki/Feature_toggle")}
    </>,
  ),
  ieeeEntry(
    22,
    <>
      Apple Inc., &quot;iPhone,&quot; Apple Inc. [Online]. Available:{" "}
      {citeUrl("https://www.apple.com/iphone")}
    </>,
  ),
];

const IEEE_MEDIA_ITEMS: readonly ReactNode[] = [
  ieeeEntry(
    23,
    <>
      Rundvald, &quot;Le-doigt-qui-montre-la-Lune-byRundvald,&quot;{" "}
      <em>Wikimedia Commons</em>, Oct. 25, 2021. CC BY-SA 4.0. [Online].
      Available:{" "}
      <a
        href="https://commons.wikimedia.org/wiki/File:Le-doigt-qui-montre-la-Lune-byRundvald.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://commons.wikimedia.org/wiki/File:Le-doigt-qui-montre-la-Lune-byRundvald.png
      </a>
      . (Site banner derived from this file; horizontal transformation applied.)
    </>,
  ),
  ieeeEntry(
    24,
    <>
      Bennett1203, &quot;Tesla Cybertruck sighting in Dayton, Ohio, in June
      2024,&quot; <em>Wikimedia Commons</em>, Jun. 8, 2024. CC BY-SA 4.0.
      [Online]. Available:{" "}
      <a
        href="https://commons.wikimedia.org/wiki/File:Tesla_Cybertruck_sighting_in_Dayton,_Ohio,_in_June_2024.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://commons.wikimedia.org/wiki/File:Tesla_Cybertruck_sighting_in_Dayton,_Ohio,_in_June_2024.jpg
      </a>
      .
    </>,
  ),
  ieeeEntry(
    25,
    <>
      Saturn-Domo, &quot;Microsoft Office Assistant (Clippit) fan artwork,&quot;{" "}
      <em>DeviantArt</em>. [Online]. Available:{" "}
      <a
        href="https://www.deviantart.com/saturn-domo/art/Clippit-Clippy-The-Paperclip-788814077"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.deviantart.com/saturn-domo/art/Clippit-Clippy-The-Paperclip-788814077
      </a>
      .
    </>,
  ),
  ieeeEntry(
    26,
    <>
      Samsung Electronics Co., Ltd., One UI quick panel screenshot reproduced
      via community imagery on <em>Roboflow Universe</em>. [Online]. Available:{" "}
      <a
        href="https://universe.roboflow.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://universe.roboflow.com/
      </a>
      .
    </>,
  ),
  ieeeEntry(
    27,
    <>
      V. Verma, &quot;Headphone-dynamic-clay,&quot; <em>Wikimedia Commons</em>,
      Oct. 14, 2021. CC0 1.0 Universal. [Online]. Available:{" "}
      <a
        href="https://commons.wikimedia.org/wiki/File:Headphone-dynamic-clay.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://commons.wikimedia.org/wiki/File:Headphone-dynamic-clay.png
      </a>
      .
    </>,
  ),
  ieeeEntry(
    28,
    <>
      Google LLC, &quot;Webfont CSS (Sora, Martian Mono),&quot; Google Fonts
      API. [Online]. Available:{" "}
      {citeUrl(
        "https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Martian+Mono:wght@700&display=swap",
      )}
    </>,
  ),
];

export default function AttributionPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} · Attribution`}
      description="Credits, media licensing, and hyperlink inventory for this site."
    >
      <div className={styles.container}>
        <div className={styles.attributionIntro}>
          <h1 className={styles.title}>Attribution</h1>

          <h2 className={styles.ieeeSectionHeading}>IEEE bibliography</h2>
          <p className={styles.ieeeSectionLead}>
            Numbered references [1]–[22] for external URLs in source code,
            documentation, and configuration.
          </p>
          <ol className={`${styles.ieeeList} ${styles.ieeeListBracketed}`}>
            {IEEE_BIBLIOGRAPHY_ITEMS.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>

          <h2 className={styles.ieeeSectionHeading}>
            Site imagery &amp; tooling
          </h2>
          <p className={styles.ieeeSectionLead}>
            Additional media-specific citations [23]–[28] for the homepage
            banner, interactive demos, and fonts.
          </p>
          <ol className={`${styles.ieeeList} ${styles.ieeeListBracketed}`}>
            {IEEE_MEDIA_ITEMS.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
          <div className={styles.attributionFooter}>
            <p className={styles.attributionFooterText}>
              <a href="https://www.anthropic.com/news/claude-sonnet-4-6">
                Claude Sonnet 4.6
              </a>{" "}
              was used to accelerate the development of interactive demos and
              graphics.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
