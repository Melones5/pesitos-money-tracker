import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {

  const { transactions } = useGlobalState()

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  console.log({
    totalIncomes,
    totalExpenses,
  });

  const expensesPercentage = totalIncomes === 0 ? 0 : Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = 100 - (expensesPercentage);

  return (
    <VictoryPie 
    innerRadius={100}
    colorScale={
      ["#e74c3c", "#2ecc71"]
    }
      data={[
        { x: "Gastos", y: expensesPercentage},
        { x: "Ingresos", y: incomesPercentage},        
      ]}
      animate={{
        duration: 2000
      }}
      labels={({datum}) => datum.y}
      labelComponent={<VictoryLabel 
        angle={45}
        style={{fill: "white"}}
        />}
    />
  )
}

export default ExpenseChart