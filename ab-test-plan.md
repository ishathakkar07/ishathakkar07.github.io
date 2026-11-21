# A/B Test Plan — Thrift IC Homepage CTA

## Test date and page

This plan was committed before any trial was conducted. The test will be conducted on the Thrift IC homepage at https://ishathakkar07.github.io/.

## Single element being changed

The only visible element being changed is the text of the main hero call-to-action button.

- Version A: "Explore the shops"
- Version B: "Find your Iowa City thrift shop"

Both buttons link to thrift-shops.html. The design, button location, colors, images, page copy, navigation, and destination will remain identical.

## Hypothesis

Version B will produce a higher percentage of YES responses than Version A because it tells visitors exactly what they can find and identifies Iowa City, making the button more relevant to the visitor’s local thrift-shopping goal.

## AI visitor

Model: GPT-5.6 Sol Max

Persona: A University of Iowa student with a limited clothing budget who wants to find a thrift shop in Iowa City this weekend.

Every trial will be conducted in a fresh conversation with no memory of earlier trials. The same model and settings will be used throughout the experiment.

## Exact prompt

You are a University of Iowa student with a limited clothing budget who wants to find a thrift shop in Iowa City this weekend. You have never seen this website before.

Read the homepage text below. Based only on this page, would you click the main hero button to view the thrift-shop listings?

Reply in exactly two lines:
Decision: YES or NO
Reason: one sentence only

BEGIN PAGE
[THE COMPLETE VISIBLE PAGE TEXT FOR THE RANDOMLY ASSIGNED VERSION]
END PAGE

The wording above will remain identical in every trial. Only the assigned page text will change.

## Assignment

There will be 100 valid trials: 50 assigned to Version A and 50 assigned to Version B. The 100 assignments will be created and randomly shuffled before data collection begins. Trials will be run in that predetermined order.

## Primary outcome

The primary outcome is whether the response says "Decision: YES."

- YES will be coded as 1.
- NO will be coded as 0.
- A response without an identifiable YES or NO will be marked INVALID, retained in the raw data, and replaced with another trial of the same assigned version. Invalid trials will not be deleted.

The one-sentence reason will be recorded but is not the primary outcome.

## Sample size and schedule

The experiment will continue until there are 50 valid Version A trials and 50 valid Version B trials. Data collection is expected to be completed by November 25, 2026. The test will not be stopped early because of preliminary results.

## Comparison and decision rule

The percentage of YES responses in Version B will be compared with the percentage in Version A using a two-proportion statistical test at the 0.05 significance level.

The hypothesis will be supported if Version B has a higher YES percentage and the difference is statistically significant. A higher Version B percentage without statistical significance will be described as directionally consistent but inconclusive.

## SEO protection

Version B will include a noindex meta tag and a canonical link pointing to Version A. Version B will not be included in sitemap.xml.
