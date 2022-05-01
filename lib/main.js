var farmed_points = 0;

var intervalId = window.setInterval(function(){
  cps = document.getElementsByClassName('community-points-summary')[0];
  if (cps != null) {
    btn = cps.getElementsByTagName('button')[1];
    if (btn != null) {
      // Farm points
      btn.click();
      farmed_points++;
      console.log('Points farmed: ' + farmed_points);
      // Reinitialize check variables
      btn = null;
      cps = null;
    }
  }
}, 10000);