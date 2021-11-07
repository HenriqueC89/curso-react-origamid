import React from 'react';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/ui';

const FeedModal = () => {
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
