import '../styles/splitscreen.css'

export const SplitScreen = ({
    child1,
    child2
}: {
    child1: React.ReactNode;
    child2: React.ReactNode;
}) => {
    return (
        <div className="splitscreenContainer">
            <div className="leftElement">
                {child1}
            </div>
            <div className="rightElement">
                {child2}
            </div>
        </div>

    )
};