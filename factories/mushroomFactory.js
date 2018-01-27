'use strict';

//Factory inputs/outputs data
angular.module("MushroomApp")
.factory("MushroomFactory", function($q, $http) {
  let getMushrooms = () => {
    return $q( (resolve, reject) => {
      $http
      .get("https://cohort23-exercises.firebaseio.com/mushrooms.json")
      .then(mData => {
        resolve(mData);
      })
      .catch(err => {
        reject(err);
      });
    });
  };
  return {getMushrooms};
});

// 'use strict';

// angular.module("shroomFinder").factory("ShroomFactory", function($q, $http){
    
//     let getShrooms = () => {
//       return $q( (resolve, reject) => {
//         $http
//         .get("https://mushroom-mainia.firebaseio.com/mushrooms.json")
//         .then( (shrooms) => {
//           resolve(shrooms);
//         })
//         .catch( (err) => {
//           reject(err);
//         });
//       });
//     };
  
//     return { getShrooms };
  
  
  
//   });