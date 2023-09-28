import quoteOpen from '../assets/quoteOpen.svg'
import quoteClose from '../assets/quoteClose.svg'

// TODO: Make this reusable/generic
export default function BlockQuote({ className }: { className?: string }) {
  return (
    <>
      <div className={`${className} relative`}>
        <img className='absolute top-0 left-10 w-32 opacity-10' src={quoteOpen} />
        <p className='text-left pt-8 px-12'>
          Noal is one of those people you always want on your team. He is always eager to mentor and learn from others. He aims for excellence while understanding that trade-offs are sometimes needed. <br/><br/>
          While I worked with him, Noal led many different features from start to finish: designing, delegating, and overseeing the completion of the feature, and coding many of the tickets himself. <br/><br/>
          Noal was also a pleasure to work with. He would organize meetings when requirements were not precise and bring with him a can-do and positive attitude.
          I would be glad to work with him again if the opportunity arises!
        </p>
        <img className='absolute bottom-0 right-10 w-32 opacity-10 font-medium' src={quoteClose} />
      </div>
      <a
          href="https://www.linkedin.com/in/joan-orrit-palau/"
          target='_blank'
          style={{ color: '#01AD4C' }}
          className='pt-4'
        >
          - Joan P. (Backend Engineer)
        </a>
    </>
  )
}
