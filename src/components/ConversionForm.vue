<template>
    <form @submit.prevent="convertCurrency" class="conversion-form">
      <div class="input-group">
        <select v-model="currencyFrom" class="currency-selector">
          <option v-for="currency in currencies" :key="currency" :value="currency">
            {{ currency }}
          </option>
        </select>
        <input
          type="number"
          v-model.number="amountFrom"
          @input="convertToCurrency"
          :disabled="loading"
          class="amount-input"
          placeholder="Enter amount"
        />
      </div>
      <div class="input-group">
        <select v-model="currencyTo" class="currency-selector">
          <option v-for="currency in currencies" :key="currency" :value="currency">
            {{ currency }}
          </option>
        </select>
        <input
          type="number"
          v-model.number="amountTo"
          @input="convertFromCurrency"
          :disabled="loading"
          class="amount-input"
          placeholder="Converted amount"
        />
      </div>
      <p v-if="loading" class="loading-text">Loading exchange rates...</p>
    </form>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    data() {
      return {
        currencyFrom: 'USD',
        currencyTo: 'RUB',
        amountFrom: 0,
        amountTo: 0,
      }
    },
    computed: {
      ...mapState(['currencies', 'exchangeRates', 'loading']),
    },
    methods: {
      convertToCurrency() {
        const rate = this.exchangeRates[this.currencyFrom]?.[this.currencyTo]
        if (rate) {
          this.amountTo = (this.amountFrom * rate).toFixed(2)
        } else {
          console.error('Conversion rate not available')
        }
      },
      convertFromCurrency() {
        const rate = this.exchangeRates[this.currencyTo]?.[this.currencyFrom]
        if (rate) {
          this.amountFrom = (this.amountTo * rate).toFixed(2)
        } else {
          console.error('Conversion rate not available')
        }
      },
    },
    mounted() {
      this.$store.dispatch('fetchExchangeRates')
    },
  }
  </script>
  
  <style scoped>
  .conversion-form {
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .currency-selector {
    padding: 8px 12px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #bd34fe;
    background-color: #ffffff;
    color: #35495e;
    font-size: 1rem;
    font-weight: 500;
    transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }
  
  .currency-selector:hover {
    border-color: #ffea83;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  .amount-input {
    padding: 8px 12px;
    flex-grow: 1;
    border-radius: 5px;
    border: 1px solid #bd34fe;
    background-color: #ffffff;
    color: #35495e;
    font-size: 1rem;
    transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }
  
  .amount-input:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
  
  .loading-text {
    text-align: center;
    color: #bd34fe;
    font-size: 1.1rem;
    font-weight: 500;
  }
  </style>
  