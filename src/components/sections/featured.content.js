const data = require('@/content/featured.json')
console.log(data);
// fetch("@/content/featured.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));

// const { isLoading, error, data } = useQuery('repoData', () =>
//   fetch('@/content/featured.json').then(res =>
//     res.json()
//   )
// )

export default data;