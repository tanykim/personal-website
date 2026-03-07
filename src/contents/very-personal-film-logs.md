# Motivation

This was my very first data visualization project — and my first time using D3.js. For 10 years (2003–2012), I kept a personal log of every movie I watched. Not just the title, but the details that made each viewing personal: whether I watched it alone or with someone, what medium (theater, DVD, TV), how quickly I saw it after its release, and a short one-sentence review. When I reached the 10-year mark, it felt like the right moment to turn that archive into something visual.

# Visualization design

The main view is a scatter plot with watch date on the x-axis and rating on the y-axis — each film a dot in the dark canvas, stars for my personal recommendations and circles for the rest. The aesthetic was intentional: I wanted it to feel like a night sky, with each film a small light in the dark.

The mini-histogram at the bottom shows monthly watch counts across the decade and doubles as a brush selector to zoom into any time window. With its dense bars stacked against the dark background, it ended up looking like a city skyline at night — which I liked.

Ratings can be toggled between IMDb, Rotten Tomatoes critic, and audience scores. Clicking any film opens a detail panel with the full personal log entry, including the original-language title, viewing context, and my one-sentence review.

The Favorites tab ranks directors, writers, actors, genres, and countries by an integrated score that weighs both the number of films watched and their ratings — so a director I watched twice and loved ranks higher than one I watched five times with mixed feelings.

# Insights

Looking back at 10 years of data, a few things surprised me. My sweet spot for IMDb ratings turns out to be 7.2–7.8 — high enough to be genuinely good, but not so acclaimed that they feel like homework. 2009 stands out as my most prolific year of watching.

The Favorites tab surfaced one unexpected discovery: I had watched far more Matt Damon films than I realized. Apparently I'm a bigger fan than I thought.
