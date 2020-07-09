import { AiOutlineArrowLeft } from 'react-icons/ai';
import PageError from '../../components/utils/PageError';
import Btn from '../../components/utils/Btn'

function Error({ statusCode }) {

  var message = ''

  if (statusCode == 404) {
    message = 'Pagina não existe'
  } else {
    message = 'Algum Erro Ocorreu'
  }

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <PageError
        statusCode={statusCode}
        message={message}
        title="Erro"
      >
        <Btn action={() => goBack()} >
          <AiOutlineArrowLeft />
          <span>Voltar</span>
        </Btn>
      </PageError>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
