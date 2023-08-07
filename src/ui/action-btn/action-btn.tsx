import "./action-btn.scss"

interface ActionBtnProps {
  iconName: string
  onBtnClick?: () => void
  title?: string
}

export function ActionBtn({ iconName, onBtnClick, title }: ActionBtnProps) {
  return (
    <button className="action-btn" onClick={onBtnClick} title={title}>
      <i class={`fa-solid fa-${iconName}`}></i>
    </button>
  )
}
