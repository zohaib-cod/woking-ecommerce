// src/app/components/StarRating.jsx (New Component)
'use client';

import { useState } from 'react';

export default function StarRating({ rating, setRating, editable = true }) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => editable && setRating(star)}
          onMouseEnter={() => editable && setHoverRating(star)}
          onMouseLeave={() => editable && setHoverRating(0)}
          className={`text-2xl ${
            star <= (hoverRating || rating)
              ? 'text-yellow-500'
              : 'text-gray-300'
          } ${editable ? 'cursor-pointer' : 'cursor-default'}`}
          disabled={!editable}
        >
          ★
        </button>
      ))}
    </div>
  );
}