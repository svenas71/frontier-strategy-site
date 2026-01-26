---
layout: layouts/post.njk
title: "Silent Signals"
date: 2026-01-09
summary: "On health, complexity, and the microbiome"
type: post
tags: [signal]
---

### Health data where traditional biomarkers fail
In human health, we increasingly find ourselves in a situation of data analytics asymmetry: We can measure more biological signals than ever before — genes, transcripts, metabolites, microbes — yet few of these signals are robust, interpretable, longitudinally stable, and interventionally useful. The problem is not a lack of data. The problem is that, in health, biological signals are inherently weak. Differences between healthy and slightly healthier states tend to be small, noisy, contextual, and deeply entangled with lifestyle, environment, medication, and time. This is precisely why prevention is so hard to operationalise and personalise. 

>Disease produces strong signals; health does not.

Against this backdrop, the human gut microbiome has been proposed as a promising new biomarker layer. At times, it has been oversold. At other times, prematurely dismissed. To understand what it can — and cannot — offer, we need to ask a more precise question: what kind of biological information are we actually looking for?


### From taxa to function
One important shift in microbiome science has been the move away from individual taxa and toward functional capacity. Rather than asking which microbes are present, the more relevant question becomes what metabolic and biochemical functions the community can perform. Function, not identity, is the level at which biology tends to act.

Recent work by Frioux et al.<sup><a href="#ref-frioux">1</a></sup> from the group of Falk Hildebrand at the Quadram Institute in Norwich has helped formalise this perspective: defining enterosignatures that frame the microbiome as a distributed functional system rather than a collection of named organisms<sup><a href="#ref-method">2</a></sup>. This matters because taxonomic composition is highly variable between individuals, whereas functional outputs can be more conserved across different community configurations.

As Falk described it to me: 

>Enterosignatures allow us to capture the arguably most important gut microbial dynamics and is fully generalizable, i.e. this approach can be applied to gut microbiomes from various continents and capture the most important differences.


Crucially, functional microbiome profiles are also tuneable: influenced by diet, activity, medication, and other interventions. In principle, this makes them compatible with longitudinal tracking and predictive modelling — two prerequisites for any meaningful preventive application.

### A reality check from the field
A recent synthesis of the literature provides a useful reality check. Across many studies, microbiome-based predictive models achieve impressive performance for specific conditions — notably colorectal cancer, type 2 diabetes, inflammatory bowel disease, and necrotizing enterocolitis. In these cases, signals are strong enough that machine-learning models can reach high accuracy.

Predictive models that integrate microbiome data with clinical and phenotypic variables outperform microbiome-only approaches, and functional profiling outperforms purely taxonomic descriptions. The emerging consensus is cautious but clear — the microbiome is best understood as a complementary biological layer, not a standalone diagnostic replacement.
This aligns neatly with first principles. If health signals are weak, no single data layer should be expected to be indicative on its own.


### Longitudinal realism and context


This perspective is reinforced by longitudinal work from groups such as that of Sofia Forslund in Berlin<sup><a href="#ref-bücking">3</a></sup>, who has repeatedly demonstrated how deeply microbiome signals are shaped by context: age, medication, disease state, host physiology, and time. 

The implication is not that the microbiome is unreliable — but that it is situated: it’s meaning only emerges fully in relation to host context. Its relevance emerges through trajectories, not static labels. A microbiome profile taken out of context is biologically thin; interpreted longitudinally and functionally, it becomes far more informative.
This realism is essential. Without it, microbiome science oscillates between hype and disappointment.


### Pressure-testing the idea: hard-to-define conditions
Some of the most intriguing recent work applies the microbiome lens to conditions that are notoriously difficult to define and diagnose — including ADHD, autism spectrum disorder, and anorexia nervosa<sup><a href="#ref-soltysova">4</a></sup>. These are phenotypes characterised by heterogeneity, overlapping symptoms, and multi-causal biological underpinnings.

This study in children and adolescents across these indications identified associations between gut microbiota composition, satiety hormone levels, and clinical phenotypes. This does not yet mean the microbiome is causal for these conditions — the evidence is not clear enough. What it does offer is a biologically grounded signal: a window onto system-level physiological states that span traditional diagnostic indicators.

For indications where traditional diagnostic markers struggle because the conditions themselves are poorly defined, this kind of signal becomes particularly interesting.


### The core claim
The microbiome is not a shortcut to simple health metrics — but it may be one of the few biological layers that can meaningfully describe weak, contextual, and multi-causal states of health over time. This reframes its value entirely. The question is no longer whether the microbiome can deliver crisp binary diagnoses, but whether it can help us characterise biological states in situations where traditional markers fail.


### Closing
The microbiome will not rescue us from biological complexity. But it may help us live with it more honestly. Used carefully — functionally, longitudinally, and in context — the microbiome offers a rare window into biological states that are otherwise difficult to see. Not because it simplifies health, but because it accepts that health is, by nature, contextual, path dependent and multi-causal.


{% footnote %}
### References
1. <a id="ref-frioux"></a> [Frioux, C. et al.](https://www.cell.com/cell-host-microbe/fulltext/S1931-3128(23)00217-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS1931312823002172%3Fshowall%3Dtrue),  Enterosignatures define common bacterial guilds in the human gut microbiome. Cell Host Microbe 31, 1111-1125.e6 (2023)

2. <a id="ref-method"></a> [Method:](https://pypi.org/project/cvanmf/) An implementation of bicrossvalidation for Non-negative Matrix Factorisation (NMF) rank selection, along with methods for analysis and visualisation of NMF decomposition
  
3. <a id="ref-bücking"></a> [Bücking, R. et al.](https://www.biorxiv.org/content/10.64898/2025.12.11.693638v1), Global analysis of infant gut microbiota revealed distinctive maturation dynamics across lifestyles. bioRxiv (2025)
  

4. <a id="ref-soltysova"></a>    [Soltysova, M. et al.](https://www.ibroneuroscience.org/article/S0306-4522\(25\)00860-7/abstract), Gut microbiota in children and adolescents with autism, ADHD and anorexia nervosa, and its link to the levels of satiety hormones. Neuroscience 585, 394–407 (2025)
  


{% endfootnote %}

