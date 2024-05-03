import { useData } from '../context/DataContext'

const SecondPage = (): JSX.Element => {
  const { data } = useData()

  if (!data) {
    return <p>There is no data</p>
  }

  return (
    <div>
      <h1>Second Page</h1>
      {data.map((val) => {
        return <p key={val.cost}>{val.effectiveness}</p>
      })}
      {/* <Line options={options} data={data} /> */}
    </div>
  )
}

export default SecondPage
