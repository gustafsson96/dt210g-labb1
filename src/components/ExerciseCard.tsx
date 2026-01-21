import "../assets/css/ExcerciseCard.css"

// Interface for an exercise card
interface ExerciseCardProps {
    name: string,
    set: number,
    reps: number,
    muscle_group: string,
    requires_equipment: boolean
}

// A single exercise card
function ExerciseCard({ name, set, reps, muscle_group, requires_equipment }: ExerciseCardProps) {
    return (
            <div className="exerciseCard">
                <h2>{name}</h2>
                <p><span className="bold">Sets x Reps:</span> {set} x {reps}</p>
                <p><span className="bold">Muskelgrupp:</span> {muscle_group}</p>
                <p><span className="bold">Kräver utrustning:</span> {requires_equipment ? "Ja" : "Nej"}</p>
            </div>
    )
}

export default ExerciseCard

