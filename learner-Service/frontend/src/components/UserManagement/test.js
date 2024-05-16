import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5050/products/getProducts");
    setProducts(response.data);
  };

    return (
        <div><table className="table is-fullwidth mt-2">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.available}</td>
                    </tr>
                ))}
            </tbody>
        </table></div>
    )
}
export default ProductList;
