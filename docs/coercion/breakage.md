---
sidebar_position: 3
---

# Breakage

This artifact comes from the payment interface of the Starbucks app. The interface affords selecting **one** payment method (important). If the payment method is a gift card with an insufficient balance, it enables 2 drop downs in order to "reload" the gift card, asking for a source and to pick from pre-defined amounts. There is no additional drop down to cover the insufficient cost with an additional payment, only the ability to reload the payment method itself.

<img src={require('./img/breakage.png').default} alt="A screenshot of the Starbucks app payment screen" width="400" />

This is predatory. The reload amounts are high enough that it would be unreasonable to expect a consumer to pay the amount in a given order, let alone two. The term for this is known as **breakage**, where a system is built in such a way that users rarely, if ever, break even. While it is possible to use split payment methods in physical locations, Starbucks is making a bet that consumers that are using mobile ordering for the convenience factor are willing to sacrifice payment flexibility for said convenience.

There is also sunk cost in putting together an order and customizing location. When payment is the last step, it means that users frustrated with payment options will need to renege on their order progress. For an app like Starbucks that markets itself for people with quick and busy lifestyles, this friction point may be enough for wealthier consumers to cave.
