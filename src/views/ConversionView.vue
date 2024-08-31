<template>
    <div class="currency-converter-container">
      <h1 class="converter-title">Currency Converter</h1>
      <ConversionForm />
    </div>
  </template>
  
  <script>
  import ConversionForm from '../components/ConversionForm.vue'
  
  export default {
    components: { ConversionForm },
  }
  </script>
  
  <style scoped>
  .currency-converter-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .converter-title {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(to right, #41D1FF, #BD34FE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (max-width: 768px) {
    .currency-converter-container {
      padding: 15px;
      margin: 20px;
    }
  
    .converter-title {
      font-size: 1.5rem;
    }
  }
  </style>
  