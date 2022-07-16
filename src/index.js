import timer from "./modules/timer";
import scroll from "./modules/scroll";
import calculate from "./modules/calculate";
import modal from "./modules/modal";
import lightbox from "./modules/lightbox";
import validate from "./modules/validate";
import sendForm from "./modules/sendForm";

timer("21 july 2022 12:00");
scroll();
calculate(1000);
modal();
lightbox();

validate();
sendForm({
    formId: "form1",
    someElem: [
      {
        type: "input",
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formId: "form2",
    someElem: [
      {
        type: "block",
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formId: "form3",
    someElem: [
      {
        type: "block",
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formId: "form4",
    someElem: [
      {
        type: "block",
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formId: "form5",
    someElem: [
      {
        type: "block",
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formId: "form6",
    someElem: [
      {
        type: "block",
        id: "calc-total",
      },
    ],
  });
  sendForm({
    formId: "form7",
    someElem: [
      {
        // type: "block",
        id: "calc-total",
      },
    ],
  });