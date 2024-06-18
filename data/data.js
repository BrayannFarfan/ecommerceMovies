const movies = [
    {
      "id": 1,
      "original_title": "Kingdom of the Planet of the Apes",
      "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      "price": 6097.733,
      "poster_path": "https://image.tmdb.org/t/p/w400/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
      "release_date": "2024-05-08",
      "title": "Kingdom of the Planet of the Apes"
    },
    {
      "id": 2,
      "original_title": "Civil War",
      "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
      "price": 3038.92,
      "poster_path": "https://image.tmdb.org/t/p/w400/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
      "release_date": "2024-04-10",
      "title": "Civil War"
    },
    {
      "id": 3,
      "original_title": "Godzilla x Kong: The New Empire",
      "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      "price": 2176.392,
      "poster_path": "https://image.tmdb.org/t/p/w400//z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
      "release_date": "2024-03-27",
      "title": "Godzilla x Kong: The New Empire"
    },
    {
      "id": 4,
      "original_title": "Tarot",
      "overview": "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
      "price": 2131.33,
      "poster_path": "https://image.tmdb.org/t/p/w400/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
      "release_date": "2024-05-01",
      "title": "Tarot"
    },
    {
      "id": 5,
      "original_title": "Atlas",
      "overview": "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
      "price": 1821.917,
      "poster_path": "https://image.tmdb.org/t/p/w400/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
      "release_date": "2024-05-23",
      "title": "Atlas"
    },
    {
      "id": 6,
      "original_title": "The Fall Guy",
      "overview": "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
      "price": 1217.797,
      "poster_path": "https://image.tmdb.org/t/p/w400/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
      "release_date": "2024-04-24",
      "title": "The Fall Guy"
    },
    {
      "id": 7,
      "original_title": "ゴジラ-1.0",
      "overview": "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
      "price": 1209.099,
      "poster_path": "https://image.tmdb.org/t/p/w400/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      "release_date": "2023-11-03",
      "title": "Godzilla Minus One",
    },
    {
      "id": 8,
      "original_title": "The First Omen",
      "overview": "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
      "price": 1127.216,
      "poster_path": "https://image.tmdb.org/t/p/w400/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
      "release_date": "2024-04-03",
      "title": "The First Omen"
    },
    {
      "id": 9,
      "original_title": "Furiosa: A Mad Max Saga",
      "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
      "price": 1055.646,
      "poster_path": "https://image.tmdb.org/t/p/w400/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      "release_date": "2024-05-22",
      "title": "Furiosa: A Mad Max Saga"
    },
    {
      "id": 10,
      "original_title": "Dune: Part Two",
      "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      "price": 897.168,
      "poster_path": "https://image.tmdb.org/t/p/w400/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
      "release_date": "2024-02-27",
      "title": "Dune: Part Two"
    },
    {
      "id": 11,
      "original_title": "Boy Kills World",
      "overview": "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
      "price": 891.24,
      "poster_path": "https://image.tmdb.org/t/p/w400/25JskXmchcYwj3jHRmcPm738MpB.jpg",
      "release_date": "2024-04-24",
      "title": "Boy Kills World"
    },
    {
      "id": 12,
      "original_title": "Top Gunner: Danger Zone",
      "overview": "An airliner filled with 800 passengers is forced to fly fast and low, above farmlands, suburbs and skyscraper-packed cities or the tons of explosives aboard will detonate. When an elite unit of US Air Force fighter jets is sent to provide escort, they find themselves facing a squadron of unidentifiable warplanes which ignites a deadly air battle that threatens to destroy all life above and below.",
      "price": 760.265,
      "poster_path": "https://image.tmdb.org/t/p/w400/29UCk1nvPzn2XubLk5rKDMlHBRu.jpg",
      "release_date": "2022-05-20",
      "title": "Top Gunner: Danger Zone"
    },
    {
      "id": 13,
      "original_title": "Kung Fu Panda 4",
      "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
      "price": 759.173,
      "poster_path": "https://image.tmdb.org/t/p/w400/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      "release_date": "2024-03-02",
      "title": "Kung Fu Panda 4"
    },
    {
      "id": 14,
      "original_title": "Inside Out 2",
      "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      "price": 748.373,
      "poster_path": "https://image.tmdb.org/t/p/w400/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      "release_date": "2024-06-12",
      "title": "Inside Out 2"
    },
    {
      "id": 15,
      "original_title": "Un père idéal",
      "overview": "",
      "price": 685.195,
      "poster_path": "https://image.tmdb.org/t/p/w400/4xJd3uwtL1vCuZgEfEc8JXI9Uyx.jpg",
      "release_date": "2024-04-21",
      "title": "Un père idéal"
    },
    {
      "id": 16,
      "original_title": "Fast X",
      "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      "price": 641.421,
      "poster_path": "https://image.tmdb.org/t/p/w400/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      "release_date": "2023-05-17",
      "title": "Fast X"
    },
    {
      "id": 17,
      "original_title": "Oppenheimer",
      "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      "price": 625.191,
      "poster_path": "https://image.tmdb.org/t/p/w400/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      "release_date": "2023-07-19",
      "title": "Oppenheimer"
    },
    {
      "id": 18,
      "original_title": "xXx",
      "overview": "Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government \"recruits\" him to go on a mission, he's not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.",
      "price": 608.16,
      "poster_path": "https://image.tmdb.org/t/p/w400/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
      "release_date": "2002-08-09",
      "title": "xXx"
    },
    {
      "id": 19,
      "original_title": "The Garfield Movie",
      "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
      "price": 590.776,
      "poster_path": "https://image.tmdb.org/t/p/w400/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
      "release_date": "2024-04-30",
      "title": "The Garfield Movie",
    },
    {
      "id": 20,
      "original_title": "The Batman",
      "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      "price": 587.006,
      "poster_path": "https://image.tmdb.org/t/p/w400/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      "release_date": "2022-03-01",
      "title": "The Batman"
    }
  ]