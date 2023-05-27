failCards = [{
  resource:"spade", 
  level: "low", 
  card: {
    prompt: "Akiko is sick of your unproductive choices and no longer follows your choices.",
    rightChoiceText: "Restart",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Restart", 
    leftChoice: function(){location.reload();
    },
    name: "Mad Akiko",
    resultText: "",
    image: "./images/C1mad.png"
  }  
},
{
  resource:"spade", 
  level: "high", 
  card: {
    prompt: "Akiko is sick of your unproductive choices and no longer follows your choices.",
    rightChoiceText: "Restart",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Restart", 
    leftChoice: function(){location.reload();
    },
    name: "Mad Akiko",
    resultText: "",
    image: "./images/C1mad.png"
  }  
},
{
  resource:"guitar", 
  level: "high", 
  card: {
    prompt: "Akiko is sick of your unproductive choices and no longer follows your choices.",
    rightChoiceText: "Restart",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Restart", 
    leftChoice: function(){location.reload();
    },
    name: "Mad Akiko",
    resultText: "",
    image: "./images/C1mad.png"
  }  
}
]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "You made a mistake",
  image: "./images/legumes.jpg"
}