import Loader from "../Components/Loader";

function Dashboard() {
  
  const getData= async()=>{
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10`)

    let data = await res.json();

    return data.data
  }
 

  
  
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}</div>
    </div>
  );
}

export default Dashboard;
