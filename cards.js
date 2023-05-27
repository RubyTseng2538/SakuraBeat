
firstCard = {
  prompt: "Akiko slowly stirred from her peaceful slumber, her eyes fluttering open as the gentle morning light peeked through the curtains of her cozy bedroom.",
  rightChoiceText: "Get up from bed",
  rightChoice: function(){
    addResource("spade", 10)
    addToTopDeck("AkikoUp")
    },
  
  leftChoiceText: "sleep a bit more", 
  leftChoice: function(){
    addResource("spade", -10)
    addToTopDeck("AkikoAsleep")
  },
  name: "Akiko",
  resultText: "",
  image: "./images/C1.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["AkikoUp", "AkikoAsleep", "AkikoMusic", "Bathroom", "Dressed", "Makeup", "Hair", "Ready", "WalkBranch", "RunBranch", "Music", "SideTalk", "SideTalk2", "SideTalk3", "RecordingStudio", "Emi", "Sakura", "Emi1", "Emi2", "EmiSub1", "EmiSub2", "EmiSubSub1", "EmiSubSub2", "EmiSubSubSub1", "EmiSubSubSub2", "Emi2Sub1", "Emi2Sub2", "Emi2SubSub1", "Sakura1", "Home", "Route1", "Route2", "House", "NewMusic", "SendToFriends", "SaveSongs", "WatchTV", "NewDay", "News", "Cafe", "Table", "Coffee", "Miyuki", "Ignore", "Fate", "SeeYouAgain", "Collab", "Album", "Table2", "Ignore", "Table3"],
  
  "AkikoUp" : {
    prompt: "Stretching her arms above her head, she let out a contented sigh, feeling the warmth of her soft sheets embracing her. Akiko swung her legs over the edge of the bed and slipped her feet into comfortable slippers.",
    rightChoiceText: "play some music",
      rightChoice: function(){
      addResource("guitar", 10)
      addToTopDeck("AkikoMusic")
      },
    leftChoiceText: "go to the bathroom", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Bathroom")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 2,
    pack : "none"
  },

  "AkikoMusic" : {
    prompt: "Making her way to her small but cherished collection of vinyl records, Akiko carefully selected one that suited her mood—a melodic and introspective album that never failed to inspire her.",
    rightChoiceText: "enjoy the music",
      rightChoice: function(){
      addResource("guitar", 10)
      addToTopDeck("AkikoMusic")
      },
    leftChoiceText: "go to the bathroom", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Bathroom")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Bathroom" : {
    prompt: "Akiko glided into the bathroom, allowing the warm water from the shower to wash away any lingering traces of sleepiness. The sensation rejuvenated her, preparing her for the day ahead.",
    rightChoiceText: "Get dressed",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Dressed")
      },
    leftChoiceText: "Get dressed", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Dressed")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Dressed" : {
    prompt: "She reveled in the simple pleasures of getting ready—selecting a stylish yet comfortable outfit.",
    rightChoiceText: "put on makeup",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Makeup")
      },
    leftChoiceText: "style hair", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Hair")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Makeup" : {
    prompt: "She applying a touch of makeup to enhance her natural beauty.",
    rightChoiceText: "style hair",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Hair")
      },
    leftChoiceText: "ready", 
    leftChoice: function(){
      addResource("spade", -60)
      addToTopDeck("Ready")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Hair" : {
    prompt: "She styled her ebony hair in a way that reflected her unique personality.",
    rightChoiceText: "put on makeup",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("Makeup")
      },
    leftChoiceText: "ready", 
    leftChoice: function(){
      addResource("spade", -60)
      addToTopDeck("Ready")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },
  
  "Ready" : {
    prompt: "Akiko gathered her belongings, including a notebook filled with lyrics and melodies. With her guitar slung over her shoulder and a smile of determination on her face, Akiko stepped out of the door, ready to start the day.",
    rightChoiceText: "Walk to studio",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("WalkBranch")
      },
    leftChoiceText: "Rush to studio", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RunBranch")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "WalkBranch" : {
    prompt: "Just a few blocks away from the studio, Akiko's path crossed with a street musician playing a haunting melody on a violin, their talent and passion captivating her attention.",
    rightChoiceText: "join the street musician",
      rightChoice: function(){
      addResource("guitar", 10)
      addToTopDeck("Music")
      },
    leftChoiceText: "Rush to studio", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RunBranch")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Music" : {
    prompt: "Unable to resist the allure of music, Akiko paused and joined in, harmonizing her voice with the violin's melancholic strains, creating an impressionable collaboration.",
    rightChoiceText: "talk with the musician",
      rightChoice: function(){
        addData("musician", 1)
      addResource("guitar", 10)
      addToTopDeck("SideTalk")
      },
    leftChoiceText: "Rush to studio", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RunBranch")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "SideTalk" : {
    prompt: "Akiko: Whew! That was great! Haven't sang like that in a while. Your violin skill is great! I'm Akiko, what's your name?",
    rightChoiceText: "talk with the musician",
      rightChoice: function(){
      addResource("guitar", 10)
      addToTopDeck("SideTalk2")
      },
    leftChoiceText: "Rush to studio because you are late", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RunBranch")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "SideTalk2" : {
    prompt: "Musician: I'm Miyuki. Do you frequent here? This is my first time performing on this block.",
    rightChoiceText: "talk with the musician",
      rightChoice: function(){
      addResource("guitar", 10)
      addToTopDeck("SideTalk3")
      },
    leftChoiceText: "Rush to studio because you are late", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RunBranch")
    },
    name: "Musician",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "SideTalk3" : {
    prompt: "Akiko: Glad to meet you Miyuki, I frequently perform here at night. Oh no! I'm late! I have to go! Hope to meet you in the future!",
    rightChoiceText: "Rush to studio because you are late",
      rightChoice: function(){
        addResource("spade", 5)
        addToTopDeck("RunBranch")
      },
    leftChoiceText: "Rush to studio because you are late", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RunBranch")
    },
    name: "Musician",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "RunBranch" : {
    prompt: "Akiko rushed through the city streets, aware of her tardiness for the studio session, her heart pounding with excitement and anxiety, but despite the obstacles and wrong turns, she arrived breathless yet triumphant.",
    rightChoiceText: "Enter the recording studio",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RecordingStudio")
      },
    leftChoiceText: "Enter the recording studio", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("RecordingStudio")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "RecordingStudio" : {
    prompt: "Akiko rushed into the recording studio,  her eyes filled with a mix of excitement and relief as she greeted her bandmates.",
    rightChoiceText: "Greet Emi",
      rightChoice: function(){
      addResource("heart", 5)
      addToTopDeck("Emi")
      },
    leftChoiceText: "Greet Sakura", 
    leftChoice: function(){
      addResource("diamond", 5)
      addToTopDeck("Sakura")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Emi" : {
    prompt: "Akiko: Sorry I'm late! \n Emi: What took you so long! You overslept again?",
    rightChoiceText: "I got sidetracked by the street performance",
      rightChoice: function(){
      addResource("heart", 5)
      addToTopDeck("Emi1")
      },
    leftChoiceText: "I overslepted...", 
    leftChoice: function(){
      addResource("heart", -5)
      addToTopDeck("Emi2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "Emi1" : {
    prompt: "Akiko: I was walking to the studio when someone was doing a street performance, you have to hear it! It was incredible.\n Emi: So you got sidetracked and stayed to listen....?\nAkiko: Yep!",
    rightChoiceText: "Talk about potential collab",
      rightChoice: function(){
      addResource("heart", 5)
      addToTopDeck("EmiSub1")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "EmiSub1" : {
    prompt: "Akiko: Her violin song was beautiful. If possible, I would love to work with her and add the song to our album. ",
    rightChoiceText: "Who is she?",
      rightChoice: function(){
      addResource("spade", 5)
      addToTopDeck("EmiSubSub1")
      },
    leftChoiceText: "There's no way", 
    leftChoice: function(){
      addResource("spade", -5)
      addToTopDeck("EmiSubSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "EmiSubSub1" : {
    prompt: "Emi: Did you even manage to know the violin girl? Who is she, where she from? Is she signed with any company? \n Akiko: No... I know her name though, she's Miyuki. \n Emi: That's not enough information =_=|||",
    rightChoiceText: "Don't worry I will take care of it!",
      rightChoice: function(){
      addResource("heart", -5)
      addToTopDeck("EmiSubSubSub1")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "EmiSubSubSub1" : {
    prompt: "Akiko: Don't worry, I will take care of it! \n Emi: ....I don't think this is a good idea...",
    rightChoiceText: "Start the recording session",
      rightChoice: function(){
      addToTopDeck("EmiSub2")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "EmiSubSub2" : {
    prompt: "Emi: We can't, our companies already decided the songs on the album. You gotta focus so we can get the recordings done today. \n Akiko: Right...",
    rightChoiceText: "Start the recording session",
      rightChoice: function(){
      addToTopDeck("EmiSub2")
      },
    leftChoiceText: "Insist on adding the song", 
    leftChoice: function(){
      addResource("heart", -5)
      addToTopDeck("EmiSubSubSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "EmiSubSubSub2" : {
    prompt: "Akiko: Don't worry! I will talk with the boss, her skill is too good to not add to our album. \n Emi: We shouldn't affect the creative direction this much when we already have the plan set out...",
    rightChoiceText: "Start the recording session",
      rightChoice: function(){
      addToTopDeck("EmiSub2")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "EmiSub2" : {
    prompt: "In the studio, Akiko and her bandmates, Emi and Sakura, shared an exhilarating creative synergy as they poured their hearts and talents into recording their album, their harmonies and musical chemistry bringing their shared vision to life.",
    rightChoiceText: "Go home",
      rightChoice: function(){
      addToTopDeck("Home")
      },
    leftChoiceText: "Hang out after recording session", 
    leftChoice: function(){
      addResource("heart", 5)
      addResource("diamond", 5)
      addToTopDeck("Cafe")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "Emi2" : {
    prompt: "Akiko: Sorry.. I overslept today.\n Emi: Not surprised... When have you not been late?",
    rightChoiceText: "Explain your circumstance",
      rightChoice: function(){
      addResource("heart", 5)
      addToTopDeck("Emi2Sub1")
      },
    leftChoiceText: "Brush it off", 
    leftChoice: function(){
      addResource("heart", -5)
      addToTopDeck("Emi2Sub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "Emi2Sub1" : {
    prompt: "Akiko: The drama last night was just too good! I can't help it \n Emi: You should at least be responsible before important days like these. *Sigh* What can you do without us?",
    rightChoiceText: "Laugh",
      rightChoice: function(){
      addResource("heart", 5)
      addToTopDeck("Emi2SubSub1")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "Emi2Sub2" : {
    prompt: "Akiko: Don't mention it, now that I'm here we can start the recordings right? \n Emi: .... Yes.",
    rightChoiceText: "Start the recording session",
      rightChoice: function(){
      addToTopDeck("EmiSub2")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },


  "Emi2SubSub1" : {
    prompt: "Akiko: Yes yes mami Emi, I will make sure to be punctual. \n Emi: Just hope next time you are actually punctual.",
    rightChoiceText: "Start the recording session",
      rightChoice: function(){
      addToTopDeck("EmiSub2")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Emi",
    resultText: "",
    image: "./images/C2.png",
    priority: 3,
    pack : "none"
  },

  "Sakura" : {
    prompt: "Akiko: Sorry I'm late! \n Sakura: No worries, Akiko, we knew you'd make it.",
    rightChoiceText: "Chat",
      rightChoice: function(){
      addResource("diamond", 5)
      addToTopDeck("Sakura1")
      },
      leftChoiceText: "Start the recording session", 
      leftChoice: function(){
        addToTopDeck("EmiSub2")
      },
    name: "Sakura",
    resultText: "",
    image: "./images/C3.png",
    priority: 3,
    pack : "none"
  },

  "Sakura1" : {
    prompt: "Akiko: If only Emi would be as chill as you. \n Emi: Hey! I heard that! \n Sakura: Ahaha, well, since we are behind on schedule we should start recording.",
    rightChoiceText: "Start the recording session",
      rightChoice: function(){
      addToTopDeck("EmiSub2")
      },
    leftChoiceText: "Start the recording session", 
    leftChoice: function(){
      addToTopDeck("EmiSub2")
    },
    name: "Sakura",
    resultText: "",
    image: "./images/C3.png",
    priority: 3,
    pack : "none"
  },

  "Home" : {
    prompt: "After the recording session, Akiko decides to go home, hoping she could meet Miyuki on her way.",
    rightChoiceText: "Take the normal route",
      rightChoice: function(){
      addToTopDeck("Route1")
      },
    leftChoiceText: "Take a new route", 
    leftChoice: function(){
      addToTopDeck("Route2")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Route1" : {
    prompt: "Akiko decide to take the normal route to go home. She passed by the familiar trees she walk passed every morning, but Miyuki is nowhere in sight.",
    rightChoiceText: "Enter house",
      rightChoice: function(){
      addToTopDeck("House")
      },
    leftChoiceText: "Enter house", 
    leftChoice: function(){
      addToTopDeck("House")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Route2" : {
    prompt: "Akiko decide to take a route she never walked before. Mixed with anxiety and excitement, she traversed the road, hoping to see Miyuki, but she was nowhere in sight. ",
    rightChoiceText: "Enter house",
      rightChoice: function(){
      addToTopDeck("House")
      },
    leftChoiceText: "Enter house", 
    leftChoice: function(){
      addToTopDeck("House")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },
  
  "House" : {
    prompt: "Akiko enters her house, feeling dejected that she didn't meet Miyuki.",
    rightChoiceText: "Create new music",
      rightChoice: function(){
        addResource("spade", 5)
      addToTopDeck("NewMusic")
      },
    leftChoiceText: "Relax and watch tv", 
    leftChoice: function(){
      addResource("spade", -10)
      addToTopDeck("WatchTV")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "NewMusic" : {
    prompt: "In the comfort of her home, Akiko sat with her guitar, pouring her emotions and experiences into new songs, allowing her creativity to flow freely and shaping melodies that echoed the depths of her soul.",
    rightChoiceText: "Send music to friend",
      rightChoice: function(){
        addResource("heart", 5)
        addResource("diamond", 5)
      addToTopDeck("SendToFriends")
      },
    leftChoiceText: "Save the new music in her laptop", 
    leftChoice: function(){
      addResource("spade", 5)
      addToTopDeck("SaveSongs")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "SendToFriends" : {
    prompt: "With excitement and anticipation, Akiko clicked the *send* button, sharing her heartfelt new songs with Emi and Sakura, eager to hear their feedback and continue the journey of musical collaboration.",
    rightChoiceText: "Get ready to sleep",
      rightChoice: function(){
      addToTopDeck("NewDay")
      },
    leftChoiceText: "Get ready to sleep", 
    leftChoice: function(){
      addToTopDeck("NewDay")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "SaveSongs" : {
    prompt: "Akiko carefully saved the raw emotion and creativity of her new songs in a dedicated folder on her laptop, preserving her musical expressions for future refinement and exploration.",
    rightChoiceText: "Get ready to sleep",
      rightChoice: function(){
      addToTopDeck("NewDay")
      },
    leftChoiceText: "Get ready to sleep", 
    leftChoice: function(){
      addToTopDeck("NewDay")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "NewDay" : {
    prompt: "Akiko woke up to the familiar sound of her phone buzzing, and with bleary eyes, she picked it up to see a message from her boss: Album processed and ready for release!",
    rightChoiceText: "Check the news",
      rightChoice: function(){
      addToTopDeck("News")
      },
    leftChoiceText: "Check the news", 
    leftChoice: function(){
      addToTopDeck("News")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "News" : {
    prompt: "With a mix of nervousness and excitement, Akiko opened her favorite news website and clicked on the entertainment section, her heart racing as she scrolled through the headlines until she found it: Sakura Beat's Debut Album Soars to the Top of the Charts!",
    rightChoiceText: "Restart",
      rightChoice: function(){location.reload();
      },
    leftChoiceText: "Restart", 
    leftChoice: function(){location.reload();
    },
    name: "Akiko",
    resultText: "Good Ending",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "WatchTV" : {
    prompt: "As Akiko sat on her couch, eyes fixed on the television screen, a mix of awe and inspiration washed over her when she witnessed the band she deeply admired winning a prestigious music show, fueling her determination to work harder, chase her dreams, and one day stand on that same stage.",
    rightChoiceText: "Get ready to sleep",
      rightChoice: function(){
      addToTopDeck("NewDay")
      },
    leftChoiceText: "Get ready to sleep", 
    leftChoice: function(){
      addToTopDeck("NewDay")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Cafe" : {
    prompt: "Akiko entered the cozy café, a warm smile spreading across her face as she spotted Emi and Sakura sitting at a corner table.",
    rightChoiceText: "Go to the table",
      rightChoice: function(){
      addToTopDeck("Table")
      },
    leftChoiceText: "Order coffee first", 
    leftChoice: function(){
      addToTopDeck("Coffee")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Table" : {
    prompt: "Akiko headed straight to the table with Emi and Sakura, eager to talk about their new discography.",
    rightChoiceText: "Chat with friends",
      rightChoice: function(){
      addToTopDeck("Table3")
      },
    leftChoiceText: "Chat with friends", 
    leftChoice: function(){
      addToTopDeck("Table3")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Coffee" : {
    prompt: "Akiko decided to order some coffee first. She walk towards the barista, thinking of the perfect blend she always orders. Suddenly, someone tapped her shoulders.",
    rightChoiceText: "Who is it?",
      rightChoice: function(){
      addToTopDeck("Miyuki")
      },
    leftChoiceText: "Ignore the stranger", 
    leftChoice: function(){
      addToTopDeck("Ignore")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Miyuki" : {
    prompt: "Akiko: What is it? Akiko turned around and Miyuki was standing behind her, smiling. \n Miyuki: Must be fate that we met again.",
    rightChoiceText: "Must be fate",
      rightChoice: function(){
      addToTopDeck("Fate")
      },
    leftChoiceText: "Never expected to see you again", 
    leftChoice: function(){
      addToTopDeck("SeeYouAgain")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "Fate" : {
    prompt: "Akiko: It must be fate, I been thinking about collabing with you all day that I couldn't even concentrate on my work. \n Miyuki: Haha, thanks for the compliment.",
    rightChoiceText: "Collab?",
      rightChoice: function(){
      addToTopDeck("Collab")
      },
    leftChoiceText: "Album", 
    leftChoice: function(){
      addToTopDeck("Album")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "SeeYouAgain" : {
    prompt: "Akiko: I've never expected to see you again. Is a pleasant surprise.",
    rightChoiceText: "Collab?",
      rightChoice: function(){
      addToTopDeck("Collab")
      },
    leftChoiceText: "Album", 
    leftChoice: function(){
      addToTopDeck("Album")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "Collab" : {
    prompt: "Akiko: I'm from the band Sakura Beat, and I would love to collab with you on one album one day. I believe your talent can bring new spark in our music! \n Miyuki: I would love to!",
    rightChoiceText: "Walk to the table",
      rightChoice: function(){
      addToTopDeck("Table2")
      },
    leftChoiceText: "Walk to the table", 
    leftChoice: function(){
      addToTopDeck("Table2")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "Album" : {
    prompt: "Akiko: We just recorded our latest album and it will be dropped tonight! Hope you give a listen! \n Miyuki: Of course! I'm excited for your new work.",
    rightChoiceText: "Walk to the table",
      rightChoice: function(){
      addToTopDeck("Table2")
      },
    leftChoiceText: "Walk to the table", 
    leftChoice: function(){
      addToTopDeck("Table2")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "Table2" : {
    prompt: "Akiko wave goodbye to Miyuki and headed towards the table with her coffee.",
    rightChoiceText: "Chat with friends",
      rightChoice: function(){
      addToTopDeck("Table3")
      },
    leftChoiceText: "Chat with friends", 
    leftChoice: function(){
      addToTopDeck("Table3")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/M1.png",
    priority: 3,
    pack : "none"
  },

  "Ignore" : {
    prompt: "Akiko ignored the person tapping on her shoulder and told her order to the barista. She grabbed her receipt and head towards the table with Emi and Sakura.",
    rightChoiceText: "Chat with friends",
      rightChoice: function(){
      addToTopDeck("Table3")
      },
    leftChoiceText: "Chat with friends", 
    leftChoice: function(){
      addToTopDeck("Table3")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "Table3" : {
    prompt: "As they sipped their drinks and shared delightful pastries, Akiko, Emi, and Sakura couldn't contain their laughter and joy, reminiscing about funny moments during the recording session, exchanging playful banter, and relishing in the warmth of their friendship that transcended the boundaries of music",
    rightChoiceText: "Go home",
      rightChoice: function(){
      addToTopDeck("Home")
      },
    leftChoiceText: "Go home", 
    leftChoice: function(){
      addToTopDeck("Home")
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 3,
    pack : "none"
  },

  "AkikoAsleep": {
    prompt: "Akiko clung to the comforting embrace of sleep, refusing to be jolted from her dreamscape by the beckoning call of reality.",
    rightChoiceText: "Wake up",
      rightChoice: function(){
      addResource("spade", 10)
      addToTopDeck("AkikoUp")
      },
    leftChoiceText: "Sleep more", 
    leftChoice: function(){
      addResource("spade", -10)
      addToTopDeck("AkikoAsleep")
      
    },
    name: "Akiko",
    resultText: "",
    image: "./images/C1.png",
    priority: 2,
    pack : "none"
  }

}




