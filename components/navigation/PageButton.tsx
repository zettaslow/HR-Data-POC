import styles from "./PageButton.module.scss";

export interface PageButtonProps {
  direction: 'LEFT' | 'RIGHT';
  handleClick: (direction: string) => void;
}

export function PageButton(props: PageButtonProps) {
  return (
    <div>
      <button
        className={styles.arrow + " " + (props.direction === 'LEFT' ? styles.leftButton : styles.rightButton)}
        onClick={() => props.handleClick(props.direction)}
      />
    </div>
  )
}