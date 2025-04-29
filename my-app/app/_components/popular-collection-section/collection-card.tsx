import React from 'react'

const CollectionCard = ({ card } : {
  card: {
    name: string;
    username: string;
    avatar: string;
    category: string;
    nfts: {
      bg: string;
      image: string;
    } [];
  };
}) => {
  return (
    <div>
      {card.name}
    </div>
  )
}

export default CollectionCard
