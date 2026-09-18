import { Dialog } from "react-aria-components";

import Badge from "../../ui/Badge";

import { Modal } from "../../ui/Modal";
import { Icons } from "../../ui/Icons";
import { useModal } from "../../../hooks/useModal";

import miniMatryoshka from "../../../assets/minimatryoshka.png";
import FeedbackForm from "../forms/FeedbackForm";

const FeedbackModal = () => {
  const { isOpen, close } = useModal();
  return (
    <Modal
      aria-label="Обсудить проект"
      isDismissable
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <Dialog className="relative flex gap-6 outline-none">
        <button onClick={close} className="absolute z-10 top-8 right-8">
          <Icons.x />
        </button>

        {/* Desktop background composition */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
          <Icons.element_2 className="absolute z-0 bottom-14 right-4" />
          <div className="absolute z-0 bottom-0 left-0 h-[30%] w-[60%] rounded-tr-[88px] bg-[#A7CB62]"></div>
        </div>

        <div className="p-6 sm:p-8 hidden flex-1 lg:flex flex-col bg-[#F6ECDC]">
          <div className="text-start">
            <Badge className="bg-[#A7CB62]">Связаться с нами</Badge>
          </div>
          <div className="text-start mt-8">
            <h2
              slot="title"
              className="text-[54px] leading-13.5 uppercase tracking-tight-custom font-extrabold"
            >
              Обсудим проект?
            </h2>
            <p className="mt-6 text-2xl leading-7 tracking-tight">
              Заполните форму, и мы свяжемся с вами, что бы обсудить задачи, и предложить лучшее
              решение
            </p>
          </div>
          <div className="relative z-1 w-full aspect-square p-6">
            <img src={miniMatryoshka} alt="Modal images" width={310} height={346} loading="lazy" />
          </div>
        </div>

        <div className="relative flex-1 px-8 py-10 overflow-y-auto">
          <FeedbackForm />
        </div>
      </Dialog>
    </Modal>
  );
};

export default FeedbackModal;
