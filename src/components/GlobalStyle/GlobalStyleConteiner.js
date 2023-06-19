export default function Container({ children }) {
    return <div className={styles.container}>{children}</div>;
  }

const styles = {
    conteiner:{
        maxWidth: 1440,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 15,
        paddingRight: 15,
    }
} ; 
  