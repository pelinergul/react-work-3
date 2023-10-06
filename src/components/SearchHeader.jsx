import React, { useState } from 'react'

export const SearchHeader = ({search}) => {
    const [valueInput, setvalueInput] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()
        search(valueInput)
    }
    const handleChange = (e) => {
        setvalueInput(e.target.value)
    }
    return (
        <div className='search-div'>
            <form onSubmit={handleFormSubmit}>
                <label> Ne Arıyorsunuz?</label>
                <input value={valueInput} onChange={handleChange}/>
            </form>
        </div>
    )
}
