import React from 'react';
import { useRouter } from 'next/router';

const ProductId = () => {
  // const reuter = useRouter();
  // const id = reuter.query.id;
  const {
    query: { id },
  } = useRouter();
  return <div>Esta es la página del producto: {id}</div>;
};

ProductId.getInitialProps = async (ctx) => {
  return {};
};

export default ProductId;
