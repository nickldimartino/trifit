import Logo from "../../components/Logo/Logo";
import WorkoutsList from "../../components/WorkoutsList/WorkoutsList";

export default function WorkoutsPage() {
    return (
        <>  
            <Logo />
            <h1>Workouts Page</h1>
            <div>Filter</div>
            <WorkoutsList />
        </>
    );
}
