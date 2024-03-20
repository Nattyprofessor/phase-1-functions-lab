// Code your solution in this file!
// helpers.js
function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq);
  }
  
  function distanceFromHqInFeet(blocks) {
    const blocksAway = distanceFromHqInBlocks(blocks);
    return blocksAway * 264; // 1 block is equivalent to 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // 1 block is equivalent to 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice };
  