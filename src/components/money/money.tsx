interface MoneyProps {
  value: number
}

const Money = ({ value }: MoneyProps) => {
  return <>${value.toFixed(2)}</>
}

export default Money;