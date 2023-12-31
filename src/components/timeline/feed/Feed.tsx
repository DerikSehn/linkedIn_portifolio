import afuImg from '../../../assets/landing_page/afuImg.png';
import dealImg from '../../../assets/landing_page/deal.png';
import patrocinadora from '../../../assets/landing_page/patrocinadora.jpeg';
import profileImg from '../../../assets/landing_page/profile_avatar.jpeg';
import unimedImg from '../../../assets/landing_page/unimedImg.jpg';
import Post from './Post';
import PostActions from './PostActions';
import PostData from './PostData';
import PostHeader from './PostHeader';
import PostLikes from './PostLikes';
import PostOwner from './PostOwner';

const posts = [
  
    {
    header: {
      avatar: profileImg,
      userName: 'Derik Sehn',
      subtitle: 'compartilhou uma introdução',
    },
    owner: {
      avatar: profileImg,
      name: 'Derik Sehn',
      subtitle: 'Desenvolvedor Full Stack',
      time: 'agora mesmo',
    },
    data: {
      description: (
        <>
        <h2> <b>
          Sobre mim
        </b>
        </h2>
          <p>
          Olá! Meu nome é Derik B. Sehn, sou um apaixonado Desenvolvedor Full Stack 
          com experiência sólida em projetos web. 
          Minha jornada tem sido marcada por desafios estimulantes e conquistas notáveis
          </p>
        </>
      ),
      src: unimedImg,
    },
    likes: {
      likesCount: 42,
    },
    actions: {},
  },
  {
    header: {
      avatar: profileImg,
      userName: 'Derik Sehn',
      subtitle: 'agregou novos conhecimentos!',
    },
    owner: {
      avatar: profileImg,
      name: 'Derik Sehn',
      subtitle: 'Desenvolvedor Full Stack',
      time: 'há 2 dias',
    },
    data: {
      description: (
        <>
          <p>
            🧠 - Agreguei conhecimentos e técnicas, como:
            <br />
            - Modelagem e de SGBD's' (aprofundado em PostgreSQL);
            <br />
            - Desenvolvimento REST API em Java Web Dinamyc Project;
            <br />
            - Boas Práticas de organização, performance e componentização de
            código;
            <br />
            - Ferramentas VSCode, Eclipse, Postman, DBEaver, PGAdmin;
            <br />
            - Desenvolvimento em javascript, React e TypeScript
            <br />
            - Design Patterns | Bibliotecas Material | Chart.js | API's
            <br />
            - Colaboração e controle de código com diversos desenvolvedores
            como o uso do GitLab.
          </p>
        </>
      ),
      src: dealImg,
    },
    likes: {
      likesCount: 15,
    },
    actions: {},
  },
  {
    header: {
      avatar: patrocinadora,
      userName: 'Ellen Cassol',
      subtitle: 'parabenizou isso',
    },
    owner: {
      avatar: profileImg,
      name: 'Derik Sehn',
      subtitle: 'Desenvolvedor Full Stack',
      time: 'há 4 dias',
    },
    data: {
      description: (
        <>
          Desenvolvi o <a target='_blank' href='https://afu.unimedvaledocai.com.br'>
          sistema de gerenciamento da Associação de Funcionários da Unimed Vale
          do Caí.
            </a>
          <br />
          <p>
            ⚙️ Software (DB, Rest API, FrontEnd ) disponível em 
            
          </p>
        </>
      ),
      src: afuImg,
    },
    likes: {
      likesCount: 8,
    },
    actions: {},
  },
  {
    header: {
      avatar: patrocinadora,
      userName: 'Ellen Cassol',
      subtitle: 'parabenizou isso',
    },
    owner: {
      avatar: patrocinadora,
      name: 'Ellen Cassol',
      subtitle: 'Analista de suporte técnico',
      time: 'agora mesmo',
    },
    data: {
      description: (
        <>
          Recomendo Dérik B. Sehn como relevante para a posição de
          desenvolvedor full-stack. Ele trabalhou em um projeto de
          desenvolvimento web para a Unimed Vale do Caí, onde desenvolveu
          componentes React e colaborou em uma API REST Java. Ele também
          trabalhou como estagiário em uma empresa de design gráfico, onde
          adquiriu experiência em Photoshop e CorelDRAW.
        </>
      ),
      src: dealImg,
    },
    likes: {
      likesCount: 42,
    },
    actions: {},
  },
  
 
  
];

export default function Feed() {
  
  return (
    <section className=''>
     {/*  <section className=" ">
          <PostOwner src={patrocinadora} name={'Ellen Cassol'} 
          subtitle={"Analista de suporte técnico"} time={'agora mesmo'}  />
          <PostData description='opa bao?' src={dealImg} />
          <PostLikes likesCount={42} />
          <PostActions />
        </section> */}
      {posts.map((post, index) => (
        <Post key={index}>
          <PostHeader>
            <img
              src={post.header.avatar}
              alt='user settings'
              className='w-[25px] h-[25px] border-slate-100 rounded-full'
            />
            <span className='block font-bold text-[.7rem] text-center cursor-pointer text-gray-800'>
              {post.header.userName}
            </span>
            <span className='block text-xs font-light text-[.7rem] text-zinc-700 text-center'>
              {post.header.subtitle}
            </span>
          </PostHeader>
          <section className=''>
            <PostOwner
              src={post.owner.avatar}
              name={post.owner.name}
              subtitle={post.owner.subtitle}
              time={post.owner.time}
            />
            <PostData
              description={post.data.description}
              src={post.data.src}
            />
            <PostLikes likesCount={post.likes.likesCount} />
            <PostActions />
          </section>
        </Post>
      ))}
    </section>
  );
}
