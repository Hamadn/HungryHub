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
  
  var defaultOffset = '30%';
  
  for (i=0; i<15; i++) {
    customWayPoint('.timeline__item--'+i, 'timeline__item-bg', defaultOffset);
  }