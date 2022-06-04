import Image from 'next/image';

export const ImageWrapper = (props: ImageProps) => {
  const { src, alt, className, ...rest } = props;

  return (
    <div className={className}>
      <Image src={src} alt={alt} {...rest} />
    </div>
  );
};
