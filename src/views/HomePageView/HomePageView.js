import React from 'react';
import defaultHello from './defauil-hello.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  avatar: {
    marginRight: 4,
  },
};

const HomePageView = () => {
  const avatar = defaultHello;
  
  return(
    <div style={styles.container}>
    <h1 style={styles.title}>
      Вітаємо{' '}
      <img src={avatar} alt="" width="200" style={styles.avatar} />
    </h1>
  </div>
  )
};

export default HomePageView;