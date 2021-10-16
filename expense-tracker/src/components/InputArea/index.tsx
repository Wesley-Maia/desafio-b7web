import * as C from './styles';
import { Item } from '../../types/Item'

type Props ={
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2021, 9, 27),
      category: 'food',
      title: 'Item de teste',
      value: 250.25,
    }
    onAdd(newItem);
  }
  return(
    <C.Container>
      <select name="category">
        <option value="food" >Alimentação</option>
        <option value="rent" >Aluguel</option>
        <option value="salary">Salário</option>
      </select>

      <input type="text" name="title" placeholder="Descrição"/>

      <input type="text" name="cost" placeholder="R$"/>

      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
}