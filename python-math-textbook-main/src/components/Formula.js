import React from 'react';
import './formula.css';

const styles = {
  formula: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 'var(--ifm-leading)',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'var(--ifm-leading)',
  },
  children: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    textAlign: 'center',
  },
  description: {
    width: '10%',
    textAlign: 'center',
  },
};

export default function Formula({ description, children }) {
  return (
    <div style={styles.formula}>
      <div style={styles.children}>{children}</div>
      <div style={styles.description}>
        <b>{description}</b>
      </div>
    </div>
  );
}
