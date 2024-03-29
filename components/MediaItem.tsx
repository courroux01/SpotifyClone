import useLoadImage from '@/hooks/useLoadImage';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types';
import Image from 'next/image';
import React from 'react';

interface MediaItemProps {
  onClick: (id: string) => void;
  song: Song;
}
const MediaItem: React.FC<MediaItemProps> = ({ onClick, song }) => {
  const imageUrl = useLoadImage(song);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) return onClick(song.id);

    return player.setId(song.id);
  };

  return (
    <div
      onClick={handleClick}
      className='
      flex
      items-center
      gap-x-3
      cursor-pointer
      hover:bg-neutral-800/50
      w-full
      p-2
      rounded-md
    '
    >
      <div
        className='
        relative
        rounded-md
        min-h-[48px]
        min-w-[48px]
        overflow-hidden
      '
      >
        <Image
          fill
          src={imageUrl || '../public/images/like.png'}
          sizes='(min-width:1px) 100%'
          alt='image'
          className='object-cover grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8'
        />
      </div>
      <div
        className='
        flex
        flex-col
        gap-y-1
        overflow-hidden
        '
      >
        <p className='text-white truncate'>{song.title}</p>
        <p className='text-neutral-400 text-sm truncate'>{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
