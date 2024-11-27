import { useEffect, useState } from "react";
import { ConverterService } from "../api/ConverterService";
import { baseCurrency, currencies, updateIntervaInlMinutes } from "../const/config";
import { useFetching } from "../hooks/useFetching";
import classes from "./ExchangeRate.module.scss";
import { illustration } from "../const/illustration";

interface IRate {
    [key: string]: number;
}

export const ExchangeRate: React.FC = () => {

    const [rates, setRates] = useState<IRate>({});

    const [fetchRates, isRateLoading, ratesLoadingError] = useFetching(async () => {
        const response = await ConverterService.getAll(baseCurrency);
        setRates(response.data.conversion_rates);
    });

    useEffect(() => {

        fetchRates();

        const interval = setInterval(() => {
            fetchRates();
        }, updateIntervaInlMinutes * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={classes['currency-converter']}>
            <section className={classes['currency-converter__left-section']}>
                <h1 className={classes['currency-converter__title']}>Exchange rate in Internet Bank</h1>
                <h2 className={classes['currency-converter__currency-inscription']}>Currency</h2>
                <div className={classes['currency-grid']}>
                    {isRateLoading && <p>Loading...</p>}
                    {ratesLoadingError && (
                        <p className={classes['error-message']}>
                            {String(ratesLoadingError)}
                        </p>
                    )}
                    {Object.keys(rates).length > 0 &&
                        currencies.map((currency) => {
                            const rate = rates[currency];
                            if (!rate) return null;

                            const rubForOneUnit = (1 / rate).toFixed(2);
                            return (
                                <div className={classes['conversion-item']} key={currency}>
                                    <span className={classes['conversion-item__currency']}>{currency}:</span>
                                    <span className={classes['conversion-item__currency-value']}>{rubForOneUnit}</span>
                                </div>
                            );
                        })}
                </div>
                <p className={classes['currency-converter__all-courses']}>
                    All courses
                </p>
            </section>
            <section className={classes['currency-converter__right-section']}>
                <p className={classes['currency-converter__update-info']}>
                    Update every {updateIntervaInlMinutes} minutes, MSC {new Date().toLocaleDateString("ru")}
                </p>
                <div>
                    <img
                        src={illustration}
                        alt="bank"
                        className={classes['converter-image']}
                    />
                </div>

            </section>
        </section>
    );
};
