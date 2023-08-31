---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 50

title: Experience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: Research Assistant
    company: Wisconsin Privacy and Security Group
    company_url: 'https://wiscprivacy.com/'
    company_logo: wisc
    location: Madison, WI
    date_start: '2021-06-01'
    date_end: ''
    description: ''

  - title: Graduate Teaching Assistant - Intro to AI (CS 540)
    company: University of Wisconsin-Madison
    company_url: 'https://www.wisc.edu/'
    company_logo: wisc
    location: Madison, Wisconsin
    date_start: '2022-06-01'
    date_end: '2022-12-31'
    description: |2-
        Responsibilities include:
        
        * Guest Lecturer for the course on Reinforcement Learning over Summer 2022
        * Worked on assignment grading and course material development 

  - title: Graduate Teaching Assistant - Machine Organization and Programming (CS 354)
    company: University of Wisconsin-Madison
    company_url: 'https://www.wisc.edu/'
    company_logo: wisc
    location: Madison, Wisconsin
    date_start: '2021-08-20'
    date_end: '2022-05-01'
    description: |2- 
       Responsibilities include:

        * Held discussion sections on C++ and Assembly Language for a class of 320 students.
        * Wrote automatic grading scripts in Python to grade student HWs and Projects. 
  - title: Research Intern
    company: Wisconsin Privacy and Security Group
    company_url: 'https://www.wiscprivacy.com/'
    company_logo: wisc
    location: Madison, Wisconsin
    date_start: '2021-05-01'
    date_end: '2021-08-01'
    description: |2- 
       Responsibilities include:

        * Created the CookieEnforcer web-extension in JS to automatically disable unnecessary cookies.
        * Created a server in Django to conduct User Studies and collect user data to conduct statistical analysis on it.
        * Created the backend server to interact with the CookieEnforcer web-extension.
        * Worked towards building the base model to support a web extension to automatically set and dismiss cookie notices

  - title: Undergraduate Research Assistant
    company: Wisconsin Privacy and Security Group
    company_url: 'https://www.wiscprivacy.com/'
    company_logo: wisc
    location: Madison, Wisconsin
    date_start: '2020-06-01'
    date_end: '2021-05-01'
    description: |2-
       Responsibilities include:

        * Worked on using NLP techniques and group them based on similarity using unsupervised learning.
        * Created a text-extraction program to extract immediate texts from the raw HTML code, based on their relative position to the main element. 

design:
  columns: '2'
---
