import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { useSelector } from 'react-redux';

const FeedPhotos = () => {
  const { list } = useSelector((state) => state.feed);
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo) => (
        <FeedPhotosItem photo={photo} key={photo.id} />
      ))}
    </ul>
  );
};

export default FeedPhotos;
