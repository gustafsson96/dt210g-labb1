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
      <p>Sets x Reps: {set} x {reps}</p>
      <p>Muskelgrupp: {muscle_group}</p>
      <p>Kräver utrustning: {requires_equipment ? "Ja" : "Nej"}</p>
    </div>
  )
}

export default ExerciseCard

