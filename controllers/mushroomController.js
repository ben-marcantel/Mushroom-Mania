"use strict";

console.log("Im here");

angular.module("MushroomApp")
.controller("MushroomCtlr", function($scope, MushroomFactory){
    MushroomFactory.getMushrooms()
    .then((MushroomData)=>{   
        
        $scope.mushrooms = Object.values(MushroomData.data);  
    }) 
});

// 'use strict';

// angular.module("shroomFinder")
// .controller("ShroomCtrl", function($scope, ShroomFactory) {

//   ShroomFactory.getShrooms()
//   .then( (shroomData) => {
//     console.log(Object.values(shroomData.data));
//     $scope.mushrooms = Object.values(shroomData.data);
//   });

// });