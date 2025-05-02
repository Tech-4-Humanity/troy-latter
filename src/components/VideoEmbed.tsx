
import React from 'react';

interface VideoEmbedProps {
  src: string;
  caption?: string;
  className?: string;
}

const VideoEmbed = ({ src, caption, className = '' }: VideoEmbedProps) => {
  return (
    <div className={`video-embed ${className}`}>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={src}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
          title="Video presentation"
        ></iframe>
      </div>
      {caption && (
        <p className="mt-2 text-sm text-vault-secondary text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
};

export default VideoEmbed;
