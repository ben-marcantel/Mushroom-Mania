"use strict";


angular.module("MushroomApp")
.controller("MushroomCtlr", function($scope, MushroomFactory){
    MushroomFactory.getMushrooms()
    .then((MushroomData)=>{   
        $scope.mushrooms = Object.values(MushroomData.data);  
    }) 
    $scope.name = {
        text: 'filter by name',
        word: /^\s*\w*\s*$/
      };
});

