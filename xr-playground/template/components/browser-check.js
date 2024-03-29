const supportsXR = 'xr' in window.navigator;

AFRAME.registerComponent('browser-check', {
  
    init: function () {
      // Do something when component first attached.

      this.el.object3D.visible = !supportsXR;

    },
  
    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something when the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.

    }
  });