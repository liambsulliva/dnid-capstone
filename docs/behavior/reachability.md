---
sidebar_position: 3
---

# Reachability

<style>{`
  @media (max-width: 768px) {
    .dnid-reachability-media {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 1rem;
    }
    .dnid-reachability-media > figure {
      margin-right: 0 !important;
      width: 100% !important;
      max-width: 220px;
      align-self: center;
    }
  }
`}</style>

<div
  className="dnid-reachability-media"
  style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 'var(--ifm-leading, 1.25rem)' }}
>
  <figure style={{ margin: 0, marginRight: '1.5rem', width: '200px', flexShrink: 0 }}>
    <img
      src={require('./img/reachability-2.webp').default}
      alt="A screenshot of the Samsung One UI quick menu"
      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
    />
    <figcaption style={{ fontSize: '0.8rem', color: 'var(--dnid-text-secondary)' }}>
      Courtesy of Roboflow Universe
    </figcaption>
  </figure>
  <div>
    <p>
      Reachability is a fundamentally physical problem. When you're using a mobile device,
      your thumb can only reach so far before you need to rely on your other hand to stabilize your device.
      Mobile interfaces keep this in mind, designing interface elements that are built to be interactive on the bottom-half of the screen.
    </p>
    <p>
      In this example, the digital clock has an excessively large margin around it. This is by design. It pushes the button interface to the bottom-half of the screen, literally making it easier to reach with a single hand. For interfaces like a quick menu, users expect to be able to get to their favorite options quickly. This particular design <a href="https://en.wikipedia.org/wiki/Affordance" target="_blank" rel="noopener noreferrer">affords</a> that. 
    </p>
    <p>
      While less critical on desktops and laptops, this principle is <i>crucial</i> on mobile devices. This means that web layouts need to be designed with this principle in mind. <a href="https://explodingtopics.com/blog/mobile-internet-traffic#mobile-internet-top-stats" target="_blank" rel="noopener noreferrer">Over 60%</a> of users surf the web on their mobile devices. That's a staggeringly high number, and proves the importance of following mobile-first design. Building interfaces for the widest range of users possible fits this principle neatly into the framework of
      <a href="https://en.wikipedia.org/wiki/Universal_Design" target="_blank" rel="noopener noreferrer">Universal Design</a>.
    </p>
  </div>
</div>
