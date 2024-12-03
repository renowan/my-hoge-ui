export const useTableFilter = () => {
  const removeInValidQuery = (query) => {
    return Object.fromEntries(
      Object.entries(query).filter(
        ([_key, value]) => value !== '' && value !== null && value !== false && value.length !== 0,
      ),
    )
  }
  return {
    removeInValidQuery,
  }
}
