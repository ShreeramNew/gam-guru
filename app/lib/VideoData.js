// Helper to generate static AWS thumbnail URLs dynamically
const getThumbnailUrl = (moduleFolder, dayNumber) =>
  `https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/thumbnails/${moduleFolder}/day${dayNumber}.png`;

const VIDEO_MANIFEST = {
  "guru-ashtakam": {
    title: "Guru Ashtakam",
    poweredBy: "Gam Guru - Sanatan After School",
    videos: [
      {
        title: "Guru Ashtakam - Day 1",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+-+1st+Stanza+_+Day+-+1+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 1),
      },
      {
        title: "Guru Ashtakam - Day 2",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+2nd+Stanza+_+Day+2+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 2),
      },
      {
        title: "Guru Ashtakam - Day 3",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+3rd+Stanza+_+Day+3+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 3),
      },
      {
        title: "Guru Ashtakam - Day 4",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+4th+Stanza+_+Day+-+4+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 4),
      },
      {
        title: "Guru Ashtakam - Day 5",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+5th+Stanza+_+Day+5+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 5),
      },
      {
        title: "Guru Ashtakam - Day 6",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+6th+Stanza+_+Day+6+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 6),
      },
      {
        title: "Guru Ashtakam - Day 7",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+7th+Stanza+_+Day+7+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 7),
      },
      {
        title: "Guru Ashtakam - Day 8",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+8th+Stanza+_+Day+8+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("GuruAshtakam", 8),
      },
    ],
  },
  "kala-bhairava-ashtakam": {
    title: "Kala Bhairava Ashtakam",
    poweredBy: "Gam Guru - Sanatan After School",
    videos: [
      {
        title: "Kala Bhairava Ashtakam - Stanza 1",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/KalaBhairava/day1.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("KalaBhairava", 1),
        lyrics:
          "deva rāja sevyamāna pāvanāṅghri paṅkajaṃ||vyāla yajña sūtramindu śekharaṃ kṛpākaram||nāradādi yogi vṛnda vanditaṃ digambaraṃ||kāśikā purādhinātha kālabhairavaṃ bhaje||",
        meaning:
          "I sing praise of Kalabhairava, the lord of Kashi, who is adorned by lotus-feet which is revered and served by Indra (Devaraj), Who wears a snake as a sacred thread, who has the moon on his forehead, who is the abode of mercy, whose praises are sung by Narada and other yogis, and who wears the sky as his raiment",
      },
      {
        title: "Kala Bhairava Ashtakam - Stanza 2",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/KalaBhairava/day2.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("KalaBhairava", 2),
        lyrics:
          "bhānu koṭi bhāsvaraṃ bhavābdhitārakaṃ paraṃ||nīla kaṇṭhamīpsitārtha dāyakaṃ trilocanam||kālakālamambujākṣamakṣaśūlamakṣaraṃ||kāśikā purādhinātha kālabhairavaṃ bhaje||",
        meaning:
          "I sing praise of Kalabhairava, the lord of Kashi, who is resplendent like millions of Suns, who absolves the ocean of cycle of rebirth, who is supreme, who has a blue neck, who fulfils one’s desires, who has three-eyes, who is the death of death, who has lotus-like eyes, whose trident supports the world and who is immortal.",
      },
      {
        title: "Kala Bhairava Ashtakam - Stanza 3",
        url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/KalaBhairava/day3.mp4",
        type: "video/mp4",
        thumbnail: getThumbnailUrl("KalaBhairava", 3),
        lyrics:
          "śūla ṭaṅka pāśa daṇḍa pāṇimādi kāraṇaṃ||śyāma kāyamādi devamakṣaraṃ nirāmayam||bhīmavikramaṃ prabhuṃ vicitra tāṇḍava priyaṃ||kāśikā purādhinātha kālabhairavaṃ bhaje",
        meaning:
          "I sing praise of Kalabhairava, the lord of Kashi, who is the bestower of desires and salvation, who has an enticing appearance, who is loving to his devotees, who is stable, who takes various manifestations and forms the world, and who has a beautiful golden belt with small melodious bells.",
      },
    ],
  },
};

export default VIDEO_MANIFEST;
