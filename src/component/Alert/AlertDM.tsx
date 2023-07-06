import ReactDOM from "react-dom/client";
import Modal from "./ModalDM";
import { rootElement } from "../../main";

export default function AlertCustom() {
  const modalEl = document.createElement("div");
  rootElement.appendChild(modalEl);

  function destroy() {
    rootElement.removeChild(modalEl);
  }

  function render() {
    ReactDOM.createRoot(modalEl).render(<Modal destroy={destroy} />);
  }

  render();
}
