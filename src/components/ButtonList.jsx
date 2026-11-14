import Button from "./Button"

const ButtonList = () => {
  const btnlist=['All','Gaming','Ai','DSA','Coding']
  return (
    <div className="flex gap-4">
      {btnlist.map((btn)=><Button key={btn} name={btn} />)}
    </div>
  )
}

export default ButtonList