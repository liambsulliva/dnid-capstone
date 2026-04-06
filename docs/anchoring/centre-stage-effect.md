---
sidebar_position: 5
---

import { PriceLadder } from '@site/src/components/General/PriceLadder';

# Centre Stage Effect

Putting a design element in the center of the screen is the easiest way to make it stand out. This is used in a number of ways...

1. **Headers**: Headers tend to use centered text to make it stand out relative to body text.
2. **Pricing Tables**: When you're offering a range of prices, putting the most popular option in the middle gives the user confidence that it is the best value.
3. **Surveys and Forms**: Surveys like to use rating scales (1-5), because users that are unsure about their choice can always feel safe opting for the middle option (3).

Users disproportionately choose the middle option in interfaces because it is anchored between two other options, not necessarily because it is the best option available. In a pinch, our cognitive bias will always lead us to examine the middle option first.

Take this pricing ladder for example.

<PriceLadder tiers={[
{
id: "1",
name: "Basic",
price: 10,
priceSuffix: "/month",
description: "Basic plan",
bullets: ["10 users", "10GB storage", "Email support"],
},
{
id: "2",
name: "Pro",
price: 20,
priceSuffix: "/month",
description: "Pro plan",
bullets: ["20 users", "20GB storage", "Email support"],
highlighted: true,
badge: "Most Popular",
ctaLabel: "Choose Pro",
},
{
id: "3",
name: "Enterprise",
price: 30,
priceSuffix: "/month",
description: "Enterprise plan",
bullets: ["30 users", "30GB storage", "Email support"],
},
]} />
