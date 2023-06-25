const EmptyState = () => {
    return (
        <div
            className="
            px-4
            py-10
            flex
            justify-center
            bg-gray-100
            h-full
            items-center
            sm:px-6
            lg:px-8
            "
        >
            <div
                className="
                 text-center
                 items-center
                 flex
                 flex-col   
                 "
            >
                <h2
                    className="
                    mt-2
                    font-semibold
                    text-gray-900
                    text-2xl
                    "
                >
                    Select a chat or start a new conversation!
                </h2>
            </div>
        </div>
    );
};
export default EmptyState;
