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
      <Dialog
        aria-label="Обсудить проект"
        className="flex min-h-0 flex-1 flex-col overflow-hidden outline-none"
      >
        <header className="sm:hidden flex shrink-0 items-center justify-between gap-4 border-b-2 border-big-border px-5 py-2 pt-[max(.5rem,env(safe-area-inset-top))] sm:px-8 sm:py-3">
          <h2 slot="title" className="text-xl font-extrabold uppercase tracking-tight-custom">
            Обсудим проект?
          </h2>
          <button
            autoFocus
            type="button"
            aria-label="Закрыть форму"
            onClick={close}
            className="flex size-12 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Icons.x />
          </button>
        </header>
        <div className="relative flex min-h-0 flex-1 overflow-hidden">
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
              <h2 className="text-[54px] leading-13.5 uppercase tracking-tight-custom font-extrabold">
                Обсудим проект?
              </h2>
              <p className="mt-6 text-2xl leading-7 tracking-tight">
                Заполните форму, и мы свяжемся с вами, что бы обсудить задачи, и предложить лучшее
                решение
              </p>
            </div>
            <div className="relative z-1 w-full aspect-square p-6">
              <img
                src={miniMatryoshka}
                alt="Modal images"
                width={310}
                height={346}
                loading="lazy"
              />
            </div>
          </div>

          <div className="feedback-form-scroll relative min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-5 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-6">
            <FeedbackForm onClose={close} />
          </div>
        </div>
      </Dialog>
    </Modal>
  );
};

export default FeedbackModal;
