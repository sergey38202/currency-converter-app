<template>
  <header class="app-header">
    <nav class="navigation">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/convert">Conversion</router-link>
      <select class="currency-selector" v-model="selectedCurrency" @change="handleCurrencyChange">
        <option v-for="currency in currencies" :key="currency" :value="currency">
          {{ currency }}
        </option>
      </select>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      currencies: state => state.currencies,
      selectedCurrency: state => state.selectedCurrency,
    }),
  },
  methods: {
    ...mapActions({
      setCurrency: 'setCurrency',
    }),
    handleCurrencyChange(event) {
      this.setCurrency(event.target.value)
    },
  },
}
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  padding: 15px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navigation {
  display: flex;
  align-items: center;
}

.nav-link {
  color: white;
  margin: 0 20px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #bd34fe;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #ffea83;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
  color: #ffea83;
}

.currency-selector {
  margin-left: 30px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #bd34fe;
  background-color: #ffffff;
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 500;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s ease;
}

.currency-selector:hover {
  border-color: #ffea83;
  background-color: #f0f0f0;
  color: #bd34fe;
  cursor: pointer;
}

.currency-selector:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(189, 52, 254, 0.5);
}
</style>
