---
sidebar_position: 5
---

import ObstructionDemo from '@site/src/components/Demos/ObstructionDemo';

# Obstruction

<ObstructionDemo />

Sometimes the most important part of a UI is in what it doesn't show.

Space on screens is a valuable commodity. It's a resource that UI designers need to manage carefully. When you see a "Read More" button, it's not there for the sake of being annoying.

It's done because people tend to scan pages rather than read them. Imagine our example here was part of a larger review page. Do you want to see every single one of the paragraphs of text in each and every review? Of course not. You want to see the overall sentiment. Since machines can't highlight specific sections of text (without using some kind of LLM), the only way to realistically give users this preview is to automatically truncate the text.

If designers could avoid this pattern, they would. Making users click extra buttons to reveal more content is a traditionally avoided practice. The reason [infinite scroll](/coercion/infinite-scroll) is so effective is because it eliminates the decision to continue. Since this pattern is implemented in the context of a larger pre-defined list, it achieves different goals than an algorithmically-driven feed would.
