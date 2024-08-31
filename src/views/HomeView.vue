<template>
    <div class="welcome-container">
      <h1 class="welcome-title">Welcome to the Currency Converter</h1>
      <p class="welcome-text">Select a currency to see the exchange rates.</p>
    </div>
  </template>
  
  <style scoped>
  .welcome-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f0f4f8;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .welcome-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(to right, #41D1FF, #BD34FE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .welcome-text {
    font-size: 1.2rem;
    color: #5d6d7e;
    margin-bottom: 20px;
    font-weight: 400;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .welcome-container {
      padding: 15px;
      margin: 20px;
    }
  
    .welcome-title {
      font-size: 2rem;
    }
  
    .welcome-text {
      font-size: 1rem;
    }
  }
  </style>
  