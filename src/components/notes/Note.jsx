import styles from '#src/styles/components/notes/Note.module.scss';

const Note = () => {
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title} contentEditable="true">
                        Note name
                    </h3>
                    <div className={styles.icon}></div>
                </div>
                <div className={styles.line}>
                    <div className={styles.invisible}></div>
                    <div className={styles.visible}></div>
                </div>
            </div>
            <div className={styles.content}>
                <p contentEditable="true">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc
                    varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate
                    semper dui.
                </p>
            </div>
            <div className={styles.footer}>
                <div className={styles.time}>1:23 PM</div>
                <div className={styles.date}>1/1/2020</div>
            </div>
        </div>
    );
};

export default Note;
