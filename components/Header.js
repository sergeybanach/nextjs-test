import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.Header}>
            <img src="./images/logo.png" />
            Псковский бизнес инкубатор

        </div>
    )
}