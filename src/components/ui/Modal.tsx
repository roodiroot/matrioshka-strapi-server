import {
  ModalOverlay,
  type ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components/Modal";
const overlayStyles =
  "absolute top-0 left-0 w-full h-(--page-height) isolate z-20 bg-black/[50%] text-center backdrop-blur-xs data-[entering]:animate-modal-overlay-in data-[exiting]:animate-modal-overlay-out";

const modalStyles =
  "relative w-full overflow-hidden max-w-[min(95vw,516px)] lg:max-w-[min(90vw,1001px)]  max-h-[calc(var(--visual-viewport-height)*.9)] rounded-[48px] border-3 border-shadow bg-background shadow-big data-[entering]:animate-modal-content-in data-[exiting]:animate-modal-content-out";

export function Modal({ children, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <div className="sticky top-0 left-0 w-full h-(--visual-viewport-height) flex items-center justify-center box-border">
        <RACModal className={modalStyles}>{children}</RACModal>
      </div>
    </ModalOverlay>
  );
}
