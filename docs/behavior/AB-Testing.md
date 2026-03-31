---
sidebar_position: 2
---

import ABTestDemo from '@site/src/components/Demos/ABTestDemo';

# A/B Testing

<figure style={{ margin: '0' }}>
  <img src={require('./img/ab-testing.webp').default} alt="A screenshot of the YouTube video dashboard" width="400" />
  <figcaption style={{ fontSize: '0.8rem', color: '#d0d0d0' }}>Courtesy of The Verge</figcaption>
</figure>

A/B testing _feels_ jargon-y, but it's actually incredibly simple. Take an interface **A** and an interface **B**, and show them to users randomly. Then, assess users' behavior in reaction to each interface given a metric. You have done A/B testing! Businesses typically test users on click-through rates or conversions (money spent) to determine the best interface to suit their goals.

Multiple iterations of this process can be used to isolate specific features of a given interface. This is known as **[feature flagging](https://en.wikipedia.org/wiki/Feature_toggle)**, where a feature is only enabled for a subset of users. This allows businesses to test the effectiveness of a feature in isolation, and to roll out the feature to all users if it is successful.

<ABTestDemo />
