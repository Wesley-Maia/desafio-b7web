import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item'

type Props ={
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  const [category, setCategory] = useState('food');
  const [description, setDescription] = useState('');
  const [valueField, setValueField] = useState(0);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(description === ''){
      errors.push('Título vazio!')
    }

    if((valueField <= 0)||(isNaN(valueField))){
      errors.push('Valor inválido!')
    }

    if(errors.length > 0){
      alert(errors.join("\n"));
    } else {
      let newItem: Item = {
        date: new Date(),
        category: category,
        title: description,
        value: valueField,
      }
      onAdd(newItem);
      // clearField();
    }
  }

  const clearField = () => {
    setCategory('');
    setDescription('');
    setValueField(0);
  }

  return(
    <C.Container>
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        <option value="food" >Alimentação</option>
        <option value="rent" >Aluguel</option>
        <option value="salary">Salário</option>
      </select>

      <input 
        type="text" 
        name="description" 
        placeholder="Descrição"
        onChange={e=>setDescription(e.target.value)}
      />

      <input 
        type="text"
        name="cost"
        placeholder="R$"
        onChange={e=>setValueField(parseFloat(e.target.value))}
      />

      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
}