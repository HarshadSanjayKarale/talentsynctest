import { FaFacebook, FaTwitter, FaInstagram,FaGithub,FaLinkedin,FaWhatsapp } from 'react-icons/fa';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-4xl font font-bold text-center my-7'>
            About Siddhesh's Poetic Corner
          </h1>
          <div className='text-xl text-gray-600 font-blod flex flex-col gap-6'>
            <p>
              Welcome to Siddhesh's Poetic Corner! This space is dedicated to the
              artistry of Siddhesh Ghavidel, a poet who pours his soul into words,
              painting emotions and stories with every verse.
            </p>

            <p>
              Siddhesh has a passion for both technology and poetry. Alongside his
              exploration of coding and web development, he also expresses himself
              through the beautiful language of Marathi poetry.
            </p>

            <p>
              Here, you'll find a collection of Siddhesh's Marathi poems, as well as
              insights into his creative process and inspirations.
            </p>

            <p>
              Join us in this journey of words and emotions, and don't forget to
              connect with Siddhesh on social media platforms for updates and
              discussions:
            </p>

            <div className='flex justify-center items-center gap-4'>
              <a href='#' className='text-red-500 hover:text-red-700'>
                <FaInstagram size={40} />
              </a>
              <a href='#' className='text-blue-500 hover:text-blue-700'>
                <FaLinkedin size={40} />
              </a>
              <a href='#' className='text-green-500 hover:text-green-700'>
                <FaWhatsapp size={40} />
              </a>
              <a href='#' className='text-black-500 hover:text-black-700'>
                <FaGithub size={40} />
              </a>
              <a href='#' className='text-blue-400 hover:text-blue-600'>
                <FaTwitter size={40} />
              </a>
              <a href='#' className='text-blue-500 hover:text-blue-700'>
                <FaFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
