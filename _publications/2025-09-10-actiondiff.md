---
title: "Diffusion-Based Action Recognition Generalizes to Untrained Domains"
collection: publications
permalink: /publication/20025-09-10-actiondiff
excerpt: 'We propose using features generated
by a Vision Diffusion Model (VDM), aggregated via a 
transformer, to achieve human-like action recognition 
across domain shifts. 

We find that generalization is enhanced by the use of a model 
conditioned on earlier timesteps of the diffusion 
process to highlight semantic information over pixel 
level details in the extracted features. 

Our model sets a 
new state-of-the-art across three 
generalization benchmarks, bringing machine action 
recognition closer to human-like robustness.'
date: 2025-09-10
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2509.08908'
citation: 'Rogerio Guimaraes, Frank Xiao, Pietro Perona & Markus Marks. (2025). Diffusion-Based Action Recognition Generalizes to Untrained Domains.'
---
[Paper](https://arxiv.org/abs/2509.08908) |
[Project Page](https://www.vision.caltech.edu/actiondiff/)

Humans can recognize the same actions despite large context
and viewpoint variations, such as differences between 
species (walking in spiders vs. horses), viewpoints 
(egocentric vs. third-person), and contexts (real life 
vs movies). 

Current deep learning models struggle with 
such generalization. We propose using features generated
by a Vision Diffusion Model (VDM), aggregated via a 
transformer, to achieve human-like action recognition 
across these challenging conditions. 

We find that generalization is enhanced by the use of a model 
conditioned on earlier timesteps of the diffusion 
process to highlight semantic information over pixel 
level details in the extracted features. 
We experimentally explore the generalization properties 
of our approach in classifying actions across animal 
species, across different viewing angles, 
and different recording contexts. 

Our model sets a new state-of-the-art across all three 
generalization benchmarks, bringing machine action 
recognition closer to human-like robustness.