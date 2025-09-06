import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">A stock prediction portal using Machine Learning (ML) is a web-based platform that analyzes historical stock market data, financial indicators, and news sentiment to forecast future stock prices or trends. It leverages ML models like regression, LSTM, or ARIMA to generate predictions. The portal helps investors make data-driven decisions by providing insights, visualizations, and alerts on potential price movements.</p>
          <Button class="btn-info" text='Login' />
        </div>
      </div>
    </>
  )
}

export default Main