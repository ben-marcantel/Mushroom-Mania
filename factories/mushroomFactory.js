"use strict";


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

