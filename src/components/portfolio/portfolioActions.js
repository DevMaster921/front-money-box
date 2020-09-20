import { createNewPortfolioRequest, getPortfolioRequest, getPortfoliosRequest } from '../../api';
import { setStocks } from '../stock/stockActions';

export const createNewPortfolio = (newPortfolioName) => {
    return function(dispatch) {
        createNewPortfolioRequest(newPortfolioName)
        .then(data => dispatch(createPortfolio(data)));
    }
};

export const fetchPortfolios = () => {
    return function(dispatch) {
        getPortfoliosRequest()
        .then(data => dispatch(setPortfolios(data)));
    }
};

export const fetchPortfolio = (id) => {
    return function(dispatch) {
        getPortfolioRequest(id)
        .then(data => {
            const portfolio = data.portfolio
            dispatch(setCurrentPortfolio(portfolio));
            dispatch(setStocks(portfolio.stocks));
        });
    }
};

// UTILITY

export const createPortfolio = (data) => {
    return {
        type: 'CREATE_PORTFOLIO',
        payload: data.portfolio
    };
};

export const setPortfolios = (portfolios) => {
    return {
        type: 'SET_PORTFOLIOS',
        payload: portfolios
    }
}

export const setCurrentPortfolio = (portfolio) => {
    return {
        type: 'SET_CURRENT_PORTFOLIO',
        payload: portfolio
    }
}