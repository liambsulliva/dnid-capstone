---
sidebar_position: 3
---

# Breakage

<style>{`
  .dnid-breakage-page::after {
    content: "";
    display: table;
    clear: both;
  }
  .dnid-breakage-figure {
    float: left;
    width: 250px;
    max-width: min(250px, 42vw);
    margin: 0 1.5rem 1rem 0;
  }
  .dnid-breakage-figure img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }
  .dnid-breakage-figure figcaption {
    font-size: 0.8rem;
    color: var(--dnid-text-secondary);
  }
  @media (max-width: 768px) {
    .dnid-breakage-figure {
      float: none;
      width: 100%;
      max-width: 220px;
      margin: 0 auto 1rem;
      text-align: center;
    }
  }
`}</style>

<div className="dnid-breakage-page">

<figure className="dnid-breakage-figure">
  <img
    src={require('./img/breakage.webp').default}
    alt="A screenshot of the Starbucks app payment screen"
  />
  <figcaption>
    Starbucks app payment screen
  </figcaption>
</figure>

<p>
  This artifact comes from the payment interface of the <a href="https://www.starbucks.com" target="_blank" rel="noopener noreferrer">Starbucks</a> app. The interface affords selecting <strong>one</strong> payment method (important). If the payment method is a gift card with an insufficient balance, it enables 2 drop downs in order to "reload" the gift card, asking for a source and to pick from pre-defined amounts. There is no additional drop down to cover the insufficient cost with an additional payment, only the ability to reload the payment method itself.
</p>
<p>
  This is predatory. The reload amounts are high enough that it would be unreasonable to expect a consumer to pay the amount in a given order, let alone two. The term for this is known as <strong>breakage</strong>, where a system is built in such a way that users rarely, if ever, break even. While it is possible to use split payment methods in physical locations, Starbucks is making a bet that consumers that are using mobile ordering for the convenience factor are willing to sacrifice payment flexibility for said convenience.
</p>
<p>
  There is also sunk cost in putting together an order and customizing location. When payment is the last step, it means that users frustrated with payment options will need to renege on their order progress. For an app like Starbucks that markets itself for people with quick and busy lifestyles, this friction point may be enough for wealthier consumers to cave.
</p>

</div>
