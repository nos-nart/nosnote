/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Emoji } from '.';

type Props = {
  meta: any;
  content: any;
};

export const BookContent: React.FC<Props> = ({ meta, content }) => {
  const pw = React.useRef(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPermitted, setIsPermitted] = React.useState(false);

  const onCheckingPermission = (): void => {
    if (process.env.SECRET_PASSWORD === pw.current.value) {
      setIsPermitted(true);
    }
  };

  return (
    <>
      <Link href="/books">
        <a className="dark:text-gray-300 text-gray-500 -mt-12 flex hover:text-purple-600 w-40 items-center">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back to books</span>
        </a>
      </Link>
      <article className="flex flex-col items-start leading-7 mt-4 mb-24">
        <h3 className="text-purple-500">{meta.title}</h3>
        <div className="flex flex-wrap">
          {meta.tags.map((tag, index) => (
            <span className="mr-2" key={index}>{`#${tag}`}</span>
          ))}
        </div>
        <hr />
        {isPermitted ? (
          content
        ) : (
          <p>
            Thứ nhất là nói chuyện phải chân thành 🙇🏻 <br />
            Thứ hai là phải lắng nghe bằng trái tim ❤️
          </p>
        )}
        {!showPassword && (
          <button
            className="focus:outline-none font-bold hover:text-green-500"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            Read more...
          </button>
        )}
        {showPassword && !isPermitted && (
          <div className="flex my-2">
            <input
              ref={pw}
              placeholder="where is your key?"
              type="password"
              className="px-2 border border-solid border-gray-300 rounded focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="transition-all duration-150 ml-2 px-2 focus:outline-none bg-green-500 text-white rounded"
              type="button"
              onClick={() => onCheckingPermission()}
            >
              <Emoji symbol="👇" />
            </motion.button>
          </div>
        )}
      </article>
    </>
  );
};
