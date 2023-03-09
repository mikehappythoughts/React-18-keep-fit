export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw Error('There was a problem loading the data. Please try again.')

    return await response.json()
  } catch (err) {
    return err
  }
}
