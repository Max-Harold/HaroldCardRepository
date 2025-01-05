import { ReactNode } from "react";
import { useSwipeable } from "react-swipeable";

interface SwipeableProps {
    onRightSwipe: () => void;
    onLeftSwipe: () => void;
    children: ReactNode;
}

export function Swipeable(props: SwipeableProps) {

    const {onRightSwipe, onLeftSwipe, children} = props;
    const handler = useSwipeable({
        onSwipedLeft: onLeftSwipe,
        onSwipedRight: onRightSwipe,
        preventScrollOnSwipe: true
    })
    return <div {...handler} className="w-screen h-screen">
        {children}
    </div>
}