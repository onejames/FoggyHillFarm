'use client'

import { useRef } from 'react'

const SearchWidget = () => {
  const searchModal = useRef<HTMLDialogElement>(null);
  const searchText = useRef<HTMLInputElement>(null);

  const showModal = () => {
    searchModal.current!.showModal();
  }

  const clearSearchText = () => {
    searchText.current!.value = '';
  }

  const search = () => {
    const params = new URLSearchParams({
      q: searchText.current!.value,
      as_sitesearch: 'foggyhillfarmbloomington.com'
    });

    window.open('https://www.google.com/search?'+params.toString(), '_blank');
  }

  return (
    <div>
      <button className="btn btn-ghost btn-circle" onClick={()=>{ showModal(); }}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
          </svg>
      </button>

      <dialog id="search_modal" ref={searchModal} className="modal">
        <div className="modal-box">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" ref={searchText} />
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
          </label>
          <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn mr-2" onClick={ () => { search(); clearSearchText(); } } >Search</button>
                <button className="btn" onClick={ () => { clearSearchText() } } >Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default SearchWidget