
```
   _____ _          __  __      _     _           
  / ____| |        / _|/ _|    | |   | |          
 | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __ 
  \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
  ____) |   < (_| | | | || (_) | | (_| |  __/ |   
 |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_| 
 
                             _                __         _______          __     
     /\                     | |              / /        |  __ \ \        / /\    
    /  \   _ __   __ _ _   _| | __ _ _ __   / /_        | |__) \ \  /\  / /  \   
   / /\ \ | '_ \ / _` | | | | |/ _` | '__| | '_ \       |  ___/ \ \/  \/ / /\ \  
  / ____ \| | | | (_| | |_| | | (_| | |    | (_) |      | |      \  /\  / ____ \ 
 /_/    \_\_| |_|\__, |\__,_|_|\__,_|_|     \___/       |_|       \/  \/_/    \_\
                  __/ |                                                          
                 |___/                                                           

```
                                       

This project was generated by Skaffolder

For more documentation visit https://skaffolder.com/#/documentation


--------------
### START APPLICATION
--------------

* To start the application open a terminal in this folder and type:

``` bash
$ yarn install
$ yarn start
```

Go to http://localhost:3000


* To run the service worker build with:
``` bash
$ yarn run build --prod
```

--------------
### CONFIGURE
--------------

Set properties in:
* For local/dev environments `src/environments/environments.dev.ts`
* for production environments `src/environments/environments.prod.ts`

--------------
### USING SKAFFOLDER-CLI
--------------

With Skaffolder-CLI you can easily manage your Skaffolder project from command line and customize your generator template from your IDE.

Install Skaffolder-CLI with
``` bash
$ yarn install -g skaffolder-cli
```

Login running the command
``` bash
$ sk login
```

Generate your project with the command
``` bash
$ sk generate
```

You can customize your generator template working with files in .skaffolder folder in your project root.

Please refer to https://skaffolder.com/#/documentation/skaffolder-cli for more information.
