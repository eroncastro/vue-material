export var createNewStyleElement;

if (process.env.VUE_ENV !== 'server') {
  createNewStyleElement = (style, styleId) => {
    const head = document.head;
    const styleElement = head.querySelector('#' + styleId);

    if (!styleElement) {
      const newTag = document.createElement('style');

      newTag.type = 'text/css';
      newTag.id = styleId;
      newTag.textContent = style;

      head.appendChild(newTag);
    } else {
      styleElement.textContent = style;
    }
  };
}
