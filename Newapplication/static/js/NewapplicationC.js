/* globals Newapplication */
/* globals Shared */

(function() {

  "use strict";

  Trillo.CSS.selected = "active";

  Newapplication.NewapplicationC = Trillo.inherits(Shared.AppC, function(viewSpec) {
    Shared.AppC.call(this, viewSpec);
  });

  var NewapplicationC = Newapplication.NewapplicationC.prototype;
  var AppC = Shared.AppC.prototype;

  NewapplicationC.handleAction = function(actionName, selectedObj) {
    if (actionName === "sideBarToggler") {
      $('body').toggleClass('sidebar-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "asideBarToggler") {
      $('body').toggleClass('aside-menu-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "mobileSideBarToggler") {
      $('body').toggleClass('sidebar-mobile-show');
      this.view().windowResized();
      return true;
    }
    return AppC.handleAction.call(this, actionName, selectedObj);
  };

})();
