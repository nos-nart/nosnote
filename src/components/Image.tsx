import 'lazysizes';

type Props = {
  alt: string;
  src: string;
  previewSrc: any;
  className: string;
};

export const Image: React.FC<Props> = ({ alt, src, previewSrc, className }) => {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={src}
    />
  );
};
