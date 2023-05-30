import AddCity from "./Addcity";
import { AddCityToData, getCities, DeleteCity } from "./api";
const { useState, useEffect } = require("react");

function Cities() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCityDataForUpdation = (page) => {
    getCities({ page, limit: 5, sort: "name", order: "asc" })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCityDataForUpdation(page);
  }, [page]);

  const handleAddCity = (data) => {
    console.log(data);
    AddCityToData(data).then(() => {
      fetchCityDataForUpdation(page);
    });
  };

  const handleDelete = (id) => {
    DeleteCity(id).then(() => fetchCityDataForUpdation(page));
  };
  return (
    <div>
      <h1>Cities</h1>
      <AddCity onAddCity={handleAddCity} />
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "40%",
            margin: "auto"
          }}
        >
          <div>{item.name}</div>
          <button onClick={() => handleDelete(item.id)}>DELETE</button>
        </div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Cities;
