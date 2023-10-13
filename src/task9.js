const took_out = 200000; /*rubles*/
const interest_rate = 10; /*percents*/
const loan_term = 2; /*years*/
const total_payout = (took_out + (took_out * (interest_rate / 100) * loan_term));
const overpayment = (total_payout - took_out);
console.log('Сумма выплаты:' + total_payout + '\nПереплата по кредиту:' +overpayment);