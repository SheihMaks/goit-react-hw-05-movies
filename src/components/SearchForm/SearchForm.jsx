import { SearchFormMovies,InputSearch, ButtonSearch  } from "./SearchForm.styled";


export const SearchForm=({onSubmit,getQuery})=>{

    const onSubmitClick=(ev)=>{
    ev.preventDefault()
    const query=ev.currentTarget.elements['query'].value
    if (query.trim()==='')
    { return} 
    else 
    {onSubmit(query)}
    }

    return(<SearchFormMovies 
        onSubmit={onSubmitClick}>
        <InputSearch  
        name="query"
        type='text'
        value={getQuery}
        placeholder="Enter something for search"
        autoFocus

        />
        <ButtonSearch type='submit'>Search Movie</ButtonSearch>
        </SearchFormMovies>)
}