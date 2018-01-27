"use strict";
 
console.log("hmm");

 angular.module("MushroomApp", ["ngRoute"])
 .config($routeProvider=>{
    $routeProvider
    .when("/", {
        templateUrl: "partials/mushrooms.html",
        controller: "MushroomCtlr",
    })
    .otherwise("/");
    });

