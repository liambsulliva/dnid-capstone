---
sidebar_position: 3
---

# Partitioning

Nutrition labels also contain a lot of this brand of trickery, and my second artifact capitalizes on a common form of <strong>partitioning</strong>, where information is framed deceptively to drive home a narrative.

<style>{`
  .dnid-partitioning-page {
    max-width: 1000px;
    padding-right: 2rem;
  }
  .dnid-partitioning-float {
    float: left;
    margin: 0 1.5rem 0 0;
    width: 300px;
    max-width: 100%;
  }
  .dnid-partitioning-float img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .dnid-partitioning-caption {
    font-size: 0.8rem;
    color: var(--dnid-text-secondary);
    margin-top: 0.25rem;
  }
  @media (max-width: 768px) {
    .dnid-partitioning-float {
      float: none;
      display: block;
      width: 100%;
      max-width: 300px;
      margin: 0 auto 1rem;
    }
  }
`}</style>

<figure className="dnid-partitioning-float">
  <img
    src={require('./img/servingsize.webp').default}
    alt="Nutrition label showing 5 servings per container"
  />
  <figcaption className="dnid-partitioning-caption">
    Nutrition label (servings per container)
  </figcaption>
</figure>

<p>
  Nutrition labels also contain a lot of this brand of trickery, and my second artifact capitalizes on a common form of <strong>partitioning</strong>, where information is framed deceptively to drive home a narrative.
</p>
<p>
  On this seltzer can, the number of calories reported is relatively low at five. This is common for seltzers that contain hints of unsweetened fruit juice like a Spindrift. Looking closer though, the serving size is merely 1/5 of a can! This means that if you're drinking the full can, you're getting 25 calories and 5 grams of sugar, which is significantly different, and puts this beverage in the caloric territory of fruit juice.
</p>
<p>
  This makes the real consumption cognitively buried. On nutrition labels, calories are shown in the biggest font size, because they are the cognitive anchor that the other categories lean on. Once you view the total calories, the hierarchy implies that all other fields are interpreted relative to that number, but this hierarchy falls apart when considering that calories are conditional on serving size.
</p>
<p>
  The implication of this visual hierarchy makes it unintuitive to do the math required to calculate the actual total calories of the drink, multiplying the prominently displayed number by the serving size it dwarfs.
</p>
