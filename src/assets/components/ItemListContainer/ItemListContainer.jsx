import styles from './Styles.module.css';

const ItemListContainer = (props) => {
    return (
        <div className={styles.div}>
            <h1>{props.label}</h1>
        
        </div>
    );
};

export default ItemListContainer;
