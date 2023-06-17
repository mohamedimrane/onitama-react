type Props = {
  cell: string
}

function Cell({cell}: Props) {
  return <>
    <div className="cell">
      {cell}
    </div>
  </>
}

export default Cell
