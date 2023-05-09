import React from 'react'
import stylesError from '../../styles/Error.module.scss'

const Error = () => {
  return (
    <div className={stylesError.errorWrapper}> 
      <img src="/img/icon-error.png" />
      <span>Произошла ошибка на сервере, попробуйте обновить страницу</span>
    </div>
  )
}

export default Error
