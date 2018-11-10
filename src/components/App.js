import React, { Component } from 'react'

import styles from './App.css'

export default function App(props) {
    return (
      <div>
        <h2 className={styles.content_h2}>Welcome {props.name}</h2>
        <p>Hi, I've been packed, transpiled and globally styled</p>
        <h2>Another Component Header but Globally Styled</h2>
        <p className={styles.content_p}>Some component styled text.</p>
      </div>
    )
}
