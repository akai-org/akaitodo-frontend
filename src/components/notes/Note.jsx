import styles from '#src/styles/components/notes/Note.module.scss';

const Note = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title} contentEditable="true">
                        {props.title}
                    </h3>
                    <div className={styles.icon}></div>
                </div>
                <div className={styles.line}>
                    <div className={styles.invisible}></div>
                    <div className={styles.visible}></div>
                </div>
            </div>
            <div className={styles.content}>
                <p contentEditable="true">{props.content}</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.time}>{props.time}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
        </div>
    );
};

export default Note;
