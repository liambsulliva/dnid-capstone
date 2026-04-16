---
sidebar_position: 3
---

import { PriceLadder } from '@site/src/components/General/PriceLadder';

# Framing

Grammar can fundamentally shift the way we perceive the information presented to us.

<div style={{ marginBottom: '1rem' }}>
<PriceLadder tiers={[
{
id: "monthly",
name: "Monthly",
price: 10,
priceSuffix: "/month",
description: "Billed each month",
bullets: ["Same features", "Cancel anytime"],
ctaLabel: "Pay monthly",
},
{
id: "annual",
name: "Annual",
price: 100,
priceSuffix: "/year",
description: "Save $20 vs. paying monthly for a year ($120)",
bullets: ["Same features", "$20 off compared to 12 monthly payments"],
highlighted: true,
ctaLabel: "Pay annually — Save $20",
},
]} />
</div>

Which option looks more appealing? I'd be willing to bet it's the latter. Companies offer discounts on annual plans knowing that users will focus on the information explicitly presented.

Even if purchasing something on a yearly basis costs significantly more than purchasing for a singlular month at a time, the yearly plan is framed as better _value_, making users feel that they are getting a better deal.

In truth, they are, but that value proposition doesn't mean much if the user pays for a full year of usage that they only realistically got two months out of. We are bad at predicting our future habits, and clever UX can exploit that reality.
