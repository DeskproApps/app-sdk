import { createGlobalStyle } from "styled-components";

const DateInputStyles = createGlobalStyle`
  .flatpickr-calendar {
    width: 224px !important;
  }
  .dayContainer {
    width: 224px !important;
    min-width: 224px !important;
    max-width: 224px !important;
  }
  .flatpickr-days {
    width: 224px !important;
  }
  .flatpickr-day {
    max-width: 32px !important;
    height: 32px !important;
    line-height: 32px !important;
  }
`;

export { DateInputStyles };
