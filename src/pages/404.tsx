import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <>
      <motion.div
        className="grid h-full place-content-center"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ type: `spring`, stiffness: 300 }}
      >
        <div className="sm:w-40 w-full h-40 sm:overflow-auto overflow-hidden">
          <Image
            src="/404.png"
            alt="book_image"
            width=""
            height=""
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <p className="text-purple-500 text-xl text-center">Page not found!</p>
      </motion.div>
    </>
  );
}
