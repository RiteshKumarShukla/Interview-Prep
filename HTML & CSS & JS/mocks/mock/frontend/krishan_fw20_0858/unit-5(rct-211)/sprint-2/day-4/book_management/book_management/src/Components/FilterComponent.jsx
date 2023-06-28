import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'

const FilterComponent = () => {

const [searchParams,setSearchParams] = useSearchParams()
const initialSort= searchParams.getAll("sort");
const [sort,setSort] = useState(initialSort[0] || "")
const initialCategory = searchParams.getAll("category");
const [category,setCategory] = useState(initialCategory || []);

const handleFilter = (e)=>{
const newCategory = [...category];
if(newCategory.includes(e.target.value)){
  newCategory.splice(newCategory.indexOf(e.target.value),1)
}
else{
  newCategory.push(e.target.value)
}
setCategory(newCategory)
}
const handleSort = (e)=>{
  setSort(e.target.value);
}

useEffect(()=>{
  let params ={};
  params.category= category;
  sort && (params.sort = sort);
  setSearchParams(params)
  
},[category,sort,setSearchParams])

  return (
    <div>
        <div>
        <h3>Filter</h3>
        <div>
        <label htmlFor="">Novel</label>
        <input type="checkbox" value={'Novel'} onChange={handleFilter} checked={category.includes('Novel')}/>
        </div>
        <div>
        <label htmlFor="">Thriller</label>
        <input type="checkbox" value={'Thriller'} onChange={handleFilter} checked={category.includes('Thriller')}/>
        </div>
        <div>
        <label htmlFor="">Science Fiction</label>
        <input type="checkbox" value={'Motivational'} onChange={handleFilter} checked={category.includes('Science_Fiction')}/>
        </div>
        <div>
        <label htmlFor="">Motivational</label>
        <input type="checkbox" value={'Science_Fiction'} onChange={handleFilter} checked={category.includes('Motivational')}/>
        </div>
        </div>

        <div>
            <h3>Sort Component</h3>
            <div>
                <label htmlFor="">Ascending</label>
                <input type="radio" name='sort' onChange={handleSort} value='asc' defaultChecked={sort==='asc'} />
          <br />
                <label htmlFor="">Descending</label>
                <input type="radio" name='sort' onChange={handleSort} value='desc' defaultChecked={sort === 'desc'}/>
            </div>
        </div>

    </div>
  )
}

export default FilterComponent