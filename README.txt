REQUIREMENT: 
    - nodeJS && npm need to be installed on your system
    - mongodb need to be installed OR you can put mongodb cloud URL connection link
    
STEPS:
    - click on the mentioned GitHub link
    - Go to project root folder
    - Change mongodb url(MONGODB_URI) in config.env
    - Run <npm install> command on your CMD/Terminal
    - Run <npm start> command on your CMD/Terminal, now your node server started
    - Open postman & follow below steps

        Step 1:
            NOTE:
                A. URL must be your localhost with port(eg localhost:3333) or IP address
            
            API: <URL>/api/v1/user/create
            Req Param: {url: "<link>", status: <number>, priority: <number> } 
            
        
        Step 2:

            API: <URL>/api/v1/user/listOnlineServer
            Res Param: { "url": <>, "status": < anything between 200 to 299> , priority: number }

