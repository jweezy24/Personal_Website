---
abstract: Online websites use cookie notices to elicit consent from the users,
  as required by recent privacy regulations like the GDPR and the CCPA. Prior
  work has shown that these notices use dark patterns to manipulate users into
  making website-friendly choices which put users’ privacy at risk. In this
  work, we develop CookieEnforcer, a new system for automatically discovering
  cookie notices and deciding on the options that result in disabling all
  non-essential cookies. In order to achieve this, we first build an automatic
  cookie notice detector that utilizes the rendering pattern of the HTML
  elements to identify the cookie notices. Next, CookieEnforcer analyzes the
  cookie notices and predicts the set of actions required to disable all
  unnecessary cookies. This is done by modeling the problem as a
  sequence-to-sequence task, where the input is a machine-readable cookie notice
  and the output is the set of clicks to make. We demonstrate the efficacy of
  CookieEnforcer via an end-to-end accuracy evaluation, showing that it can
  generate the required steps in 91% of the cases. Via a user study, we show
  that CookieEnforcer can significantly reduce the user effort. Finally, we use
  our system to perform several measurements on the top 5k websites from the
  Tranco list (as accessed from the US and the UK), drawing comparisons and
  observations at scale.
slides: ""
url_pdf: "https://arxiv.org/pdf/2204.04221"
publication_types:
  - "3"
authors:
  - Rishabh Khandelwal
  - admin
  - Hamza Harkous
  - Kassem Fawaz
author_notes: []
publication: USENIX Security'23
summary: Online services utilize privacy settings to provide users with control
  over their data. However, these privacy settings are often hard to locate,
  causing the user to rely on provider-chosen default values. In this work, we
  train privacy settings centric encoders and leverage them to create an
  interface that allows users to search for privacy settings using free-form
  queries.
url_dataset: ""
url_project: ""
publication_short: ""
url_source: ""
url_video: ""
title: "CookieEnforcer: Automated Cookie Notice Analysis and Enforcement"
doi: ""
featured: true
tags: []
projects:
  - CookieEnforcer
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2022-04-02T00:00:00.000Z
url_slides: ""
publishDate: 2022-04-02T00:00:00Z
url_poster: ""
url_code: ""
---
