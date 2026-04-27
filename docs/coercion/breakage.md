---
sidebar_position: 3
hide_table_of_contents: true
---

# Breakage

<style>{`
  .dnid-breakage-page {
    max-width: 1000px;
    padding-right: 2rem;
  }
  @media (max-width: 768px) {
    .dnid-breakage-media {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 1rem;
    }
    .dnid-breakage-media > figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto 0 !important;
      width: 100% !important;
      max-width: 220px;
      align-self: center;
      text-align: center;
    }
  }
`}</style>

<div className="dnid-breakage-page">

<div
  className="dnid-breakage-media"
  style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 'var(--ifm-leading, 1.25rem)' }}
>
  <figure style={{ margin: 0, marginRight: '1.5rem', width: '200px', flexShrink: 0 }}>
    <img
      src={require('./img/breakage.webp').default}
      alt="A screenshot of the Starbucks app payment screen"
      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
    />
    <figcaption style={{ fontSize: '0.8rem', color: 'var(--dnid-text-secondary)' }}>
      Starbucks app payment screen
    </figcaption>
  </figure>
  <div>
    <p>
      This artifact comes from the payment interface of the Starbucks app. The interface affords selecting <strong>one</strong> payment method (important). If the payment method is a gift card with an insufficient balance, it enables 2 drop downs in order to "reload" the gift card, asking for a source and to pick from pre-defined amounts. There is no additional drop down to cover the insufficient cost with an additional payment, only the ability to reload the payment method itself.
    </p>
    <p>
      This is predatory. The reload amounts are high enough that it would be unreasonable to expect a consumer to pay the amount in a given order, let alone two. The term for this is known as <strong>breakage</strong>, where a system is built in such a way that users rarely, if ever, break even. While it is possible to use split payment methods in physical locations, Starbucks is making a bet that consumers that are using mobile ordering for the convenience factor are willing to sacrifice payment flexibility for said convenience.
    </p>
    <p>
      There is also sunk cost in putting together an order and customizing location. When payment is the last step, it means that users frustrated with payment options will need to renege on their order progress. For an app like Starbucks that markets itself for people with quick and busy lifestyles, this friction point may be enough for wealthier consumers to cave.
    </p>
  </div>
</div>

</div>
