# phys2211-groupme-bot
 A chatbot for the [`Physics 2211 - Section M`](https://groupme.com/join_group/70009643/mNR0uhnD) GroupMe

 ## how does it work?
 Just type one of the commands into the GroupMe, and prof. Fenton (definately the real one) will respond with some knowledge.

 ## how can I add commands to this bot? 
 The [`input.json`](./input.json) file holds all of the commands for the bot in JSON format. To add a new command, simply copy/paste an existing command and change it to fit your needs, and submit the change through a GitHub pull request (or msg me on GroupMe and I'll do it for you). 

 ### **Don't forget to add commas where necessary, JSON is very strict**

 # Examples
 
 original input.json:

 ```json
[
    {
        "keywords":[
            "$github"
        ],
        "response": "https://github.com/JohnRamberger/phys2211-groupme-bot"
    }
]
 ```
Copy/paste an existing command and edit it to get the command you want. No, you don't need the $ before your keywords. This just prevents the chat from getting spammed from people accidentally talking with the bot.
 ```json
 [
    {
        "keywords":[
            "$github"
        ],
        "response": "https://github.com/JohnRamberger/phys2211-groupme-bot"
    },
    {
        "keywords":[
            "$keyword",
            "$another keyword",
            "$maybe another keyword?",
            "$as many keywords as you want"
        ],
        "response": "text sent back by the bot in GroupMe"
    }
]
```

## Video Demonstration:

https://user-images.githubusercontent.com/56486927/132613196-6b077e20-e968-4bff-bcf9-b3d1cc320264.mp4
