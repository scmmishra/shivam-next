---
title: Frappe Charts
logo: /charts.svg
subtitle: Frappe Charts is a simple lightweight and modern SVG charts for the web with zero dependencies.
github: https://github.com/frappe/charts
license: MIT
documentation: https://frappe.io/charts/docs
projectHome: https://frappe.io/charts
hero: charts/charts-hero.png
references:
  - link: "https://github.com/frappe/charts"
    title: "GitHub"
    description: " Simple, responsive, modern SVG Charts with zero dependencies "
    logo: "/github.svg"
  - link: "https://frappe.io/charts/docs"
    title: "Documentation"
    description: "Frappe Chart Documentation"
    logo: "/charts.svg"
---

Frappe Charts was started by a dear friend [Prateeksha](https://pratu16x7.com/) when she worked at Frappe, when I joined I continued building and maintaing the library and been continuing to do so. The project was launched on HackerNews on 31st October, it recieved overwhelming response, garnered over 470 points and was also featured in [GitHub Octoverse 2018](https://octoverse.github.com/2018/projects). Read the launch story [here](https://medium.com/frapp%C3%A9-thoughts/so-we-decided-to-create-our-own-charts-a95cb5032c97).

## The Library

The original design was inspired by GitHub, the library also included a heatmap just like the github contribution graph.

<img alt="Heatmap" src="/charts/heatmap.png" class="bg-white rounded-lg shadow-md overflow-hidden px-2 py-4 my-2">


Since then, we've redesigned the library for v2. It was largely cosmetic, with a better color palette, extra config options, new tooltips, legends and quite a few bug fixes. These charts are built using SVG, all the data processing and SVG components are built using vanilla JS without external libraries.

### Chart Types

The following are the chart types supported, I don't plan on increasing this list for now, moreover most projects don't need more than these.

- **Axis Mixed Charts**: This includes line charts and bar charts, you can also use both in one chart
- **Aggregate Charts**: This includes percentage chart, donut and pie charts, you can also use both in one chart
- **Heatmap**: This is the classic heatmap chart

<chart-grid></chart-grid>

This is just a sample of what these library offers, you can check out more at the [homepage](https://frappe.io/charts) or this [codesandbox demo](https://codesandbox.io/s/frappe-charts-demo-viqud)

## Links

<reference-card :references="references"></reference-card>