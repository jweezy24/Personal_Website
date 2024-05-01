---
abstract: We present FLIC, a distributed software data caching framework for fogs that reduces network traffic and latency. FLIC is targeted toward city-scale deployments of cooperative IoT devices in which each node gathers and shares data with surrounding devices. As machine learning and other data processing techniques that require large volumes of training data are ported to low-cost and low-power IoT systems, we expect that data analysis will be moved away from the cloud. Separation from the cloud will reduce reliance on power-hungry centralized cloud-based infrastructure. However, city-scale deployments of cooperative IoT devices often connect to the Internet with cellular service, in which service charges are proportional to network usage. IoT system architects must be clever in order to keep costs down in these scenarios. To reduce the network bandwidth required to operate city-scale deployments of cooperative IoT systems, FLIC implements a distributed cache on the IoT nodes in the fog. FLIC allows the IoT network to share its data without repetitively interacting with a simple cloud storage service, reducing calls out to a backing store. Our results displayed a less than 2% miss rate on reads. Thus, allowing for only 5% of requests needing the backing store. We were also able to achieve more than 50% reduction in bytes transmitted per second.
slides: ""
url_pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9103479"
publication_types:
  - "3"
authors:
  - admin
  - Neil Klingensmith
  - George K. Thiruvathukal
author_notes: []
publication: ICFC 2020
url_dataset: ""
url_project: ""
publication_short: ""
url_source: ""
url_video: ""
title: "FLIC: A Distributed Fog Cache for City-Scale Applications"
doi: ""
featured: true
tags: []
projects:
  - FLIC
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2020-04-21T00:00:00.000Z
url_slides: ""
publishDate: 2020-04-21T00:00:00Z
url_poster: ""
url_code: ""
---
