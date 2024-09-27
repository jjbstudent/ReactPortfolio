import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className='text-center tracking-tighter'>
     
        <a href="https://www.linkedin.com/in/jermaine-bandoo-bb7b802a5/" className="border-b">
            {CONTACT.linkedIn}
        </a>
        <p className="my-4">
        <a href="mailto:jblearn2023@gmail.com" className="border-b">
            jblearn2023@gmail.com
        </a>
        </p>

      </div>
    </div>
  );
};

export default Contact;
