/**
 * Remove focus from map attribution
 */
window.addEventListener('DOMContentLoaded', () => {
    const mapCredits = document.querySelector('.leaflet-control-attribution').getElementsByTagName('a');
    for (let mapCredit of mapCredits) {
      mapCredit.setAttribute('tabindex', -1);
    }
  });

/**
 * dropdown events
 */
(function events() {
  const dropUlEvents = [
    dropUl.addEventListener("click", dropDown()),
    dropUl.addEventListener("blur", dropDown()),
  ];
  return {
    dropUlEvents: dropUlEvents
  }
})

  /**
 * dropdown
 */
function dropDown(dropdown) {
  const dropUl = dropdown.parentNode.querySelector('.dropdown');


  if(dropUl.classList.contains("hidden")) {
    dropUl.classList.replace("hidden", "shown");
  } else {
    dropUl.classList.replace("shown", "hidden");
  }

}