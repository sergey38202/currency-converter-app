// @ts-ignore
import { createStore } from 'vuex'
import axios from 'axios'
import { State } from '../interfaces';
import { INITIAL_CURRENCY, CURRENCIES } from '../constants/currencies';

export default createStore({
  state: {
    selectedCurrency: INITIAL_CURRENCY,
    currencies: CURRENCIES,
    exchangeRates: {},
    loading: true,
  } as State,
  mutations: {
    SET_CURRENCY(state: State, currency: string) {
      state.selectedCurrency = currency
    },
    SET_RATES(state: State, rates: Record<string, Record<string, number>>) {
      state.exchangeRates = rates
      state.loading = false
    },
    SET_LOADING(state: State, loading: boolean) {
      state.loading = loading
    },
  },
  actions: {
    async fetchExchangeRates({ commit }) {
      commit('SET_LOADING', true)
      try {
        const response = await axios.get('https://status.neuralgeneration.com/api/currency')
        const rates = response.data
        
        const formattedRates: Record<string, Record<string, unknown>> = {}

        for (const [key, value] of Object.entries(rates)) {
          const [from, to] = key.toUpperCase().split('-')
          if (!formattedRates[from]) {
            formattedRates[from] = {}
          }
          formattedRates[from][to] = value
        }

        commit('SET_RATES', formattedRates)
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error)
        commit('SET_LOADING', false)
      }
    },
    setCurrency({ commit }, currency: string) {
      commit('SET_CURRENCY', currency)
    },
  },
  getters: {
    exchangeRates: (state: State) => state.exchangeRates,
    currencies: (state: State) => state.currencies,
    selectedCurrency: (state: State) => state.selectedCurrency,
    loading: (state: State) => state.loading,
  },
});
