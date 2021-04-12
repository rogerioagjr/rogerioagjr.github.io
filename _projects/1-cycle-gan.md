---
title: "Translating Tweets from Trumpese to Sanderese 
with Transformers and CycleGANs (2020)"
excerpt: "Used Transformers to apply Cyclic Generative 
Adversarial Networks to the Natural Language Processing
domain, attempting to transfer styles between tweets of
different users"
collection: projects
---
[Visit Project Repository](https://github.com/rogerioagjr/twitterCycleGAN) |
[Full Paper](https://rogerioagjr.github.io/files/6864-project.pdf)

This was the final project for a class at MIT 
(6.864 - Advanced Natural Language Processing).

Transformers can achieve state-of-the-art performance in
most of the classic language modeling tasks, and 
CycleGANs have be proving to be very effective in 
mapping elements from a domain to another without paired
training data. Therefore, we suggest that we can use 
transformers to provide a representation of language 
that can be used by CycleGANs to perform machine 
translation tasks without paired training data too. We 
propose to use this idea to approach a very simple 
machine translation task that still involves natural 
language: idiolect-to-idiolect translation in the short
texts in tweets.

As discussed in more depth in the project report, I could
not achieve satisfying results with this approach. The
final tweets were nonsense. It is already very hard to 
train GANs, but the main pitfall of my project was that 
the cycle GAN would require a *full tweet* in order to 
calculate the cycle loss. Therefore, the generator, which
was a transformer, had to predict an entire tweet, rather
than a single word. To predict the entire tweet, the 
transformer would predict the next word multiple times,
and the gradient had to be back-propagated through all
these predictions, which is very ineffective (especially
since the predictions had a *max* operation).

I spent a good amount of time trying to come up with a 
solution to this, but couldn't find any. I'm very happy 
to take suggestions on this!