interface ArrowButtonProps {
    onLeft: () => void;
    onRight: () => void;
}
function ArrowButtons({onLeft, onRight}: ArrowButtonProps) {
    return (
        <div className="absolute bottom-0 w-[100vw] p-5 z-50">
            <button className="arrowButton absolute left-0 bottom-0" onClick={onLeft}>⬅️</button>
            <button className="arrowButton absolute right-0 bottom-0" onClick={onRight}>➡️</button>
        </div>
    )
}

export default ArrowButtons