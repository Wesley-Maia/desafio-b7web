import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';

export const FormStep1 = () => {

  const history = useHistory();

  const handleNextStep = () => {
    history.push('/step2');
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Prencha o campo abaixo com seu nome completo.</p>

        <hr/>

        <label>
          Seu nome completo
          <input 
            type="text"
            autoFocus={true}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>

      </C.Container>
    </Theme>
  );
}
