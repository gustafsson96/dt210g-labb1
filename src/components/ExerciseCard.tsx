interface ExerciseCardProps {
    name: string, 
    set: number, 
    reps: number, 
    muscle_group: string, 
    requires_equipment: boolean
}

function ExerciseCard() {
  return (
    <div>
      <h2>Övning</h2>
      <p>Sets x Reps</p>
      <p>Muskelgrupp</p>
      <p>Kräver utrustning</p>
    </div>
  )
}

export default ExerciseCard

