# Summary
Publicradio.info is a place for listening to noncommercial news, culture, and art. It includes:

1. A monthly, handpicked collection of podcast items, playable on the [homepage](http://www.publicradio.info) and through an [RSS feed](http://publicradio.info/feed.xml).

2. A list of leading news and analysis podcasts, of which the most recent episodes are playable on the [homepage](http://www.publicradio.info).

# Purpose
Create a space for people to discover and experience audio. Contributors work to develop a decent web experience of good and unusual sounds, incl. news, analysis, music mixes, documentaries, comedies, investigative reports, stories, and audio experiments. Publicradio.info exists to highlight independent, noncommercial, listener-supported radio, and also to encourage consumers to become active supporters of public media. Content and other things for the homepage and podcast come monthly, as in a small audio magazine or mixtape.

# User keyboard controls
`spacebar:` play and pause

`left key:` skip back 15 seconds

`right key:` skip forward 15 seconds

# Task list
In prep for the new year...

1. [ ] Create "Internet Radio" (live stream) module
  - try with KCRW or BCR or WMBR streams
2. [ ] Add visitor counter
  - no tracking of personal data
3. [ ] Update gradient background so it follows local time of day
4. [ ] Design/implementation of Twitter bot @publicradio_bot (who is it for?)
  - broadcasts homepage content plus @mentions? translates BBC headlines audio to text and broadcasts that?
5. [ ] Create "donate" page to support one person/thing for 2016
6. [ ] Think unusual ways for listeners to interact with the site...
  - chat room/comments section? upvote/downvote system?

# Contributors
A handful of producers and programmers in and around public radio at the moment. Looking for: co-publisher and anyone with a good sound or software idea who wants to help.

# Contact
Email contact@publicradio.info and your message will be answered by a contributing editor or programmer.

# Content
Content is sourced from **dotinfo/_cYYMMDD/** and **dotinfo/_data/** folders.

Monthly podcast items (`Main Program`, `Selected Audio`, `Playlist`) come from Markdown files located in the **_cYYMMDD** folder. They adhere to this syntax:

```Markdown
---
  date: YYYY-MM-DD HH:MM:SS (our own publishing date)
  image: http://….png (only necessary if main program)
  
  audio: http://….mp3
  title: TITLE OF EPISODE
  description: DESCRIPTION.
  series: SERIES
  genre: GENRE
  duration: 'HH:MM'
  explicit: true/false
  website: http://…
  feed: http://….xml
  rss: >
    <title>C00 TITLE [GENRE] (where C00 = collection number)</title>
    <link>http://.../</link>
    <guid isPermaLink="true">http://…/</guid> (FALSE IF NON-LINK)
    <dc:creator>PRODUCER/SERIES</dc:creator>
    <description>DESCRIPTION</description>
  
    <enclosure url="http://….mp3" length="0 (LENGTH IN BYTES)" type="audio/mpeg" />
  
    <itunes:duration>HH:MM:SS</itunes:duration>
    <itunes:subtitle>DESCRIPTION</itunes:subtitle>
    <itunes:summary>DESCRIPTION (longer if you want)</itunes:summary>
    <itunes:author>SERIES</itunes:author>
    <itunes:explicit>yes/no</itunes:explicit>

---
```

News items (`News & Analysis`) are served by a separate aggregating service. The code for the service lives in the [public-radio-services](https://github.com/ags2121/public-radio-services) github repo. News podcasts with static urls can bypass the service and be hardcoded in **feeds.yml** in the **_data** folder. They adhere to this syntax:

```YAML
- title: TITLE OF PROGRAM [HH:MM:SS]
  frequency: UPDATE RATE
  audio: http://….mp3 (leave blank if news resource is served by the public-radio-services)
  type: TYPE
```

:radio:

# License
Software issued under the MIT License. Graphics, design, intellectual property, etc. issued under Creative Commons (CC BY-SA 4.0). No copyright claimed for selected and automated audio, which should be assumed to fall under audio creators.
