document.registerElement('service-worker', {
  prototype: Object.create(
    HTMLLinkElement.prototype, {
      createdCallback: {
        value: function() {
          if ('serviceWorker' in navigator) {
            var args = [];
            args.push(this.getAttribute('href'));
            if (this.getAttribute('scope')) {
              args.push({
                scope: this.getAttribute('scope')
              });
            }
            navigator.serviceWorker.register.apply(navigator.serviceWorker, args);
          }
        }
      }
  }),
  extends: 'link'
});