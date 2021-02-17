import * as S from "./styles";

interface QuantityInputProps {
  value: number;
  onAdd(): void;
  onRemove(): void;
}

const QuantityInput = ({ value, onAdd, onRemove }: QuantityInputProps): JSX.Element => {
  return (
    <S.QuantityInput>
      <S.Arrow left onClick={() => onRemove()} />
      {value}
      <S.Arrow right onClick={() => onAdd()} />
    </S.QuantityInput>
  );
};

export default QuantityInput;
