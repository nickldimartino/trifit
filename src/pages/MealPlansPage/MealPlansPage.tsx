import Logo from "../../components/Logo/Logo"
import MealPlansList from "../../components/MealPlansList/MealPlansList";

export default function MealPlansPage() {
    return (
        <>  
            <Logo />
            <h1>Meal Plans Page</h1>
            <div>Filter</div>
            <MealPlansList />
        </>
    );
}
