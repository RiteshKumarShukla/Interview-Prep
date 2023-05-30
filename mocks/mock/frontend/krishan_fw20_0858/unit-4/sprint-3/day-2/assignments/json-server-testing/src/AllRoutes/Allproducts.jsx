import { useState, useEffect } from "react";
// 1.
import { Link,useSearchParams } from "react-router-dom";


// const getData=()=>{fetch(`https://localhost:3000/products`).then((res) =>
// res.json());
// }

const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};

const ProductDetails = () => {
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);

  // const navigate = useNavigate();
  // 2

  useEffect(() => {
    fetch(`http://localhost:3000/products`).then((res)=>res.json())
    .then((res)=>{
        setData(res)
    
    })
    
    
    // 3. DATA SHOULD BE CHANGED BASIS THE PAGE NUMBER
  }, [page]);

  // const isAuth = true;

  // 3
  useEffect(() => {
    setSearchParams({ page});
  }, [page]);

  // console.log(typeof searchParams.get("page"));
  
console.log(data)
  return (
    <>
      <h1>All Products</h1>
      
      <div>
        {data?.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2 >{user.name}</h2> 
            <Link to={`/product_details/${user.id}`}>More Details</Link>
          </div>
        ))}
      </div>
      {/* STEP 2 : TO HAVE PAGINATION IMPLEMENTED */}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button disabled={page >= 2} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </>
  );
};

export default ProductDetails;
