var streams = [ 
  { title: 'WMBR',
    description: 'Music and public affairs out of MIT.',
    url: 'http://wmbr.org/',
    donateurl: 'https://wmbr.org/fundraising.php',
    streamurl: 'http://headphones.mit.edu:8000/hi' },

  { title: 'Berlin Community Radio',
    description: 'An electronic music internet station.',
    url: 'http://www.berlincommunityradio.com',
    donateurl: 'http://www.berlincommunityradio.com/donate-berlin-community-radio',
    streamurl: 'http://berlincommunityradio.out.airtime.pro:8000/berlincommunityradio_a' },

  { title: 'WFMU',
    description: 'New York\'s legendary freeform station.',
    url: 'https://wfmu.org/',
    donateurl: 'https://wfmu.org/marathon-2016/',
    streamurl: 'http://stream0.wfmu.org/freeform-128k' },

  { title: 'WWOZ',
    description: 'New Orleans public radio.',
    url: 'http://www.wwoz.org/',
    donateurl: 'http://www.wwoz.org/donate.php',
    streamurl: 'http://wwoz-sc.streamguys.com:80/wwoz-hi.mp3' },

  { title: 'Resonance FM',
    description: 'London\'s groundbreaking art radio station.',
    url: 'https://resonancefm.com/',
    donateurl: 'https://resonancefm.com/donate',
    streamurl: 'http://54.77.136.103:8000/resonance' },

  { title: 'WERU',
    description: 'Small community station serving Midcoast Maine.',
    url: 'https://weru.org/',
    donateurl: 'https://weru.org/donate',
    streamurl: 'http://stream.weru.org/weru-high.mp3' },

  { title: 'WXYC',
    description: 'Student radio from Chapel Hill, NC.',
    url: 'http://www.wxyc.org/',
    donateurl: 'http://www.wxyc.org/merch',
    streamurl: 'http://audio-mp3.ibiblio.org:8000/wxyc.mp3' },

  { title: 'BBC Radio 3',
    description: 'New and classical music.',
    url: 'http://www.bbc.co.uk/radio3',
    donateurl: null,
    streamurl: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p'},

  { title: 'BBC Radio 4',
    description: 'Documentaries and spoken word programs.',
    url: 'http://www.bbc.co.uk/radio4',
    donateurl: null,
    streamurl: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_q' },

  { title: 'BBC Radio 6',
    description: 'BBC\'s alternative music station.',
    url: 'http://www.bbc.co.uk/6music',
    donateurl: null,
    streamurl: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p' },

  { title: 'Terry Radio',
    description: 'Electronic sounds on the web.',
    url: 'http://www.terryradio.biz/',
    donateurl: null,
    streamurl: 'http://terryradio.dtdns.net:8000/terry1' },

  { title: 'WUMB',
    description: 'Folk and more out of UMass Boston.',
    url: 'http://www.wumb.org/home/index.php',
    donateurl: 'http://www.wumb.org/members/donate/',
    streamurl: 'http://wumb.streamguys1.com/wumb919fast' 
  },

  { title: 'WNUR',
    description: 'Chicago\'s sound experiment.',
    url: 'https://www.wnur.org/',
    donateurl: 'http://wewill.northwestern.edu/supportwnur',
    streamurl: 'http://sc1.spacialnet.com:32660/;wnur.mp3' 
  },

  { title: 'Wave Farm Radio',
    description: 'Transmission art out of Hudson, NY.',
    url: 'https://wavefarm.org/',
    donateurl: 'https://wavefarm.org/wgxc/donate',
    streamurl: 'http://comm.free103point9.org:8000/transmissionarts.mp3' 
  },

  { title: 'WKCR',
    description: 'NYC\'s traditional and art music station.',
    url: 'https://www.wkcr.org',
    donateurl: 'https://giving.columbia.edu/giveonline/?schoolstyle=411',
    streamurl: 'http://wkcr.streamguys1.com:80/live' 
  },

  { title: 'Bondfire Radio',
    description: 'Brooklyn hip-hop and more.',
    url: 'http://bondfireradio.com/',
    donateurl: 'https://www.patreon.com/bondfireradio',
    streamurl: 'https://streaming.radio.co/sd2fdc24b0/listen' 
  },

  { title: 'KALW',
    description: 'San Francisco\'s local public radio.',
    url: 'http://kalw.org/',
    donateurl: 'https://donate.nprstations.org/kalw',
    streamurl: 'http://live.str3am.com:2430/' 
  },    

  { title: 'FIP',
    description: 'Radio musicale eclectique.',
    url: 'http://www.fipradio.fr/',
    donateurl: null,
    streamurl: 'http://audio.scdn.arkena.com/11016/fip-midfi128.mp3' 
  },        

  { title: 'Sveriges Radio P2',
    description: 'Classical and jazz from Sweden.',
    url: 'https://sverigesradio.se/p2',
    donateurl: null,
    streamurl: 'https://http-live.sr.se/p2musik-mp3-192' 
  },

  { title: 'KEXP',
    description: 'Seattle\'s alternative rock station.',
    url: 'kexp.org',
    donateurl: 'https://www.kexp.org/donate',
    streamurl: 'http://live-aacplus-64.kexp.org/kexp64.aac' 
  },

  { title: 'Dublab',
    description: 'Arty non-profit music station in LA.',
    url: 'http://dublab.com/',
    donateurl: 'http://dublab.com/donate/',
    streamurl: 'http://www.dublab.com/streams/dubstream' 
  },

  { title: 'Radio Africa Online',
    description: 'African and Caribbean music.',
    url: 'http://soukous.org/',
    donateurl: 'http://soukous.org/donate.htm',
    streamurl: 'http://nyc04.egihosting.com:4658/;'    
  },

  { title: 'Worldwide FM',
    description: 'International music from Gilles Peterson and fellow London DJs.',
    url: 'http://worldwidefm.net/',
    donateurl: null,
    streamurl: 'http://worldwidefm.out.airtime.pro:8000/worldwidefm_a'
  },

  { title: "Red Light Radio",
    description: "DJ sets live from Amsterdam",
    url: "http://redlightradio.net/",
    donateurl: null,
    streamurl: "http://www.michielgardner.nl:8000/redlightradio"
  }
];
