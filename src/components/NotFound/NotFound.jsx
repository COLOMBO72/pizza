import React from 'react'
import stylesNotFound from "../../styles/NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={stylesNotFound.notFoundWrapper}>
      <span>404 ERROR</span>
      <p>Page not found</p>
    </div>
  )
}

export default NotFound
