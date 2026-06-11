import Image from 'next/image';

type DecorPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface JungleDecorProps {
  position?: DecorPosition;
  variant?: 'vine' | 'corner-left' | 'corner-right';
  opacity?: number;
  className?: string;
}

const positionClasses: Record<DecorPosition, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

const imageSrc: Record<string, string> = {
  'vine': '/jungle-assets/vine-divider.png',
  'corner-left': '/jungle-assets/corner-left.png',
  'corner-right': '/jungle-assets/corner-right.png',
};

export function JungleDecor({
  position = 'bottom-left',
  variant = 'corner-left',
  opacity = 0.15,
  className = '',
}: JungleDecorProps) {
  const isVine = variant === 'vine';

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none ${className}`}
      style={{ opacity, zIndex: 0 }}
    >
      <Image
        src={imageSrc[variant]}
        alt=""
        width={isVine ? 1200 : 400}
        height={isVine ? 200 : 400}
        className={isVine ? 'w-full h-auto' : 'w-[200px] sm:w-[300px] lg:w-[400px] h-auto'}
      />
    </div>
  );
}
