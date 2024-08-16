// 'use client';

// import useSWR, { Fetcher, SWRConfig } from 'swr'


// export const MySWRProvider = ({ children }: {children: any}) => (
//   <SWRConfig value={{
//     fetcher: async (url) => {
//       const res = await fetch(URL: string);
//       // If the status code is not in the range 200-299,
//       // we still try to parse and throw it.
//       if (!res.ok) {
//         const error = new Error(
//           "An error occurred while fetching the data."
//         );
//         // Attach extra info to the error object.
//         error.info = await res.json();
//         error.status = res.status;
//         throw error;
//       }
//       return res.json();
//     },
//   }}>
//     {children}
//   </SWRConfig>
// );