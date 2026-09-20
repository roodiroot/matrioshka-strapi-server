import {
  ModalOverlay,
  type ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components/Modal";
const overlayStyles =
  "absolute top-0 left-0 w-full h-(--page-height) isolate z-50 bg-black/[50%] text-center backdrop-blur-xs data-[entering]:animate-modal-overlay-in data-[exiting]:animate-modal-overlay-out";

const modalStyles =
  "relative flex w-full flex-col overflow-hidden h-full max-h-full sm:h-auto sm:max-h-[calc(var(--visual-viewport-height,100dvh)-2rem)] sm:max-w-[min(95vw,516px)] lg:max-w-[min(90vw,1001px)] rounded-none sm:rounded-[32px] sm:border-3 border-big-border bg-background sm:shadow-big data-[entering]:animate-modal-content-in data-[exiting]:animate-modal-content-out";

export function Modal({ children, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <div className="sticky top-0 left-0 w-full h-[var(--visual-viewport-height,100dvh)] flex items-center justify-center box-border">
        <RACModal className={modalStyles}>{children}</RACModal>
      </div>
    </ModalOverlay>
  );
}
