import Logo from "../../components/Logo/Logo";
import { UserDataObj } from "../../types";

export default function HomePage({ user }: { user: UserDataObj }) {
    return (
        <>
            <Logo />
            <h1>Welcome {user.name}!</h1>
        </>
    );
}