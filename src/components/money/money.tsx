interface MoneyProps {
  value: number
  decimals?: number
}

const Money = ({ value, decimals = 2 }: MoneyProps) => {
  return <>${value.toFixed(decimals)}</>
}

export default Money;