export const globalComponents = {
  install(app) {
    const components = import.meta.globEager('./../components/global/**/*.jsx');

    // ./../components/global/**/*.jsx

    Object.entries(components).forEach(([path, component]) => {
      app.component(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
        component.default
      );
    });
  },
};

 export const globalFunctions = {
  install(app) {
    const components = import.meta.globEager('./../components/**/*.js');

    Object.entries(components).forEach(([path, component]) => {
      app.component(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
        component.default
      );
    });
  },
};



