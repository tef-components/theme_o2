// Function that sets the CoreStyle variables
var setVars = function(){
  CoreStyle.g.color =
    "#2280a6";

  CoreStyle.g.text =
    "white";

  CoreStyle.g.border =
    "#2280a6";

  CoreStyle.g.colorHover =
    "#1e7091";

  CoreStyle.g.textHover =
    "white";

  CoreStyle.g.borderHover =
    "#1e7091";

  CoreStyle.g.colorActive =
    "#195f7c";

  CoreStyle.g.textActive =
    "white";

  CoreStyle.g.borderActive =
    "#195f7c";

  CoreStyle.g.positive =
    "#01b7b4";

  CoreStyle.g.positiveText =
    "white";

  CoreStyle.g.positiveBorder =
    "#01b7b4";

  CoreStyle.g.positiveHover =
    "#019e9b";

  CoreStyle.g.positiveTextHover =
    "white";

  CoreStyle.g.positiveBorderHover =
    "#019e9b";

  CoreStyle.g.positiveActive =
    "#018482";

  CoreStyle.g.positiveTextActive =
    "white";

  CoreStyle.g.positiveBorderActive =
    "#018482";

  CoreStyle.g.negative =
    "#990000";

  CoreStyle.g.negativeText =
    "white";

  CoreStyle.g.negativeBorder =
    "#990000";

  CoreStyle.g.negativeHover =
    "#800000";

  CoreStyle.g.negativeTextHover =
    "white";

  CoreStyle.g.negativeBorderHover =
    "#800000";

  CoreStyle.g.negativeActive =
    "#660000";

  CoreStyle.g.negativeTextActive =
    "white";

  CoreStyle.g.negativeBorderActive =
    "#660000";

  CoreStyle.g.subdued =
    "#686868";

  CoreStyle.g.subduedText =
    "white";

  CoreStyle.g.subduedBorder =
    "#686868";

  CoreStyle.g.subduedHover =
    "#5b5b5b";

  CoreStyle.g.subduedTextHover =
    "white";

  CoreStyle.g.subduedBorderHover =
    "#5b5b5b";

  CoreStyle.g.subduedActive =
    "#4f4f4f";

  CoreStyle.g.subduedTextActive =
    "white";

  CoreStyle.g.subduedBorderActive =
    "#4f4f4f";

  CoreStyle.g.significant =
    "#01b7b4";

  CoreStyle.g.significantText =
    "white";

  CoreStyle.g.significantBorder =
    "#01b7b4";

  CoreStyle.g.significantHover =
    "#019e9b";

  CoreStyle.g.significantTextHover =
    "white";

  CoreStyle.g.significantBorderHover =
    "#019e9b";

  CoreStyle.g.significantActive =
    "#018482";

  CoreStyle.g.significantTextActive =
    "white";

  CoreStyle.g.significantBorderActive =
    "#018482";

  CoreStyle.g.neutral =
    "#84959e";

  CoreStyle.g.neutralText =
    "white";

  CoreStyle.g.neutralBorder =
    "#84959e";

  CoreStyle.g.neutralHover =
    "#768993";

  CoreStyle.g.neutralTextHover =
    "white";

  CoreStyle.g.neutralBorderHover =
    "#768993";

  CoreStyle.g.neutralActive =
    "#697c86";

  CoreStyle.g.neutralTextActive =
    "white";

  CoreStyle.g.neutralBorderActive =
    "#697c86";

  CoreStyle.g.grey1 =
    "#f2f2f2";

  CoreStyle.g.grey2 =
    "#cfcece";

  CoreStyle.g.grey3 =
    "#b3b5b7";

  CoreStyle.g.grey4 =
    "#aeadad";

  CoreStyle.g.grey5 =
    "#686868";

  CoreStyle.g.grey6 =
    "#31313d";

  CoreStyle.g.headerNav =
    "transparent";

  CoreStyle.g.headerText =
    "white";

  CoreStyle.g.headerIcon =
    "#6f9ebc";

  CoreStyle.g.headerReverse =
    "#032b5a";

  CoreStyle.g.shadow =
    "0 2px 6px rgba(0, 0, 0, 0.3)";

  CoreStyle.g.widthXS =
    "480px";

  CoreStyle.g.widthSM =
    "768px";

  CoreStyle.g.widthMD =
    "992px";

  CoreStyle.g.widthLG =
    "1167px";

  CoreStyle.g.widthMin =
    "320px";

  CoreStyle.g.widthMax =
    "1167px";

  CoreStyle.g.gutter =
    "1.6%";

  CoreStyle.g.columnGutter =
    "0.8%";


}

if (typeof CoreStyle === 'undefined'){
  // If core-style has not been loaded we set setVars()
  // to execute when polymer is ready
  window.addEventListener('polymer-ready', setVars);
} else {
  // If core-style has already been loaded we execute setVars()
  setVars();
}
