import { PropsWithChildren } from 'react';
import { BackButton } from '../../components/BackButton';
import { CancelButton } from '../../components/CancelButton';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';

interface Props extends PropsWithChildren {
  onCancel?: () => void;
  onSubmit?: () => void
  submitButtonText?: string
}

export const CreateSubmissionLayout = ({
  children,
  submitButtonText,
  onSubmit,
  onCancel,
}: Props) => {
  const router = useRouter();

  return (
    <div className={styles.createWrapper}>
      <div className={styles.submissionWrapper}>
        <header className={styles.submissionHeader}>
          <BackButton>Back</BackButton>
          {onCancel && <CancelButton onCancel={onCancel}>Cancel</CancelButton>}
        </header>
        {
          /link|category|statement/.test(router.route) &&
          <div className={styles.submissionSteps}>
            <div className={classNames(styles.submissionStepItem, { [styles.active]: /link/.test(router.route) })}>
              LINK
            </div>
            <div className={classNames(styles.submissionStepItem, { [styles.active]: /category/.test(router.route) })}>
              CATEGORY
            </div>
            <div className={classNames(styles.submissionStepItem, { [styles.active]: /statement/.test(router.route) })}>
              STATEMENT
            </div>
          </div>
        }
        {children}
        {onSubmit &&
          <footer className={styles.submissionFooter}>
            <button onClick={onSubmit} className={classNames(styles.submissionButton, styles.sizeXl)}>
              {submitButtonText}
            </button>
          </footer>
        }
      </div>
    </div>
  )
}
