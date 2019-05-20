import FontFaceObserver from "fontfaceobserver";

export default () => {
  if (sessionStorage.fontsDidLoad) {
    document.documentElement.classList.add("fonts-subset", "fonts-loaded");
    return;
  }

  // `ModeratSubset` is a font subset to increase page load speeds.
  // Includes character types: Lowercase, Uppercase, Numbers, Punctuation, Currency
  // Includes unicode tables: Basic Latin, Punctuation
  // Estimated size (of Base64 encoded string): 10.868KB
  const fontSubset = new FontFaceObserver("ModeratSubset");

  Promise.all([fontSubset.load()]).then(() => {
    document.documentElement.classList.add("fonts-subset");

    const font = new FontFaceObserver("Moderat", {
      weight: 400,
    });
    const fontMedium = new FontFaceObserver("Moderat", {
      weight: 500,
    });
    const fontBold = new FontFaceObserver("Moderat", {
      weight: 600,
    });

    Promise.all([font.load(), fontMedium.load(), fontBold.load()]).then(() => {
      document.documentElement.classList.add("fonts-loaded");
      sessionStorage.fontsDidLoad = true;
    });
  });
};
