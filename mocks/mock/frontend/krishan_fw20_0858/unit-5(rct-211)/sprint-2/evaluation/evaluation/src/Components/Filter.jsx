import React,{useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory||[])

  const handleFilter =(e)=>{
    const newCategory = [...category];
    if(newCategory.includes(e.target.value)){
      newCategory.splice(newCategory.indexOf(e.target.value),1)
    }
    else{
      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }
  useEffect(()=>{
    let params = {};
    params.category=category
    setSearchParams(params)
  },[category,setSearchParams])
  console.log(category)
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" onChange={handleFilter} checked={category.includes("Sneakers")} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers"  onChange={handleFilter} checked={category.includes("Loafers")}/>
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleFilter} checked={category.includes("Canvas")}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={handleFilter}  checked={category.includes("Boots")}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
