---
abstract: "Video conferencing apps (VCAs) make it
possible for previously private spaces — bedrooms, living rooms, and kitchens — into semi-public extensions
of the office. For the most part, users have accepted
these apps in their personal space without much thought
about the permission models that govern the use of their
private data during meetings. While access to a device’s
video camera is carefully controlled, little has been done
to ensure the same level of privacy for accessing the microphone. In this work, we ask the question: what hap-
pens to the microphone data when a user clicks the mute
button in a VCA? We first conduct a user study to an-
alyze users’ understanding of the permission model of
the mute button. Then, using runtime binary analysis
tools, we trace raw audio flow in many popular VCAs
as it traverses the app from the audio driver to the net-
work. We find fragmented policies for dealing with mi-
crophone data among VCAs — some continuously mon-
itor the microphone input during mute, and others do
so periodically. One app transmits statistics of the audio
to its telemetry servers while the app is muted. Using
network traffic that we intercept en route to the teleme-
try server, we implement a proof-of-concept background
activity classifier and demonstrate the feasibility of in-
ferring the ongoing background activity during a meet-
ing — cooking, cleaning, typing, etc. We achieved 81.9%
macro accuracy on identifying six common background
activities using intercepted outgoing telemetry packets
when a user is muted."
slides: ""
url_pdf: "https://taurunum.in.rs/public/pdf/vca_mute.pdf"
publication_types:
  - "3"
authors:
  - admin
  - Yucheng Yang
  - George K. Thiruvathukal
  - Neil Klingensmith
  - Kassem Fawaz
author_notes: []
publication: PoPets 2022
summary: In this work we explored the privacy of the mute button for video conferencing applications. We found that the software switch to mute the microphone is just that, a software switch. They can still access the microphone whenever they would like. We found that Cisco Webex was accessing the microphone while muted and sending audio derived telemetry data to their server which was a privacy violation.
url_dataset: ""
url_project: ""
publication_short: ""
url_source: ""
url_video: ""
title: "Are You Really Muted?: A Privacy Analysis of Mute Buttons in Video Conferencing Apps"
doi: ""
featured: true
tags: []
projects:
  - Mute Button Privacy
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
