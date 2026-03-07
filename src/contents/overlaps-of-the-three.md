# Motivation

This prototype served as an exploratory project to test the viability of a potential analytics product. In 2019, an [article](https://www.theinformation.com/articles/facebook-secret-research-warned-of-tipping-point-threat-to-core-app) based on leaked work at Meta (previously Facebook) shed light on the overlapping user base of the three main Meta apps - Facebook, Instagram, WhatsApp - within a specific month, as depicted in a Venn diagram.

# Extended datasets

In collaboration with data scientists involved in the original analysis, I was able to acquire greatly expanded datasets; ranged monthly active user data by country, and past 24 months data. Moreover, I obtained estimates of the population for each county and the number of estimated internet users in each country. These population datasets proved invaluable in determining the reach rate of each Meta app within a given country.

# Visualization design

## Small multiples

To visualize the overlapping user base across multiple countries, I utilized a group of Venn diagrams. Each Venn diagram represents the user base of the three apps within a specific country for a selected month. When multiple countries are displayed together, these Venn diagrams function as "small multiples."

## Resize & order circles in one Venn diagram

Each Venn diagram can be resized relative to different reference populations. The "Fit" mode fills each diagram to its container, while other modes — historically largest MAP, internet population, or total population — render an outer reference circle so the diagram communicates reach rate rather than just raw user counts. When comparing multiple countries, absolute modes anchor all diagrams to the largest country's population, enabling direct cross-country comparison. A secondary inner circle can optionally be toggled to show additional context, such as the current month's MAP against the historical peak.

The rotational order of the three app circles within each diagram is also configurable. Beyond the default "by MAP" ordering, all six permutations of the three apps are available, which is useful for visually emphasizing a specific app or making a particular overlap region more legible.

## Filtering & sorting countries

Countries can be selected by browsing all available countries individually, or filtered by continent or region. A default set of seven countries is pre-selected on load to provide a meaningful starting view. An optional "World" aggregate diagram can be prepended to show the global totals alongside the country-level breakdowns.

Countries are sorted by a configurable metric — total family MAP, per-app MAP, or population figures — in either ascending or descending order. The sort is applied live as the selected month changes, so the country layout always reflects the chosen metric for the currently displayed time period.

## Labels & tooltips for further investigation

Numerical labels can be overlaid on the diagrams at varying levels of detail: total family topline, month-over-month growth, or per-app figures. Labels can be displayed as absolute MAP counts or as a percentage of internet population, supporting both absolute and relative readings of the data.

Hovering over any region within a Venn diagram highlights that segment and dims the rest, drawing focus to a specific intersection. A tooltip shows the MAP value for that region. Hovering over the reference circles reveals contextual information such as the internet population for that country or what proportion of that population is not on any of the apps.
