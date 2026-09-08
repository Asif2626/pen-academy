import React from 'react'

/**
 * Renders a real image when `src` is provided.
 * Falls back to a coloured placeholder (gradient + emoji) if no image is available
 * or if the image fails to load.
 */
export default function PlaceholderImage({
  src,
  emoji,
  color = 'from-brand-600 to-brand-800',
  label = 'Placeholder image',
  aspect = 'aspect-video',
  className = '',
  emojiSize = 'text-5xl',
}) {
  const [imageError, setImageError] = React.useState(false)

  const showImage = src && !imageError

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden ${
        !showImage ? `bg-gradient-to-br ${color}` : ''
      } ${aspect} ${className}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        emoji && (
          <span className={emojiSize} aria-hidden="true">
            {emoji}
          </span>
        )
      )}
    </div>
  )
}


/* import React from 'react'

/**
 * Renders a coloured placeholder "image" (gradient + emoji).
 * Used wherever a real photo/asset is not yet available, so the layout
 * never shows a broken image. Will be swapped for real <img> in future.
 *
export default function PlaceholderImage({
  emoji,
  color = 'from-brand-600 to-brand-800',
  label = 'Placeholder image',
  aspect = 'aspect-video',
  className = '',
  emojiSize = 'text-5xl',
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-gradient-to-br ${color} ${aspect} ${className}`}
    >
      {emoji && (
        <span className={emojiSize} aria-hidden="true">
          {emoji}
        </span>
      )}
    </div>
  )
}
 */