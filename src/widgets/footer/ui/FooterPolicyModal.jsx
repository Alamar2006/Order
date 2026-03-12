import { MODAL_TEXTS } from './FooterConstants';
import { FooterModal } from './FooterModal';

export const FooterPolicyModal = ({ isOpen, onClose }) => (
  <FooterModal
    isOpen={isOpen}
    onClose={onClose}
    title={MODAL_TEXTS.policy.title}
  >
    <p className="recovery-modal__description text-sm text-[--text-2] leading-relaxed mb-4">
      {MODAL_TEXTS.policy.description}
    </p>
    <div className="space-y-4 text-sm text-[--text-2]">
      {MODAL_TEXTS.policy.sections.map((section, index) => (
        <p key={index}>
          <strong className="text-[--text]">{section.title}</strong><br />
          {section.content}
        </p>
      ))}
    </div>
  </FooterModal>
);