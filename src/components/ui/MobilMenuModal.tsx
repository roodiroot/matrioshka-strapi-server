import {
  ModalOverlay,
  type ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components/Modal";
const overlayStyles =
  "absolute top-0 left-0 w-full h-(--page-height) isolate z-19 bg-black/[10%] text-center backdrop-blur-xs data-[entering]:animate-modal-overlay-in data-[exiting]:animate-modal-overlay-out";

const modalStyles =
  "relative flex w-full flex-col overflow-hidden rounded-[32px] border-3 border-big-border bg-background shadow-big data-[entering]:animate-modal-content-in data-[exiting]:animate-modal-content-out";

export function MobilMenuModal({ children, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <div className="sticky top-25 px-4">
        <RACModal className={modalStyles}>{children}</RACModal>
      </div>
    </ModalOverlay>
  );
}
