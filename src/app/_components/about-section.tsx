import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutTubeIcon,
} from '@/components/social-icons';

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function AboutSection() {
  return (
    <section
      id='about'
      className='container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24'
    >
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]'>
        <div className='lg:pl-20 flex justify-center'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src='/avatar.png'
              alt='Tiago Silva'
              width={800}
              height={800}
              quality='95'
              priority={true}
              className='aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2 text-center md:text-start'>
          <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl'>
            @tiagosilva
          </h1>
          <p className='mt-6 text-base text-muted-foreground'>
            Entusiasta de conteúdo digital à noite! Com mais
            de 3 anos de experiência no mundo da tecnologia, já desempenhei
            vários projetos como freelance. Sou totalmente a favor de fomentar a
            colaboração e inspirar equipes a criar soluções revolucionárias para
            o sucesso dos negócios. Você pode me encontrar criando apaixonadamente 
            conteúdo digital e desenvolvendo software a fim de está sempre evoluindo.
            Sempre atento para aprender e me manter à frente das
            tendências do mercado. Estou constantemente desafiando os limites da
            tecnologia e da criatividade. Vivo e respiro tecnologia 24/7...
          </p>
          <div className='mt-6 flex justify-center md:justify-start gap-6'>
            <SocialLink
              href=''
              icon={InstagramIcon}
            />
            <SocialLink
              href='https://github.com/Tiago-Silva'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://www.linkedin.com/in/tiago-silva-67b4102b3/'
              icon={LinkedInIcon}
            />
            <SocialLink
              href=''
              icon={YoutTubeIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
