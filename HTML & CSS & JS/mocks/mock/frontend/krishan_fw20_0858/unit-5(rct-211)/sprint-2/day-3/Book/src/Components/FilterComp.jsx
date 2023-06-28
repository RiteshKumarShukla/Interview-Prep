import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterComp = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const initialCategory = searchParams.getAll("category");
    const initialSort = searchParams.getAll("sort")
    const [category, setCategory] = useState(initialCategory || []);

    const [sort, setSort] = useState(initialSort[0] || "")

    const handleSort = (e)=>{
        setSort(e.target.value)
    }
    const handleFilterCheckbox = (e)=>{
        //check if the data is present in the category if yes then remove it(unchecked) 
        const newCategories = [...category];
        
        if(newCategories.includes(e.target.value)){
            newCategories.splice((newCategories.indexOf(e.target.value)),1)
        }
        else{
            newCategories.push(e.target.value)
        }
        //else add it in the category array (useState)
        setCategory(newCategories)
    }
    // if the category changes,then update the value in url in search params
    useEffect(()=>{
        let params = {};
        params.category = category;
        sort && (params.sort = sort)
        setSearchParams(params)
    },[category,setSearchParams,sort])
  return (
    <div>
        <h3>Filter Component</h3>
        <div>
            <div>
                <input type="checkbox" value={'Novel'} onChange={handleFilterCheckbox} checked={category.includes("Novel")} />
                <label htmlFor="">Novel</label>
            </div>

            <div>
                <input type="checkbox" value={'Motivational'} onChange={handleFilterCheckbox}
                checked={category.includes("Motivational")}/>
                <label htmlFor="">Motivational</label>
            </div>
            <div>
                <input type="checkbox" value='Science_Fiction' onChange={handleFilterCheckbox}
                checked={category.includes("Science_Fiction")}/>
                <label htmlFor="">Science Fiction</label>
            </div>
            <div>
                <input type="checkbox" value='Thriller' onChange={handleFilterCheckbox}
                checked={category.includes("Thriller")} />
                <label htmlFor="">Thriller</label>
            </div>
          
        </div>
        <h3>Sort Component</h3>
        <div>
            <input type="radio" name='sortBy'  value='asc' onChange={handleSort} defaultChecked={sort==='asc'}/>
            <label htmlFor="">Ascending</label>
            <br />
            <input type="radio" name='sortBy'  value='desc' onChange={handleSort} defaultChecked={sort==='desc'}  />
            <label htmlFor="">Descending</label>
            
        </div>
    </div>
  )
}

export default FilterComp