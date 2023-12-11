import { Button, Card, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import ModalPolicy from '../ModalPolicy';
import env from '../../env';
import { useState } from 'react';


export default function MailForm({className} : {className?: string}) {

const [message, setMessage] = useState<string | undefined>();
  return (
    
    
     <Card className={"max-w-md m-auto my-10 min-w-full relative bg-gray-200 " + className}>
          <span className="material-icons absolute rotate-[15deg] right-14 top-12 scale-[4] text-zinc-500">mail</span>

      <h2 className='font-extrabold text-3xl text-zinc-700'>
      Email
      </h2>
         <form className='w-full py-10'> 
        <div className="mt-2 mb-1 block">
          <Label htmlFor="message" value="Sua Mensagem:"  
         />
        </div>
        <TextInput id="message" type="text" sizing="lg" onBlur={({target}) => setMessage(target.value)} required icon={HiMail}   helperText={
          <>
            Não armazenaremos seu e-mail, em acordo com as 
           <ModalPolicy>
            Políticas de privacidade
           </ModalPolicy>
            .
          </>
        }/>
        <Button href={`mailto:${env.companyMail}&subject=Contato&body=<b>${message}</b>`} className='mt-10 transition'>
          Enviar
        </Button>
    </form>
    </Card>
     

  )
}
