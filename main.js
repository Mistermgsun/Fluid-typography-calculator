let formValues = {
  minpagewidth: "",
  pagewidthvalue: "",
  minpagewidthvalue: "",
  fontmax: "",
  fontmin: "",
};

/* Set the initial value for the variable*/
function getInitialValue(elementID) {
  const initialValue = document.getElementById(elementID).defaultValue;
  return `var(${initialValue})`;
}

function calculateFormula() {
  const { minpagewidth, pagewidthvalue, minpagewidthvalue, fontmax, fontmin } =
    formValues;

  const formula = `clamp(${fontmin}rem, calc(${fontmin}rem + (${fontmax} - ${fontmin}) * ((100vw - ${minpagewidth}) / (${pagewidthvalue} - ${minpagewidthvalue}))), ${fontmax}rem)`;
  document.getElementById("result").innerHTML = formula + ";";
}

/* On change input value*/
function onChangeInput(elementID) {
  var element = document.getElementById(elementID);
  element.addEventListener("input", function (event) {
    const { value } = event.target;
    formValues[elementID] = value;
    calculateFormula();
  });
}

/* Copy the formula value */
function getFormula() {
  var element = document.getElementById("result");
  console.log(element);

  // Create a fake `textarea` and set the contents to the text because the element is not a input type field
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}

window.onload = () => {
  onChangeInput("minpagewidth", 'input[id="minpagewidth"]');
  onChangeInput("pagewidthvalue", 'input[id="pagewidthvalue"]');
  onChangeInput("minpagewidthvalue", 'input[id="minpagewidthvalue"]');
  onChangeInput("fontmax", 'input[id="fontmax"]');
  onChangeInput("fontmin", 'input[id="fontmin"]');

  formValues = {
    minpagewidth: getInitialValue("minpagewidth"),
    pagewidthvalue: getInitialValue("pagewidthvalue"),
    minpagewidthvalue: getInitialValue("minpagewidthvalue"),
  };
};
