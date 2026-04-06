---
sidebar_position: 3
---

import { PriceLadder } from '@site/src/components/General/PriceLadder';

# Range Influence

Companies make the final call over what options they present to their consumers. This allows them to selectively present a range of options that are most likely to convert into a sale.

Take this pricing ladder for example.

<PriceLadder tiers={[{
id: "1",
name: "Basic",
price: 10,
priceSuffix: "/month",
description: "Basic plan",
bullets: ["10 users", "10GB storage", "Email support"],
}, {
id: "2",
name: "Pro",
price: 20,
priceSuffix: "/month",
description: "Pro plan",
bullets: ["20 users", "20GB storage", "Email support"],
}, {
id: "3",
name: "Premium",
price: 30,
priceSuffix: "/month",
description: "Premium plan",
bullets: ["30 users", "30GB storage", "Email support"],
}]} />

Seems relatively fair, right? Each option is just a tiny bit more expensive than the last. It's called a "pricing ladder" because the price slowly creeps up as you pick higher tiered plans. If you can justify spending money on Basic, you might be able to justify spending that little bit extra for Pro. And if you're already paying for Pro, you might as well go Premium. [Apple](https://www.apple.com/iphone) has a track record of using this model to great success.

But what if we shifted the table a bit?

<PriceLadder tiers={[{
id: "1",
name: "Basic",
price: 10,
priceSuffix: "/month",
description: "Basic plan",
bullets: ["10 users", "10GB storage", "Email support"],
}, {
id: "2",
name: "Pro",
price: 20,
priceSuffix: "/month",
description: "Pro plan",
bullets: ["20 users", "20GB storage", "Email support"],
}, {
id: "3",
name: "Enterprise",
price: 100,
priceSuffix: "/month",
description: "Enterprise plan",
bullets: ["50+ users", "2TB storage", "Priority email support"],
}]} />

Nothing has changed about the Basic and Pro plans. Yet, they feel "cheap". Why? Because the price ceiling has exploded. The bigger the gap between tiers, the more "premium" the most expensive option feels.

Even if very few people will ever buy the Enterprise plan, its existence makes the Pro plan feel much more reasonable in comparison. Companies will often implement exorbitant price ceilings so users can justify less expensive options. They feel "at least I'm not one of the crazies paying $100 a month for this".
