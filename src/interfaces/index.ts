export interface State {
    selectedCurrency: string;
    currencies: string[];
    exchangeRates: Record<string, Record<string, number>>;
    loading: boolean;
};