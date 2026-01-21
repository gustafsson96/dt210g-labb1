import ExerciseCard from "./ExerciseCard"

function ExerciseBankSection() {

    const exerciseArr = [
        {
            name: "Pushup",
            sets: 4,
            reps: 10,
            muscle_group: "Cheast and Arms",
            requires_equipment: false
        },
        {
            name: "Situp",
            sets: 3,
            reps: 20,
            muscle_group: "Core",
            requires_equipment: false
        },
        {
            name: "Lateral Raises",
            sets: 3,
            reps: 12,
            muscle_group: "Shoulders",
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
            muscle_group: "Legs",
            requires_equipment: false
        }
    ]

    return (
        <>
            <section>
                <h1>Övningsbank</h1>

            </section>
        </>
    )
}
