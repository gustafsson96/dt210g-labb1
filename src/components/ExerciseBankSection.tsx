import ExerciseCard from "./ExerciseCard"
import "../assets/css/ExerciseBankSection.css"

function ExerciseBankSection() {

    // Array storing exercise objects
    const exerciseArr = [
        {
            name: "Pushup",
            sets: 4,
            reps: 10,
            muscle_group: "Bröst & Armar",
            requires_equipment: false
        },
        {
            name: "Situp",
            sets: 3,
            reps: 20,
            muscle_group: "Mage",
            requires_equipment: false
        },
        {
            name: "Lateral Raises",
            sets: 3,
            reps: 12,
            muscle_group: "Axlar",
            requires_equipment: true
        },
        {
            name: "Bicep Curl",
            sets: 3,
            reps: 12,
            muscle_group: "Biceps",
            requires_equipment: true
        },
        {
            name: "Lunges",
            sets: 3,
            reps: 20,
            muscle_group: "Ben",
            requires_equipment: false
        }
    ]
    // Map over objects in array to display exercise cards to the screen
    return (
        <>
            <main>
                {exerciseArr.map((exercise, index) => (
                    <ExerciseCard name={exercise.name} set={exercise.sets} reps={exercise.reps} muscle_group={exercise.muscle_group} requires_equipment={exercise.requires_equipment} key={index} />
                ))}
            </main>
        </>
    )
}

export default ExerciseBankSection
