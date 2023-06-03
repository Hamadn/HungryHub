// Function for the animation effect when the user scrolls down 
function customWayPoint(className, addClassName, customOffset) {
    var waypoints = $(className).waypoint({
      handler: function(direction) {
        if (direction == "down") {
          $(className).addClass(addClassName);
        } else {
          $(className).removeClass(addClassName);
        }
      },
      offset: customOffset
    });
  }
  // The offset for the animation to take place after it has been crossed
  var defaultOffset = '30%';
  
  // The number of times to execute the function and on elements with specific classes
  for (i=0; i<15; i++) {
    customWayPoint('.timeline__item--'+i, 'timeline__item-bg', defaultOffset);
  }