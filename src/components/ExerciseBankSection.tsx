import ExerciseCard from "./ExerciseCard"

function ExerciseBankSection() {

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

    return (
        <>
            <section>
                <h1>Övningsbank</h1>
               { exerciseArr.map((exercise, index) => (
                <ExerciseCard name={exercise.name} set={exercise.sets} reps={exercise.reps} muscle_group={exercise.muscle_group} requires_equipment={exercise.requires_equipment} key={index} />
               ))} 
            </section>
        </>
    )
}

export default ExerciseBankSection
