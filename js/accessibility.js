/**
 * DOM Loaded
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * map tabindex control
     */
    (() => {
      setTimeout(() => {

        const mapAtt = document.querySelector('.leaflet-control-attribution');
        console.log(mapAtt);
        const mapAttAnchors = mapAtt.getElementsByTagName('a');
        for(anchor of mapAttAnchors) {
          anchor.setAttribute('tabindex', -1)
        };
      },1500);
    })();

});