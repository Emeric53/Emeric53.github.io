---
title: Research
description: Menglei Liang's research on methane remote sensing, scientific machine learning, and greenhouse-gas monitoring.
---

# Research

My research sits at the intersection of **atmospheric science, satellite remote sensing, and machine learning**. I am interested in methods that turn satellite observations into reliable information about greenhouse-gas emissions while keeping the connection between observations, retrieval physics, and validation explicit.

## Research directions

### Methane point-source detection and quantification

I work with hyperspectral satellite observations to detect methane plumes, retrieve concentration enhancements, and estimate emission rates. My previous work focused on improving matched-filter retrievals for strong methane plumes, where a linear approximation can systematically underestimate concentration enhancements.

### Scientific machine learning

I am interested in data-driven methods for remote-sensing retrieval and plume segmentation, particularly when observations come from sensors with different spatial and spectral characteristics. The goal is not only predictive performance, but also methods that remain interpretable and testable against physical expectations.

### Atmospheric transport and multiscale monitoring

My current direction explores how atmospheric transport models and advanced data-driven approaches can be combined to monitor greenhouse-gas emissions from individual point sources to broader spatial scales.

## Research highlight

### Multi-Level Matched Filter

The Multi-Level Matched Filter (MLMF) uses a radiance look-up table and piecewise regression to reduce the high-concentration underestimation of conventional matched-filter retrievals.

Across the validation experiments reported in the paper:

- high-concentration relative errors were reduced from as much as −30% to within ±5%;
- the regression slope improved from 0.89 to 1.00 in radiance-residual tests;
- RMSE decreased from 1563.63 to 337.09 ppm·m for simulated Gaussian plumes;
- controlled-release emission estimates improved from an R² of 0.71 to 0.96.

[Read the paper](https://doi.org/10.3390/rs17050843){ .academic-inline-link }
[Chinese research note](academic/新型多层匹配滤波算法显著提升甲烷排放监测精度-公众号.md){ .academic-inline-link }

## Methods and observations

- Hyperspectral and multispectral satellite observations
- Methane matched-filter retrievals
- Radiative-transfer simulations and look-up tables
- Plume detection and semantic segmentation
- Controlled-release and simulated-plume validation
- Atmospheric transport and inverse-modeling workflows
