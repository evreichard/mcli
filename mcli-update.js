#!/usr/bin/env node

var program = require("commander");
var SettingsManager = require("./settingsmanager.js");
var settings = SettingsManager.settings;

program
    .arguments("<application>", "The application you wish to update")
    .action(function(application){
        application = application.toLowerCase();
        // Verifies that the application we're referencing is supported
        if(settings.supported_applications.indexOf(application) > -1){
            console.log(settings.supported_applications);
        }
    })
    .parse(process.argv);

