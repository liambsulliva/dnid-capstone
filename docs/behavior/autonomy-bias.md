---
sidebar_position: 6
---

import AutonomyBiasDemo from '@site/src/components/Demos/AutonomyBiasDemo';

# Autonomy Bias

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1rem' }}>
    {/* No need for no-choice variant as the writeup will do a better job elaborating */}
    {/* <AutonomyBiasDemo variant="no-choice" /> */}
    <AutonomyBiasDemo variant="with-choice" />
</div>

People like feeling like they're in control. Giving them a choice can feel empowering, even if the choice is between two options that are essentially the same.

Have you ever picked up a choose your own adventure book and traversed two different paths that ultimately converged in the same ending? This isn't necessarily laziness, and it isn't necessarily bad design. It's a way to make the reader feel in control of their destiny.

RPG video games routinely do the same. [Mass Effect 3](http://gamefaqs.gamespot.com/boards/995452-mass-effect-3/61979760) famously leveraged paraphrased dialog options to make the player feel they're in control of the script, when in reality the character ends up saying the same thing regardless of the choice.

This extends to software design. People like to feel like their software is tailored to them. Even if they decide not to configure their settings, they like to have the option to do so. That is why setup wizards will often times split the setup process into "Simple" and "Advanced" options.

Presenting the advanced options as a default can increase cognitive load and make the user feel paralyzed by choice. But in this setup, if the user doesn't care about the advanced options, they can just skip them and be on their way. Meanwhile, knowledgable users who would be frustrated by having manual options abstracted away from them are given the option to tweak their software from the start.
