import { FactBox, Props } from '~/components/FactBox'

const Lorem = () => {
  return (
    <p>
      Deserunt ea labore esse est. Nulla eiusmod voluptate in excepteur nisi
      sint ad. Nisi voluptate in fugiat tempor commodo adipisicing. Laborum
      tempor ullamco commodo mollit ipsum deserunt eu magna exercitation nisi ut
      laboris tempor duis duis. Ea duis pariatur velit officia excepteur.
      <br />
      <br />
      Est sunt adipisicing laborum cupidatat ut laboris quis. Ea ea non esse
      laborum ex aliqua veniam cillum labore veniam cillum nostrud minim. Ut
      excepteur laboris exercitation est do adipisicing laborum ex anim. Nulla
      commodo deserunt adipisicing aliqua voluptate in exercitation laborum. Eu
      occaecat consequat laboris.
    </p>
  )
}

const factboxes: Props[] = [
  {
    title: 'First factbox',
    content: <Lorem />,
    variant: 'blue',
  },
  {
    title: 'Second factbox',
    content: <Lorem />,
    variant: 'green',
  },
  {
    title: 'Third factbox',
    content: <Lorem />,
    variant: 'red',
    defaultState: 'expanded',
  },
  {
    title: 'Fourth factbox',
    content: <Lorem />,
    variant: 'blue',
  },
]

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 py-10">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-5">
        {factboxes.map((props, index) => (
          <FactBox key={index} {...props} />
        ))}
      </div>
    </div>
  )
}
