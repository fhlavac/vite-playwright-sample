import React, { useEffect, useState, useDeferredValue, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ComboBox, ComboBoxItem } from '@ui5/webcomponents-react'

const allData = [
  { id: 'page1', name: 'Page1' },
  { id: 'page2', name: 'Page2' }
]

const App: React.FC = () => {
  const navigate = useNavigate()
  const { page } = useParams()

  const [data, setData] = useState<{items: any[]}>({ items: [] })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    // simulation of data fetching
    setTimeout(() => {
        setData({ items: allData })
        setLoading(false)
    }, 1000)
  }, [])

  const deferredValue = useDeferredValue(search)
  const items = useMemo(
    () =>
      data.items.filter((d) =>
        d.name?.toLocaleLowerCase().includes(deferredValue.toLocaleLowerCase())
      ),
    [data, deferredValue]
  )

  return (
    <div>
      <h1>My test page</h1>
      <ComboBox
        onSelectionChange={(e: any) => {
          const item = data?.items?.find(d => d.name === e.target.value)
          // navigate(`/${item?.id}`)
          navigate('/onSelectCalledItself')
        }}
        value={data.items.find((d: any) => d.id === (page ?? ''))?.name ?? (page ?? '') ?? ''}
        noTypeahead
        loading={loading}
        placeholder="Select page"
        onInput={(e: any) => setSearch(e.target.value)}
      >
        {items.slice(0, 10).map((item: any) => (
          <ComboBoxItem
            key={item.id}
            data-id={item.id}
            text={item.name ?? ''}
          />
        ))}
      </ComboBox>
    </div>
  )
}

export default App