import { defaultBadge, savedBadge } from "../../../assets";
import { BadgeStyle } from "./style";

interface BadgeProps {
    saved?: boolean;
    handleSaved: () => void;
}

const Badge = ({  saved, handleSaved }: BadgeProps) => {
    const badgeIcon = saved ? savedBadge : defaultBadge;
    return <BadgeStyle onClick={()=>handleSaved()} src={badgeIcon} alt={badgeIcon} />;
};

export default Badge;
