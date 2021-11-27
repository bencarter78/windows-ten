function AppTiles () {
  const categories = [
    {name: 'Productivity', tiles: []},
    {name: 'Explore', tiles: []},
    {name: 'Build', tiles: []},
  ]

  const tiles = ''

  const CategoriseYourGoalsToMakeThemMoreEasilyReachable = () => (
    <>
      {
        categories.map(c => (
          <div>
            {c.name}
            {tiles}
          </div>
        ))
      }
    </>
  )

  return (
    <div className="flex flex-col flex-grow justify-between py-4">
      <CategoriseYourGoalsToMakeThemMoreEasilyReachable />
    </div>
  )
}

export default AppTiles