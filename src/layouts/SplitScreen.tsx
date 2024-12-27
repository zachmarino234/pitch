import '../styles/splitscreen.css';

export const SplitScreen = ({
    child1,
    child2
}: {
    child1: React.ReactNode;
    child2: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full">
            <div className="flex-1 sm:w-1/2 p-4 box-border">
                {child1}
            </div>
            <div className="flex-1 sm:w-1/2 p-4 box-border">
                {child2}
            </div>
        </div>
    );
};