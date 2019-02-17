import FontFaceObserver from "fontfaceobserver";

export default () => {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add("fonts-0", "fonts-1");
    return;
  }

  const fontSubset = new FontFaceObserver("ApercuSubset");
  Promise.all([fontSubset.load()]).then(() => {
    document.documentElement.classList.add("fonts-0");
    const fontMono = new FontFaceObserver("Apercu-Mono");

    Promise.all([fontMono.load()]).then(() => {
      document.documentElement.classList.add("fonts-1");
      sessionStorage.fontsLoaded = true;
    });
  });
};
