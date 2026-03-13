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
        <div key={index}>
          <strong className="text-[--text] block mb-2">{section.title}</strong>
          {section.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-2 last:mb-0">
              {paragraph.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  {j < paragraph.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      ))}
    </div>
  </FooterModal>
);