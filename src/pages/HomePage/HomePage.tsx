import Logo from "../../components/Logo/Logo";
import { UserDataType } from "../../types";

export default function HomePage({ user }: { user: UserDataType }) {
    return (
        <>
            <Logo />
            <h1>Welcome {user.name}!</h1>
        </>
    );
}