/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function ModalPolicy({children}: {children: JSX.Element | any}) {
    
  const [openModal, setOpenModal] = useState(false);

    return (<>
    <button onClick={() => setOpenModal(true)} className="ml-1 p-0 font-medium bg-zinc-200 text-cyan-600 hover:underline dark:text-cyan-500">
            {children}
            </button>
            <Modal show={openModal}  onClose={() => setOpenModal(false)}>
        <Modal.Header>Políticas de privacidade</Modal.Header>
        <Modal.Body>
        <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            A sua privacidade é importante para nós. 
            É política de Dani Bosing Eventos 
            respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Dani Bosing Eventos, 
            e outros sites que possuímos e operamos.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. 
            Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos 
            coletando e como será usado.
            </p>  
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. 
            Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem 
            como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p> 
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p> 
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre 
            o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p> 
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Você é livre para recusar a nossa solicitação de informações pessoais, 
            entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p> 
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e
            informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações
            pessoais, entre em contacto connosco.
            </p> 
            <h3 className="text-lg font-bold leading-relaxed pt-4 text-gray-500 dark:text-gray-400">
            Compromisso do Usuário
            </h3> 
            <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <li >
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que 
            Dani Bosing Eventos oferece no site e com caráter enunciativo, mas não limitativo:
            </li>
            <li>
            Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, kiwibet ou azar, qualquer tipo 
            de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;

            </li>
            <li>
            Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Dani 
            Bosing Eventos, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus 
            informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de 
            causar danos anteriormente mencionados.
            </li>
            </ul>            
            <h3 className="text-lg font-bold leading-relaxed pt-4 text-gray-500 dark:text-gray-400">
            Mais informações
            </h3> 
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem 
            certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com 
            um dos recursos que você usa em nosso site.
            </p>  
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Esta política é efetiva a partir de 9 de Novembro de 2023, às 00:00
            </p>  
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Entendi</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
            Fechar
        </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}
