interface ExerciseCardProps {
    name: string, 
    set: number, 
    reps: number, 
    muscle_group: string, 
    requires_equipment: boolean
}

function ExerciseCard({name, set, reps, muscle_group, requires_equipment} : ExerciseCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{set} x {reps}</p>
      <p>{muscle_group}</p>
      <p>{requires_equipment}</p>
    </div>
  )
}

export default ExerciseCard

