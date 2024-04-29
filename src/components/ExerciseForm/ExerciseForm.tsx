export default function ExerciseForm({key, name, type, muscle, grip, width}: { key: number, name: string, type: string, muscle: string, grip: string, width: string}) {
    return(
        <div>
            <p>{name} &nbsp; {type} &nbsp; {muscle} &nbsp; {grip} &nbsp; {width} &nbsp; </p>
        </div>
    );
}