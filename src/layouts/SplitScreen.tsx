import '../styles/splitscreen.css'

export const SplitScreen = ({
    child1,
    child2
}: {
    child1: React.ReactNode;
    child2: React.ReactNode;
}) => {
    return (
        <div className="flex justify-center items-center flex-wrap px-4 gap-5 sm:h-full">
            <div className="m-5">
                {child1}
            </div>
            <div className="m-5">
                {child2}
            </div>
        </div>

    )
};