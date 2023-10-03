---
title: "Text-image Alignment for Diffusion-based Perception"
collection: publications
permalink: /publication/20023-09-29-tadp
excerpt: 'We use automatically generated captions to improve the text-image aligment
of a diffusion backbone in downstream visual tasks such as semantic segmentation, depth
estimation and object detection. Our method also achieves improves the SOTA in 
both single-domain and cross-domain tasks.'
date: 2023-09-29
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2310.00031'
citation: 'Neehar Kondapaneni, Markus Marks, Manuel Knott, Rogério Guimarães, & 
Pietro Perona. (2023). Text-image Alignment for Diffusion-based Perception.'
---
[Paper](https://arxiv.org/abs/2310.00031) | [Project Page](https://rogeriojr.com/tadp/)

Diffusion models are generative models with impressive text-to-image synthesis 
capabilities and have spurred a new wave of creative methods for classical machine 
learning tasks. However, the best way to harness the perceptual knowledge of these 
generative models for visual tasks is still an open question. Specifically, it is 
unclear how to use the prompting interface when applying diffusion backbones to vision 
tasks. We find that automatically generated captions can improve text-image alignment 
and significantly enhance a model's cross-attention maps, leading to better perceptual 
performance. Our approach improves upon the current SOTA in diffusion-based semantic 
segmentation on ADE20K and the current overall SOTA in depth estimation on NYUv2. 
Furthermore, our method generalizes to the cross-domain setting; we use model
personalization and caption modifications to align our model to the target domain and 
find improvements over unaligned baselines. Our object detection model, trained on 
Pascal VOC, achieves SOTA results on Watercolor2K. Our segmentation method, trained 
on Cityscapes, achieves SOTA results on Dark Zurich-val and Nighttime Driving.