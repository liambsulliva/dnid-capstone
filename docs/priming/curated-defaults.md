---
sidebar_position: 2
hide_table_of_contents: true
---

import CuratedDefaultsDemo from '@site/src/components/Demos/CuratedDefaultsDemo';

# Curated Defaults

<style>{`
  .dnid-curated-defaults-page {
    max-width: 1000px;
    padding-right: 2rem;
  }
  .dnid-curated-defaults-float {
    float: left;
    margin: 0 2rem 1rem 0;
  }
  .dnid-curated-defaults-caption {
    font-size: 0.8rem;
    color: var(--dnid-text-secondary);
    margin-top: 0.25rem;
  }
  @media (max-width: 900px) {
    .dnid-curated-defaults-float {
      float: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`}</style>

<div className="dnid-curated-defaults-page">

<figure className="dnid-curated-defaults-float">
  <CuratedDefaultsDemo />
  <figcaption className="dnid-curated-defaults-caption">
    Notification settings keep most options on by default.
  </figcaption>
</figure>

<p>
  Did you know that Microsoft Edge still holds over 10% of the browser market share in 2026? Given Google Chrome's dominance, this feels... wrong.
</p>
<p>
  It goes to show that if what you started with is sufficient, there's no need to change it. Why hassle with getting an entirely new browser if the one shipped with your operating system works just fine?
</p>
<p>
  Most people don't necessarily care about all of the bells and whistles that their program offers them, but they do care about having the options available to them (see <a href="../behavior/autonomy-bias">Autonomy Bias</a>). Companies can leverage the options they mark as “on” by default to their advantage, knowing that most users will never bother to change them.
</p>
<p>
  Bringing it back to Microsoft, they generated a bit of controversy around their <a href="https://en.wikipedia.org/wiki/Windows_Recall" target="_blank" rel="noopener noreferrer">Windows Recall</a> feature because it was implemented in this way. Recall is a feature that records screenshots of your computer's screen in real time, feeding those images into an AI model that the user can leverage to reference information they may have vaguely remembered after the fact.
</p>
<p>
  While this sounds great on paper, it comes with a whole host of privacy concerns. Passwords, credit card numbers, and other sensitive information are being fed into an AI model that could potentially be mined to reveal that sensitive information to others later. Despite this, Microsoft initially released the feature as a default option, making nearly a billion potentially unaware users susceptible to cyberattacks.
</p>
<p>
  After public backlash, Microsoft eventually made the feature opt-in by default, but it goes to show how influential defaults can be when left unchecked.
</p>

</div>
