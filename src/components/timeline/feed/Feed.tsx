import React from 'react';
import Post from './Post';
import PostHeader from './PostHeader';
import PostOwner from './PostOwner';
import PostLikes from './PostLikes';
import PostActions from './PostActions';
import PostData from './PostData';
import patrocinadora from '../../../assets/landing_page/patrocinadora.jpeg';
import dealImg from '../../../assets/landing_page/deal.png';
import profileImg from '../../../assets/landing_page/profile_avatar.jpeg'
import unimedImg from '../../../assets/landing_page/unimedImg.jpg'
import afuImg from '../../../assets/landing_page/afuImg.png'

const posts = [
    {
    header: {
      avatar: profileImg,
      userName: 'Derik Sehn',
      subtitle: 'compartilhou uma conquista',
    },
    owner: {
      avatar: profileImg,
      name: 'Derik Sehn',
      subtitle: 'Desenvolvedor Full Stack',
      time: 'agora mesmo',
    },
    data: {
      description:
        'Colaborei com o desenvolvimento do sistema de gestão hospitalar da Unimed - Vale do Caí;',
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
      description:
        '🧠 - Agreguei conhecimentos e técnicas, como:\n' +
        '- Modelagem e de SGBD\'s\' ( aprofundado em PostgreSQL );\n' +
        '- Desenvolvimento REST API em Java Web Dinamyc Project;\n' +
        '- Boas Práticas de organização, performance e componentização de código;\n' +
        '- Ferramentas VSCode, Eclipse, Postman, DBEaver, PGAdmin;\n' +
        '- Desenvolvimento em javascript > React > TypeScript\n' +
        '- Design Patterns | Bibliotecas Material | Chart.js | API\'s\n' +
        '- Colaboração e controle de código com diversos desenvolvedores como o uso do GitLab',
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
      description: <>
      Sistema de gerenciamento da Associação de Funcionários da Unimed Vale do Caí.<br/>
        ⚙️ Software ( DB, Rest API, FrontEnd )
      </>,
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
      description:
        'Recomendo Dérik B. Sehn como relevante para a posição de desenvolvedor full-stack. Ele trabalhou em um projeto de desenvolvimento web para a Unimed Cai Valley, onde desenvolveu componentes React e colaborou em uma API REST Java. Ele também trabalhou como estagiário em uma empresa de design gráfico, onde adquiriu experiência em Photoshop e CorelDRAW.',
      src: dealImg,
    },
    likes: {
      likesCount: 42,
    },
    actions: {},
  },
  {
    header: {
      avatar: patrocinadora,
      userName: 'Outro Usuário',
      subtitle: 'curtiu isso',
    },
    owner: {
      avatar: patrocinadora,
      name: 'Outro Usuário',
      subtitle: 'Desenvolvedor Frontend',
      time: 'há 2 horas',
    },
    data: {
      description:
        'Estou impressionado com o trabalho da equipe no último projeto. Ótimo trabalho pessoal!',
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
      userName: 'Mais um Usuário',
      subtitle: 'comentou isso',
    },
    owner: {
      avatar: patrocinadora,
      name: 'Mais um Usuário',
      subtitle: 'Designer UX/UI',
      time: 'há 4 horas',
    },
    data: {
      description:
        'Adorei as cores e a tipografia! Vamos continuar assim no próximo projeto.',
      src: dealImg,
    },
    likes: {
      likesCount: 8,
    },
    actions: {},
  },
  // Adicione mais objetos ao array conforme necessário
];

export default function Feed() {
  return (
    <section className=''>
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
